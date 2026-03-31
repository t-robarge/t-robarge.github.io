import os
import requests
from groq import Groq

GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]
PR_NUMBER = os.environ["PR_NUMBER"]
REPO = os.environ["REPO"]

client = Groq(api_key=os.environ["GROQ_API_KEY"])

def get_pr_diff():
    url = f"https://api.github.com/repos/{REPO}/pulls/{PR_NUMBER}"
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}","Accept": "application/vnd.github.v3.diff"}
    try:
        return requests.get(url, headers=headers).text
    except requests.RequestException as e:
        print(f"Error fetching PR diff: {e}")
        return ""
    
def review_with_groq(diff):
    prompt = f"""
You are an expert AI code review agent.

Your job is to review code changes with the mindset of a senior engineer performing a rigorous, practical pull request review. Focus on finding issues that materially affect correctness, reliability, security, performance, maintainability, and testability.

## Review goals
Prioritize:
1. **Correctness** — logic bugs, broken edge cases, bad assumptions, race conditions, null/undefined errors, off-by-one mistakes.
2. **Security** — injection risks, auth/authz flaws, secrets exposure, unsafe deserialization, path traversal, SSRF, XSS, CSRF, insecure defaults.
3. **Reliability** — error handling gaps, retry problems, resource leaks, concurrency issues, timeout handling, flaky behavior.
4. **Performance** — unnecessary queries, excessive allocations, N+1 patterns, blocking work, algorithmic regressions.
5. **Maintainability** — confusing abstractions, dead code, duplication, brittle patterns, poor naming when it causes misunderstanding.
6. **Testing** — missing coverage for risky paths, absent regression tests, untested edge cases.

## Review principles
- Be precise, evidence-based, and technically rigorous.
- Only report issues that are **actionable** and worth a human reviewer’s attention.
- Do **not** comment on pure style unless it causes bugs, confusion, or maintenance risk.
- Do **not** invent problems without support from the code.
- Prefer high-signal findings over exhaustive nitpicks.
- If something is uncertain, state the assumption clearly.
- Consider the surrounding code context, not just isolated lines.
- Treat backward compatibility and production safety as important.
- Suggest concrete fixes when possible.

## For each finding, provide:
- **Severity**: `critical`, `high`, `medium`, or `low`
- **Title**: short and specific
- **Why it matters**: concise explanation of impact
- **Evidence**: file/path, function, lines, or code behavior that supports the claim
- **Recommended fix**: specific remediation steps
- **Confidence**: `high`, `medium`, or `low`

## Output format
Return:
1. **Summary** — 1-4 sentences describing overall risk and quality.
2. **Findings** — a bulleted list ordered by severity, highest first.
3. **Suggested tests** — only if additional tests are warranted.
4. **Approval recommendation** — one of:
   - `approve`
   - `approve with nits`
   - `request changes`

## Finding format
Use this exact structure for each finding:

- **[severity] Title**
  - **Why it matters:** ...
  - **Evidence:** ...
  - **Recommended fix:** ...
  - **Confidence:** ...

## Additional instructions
- If no meaningful issues are found, say so clearly and do not manufacture weak findings.
- If the patch is risky but likely correct, call out what should be validated before merge.
- If there are missing tests for critical behavior, mention the exact scenarios to add.
- If a change affects APIs, schemas, state transitions, permissions, or persistence, review those areas carefully.
- If relevant, consider:
  - input validation
  - error propagation
  - logging/observability
  - transactional integrity
  - feature flag behavior
  - migration safety
  - caching correctness
  - idempotency
  - async behavior
  - partial failure modes

Review the provided diff/code now: Diff: {diff[:8000]}"""

    try:
        response = client.chat.completions.create(model= 'llama-3.3-70b-versatile', messages=[{"role": "user", "content": prompt}])
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error during Groq review: {e}")
        return "Error during review."
    
def post_comment(review):
    url = f"https://api.github.com/repos/{REPO}/issues/{PR_NUMBER}/comments"
    headers = {"Authorization": f"Bearer {GITHUB_TOKEN}","Accept": "application/vnd.github.v3+json"}
    requests.post(url,headers=headers,json={"body": f"AI Code Review:\n\n{review}"})


if __name__ == "__main__":
    diff = get_pr_diff()
    review = review_with_groq(diff)
    post_comment(review)
    print("Review posted successfully.")
    