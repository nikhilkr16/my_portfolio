export const personalInfo = {
  name: "Nikhil Kumar",
  title: "Final-Year B.Tech @ BIT Mesra'26",
  subtitle: " Final-Year B.Tech @ BIT Mesra'26",
  location: "Prayagraj, Uttar Pradesh, India",
  email: "nikhilkr3000@gmail.com",
  resumeLink: "https://drive.google.com/file/d/18m6HDbox1LMTZDDcOIZujbbgQUumFtmx/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/nikhilkr16",
    github: "https://github.com/nikhilkr16",
    instagram: "https://www.instagram.com/nikhil_kr16/",
    googleDev: "https://g.dev/nikhilkr"
  }
}

export const education = {
  institution: "Birla Institute of Technology, Mesra",
  location:  "Ranchi,Jharkhand,India",
  degree: "Bachelor of Technology - BTech",
  duration: "November 2022 - May 2026",
  cgpa: "7.x", // Update with actual CGPA
  logo: "/bitmesra.jpg"
}

export const positionsOfResponsibility = [
  {
    id: "edc",
    title: "Director",
    organization: "Entrepreneurship Development Cell, BIT Mesra",
    type: "static",
    description: "Leading technical initiatives and mentoring 10+ juniors in full-stack development",
    logo: "/edcbitmesra_logo.jpg"
  },
  {
    id: "fests",
    title: "Fest Leadership",
    organization: "Our College Fests",
    type: "modal",
    logo: "/fest.png",
    fests: [
      {
        name: "BITOSAV",
        role: "Organizing Team",
        description: "Annual cultural festival of our college",
        logo: "/BITOSAV.jpg"
      },
      {
        name: "Pantheon",
        role: "Organizing Team",
        description: "Technical fest of our college",
        logo: "/pantheon_bit_mesra_logo.jpg"
      },
      {
        name: "E-Summit EDC",
        role: "Organizing Core Team",
        description: "Led development of E-Summit 24 website",
        logo: "/edcbitmesra_logo.jpg"
      },
      {
        name: "GDG DevFest",
        role: "Organizer",
        description: "Organized DevFest'24 RNC, largest tech event in Jharkhand",
        logo: "/GDG.jpg"
      }
    ]
  },
  {
    id: "ncc",
    title: "NCC Cadet",
    organization: "National Cadet Corps",
    type: "static",
    duration: "December 2022 - May 2024",
    description: "Developed discipline, leadership, and teamwork skills through military training and camps",
    logo: "/NCC.jpg"
  }
]

export const experiences = [
  {
    id: "aiml-intern",
    role: "AI/ML INTERN",
    organization: "Elevate Labs [MSME Start-up]",
    duration: "May 2025 - Jul 2025",
    location: "Remote",
    achievements: [
      "Built a deep learning–based plant disease detection system to classify leaf images.",
      "Improved model performance, increasing F1-score from 0.22 to 0.90 through data cleaning and tuning.",
      "Implemented ensemble learning (EfficientNetV2, ResNet50V2) and deployed models via Streamlit for interactive user applications "
    ]
  },
  {
    id: "amazon-ml",
    role: "Trainee",
    organization: "Amazon ML Summer School",
    duration: "August 2025 - September 2025",
    location: "Remote",
    achievements: [
      "Completed intensive ML training program",
      "Gained hands-on experience with ML algorithms and tools"
    ]
  },
  {
    id: "edc-director",
    role: "Director",
    organization: "Entrepreneurship Development Cell, BIT Mesra",
    duration: "May 2025 - Present",
    location: "Ranchi, Jharkhand, India",
    achievements: [
      "Leading technical team and strategic initiatives",
      "Developed a web application E-Summit 24 for the event registration and management",
      "Mentored 10+ juniors in web development and team collaboration and also recreated the EDC website from scratch"
    ]
  },
  {
    id: "gdsc",
    role: "Associate Member",
    organization: "Google Developer Student Clubs",
    duration: "September 2023 - Present",
    location: "Ranchi, Jharkhand, India",
    achievements: [
      "Organized DevFest'24, the largest tech event in Jharkhand",
      "Part of Student Developer Community promoting learning and growth"
    ]
  },
  {
    id: "biots",
    role: "Technical & Finance Team Member",
    organization: "Society Of Biotechnologists (BIOTS), BIT Mesra",
    duration: "July 2023 - December 2023",
    location: "Ranchi, Jharkhand, India",
    achievements: [
      "Framed questions for INVICTUS & WIKIWARS tech fest events",
      "Contributed to organization and execution of college technical events"
    ]
  }
]

