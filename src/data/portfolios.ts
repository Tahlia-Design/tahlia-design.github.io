export interface Portfolio {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const portfolios: Portfolio[] = [
  {
    title: "Brand Identity for Local Cafe",
    description: "Developed a cohesive brand identity including logo, color palette, and menu design for a trendy local cafe. The project focused on creating a welcoming and modern aesthetic that appeals to young professionals.",
    image: "/images/background.jpg",
    link: "https://dribbble.com/shots/12345678-cafe-branding"
  },
  {
    title: "E-commerce Website Redesign",
    description: "Redesigned the user experience and interface for an online fashion retailer. Improved navigation, product presentation, and mobile responsiveness, resulting in a 30% increase in sales.",
    image: "/images/background.jpg",
    link: "https://behance.net/gallery/98765432-ecommerce-redesign"
  },
  {
    title: "Event Poster Series",
    description: "Created a series of vibrant posters for a city-wide music festival. Each poster features unique illustrations and bold typography to capture the energy of the event.",
    image: "/images/background.jpg",
    link: "https://instagram.com/p/ABCDEFGH"
  },
  {
    title: "Mobile App UI for Fitness Startup",
    description: "Designed the UI for a fitness tracking app, focusing on intuitive controls and motivational visuals. The app helps users set goals, track progress, and share achievements.",
    image: "/images/background.jpg",
    link: "https://example.com/fitness-app-ui"
  },
  // New examples below
  {
    title: "Portfolio Website for Photographer",
    description: "Built a minimalist portfolio site for a professional photographer, featuring a dynamic gallery and seamless navigation to showcase their best work.",
    image: "/images/photographer-portfolio.jpg",
    link: "https://photographer-portfolio.com"
  },
  {
    title: "Non-Profit Annual Report Design",
    description: "Designed a visually engaging annual report for a non-profit organization, using infographics and custom illustrations to highlight key achievements.",
    image: "/images/nonprofit-report.jpg",
    link: "https://behance.net/gallery/annual-report"
  },
  {
    title: "Restaurant Menu App",
    description: "Created a digital menu app for a restaurant, allowing customers to browse dishes, view images, and place orders directly from their table.",
    image: "/images/restaurant-menu-app.jpg",
    link: "https://dribbble.com/shots/restaurant-menu-app"
  },
  {
    title: "Travel Blog Branding",
    description: "Developed a playful and adventurous brand identity for a travel blog, including logo, color scheme, and social media templates.",
    image: "/images/travel-blog-branding.jpg",
    link: "https://instagram.com/p/travelblog"
  },
  {
    title: "SaaS Dashboard UI",
    description: "Designed a clean and functional dashboard interface for a SaaS analytics platform, focusing on data visualization and user experience.",
    image: "/images/saas-dashboard.jpg",
    link: "https://example.com/saas-dashboard"
  },
  {
    title: "Children's Book Illustration",
    description: "Illustrated a series of whimsical characters and scenes for a children's book, bringing the story to life with vibrant colors and playful details.",
    image: "/images/childrens-book.jpg",
    link: "https://behance.net/gallery/childrens-book"
  }
];
