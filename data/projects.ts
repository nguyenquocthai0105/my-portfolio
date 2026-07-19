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
  githubClient?: string;   // Link Git giao diện Client (Khách xem)
  githubAdmin?: string;    // Link Git trang quản trị (Admin)
  githubBackend?: string;  // Link Git mã nguồn Backend
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    featured: true,
    title: "Á À Studio",
    subtitle: "Full-Stack Photography Portfolio & CMS",
    period: "2025 - 2026",
    status: "Completed",
    description:
      "A secure, full-stack photography portfolio website and content management system (CMS). Features an immersive, responsive 3D frontend interface integrated with a robust Node.js backend, MongoDB database, and Cloudinary media hosting. Implemented JWT authentication and automated cloud storage lifecycle management to optimize performance and security.",
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
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Mongoose ORM",
      "Cloudinary API",
      "Multer",
      "JWT (JSON Web Tokens)",
      "Axios",
      "Dotenv"
    ],
    highlights: [
      "Full-Stack Architecture",
      "Secure Admin CMS Dashboard",
      "Three.js 3D Interactive Background",
      "JWT Authentication & Security Middleware",
      "Automated Cloud Storage Cleanup",
      "RESTful API Development",
      "Automated CI/CD Deployment",
    ],
    contributions: [
      "Designed and developed the complete frontend user interface and the secure Admin CMS dashboard.",
      "Built a secure RESTful Backend API using Node.js and Express to manage media content and dynamic albums.",
      "Integrated MongoDB Atlas for data persistence and Cloudinary for optimized cloud media hosting.",
      "Architected a robust security layer implementing JWT authentication with customized middleware to protect administrative endpoints.",
      "Developed an automated data-cleanup lifecycle using Cloudinary API to automatically purge obsolete images during delete/update mutations.",
      "Created immersive 3D visual effects using Three.js and built fully responsive layouts for all screen sizes.",
      "Configured and managed automated CI/CD deployment pipelines on Vercel (Frontend) and Render (Backend).",
    ],
    githubClient:
      "https://github.com/nguyenquocthai0105/fe-three3d-photography",
    githubAdmin:
      "https://github.com/nguyenquocthai0105/aa-studio-admin",
    githubBackend:
      "https://github.com/nguyenquocthai0105/aa-studio-backend",
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
    githubClient:
      "https://github.com/shopping-ecommerce/fe-react-shopping",
    demo: undefined,
  },
];