export const campusRepresentation = [
  {
    id: "mygov",
    role: "Campus Ambassador",
    organization: "MyGov India",
    duration: "June 2023 - September 2025",
    location: "Ranchi, Jharkhand, India",
    achievements: [
      "Connected with student groups and drove MyGov initiatives",
      "Promoted government programs and civic engagement"
    ]
  },
  
  {
    id: "mlsa",
    role: "Microsoft Campus Ambassador",
    organization: "Microsoft Learn Student Ambassadors",
    duration: "February 2024 - May 2024",
    location: "Ranchi, Jharkhand, India",
    achievements: [
      "Conducted workshops on Azure, AI tools, and cloud computing",
      "Assisted students in building projects with Microsoft AI platforms"
    ]
  },
  {
    id: "coding-ninjas",
    role: "Campus Ambassador",
    organization: "Coding Ninjas",
    duration: "July 2023 - December 2023"
  },
  {
    id: "internshala",
    role: "Internshala Student Partner",
    organization: "Internshala",
    duration: "February 2023 - June 2023"
  }
]

export const projects = [

  {
    id: "stock-dashboard",
    name: "Real-Time Stock Market Dashboard",
    description: "Interactive dashboard for live stock market data analytics with AI recommendations",
    techStack: ["Python", "Streamlit", "Yfinance", "NSELIB","GeminiAPI"],
    github: "https://github.com/nikhilkr16/AI_RECOMMENDATION_INDIAN_STOCK",
    link: "https://indianstockai.streamlit.app/",
    image: "/STOCK.png",
    featured: true
  },

  {
    id: "plant-disease",
    name: "Plant Disease Detection System",
    description: "AI-powered system that detects and classifies plant leaf diseases using deep learning CNN to help farmers diagnose issues quickly",
    techStack: ["Python", "Streamlit", "TensorFlow", "Pandas","NumPy","Scikit-learn","OpenCV"],
    github: "https://github.com/nikhilkr16/Plant-Disease-Detection-System",
    link: "https://plantdiseasedetectionsystems.streamlit.app/",
    image: "/PLANT.png",
    featured: true
  },
  {
    id: "electric-dashboard",
    name: "Electric Pe Dashboard - Lead to Delivery",
    description: "Dashboard for tracking lead-to-delivery pipeline of electric vehicles using Power BI analytics",
    techStack: ["Excel", "Power BI", "Power Query","SQL", "Power Pivot"],
    github: "https://github.com/nikhilkr16/Electric-Pe-Dashboard--Lead-To-Delivery",
    link: "https://onedrive.live.com/:x:/g/personal/ff2145ce1e3c5523/IQBca0duP-ffSK9-N73QIUsfARjsuTui83P-rLoYoPXG2qc",
    image: "/ELECTRIC.png",
    featured: true
  },
  {
    id: "esummit-website",
    name: "E-Summit 2024 Website",
    description: "Full-stack event website with registration and management for entrepreneurship summit",
    techStack: ["React", "JavaScript", "TailwindCSS","Node.js"],
    link: "https://esummit.edcbitmesra.in/",
    image: "/ESUMMIT.png",
    featured: true
  }
  // Add more projects as needed
]

export const skills = {
 technical: [
    "JavaScript", "Python","SQL", "React.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "Git", "Streamlit", "APIs",
    "Machine Learning", "Supply Chain", "Matplotlib","Pandas","Numpy","Scikit-learn","OpenCV", "Data Visualization",
    "Power BI", "Excel", "TailwindCSS"
  ],
  soft: [
    "Leadership", "Team Management", "Public Relations",
    "Event Organization", "Quick Learner","Self Motivated", "Problem Solving",
    "Communication", "Time Management", "Discipline", "Adaptability"
  ],
  certifications: [
    "Conservation Economics",
    "Build and Secure Networks in Google Cloud",
    "Perform Foundational Infrastructure Tasks in Google Cloud",
    "Google Cloud Computing Foundations: Data, ML, and AI",
    "Education For Sustainable Development",
    "Amazon ML Summer School 2025"
  ]
}
