import {
  car,
  contact,
  estate,
  express,
  github,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  java,
  AWS,
  talkwave,
  git,
  formcraft,
} from "../assets/icons";
import { abjayon, cpp, ddu } from "../assets/images";

export const skills = [
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Verision Control",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: AWS,
    name: "AWS",
    type: "Amazone Web Service",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
];

export const experiences = [
  {
    title: "Bachelor's in Information Technology",
    company_name: "Dharmsinh Desai University, India",
    icon: ddu,
    iconBg: "#000000",
    date: "July 2018 - March 2022",
    points: [
      "GPA: 8.5/10",
      "Subjects: Software Engineering, Data Structure and Algorithm, Computer Networks, Computer Architecture, Web Technology, Operating System, Database Management System, Distributed Computing",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Abjayon Inc., CA",
    icon: abjayon,
    iconBg: "#e6e6ff",
    date: "Jan 2022 - May 2022",
    points: [
      "•	Developed a React-based healthcare survey app with an interactive 3D UI for surgeries and medications.",
      "Decreased UI rendering time and Network calls by 25% by transitioning to GraphQL APIs instead of RESTful APIs.",
      "Resolved CORS problems and integrated the web app with Salesforce APIs and AppSync APIs.",
      "Implemented Jest.JS unit tests with 96% code coverage for reliability. ",
      "Configured the app to store the responses in AWS S3 and Deployed app on AWS Amplify for efficient performance."      
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Abjayon Inc., Fremont, CA",
    icon: abjayon,
    iconBg: "#ffe6e6",
    date: "June 2022 - July 2023",
    points: [
      "Played a key role in the development of a critical healthcare application, built using Java Spring MVC, facilitating rapid matching of live organ donors and recipients.",
      "Improved matching algorithm by 35% through batch processing and multithreading for rapid matching of recipients-donors.",
      "Enhanced medical file storage using AWS S3, boosting upload and retrieval speed by 30% compared to DB approach.",
      "Developed patient data sharing tool for synchronization across hospitals for optimal matches using web hooks.",
      "Efficiently delivered microservices during the transition from monolithic to microservices architecture on AWS, including AWS Lambda and RDS.",
      "Created scheduled cron jobs for the log entry cleanup in the system.",
    ],
  },
  {
    title: "Graduate Student in Computer Science",
    company_name: "Cal Poly Pomona, CA, USA",
    icon: cpp,
    iconBg: "#d9f2d9",
    date: "Aug 2023 - Present",
    points: [
      "GPA: 4.0/4.0",
      "Subjects: Advanced Algorithms Design and Analysis, Connected and Autonomous Vehicles, Cloud Computing Practicum",
      "Project: Lane Detection in Severe Weather Condition",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/ShivamPatel-India",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shivam-patel-b7420416b",
  },
];

export const projects = [
  {
    iconUrl: talkwave,
    theme: "btn-back-pink",
    name: "TalkWave",
    description:
      "TalkWave is a dynamic communication platform, akin to Discord, designed to enhance real-time collaboration and interaction. Built using NextJS, this project seamlessly integrates various features to provide users with a versatile communication experience.",
    link: "https://github.com/ShivamPatel-India/TalkWave1.0",
    liveLink: "https://talkwave-0uve.onrender.com",
  },
  {
    iconUrl: formcraft,
    theme: "btn-back-green",
    name: "FormCraft",
    description:
      "FormCraft is a user-friendly web app built with Next.js 13. Create and share forms effortlessly with a drag-and-drop interface. Choose from various fields, preview your form, and track visits and submissions. Simplifying form creation for everyone.",
    link: "https://github.com/ShivamPatel-India/FormCraft",
    liveLink: "https://form-craft-eta.vercel.app/"
  },
  {
    iconUrl: estate,
    theme: "btn-back-blue",
    name: "Konnect",
    description:
      "Konnect is a user-centric social platform offering secure authentication, content creation with reactions, follower dynamics, and automated content moderation. With tiered accounts and an admin portal, it ensures a safe, engaging space for users to connect and share meaningful content.",
    link: "https://github.com/ShivamPatel-India/Konnect",
  },
  {
    iconUrl: threads,
    theme: "btn-back-red",
    name: "Medicare",
    description:
      'A Django-powered e-commerce platform, provides a seamless online experience for purchasing medicines and healthcare products. Offering features like real-time order tracking, an efficient admin panel, and doctor information by city, Medicare ensures a user-friendly and comprehensive healthcare shopping experience',
    link: "https://github.com/ShivamPatel-India/Medicare",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-green",
    name: "My Portfolio",
    description:
      "Welcome to My Portfolio! Explore my world through this personalized website made using React and ThreeJS, offering a unique experience. Engage with me through the Contact feature powered by EmailJS, and enjoy the added dimension of audio on the home page",
    link: "https://github.com/ShivamPatel-India/my-portfolio",
  },
  {
    iconUrl: car,
    theme: "btn-back-yellow",
    name: "Lane Detection in Severe Weather",
    description:
      "Lane Detection in Adverse Weather Conditions is a Python-based project focused on enhancing lane detection accuracy in challenging weather conditions like rain and clouds. Leveraging the CARLA Simulator and various sensors, including LiDAR, RGB, and depth cameras, the project utilizes the Hough Transform algorithm for robust lane detection.",
    link: "https://github.com/ShivamPatel-India/CS5990",
  },
];
