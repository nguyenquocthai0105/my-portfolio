export interface Project {
  id: number;

  featured: boolean;

  title: string;

  subtitle: string;

  period: string;

  status: "Completed" | "In Progress";

  description: string;

  images: string[];

  technologies: string[];

  highlights: string[];

  contributions: string[];

  github?: string;

  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,

    featured: true,

    title: "Á À Studio",

    subtitle: "Photography Portfolio Website",

    period: "2025",

    status: "Completed",

    description:
      "A modern photography portfolio website built with HTML, CSS, JavaScript, and Three.js. The project features immersive animations, responsive layouts, interactive galleries, and smooth user experiences for showcasing photography works.",

    images: [
      "/projects/aa-studio/1.jpg",
      "/projects/aa-studio/2.jpg",
      "/projects/aa-studio/3.jpg",
    ],

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Three.js",
    ],

    highlights: [
      "Responsive Design",
      "Interactive Gallery",
      "Three.js Background",
      "Custom Loading Animation",
      "Smooth UI Animations",
      "Modern Photography Showcase",
    ],

    contributions: [
      "Designed and developed the complete frontend interface.",
      "Built responsive layouts for desktop and mobile devices.",
      "Implemented interactive image gallery and smooth page transitions.",
      "Created immersive 3D visual effects using Three.js.",
      "Optimized image loading and overall website performance.",
      "Deployed the project to Vercel.",
    ],

    github:
      "https://github.com/nguyenquocthai0105/fe-three3d-photography",

    demo:
      "https://fe-three3d-photography.vercel.app/",
  },

  {
    id: 2,

    featured: false,

    title: "E-Commerce Shopping Platform",

    subtitle: "Graduation Project • Frontend Developer",

    period: "2025",

    status: "Completed",

    description:
      "Frontend development of a responsive e-commerce platform supporting buyer, seller, and admin interfaces. Implemented authentication pages, product management UI, shopping cart, seller dashboard, and responsive layouts while collaborating with a backend team through REST APIs.",

    images: [
      "/projects/ecommerce/1a.jpg",
      "/projects/ecommerce/2b.jpg",
      "/projects/ecommerce/3c.jpg",
      "/projects/ecommerce/4d.jpg",
    ],

    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Axios",
      "REST API",
    ],

    highlights: [
      "Authentication UI",
      "Shopping Cart",
      "Seller Dashboard",
      "Admin Dashboard",
      "Responsive Design",
      "API Integration",
      "Product Management",
    ],

    contributions: [
      "Developed Login, Register, Forgot Password, and OTP Verification pages.",
      "Built Seller Dashboard, Sidebar, Header, and Seller Home interfaces.",
      "Implemented Product Management pages including Create, Update, and Product List.",
      "Developed Shopping Cart and Order Management user interfaces.",
      "Integrated frontend with backend REST APIs using Axios.",
      "Collaborated with backend developers using Git, GitHub, and Jira.",
      "Built responsive layouts and reusable React components.",
    ],

    github:
      "https://github.com/shopping-ecommerce/fe-react-shopping",

    demo: undefined,
  },
];