// Import images
import img2 from "../background-contact.jpg";
import movieworldVideo from "../projects/movieWorld-portfolio.mp4";
import myCookNotes from "../projects/myCookNotes-portfolio.mp4";

// Export an array of slide objects
export const projectsData = [
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
  {
    title: "Project 3",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore.",
    tech: "React, HTML, CSS",
    video: img2,
  },
  {
    title: "Project 4",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore.",
    tech: "React, HTML, CSS",
    video: img2,
  },
  {
    title: "Project 5",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam repudiandae explicabo expedita labore.",
    tech: "React, HTML, CSS",
    video: img2,
  },
];
