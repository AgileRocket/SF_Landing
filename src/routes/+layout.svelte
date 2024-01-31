<script>
  import "../app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    GradientButton,
    Dropdown, 
    DropdownItem,
    Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon
  } from "flowbite-svelte";
  import { ChevronDownOutline, FacebookSolid, YoutubeSolid, LinkedinSolid } from 'flowbite-svelte-icons';
  import NavMobile from '$lib/components/NavMobile.svelte'
  import { navbarColor } from '$lib/stores/color';

  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }
</script>


<style>
  @media (min-width: 768px) {
    :global(li) {
      display: flex !important;
      align-items: center !important;
    }
  }
</style>

<header>
  <div class="relative px-8">
  <Navbar style="background-color: {$navbarColor}"
    class="px-2 sm:px-4 py-2.5 fixed z-20 top-0 start-0 bg-transparent xs:items-center">
    <NavBrand href="/">
      <img
        src="src/lib/assets/graphics/sf_primary_logo.png"
        class="me-3 h-6 sm:h-9 mb-2"
        alt="Flowbite Logo"
      />
      <span
        class=" text-lg lg:text-xl self-center whitespace-nowrap font-semibold capitalize"
        >schedule<span class="text-primary">Forward</span></span>
    </NavBrand>
    <NavMobile />
    <NavUl class="uppercase">
      <NavLi class="flex items-center cursor-pointer">
        resources<ChevronDownOutline class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/demo">try it!</DropdownItem>
        <DropdownItem href="/learn">learn</DropdownItem>
        <DropdownItem href="/support">support</DropdownItem>
        <DropdownItem href="/pricing">pricing</DropdownItem>
      </Dropdown>
      <NavLi>|</NavLi>
      <NavLi href="/contact" class="flex items-center text-primary hover:text-hover">talk to sales</NavLi>
      <NavLi><GradientButton href="/login" color="blue" pill>Login</GradientButton></NavLi>
    </NavUl>
  </Navbar>
</div>
</header>
<main>
  <slot />
</main>
<footer>
</footer>


