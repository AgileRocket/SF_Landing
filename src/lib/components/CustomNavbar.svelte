<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    GradientButton,
    MegaMenu,
  } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import NavMobile from "$lib/components/NavMobile.svelte";
  import { menuResources } from "$lib/stores/navDataStore";

  export let menuData;
  $: menuData = $menuResources;
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
    <MegaMenu items={menuData} let:item>
      <a href={item.href} class="block p-3 rounded-lg hover:bg-gray-50 h-full">
        <div class="font-semibold dark:text-white">{item.name}</div>
        <span class="text-sm font-light text-gray-500 capitalize"
          >{item.help}</span
        >
      </a>
    </MegaMenu>
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
