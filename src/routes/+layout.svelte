<script>
  import "../app.css";

  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }

</script>

<div class="min-h-full">
  <nav class="fixed top-0 left-0 right-0 h-20 z-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-2 flex-shrink-0 xl">
          <img class="h-8 w-12" src="../src/lib/assets/graphics/sf_primary_logo.png" alt="ScheduleForward">
          <span class="text-dark text-lg font-semibold mt-1">Schedule<span class="text-primary">Forward</span></span>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4 uppercase">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">try it!</a>
            <a href="#" class="text-primary hover:text-white hover:bg-primary rounded-md px-3 py-2 text-sm font-medium mt-1">learn</a>
            <a href="#" class="text-primary hover:text-white hover:bg-primary rounded-md px-3 py-2 text-sm font-medium mt-1">support</a>
            <a href="#" class="text-primary hover:text-white hover:bg-primary rounded-md px-3 py-2 text-sm font-medium mt-1">pricing</a>
            <span class="text-primary">|</span>
            <a href="#" class="text-primary hover:text-white hover:bg-primary rounded-md px-3 py-2 text-sm font-medium mt-1">talk to sales</a>
          </div>
        </div>

        <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
        
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" on:click={toggleMobileMenu} id="mobile-menu-btn" class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="hidden" id="mobile-menu">
      <div class="flex flex-col gap-10 space-y-1 px-2 pb-3 pt-2 sm:px-3 uppercase text-center">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a href="#" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">try it!</a>
        <a href="#" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-medium">learn</a>
        <a href="#" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-medium">support</a>
        <a href="#" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-medium">pricing</a>
        <a href="#" class="text-secondary hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-base font-bold">talk to sales</a>
      </div>
    </div>
  </nav>
</div>



<slot />


<!-- <a href="#">try it!</a>
    <a href="#">learn</a>
    <a href="#">support</a>
    <a href="#">pricing</a>
    <span>|</span>
    <a href="#">talk to sales</a>
    <a href="#">login</a> -->