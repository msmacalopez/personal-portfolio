// Import images
import movieworldVideo from "../projects/movieWorld-portfolio.mp4";
import myCookNotes from "../projects/myCookNotes-portfolio.mp4";
import gymWebsiteVideo from "../projects/gymWebsite.mp4";
import travelBlogVideo from "../projects/miniProject-travelBlog.mp4";

// Export an array of slide objects
export const projectsData = [
  {
    title: "Travel Blog",
    text: "A simple and elegant travel blog created using only HTML and CSS. This project features a clean layout to showcase travel stories and photos, emphasizing readability and visual appeal. It demonstrates the use of basic web design principles to create a functional and aesthetically pleasing website.",
    tech: "HTML, CSS",
    video: travelBlogVideo,
  },
  {
    title: "Gym Website UI Design",
    text: "A modern gym website showcasing a sleek design with a focus on fitness and health. This project features a video background and parallax scrolling effects to create an engaging and dynamic user experience. It highlights advanced CSS animations and responsive design techniques.",
    tech: "HTML, CSS",
    video: gymWebsiteVideo,
  },
  {
    title: "Movie World",
    text: "A React web app that lets users search for movies using the OMDB API and add them to a personal catalogue. After searching, users can save any movie and categorize it as Drama or Action. This project demonstrates API integration, state management, and user-defined movie organization.",
    tech: "React, HTML, CSS",
    video: movieworldVideo,
  },
  {
    title: "CookNotes",
    text: "A React web app that uses the Hugging Face API to generate recipes from the ingredients you have. Enter at least four ingredients, click “Get Recipe”, and the AI returns a creative, ready-to-cook dish. This project highlights simple AI integration, form handling, and real-time recipe suggestions.",
    tech: "React, HTML, CSS, Hugging Face",
    video: myCookNotes,
  },
];
