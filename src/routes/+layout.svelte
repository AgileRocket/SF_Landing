<script>
  import "../app.css";
  import { page } from "$app/stores";
  import CustomNavbar from "$lib/components/CustomNavbar.svelte";
  import CustomFooter from "$lib/components/CustomFooter.svelte";

  $: isHomePage = $page.url.pathname === "/home"; // Check if the current page is the home page
</script>

<header class="container z-10">
  <CustomNavbar />
</header>
<main class="flex-grow" class:main-container={isHomePage}>
  <slot />
</main>
<footer class:homePage={isHomePage} class="w-full">
  <CustomFooter />
</footer>

<style lang="postcss">
  .main-container {
    @apply relative;
    @apply z-0;
    height: 100vh;
  }
  .homePage {
    display: none;
  }

  .not-home-page {
    background-color: #a9b8d3 !important;
  }
</style>
