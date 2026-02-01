// All portfolio content in one place for easy customization

export const personalInfo = {
  name: "Harsh Kumar",
  avatar: "../images/image.png",
  initials: "HK",
  title: "AI/ML Engineer & Full Stack Developer",
  location: "India",
  email: "harshkumar2662005@gmail.com",
  phone: "+91 9341933518",
  cvLink: "https://drive.google.com/file/d/1gmlTULLw2ahO89VS6wWvlBwvgzaFdfnw/view?usp=sharing",
  social: {
    Github: "https://github.com/Harsh-Kumar-6",
    Linkedin: "https://www.linkedin.com/in/harsh-kumar-809881329/",
    Twitter: "https://x.com/HarshKumar6699",
    Mail: "mailto:harshkumar2662005@gmail.com"
  }
};


export const about = {
  paragraphs: [
    "I am a <strong>passionate AI/ML Engineer and Full Stack Developer</strong> with hands-on experience in building intelligent systems and scalable web applications. I enjoy solving complex problems and transforming ideas into impactful digital solutions.",
    "With a strong foundation in <strong>machine learning</strong> and <strong>software engineering</strong>, I bridge the gap between cutting-edge AI research and production-ready applications."
  ],
  stats: [
    { number: "1+", label: "Years Experience" },
    { number: "25+", label: "Projects Completed" },
    { number: "10+", label: "Technologies Used" },
    { number: "5+", label: "Hackathons Participated" }
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "IIIT Kalyani",
    location: "Kalyani, West Bengal",
    period: "Sep 2024 – July 2028",
    gpa: "8.92 / 10.0"
  }
};

export const skills = [
  {category: "Languages", items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C/C++', 'HTML/CSS', 'SQL']},
  {category: "AI/ML", items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLOps', 'Computer Vision', 'NLP']},
  {category: "Development", items: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'MySQL', 'Docker']}
];

export const experiences = [
  {
    id: 1,
    title: 'contributor',
    company: 'Open Source connect',
    type: '',
    location: 'Remote',
    period: 'Aug 2025 – Sep 2025',
    description: [
      'Developed computer vision models for object detection and tracking. ',
      'Revamped the dashboard UI/UX for a smoother and more intuitive user experience. ',
      'Integrated fitness data to enhance progress tracking and insights and performed data cleaning, preprocessing, and EDA on 50k+records, reducing missing values by 35% and improving model convergence. ',
      'Improved model accuracy by 25% through hyperparameter tuning.'
    ],
    tech: ['Python', 'NumPy', 'Pandas', 'TensorFlow', 'HTML/CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Member',
    company: 'FOSS Club IIIT Kalyani',
    type: 'Volunteer',
    location: 'Kalyani, West Bengal',
    period: 'Nov 2024 – Dec 2025',
    description: [
      'Contributed to open-source projects and organized 3 workshops, engaging 100+ participants to promote free software advocacy.'
    ],
    tech: ['Git', 'GitHub', 'Open Source', 'linux']
  },
];

export const projects = [
  {
    id: 1,
    icon: "../images/p1.png",
    title: "AI-Powered Misinformation Detection System",
    description:
      "Multi-modal misinformation detection system on a dataset of 90k+ samples that analyzes text and images, verifies claims using Google’s Fact Check API, and generates contextual explanations with Gemini AI. Designed an end-to-end pipeline and implemented credibility scoring and a clean user interface to provide real-time, transparent fact-checking for fast-spreading online content.",
    tech: ["React", "Python", "TensorFlow", "NLP", "RestAPI", "Gemini AI", "Fact Check API"],
    liveLink: "https://truthguards.netlify.app/",
    githubLink: "https://github.com/Harsh-Kumar-6/TruthGuard"
  },
  {
    id: 2,
    icon: "../images/mr.png",
    title: "Movie Recommendation System",
    description:
      "Built separate collaborative filtering and content-based recommender models using similarity metrics and neural approaches. Designed a complete ML pipeline for preprocessing, vectorization, training, and inference to deliver personalized movie recommendations.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "pytorch"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    icon: "../images/cv.png",
    title: "Computer Vision & Generative AI",
    description:
      "Implemented ResNet from scratch and trained CNNs for image classification, exploring architecture trade-offs and achieving up to 93% validation accuracy. Built autoencoders for image reconstruction and feature extraction, and experimented with generative models (e.g., Stable Diffusion) for image synthesis.",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveLink: "#",
    githubLink: "https://github.com/Harsh-Kumar-6/mini_ai"
  },
  {
    id: 4,
    icon: "../images/sb.png",
    title: "Storytelling Platform",
    description:
      "Developed a full-stack app with secure Google OAuth login, CRUD features, and public/private story visibility. Implemented sessions, route protection, and dynamic UI using Handlebars with custom formatting helpers.",
    tech: ["Node.js", "Express", "MongoDB", "Passport (Google OAuth)", "Handlebars", "Materialize CSS"],
    liveLink: "#",
    githubLink: "https://github.com/Harsh-Kumar-6/Storytelling-Platform"
  },
];


export const achievements = [
  {
    title: '1st Place - National Hackathon',
    event: 'TechFest 2023',
    organization: 'Tech University',
    date: 'October 2023',
    description: 'Built innovative AI solution for climate change monitoring',
    place: '1st Place'
  },
  {
    title: 'Best Innovation Award',
    event: 'Startup Weekend',
    organization: 'Global Entrepreneurs',
    date: 'March 2023',
    description: 'Created blockchain-based supply chain tracking system',
    place: '1st Place'
  }
];