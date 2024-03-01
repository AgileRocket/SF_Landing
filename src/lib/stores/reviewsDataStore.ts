import { writable } from "svelte/store";

export enum avatars {
    physician,
    nurse,
    admin
  }

export const reviewsData = writable([
    {
      highlight:"I wish I had this system for the past 6 years of scheduling.",
      quote: "...including my prior group with 12 physicians.  Went really well, I'd say.",
      name: "Steve Houmes, MD",
      title: "Teton Valley Health, (Idaho)",
      avatar: avatars.physician
    },
    {
      highlight:"I pick the shift that works best for me",
      quote: "As a residency director, I have lots of meetings and residency functions to attend. Schedule Forward helps me to choose my schedule around my other duties. I pick the shift that works best for me from what’s available.",
      name: "Aaron L, MD",
      title: "Residency Director",
      avatar: avatars.physician
    },
    {
      highlight:"The perfect soluton for our group",
      quote: "ScheduleForward has been wonderful for our group. With over 60 providers, 2 clinical sites, and a unique shift selection process, ScheduleForward has provided our leaders with a powerful tool needed to develop a schedule and effectively communicate it with the staff. Other features such as ease of making schedule changes, toggling between different providers, and integration with mobile devices makes ScheduleForward the perfect solution for our group.",
      name: "Nicholas S, MD",
      title: "Staff Physician",
      avatar: avatars.physician
    },
    {
      highlight:"I love the ease of the system",
      quote: "I wanted to thank you for the ... ScheduleForward system.  It’s truly unique and there are so many perks to physicians taking charge of their own schedule.  Your team has been more than helpful and personally I love the ease of the system, the layout, the ability for us to decide what parameters we want in place (location’s/certain number of 3p’s/weekends) or not.  I had some worries about who to call/bug if I had questions, but Scott, you put me to ease and regardless if you were working in the ED that day, you came to my aid and answered/assisted with anything I needed, especially when I was traveling.  Many kudos to you for reaching directly out to Dr. Corsino who completely missed his first round picks.  You really went above and beyond!!  As you are aware the nocturnists really had positive things to say about the program, especially how easy it was to sit with your own personal calendar in place and select your own working dates/locations.",
      name: "Kristen Olzark",
      title: "Sandhills Emergency Physicians, Inc. (N.Carolina)",
      avatar: avatars.admin
    },
    {
      highlight:"An extraordinary application",
      quote: "If anyone wants a sample of testimonials, just let me know; it's unlike any other scheduling system that I know of.  If I had to name 3 top wellness interventions for our faculty, this may be #1 for them.",
      name: "Sam Kiem, MD",
      title: "Department Chair",
      avatar: avatars.physician
    },
    {
      highlight:"Eliminated 80 man-hours a year of data entry",
      quote: "ScheduleForward has removed 80% of my time and effort in building our schedules. For our office, it has eliminated 80 man-hours a year of data entry, now done with a single click of a button.",
      name: "Scott L, MD",
      title: "Staff Physician",
      avatar: avatars.physician
    },
  ]);

