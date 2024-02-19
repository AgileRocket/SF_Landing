import { writable } from "svelte/store";

export const menuResources = writable([
    {
      name: "Try It!",
      href: "/demo",
      help: "Coming soon",
    },
    {
      name: "Pricing",
      href: "/pricing",
      help: "Competitive and manageable cost.",
    },
    {
      name: "About Us",
      href: "/about",
      help: "Learn about who we are and why we're here.",
    },
    {
      name: "Reviews",
      href: "/reviews",
      help: "See what some of our clients are saying.",
    },
    {
      name: "Video Library",
      href: "/",
      help: "Coming Soon",
    },
    {
      name: "Articles",
      href: "/",
      help: "Coming Soon",
    },
  ]);