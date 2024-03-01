import { writable } from "svelte/store";

export const menuResources = writable([
    {
      name: "Try It!",
      href: "#",
      help: "Coming soon",
      icon: "faLaptop"
    },
    {
      name: "Pricing",
      href: "/home/pricing",
      help: "Competitive and manageable cost.",
      icon: "faTag"
    },
    {
      name: "About Us",
      href: "/home/about",
      help: "Learn about who we are and why we're here.",
      icon: "faCircleInfo"
    },
    {
      name: "Reviews",
      href: "/home/reviews",
      help: "See what some of our clients are saying.",
      icon: "faComment"
    },
    {
      name: "Video Library",
      href: "/home/videos",
      help: "On Demand Access for users and admins.",
      icon: "faCirclePlay"
    },
    {
      name: "Articles",
      href: "/home/articles",
      help: "Explore valuable insights on various scheduling topics.",
      icon: "faPaperclip"
    },
  ]);