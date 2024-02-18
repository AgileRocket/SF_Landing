<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    GradientButton,
    Dropdown,
    DropdownItem,
  } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import NavMobile from "$lib/components/NavMobile.svelte";
</script>

<Navbar class="fixed top-0 left-0 z-20 bg-primary-background">
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
    <Dropdown class="w-44 z-20 dropdown-container">
      <DropdownItem class="w-full" href="/demo">try it!</DropdownItem>
      <DropdownItem class="w-full" href="/learn">learn</DropdownItem>
      <DropdownItem class="w-full" href="/about">support</DropdownItem>
      <DropdownItem class="w-full" href="/pricing">pricing</DropdownItem>
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

<style lang="postcss">
  @media (min-width: 768px) {
    :global(nav li) {
      display: flex !important;
      align-items: center !important;
    }
    :global(nav ul) {
      padding: 0 !important;
    }
  }
</style>
