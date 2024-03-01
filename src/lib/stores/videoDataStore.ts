import { writable } from "svelte/store";

export enum Categories {
  All,
  Building,
  Actions,
}

export enum Guides {
  user,
  admin,
}

export const videosData = writable([
    {
      title:"User Dashboard",
      description: "A basic overview of what a user can expect to see upon login.",
      url: "/src/lib/assets/videos_temp/User Dashboard.mp4",
      poster: "/src/lib/assets/graphics/user_dashboard.jpg",
      category: Categories.All,
      guide:Guides.user
    },
    {
      title:"Trades",
      description: "Learn how to easily swap shifts with other users. No admin-permissions and delays!",
      url: "/src/lib/assets/videos_temp/Trades.mp4",
      poster: "/src/lib/assets/graphics/trades.jpg",
      category: Categories.Actions,
      guide:Guides.user
    },
    {
      title:"Lottery",
      description: "The most advanced and effective way to schedule users. Statisics show the average user's sentiment is substantially improved via self-scheduling, we'll show you how it works here.",
      url: "/src/lib/assets/videos_temp/Lottery.mp4",
      poster: "/src/lib/assets/graphics/Lottery.jpg",
      category: Categories.Building,
      guide:Guides.user
    },
    {
      title:"Personal Events",
      description: "We get it - life happens. Your work schedule should allow you to compare everyday events against your current and/or potential shifts. See how we handle it here!",
      url: "/src/lib/assets/videos_temp/Personal Events.mp4",
      poster: "/src/lib/assets/graphics/personal_events.jpg",
      category: Categories.Actions,
      guide:Guides.user
    },
    {
      title:"Splitting Shifts",
      description: "Need to trade a specific portion of your shift with someone else? See how our system provides what we believe to be the simplest approach in the scheduling market today.",
      url: "/src/lib/assets/videos_temp/Split Shifts.mp4",
      poster: "/src/lib/assets/graphics/split_shifts.jpg",
      category: Categories.Actions,
      guide:Guides.user
    },
    {
      title:"Organization Dashboard",
      description: "A basic overview of features.",
      url: "/src/lib/assets/videos_temp/org_dashboard.mp4",
      poster: "/src/lib/assets/graphics/org_dashboard.jpg",
      category: Categories.All,
      guide:Guides.admin
    },
    {
      title:"Drafts Mode",
      description: "Schedule with confidence. Drafts mode will drastically improve everything scheduling admins hate about... scheduling.",
      url: "/src/lib/assets/videos_temp/drafts.mp4",
      poster: "/src/lib/assets/graphics/drafts.jpg",
      category: Categories.Building,
      guide:Guides.admin
    },
  ]);

