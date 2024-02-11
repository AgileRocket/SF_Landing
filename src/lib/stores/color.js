import { writable } from 'svelte/store';

export const navbarColor = writable('transparent');
export var backgroundColor = 'transparent';
export let scrollPosition = 0;
export var scrollThreshold = 0;

// Function to handle accessing the element
  export const changeNavbarColor = (backgroundColor) => {
    navbarColor.set(backgroundColor);
  };

export const handleScroll = () => {
    // Update scrollPosition as the user scrolls
    scrollPosition = window.scrollY;

    // Update backgroundColor based on the scroll position
    backgroundColor = scrollPosition > scrollThreshold ? '#d7e3f9' : 'transparent';
    changeNavbarColor(backgroundColor)
  };

export const updateNavbarColor = (tempThreshold) => {
  scrollThreshold = tempThreshold

  // CHANGE NAVBAR COLOR ON SCROLL
  window.addEventListener('scroll', handleScroll);

  // Cleanup the event listener when the component is destroyed
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
}
