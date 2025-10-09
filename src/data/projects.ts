export type Project = {
    title: string
    description: string
    tech: string[]
    image?: string
    video? : string
    links?: { demo?: string; repo?: string }
    featured?: boolean
  }
  
  export const projects: Project[] = [
    {
      title: 'AI-Assisted Quick Advisor Application',
      description:
        'LLM assistant with Retrieval-Augmented Generation; Flask API with a React UI for real-time querying and responses.',
      tech: ['Python', 'Flask', 'LLMs', 'RAG', 'TypeScript'],
      links: { repo: 'https://github.com/t-robarge' }, // replace with repo if you publish it
      video: '/media/QuickAdvisorDemo.mov'
    },
    {
      title: 'Data Compression — Huffman Coding & Burrows–Wheeler Transform (ATZip)',
      description:
        'Implemented Huffman coding and BWT for text compression/decompression; analyzed runtime and memory trade-offs; unit-tested.',
      tech: ['Python', 'MatPlotLib'],
      links: { repo: 'https://github.com/t-robarge' },
      image: '/media/python-bzip2-compression-metric.png'
    },
    {
      title: 'Elevator Simulation (MVC + State Patterns)',
      description:
        'Modeled multi-elevator scheduling using MVC and State design patterns; simulated request queues and compared strategies.',
      tech: ['C++', 'Design Pattenrs', 'Allegro'],
      links: { repo: 'https://github.com/t-robarge' },
      video: '/media/ElevatorDemo2.mov'
    },
    {
      title: 'Baseball Predictions (ML App)',
      description:
        'End-to-end ML workflow using scikit-learn; API data ingestion/validation; transformed JSON to model-ready features. Implemented a tkinter GUI for visualization.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'APIs', 'tkinter'],
      links: { repo: 'https://github.com/t-robarge' },
      image: '/media/ml-baseball-image.png',
    },
    {
      title: 'Simple Calculator',
      description:
        'Practiced React component architecture and state management; responsive and accessible UI.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      links: { repo: 'https://github.com/t-robarge' },
      image: '/media/CalculatorReactImage.png'
    },
    {
      title: 'Fruit Freshness Classification',
      description:
        'Fine-tuned a CNN off of a Res-Net50 backbone to classify between fresh and spoiled fruit. Applications in food production and quality control.',
      tech: ['PyTorch', 'Python', 'Adam', 'CNN'],
      links: { repo: 'https://github.com/t-robarge' },
      image: '/media/FruitFreshnessResults.png',
    },
  ]
  