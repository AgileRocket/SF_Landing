<script>
  import "../app.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    GradientButton,
    Dropdown,
    DropdownItem,
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
  import {
    ChevronDownOutline,
    FacebookSolid,
    YoutubeSolid,
    LinkedinSolid,
    TwitterSolid,
  } from "flowbite-svelte-icons";
  import NavMobile from "$lib/components/NavMobile.svelte";
  import { navbarColor } from "$lib/stores/color";
  import { page } from "$app/stores";

  // Reactive variable (update on state change)
  $: isHomePage = $page.url.pathname === "/"; // Check if the current page is the home page
</script>

<header class="relative container">
  <Navbar
    style="background-color: {$navbarColor}"
    class="fixed top-0 left-0 z-20"
  >
    <NavBrand href="/">
      <img
        src="src/lib/assets/graphics/sf_primary_logo.png"
        class="me-2 h-6"
        alt="ScheuleForward Logo"
      />
      <span
        class=" text-lg lg:text-xl self-center whitespace-nowrap font-semibold capitalize"
        >schedule<span class="text-primary">Forward</span></span
      >
    </NavBrand>
    <NavUl class="uppercase">
      <NavLi class="flex items-center cursor-pointer">
        resources<ChevronDownOutline
          class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20">
        <DropdownItem href="/demo">try it!</DropdownItem>
        <DropdownItem href="/learn">learn</DropdownItem>
        <DropdownItem href="/support">support</DropdownItem>
        <DropdownItem href="/pricing">pricing</DropdownItem>
      </Dropdown>
      <NavLi>
        <span class="border-r-2 border-solid border-accent"></span>
      </NavLi>
      <NavLi
        href="/contact"
        class="flex items-center text-primary hover:text-primary-medium"
        >talk to sales</NavLi
      >
      <NavLi
        ><GradientButton href="/login" color="blue" pill>Login</GradientButton
        ></NavLi
      >
    </NavUl>
    <NavMobile />
  </Navbar>
</header>
<main>
  <slot />
</main>
<footer class:homePage={isHomePage} class="fixed bottom-0 left-0 right-0">
  <Footer footerType="socialmedia" class="overflow-hidden bg-primary-medium">
    <div class="md:flex md:justify-evenly">
      <div class="flex justify-center items-center mb-4">
        <FooterBrand
          href="/"
          src="/src/lib/assets/graphics/sf_primary_logo.png"
          alt="ScheduleForward Logo"
          name="ScheduleForward"
          aClass="flex md:flex-col items-center xl:scale-150"
          spanClass="text-lg font-medium mt-2"
        />
      </div>
      <div class="grid grid-cols-1 gap-10 md:grid-cols-3 xl:gap-20">
        <div class="flex flex-col justify-center items-center text-center">
          <FooterLinkGroup>
            <FooterLink liClass="mb-4 uppercase text-accent" href="/"
              >try it!</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase text-accent" href="/"
              >pricing</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase text-accent" href="/"
              >schedule a demo</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase text-accent" href="/"
              >talk to sales</FooterLink
            >
          </FooterLinkGroup>
        </div>
        <div>
          <h2 class="mb-6 font-semibold uppercase text-gray-900 md:text-start">
            learn more
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4 uppercase" href="/"
              >video library</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase" href="/"
              >testimonials</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase" href="/">articles</FooterLink>
          </FooterLinkGroup>
        </div>
        <div>
          <h2
            class="mb-6 text-sm font-semibold uppercase text-gray-900 md:text-start"
          >
            support
          </h2>
          <FooterLinkGroup>
            <FooterLink liClass="mb-4 uppercase" href="/">about</FooterLink>
            <FooterLink liClass="mb-4 uppercase" href="/">contact us</FooterLink
            >
            <FooterLink liClass="mb-4 uppercase" href="/">FAQs</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div class="flex flex-col items-center justify-center">
      <FooterCopyright href="/" by="ScheduleForward" spanClass="text-xs" />
      <div
        class="flex flex-row mt-4 space-x-6 rtl:space-x-reverse sm:justify-center"
      >
        <FooterIcon href="/">
          <YoutubeSolid class="w-4 h-4 text-gray-500 hover:text-gray-900" />
        </FooterIcon>
        <FooterIcon href="/">
          <LinkedinSolid class="w-4 h-4 text-gray-500 hover:text-gray-900" />
        </FooterIcon>
        <FooterIcon href="/">
          <FacebookSolid class="w-4 h-4 text-gray-500 hover:text-gray-900" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-4 h-4 text-gray-500 hover:text-gray-900" />
        </FooterIcon>
      </div>
    </div>
  </Footer>
</footer>

<style lang="postcss">
  .homePage {
    display: none;
  }

  @media (min-width: 768px) {
    :global(li) {
      display: flex !important;
      align-items: center !important;
    }
    :global(ul) {
      padding: 0 !important;
    }
  }
</style>
