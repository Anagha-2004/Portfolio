/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Parisha Naga Sahithya Anagha",
  title: "Hi all, I'm Anagha",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1iip-kUTPSx1ceh1qFZfvXa329Di0YPQJC7lo4VhbqI8/edit?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Anagha-2004",
  linkedin: "https://www.linkedin.com/in/naga-sahithya-anagha-parisha-018ba1280",

  gmail: "anaghaparisha@gmail.com",
  
  
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};
console.log("LinkedIn URL: ", socialMediaLinks.linkedin);



// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sreyas Institute Of Engineering and Technology",
      logo: require("./assets/images/images.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "November 2022 - May 2026",
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// false to hide this section, defaults to true
};



const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/hi.jpg"),
      projectName: "Hospital Appointment Booking",
      projectDesc: "🩺 A responsive web app that allows patients to book doctor appointments, view schedules, and receive confirmation updates.Built using HTML, CSS, JavaScript, and PHP with a MongoDB backend for secure data handling.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Anagha-2004/appointment-booking"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/content.jpg"),
      projectName: "Content Management system",
      projectDesc: "A lightweight PHP-based Content Management System that lets admins create, edit, and delete blog posts — inspired by WordPress, with clean UI and MongoDB backend.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Anagha-2004/php-mini-cms"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certification and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "React js crash course",
      subtitle:"The React JS Crash Course is a beginner-friendly program that teaches the fundamentals of React, including components, state, props, and hooks. It helps learners build interactive, responsive user interfaces and real-world web apps using React.",
      
      image: require("./assets/images/udemy.webp"),
      
      footerLink: [
        {
          name: "View",
          url: "https://www.udemy.com/certificate/UC-64a10cb8-913b-4dcd-b68b-298fb7a29cce/"
        },
        
      ]
    },
    {
      title: "CSS, Javascript and PHP complete course for Beginners",
      subtitle:
        "I completed the CSS, JavaScript, and PHP Complete Course for Beginners, where I learned to style responsive web pages using CSS, add interactivity with JavaScript, and handle backend logic using PHP. This course helped me build dynamic and user-friendly websites from scratch.",
      image: require("./assets/images/my.webp"),
      
      footerLink: [
        {
          name: "View",
          url: "https://www.udemy.com/certificate/UC-a6c3ccbd-5f06-4da9-9fb1-fd8bb3c224b9/"
        }
      ]
    },

    {
      title: "Power BI Workshop",
      subtitle: "I attended a Power BI Workshop where I learned to create interactive dashboards and visualize data insights effectively. The session helped me understand data modeling, report building, and how to derive business insights using Power BI tools.",
      image: require("./assets/images/power.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        
        {
          name: "view",
          url: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61498736"
        }
      ]
    },
    {
      title: "Deloitte Australia Data analytics Job Simulation",
      subtitle: "I successfully completed Deloitte’s Virtual Job Simulation on Forage, where I Analyzed and interpreted data to solve real client challenges.Created clear and impactful presentations for stakeholders.Practiced professional problem-solving in a consulting context. This experience enhanced my skills in data-driven decision-making, teamwork, and business communication.",
      image: require("./assets/images/deloitte.avif"),
      
      footerLink: [
        
        {
          name: "view",
          url: "https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61498736"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",


  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7997490819",
  email_address: "anaghaparisha@gmail.com"
  
};

// Twitter Section

const twitterDetails = {
  userName: "AnaghaP56019", //Replace "twitter" with your twitter username without @
  display: false //rue to dispconst openSource = {
   // Set true or false to show Contact profile using Github, defaults to true
   // Set false to hide this section, defaults to true
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  
  openSource,
  bigProjects,
  achievementSection,
  
  
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
