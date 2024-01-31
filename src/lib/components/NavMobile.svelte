<script>
  import "/src/app.css";
  import { Button } from 'flowbite-svelte';
  
  function toggleMobileMenu() {
    const menu = document.getElementById("mobile-menu");
    const mobileMenuBtn = document.getElementById("mobile-menu-btn")
    menu.classList.toggle("hidden");
    mobileMenuBtn.classList.toggle("hidden")
  }
</script>

<style>
  .mobile-menu-background {
    opacity: 0;
    animation: fadeIn 0.4s ease-in-out forwards;
  }
</style>

  <nav class="fixed top-0 right-0 h-full z-10 overflow-hidden">
    <div class="flex md:hidden">
      <!-- Mobile menu button -->
      <button type="button" on:click={toggleMobileMenu} id="mobile-menu-btn" class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
        <svg id="open-menu-btn" class="block" width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 10.0928C11.5027 10.0928 11.0258 10.2903 10.6742 10.6419C10.3225 10.9936 10.125 11.4705 10.125 11.9678C10.125 12.4651 10.3225 12.942 10.6742 13.2936C11.0258 13.6452 11.5027 13.8428 12 13.8428H27C27.4973 13.8428 27.9742 13.6452 28.3258 13.2936C28.6775 12.942 28.875 12.4651 28.875 11.9678C28.875 11.4705 28.6775 10.9936 28.3258 10.6419C27.9742 10.2903 27.4973 10.0928 27 10.0928H12ZM10.125 19.4996C10.125 19.0024 10.3225 18.5255 10.6742 18.1738C11.0258 17.8222 11.5027 17.6246 12 17.6246H27C27.4973 17.6246 27.9742 17.8222 28.3258 18.1738C28.6775 18.5255 28.875 19.0024 28.875 19.4996C28.875 19.9969 28.6775 20.4738 28.3258 20.8255C27.9742 21.1771 27.4973 21.3746 27 21.3746H12C11.5027 21.3746 11.0258 21.1771 10.6742 20.8255C10.3225 20.4738 10.125 19.9969 10.125 19.4996ZM12 25.1565C11.5027 25.1565 11.0258 25.3541 10.6742 25.7057C10.3225 26.0573 10.125 26.5342 10.125 27.0315C10.125 27.5288 10.3225 28.0057 10.6742 28.3573C11.0258 28.709 11.5027 28.9065 12 28.9065H27C27.4973 28.9065 27.9742 28.709 28.3258 28.3573C28.6775 28.0057 28.875 27.5288 28.875 27.0315C28.875 26.5342 28.6775 26.0573 28.3258 25.7057C27.9742 25.3541 27.4973 25.1565 27 25.1565H12Z" fill="#0264D3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25C9.14437 38.25 0.75 29.8556 0.75 19.5C0.75 9.14437 9.14437 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5ZM34.5 19.5C34.5 23.4782 32.9196 27.2936 30.1066 30.1066C27.2936 32.9196 23.4782 34.5 19.5 34.5C15.5218 34.5 11.7064 32.9196 8.8934 30.1066C6.08035 27.2936 4.5 23.4782 4.5 19.5C4.5 15.5218 6.08035 11.7064 8.8934 8.8934C11.7064 6.08035 15.5218 4.5 19.5 4.5C23.4782 4.5 27.2936 6.08035 30.1066 8.8934C32.9196 11.7064 34.5 15.5218 34.5 19.5Z" fill="#0264D3"/>
        </svg>
      </button>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div id="mobile-menu" class="mobile-menu-background hidden fixed left-0 right-0 top-0 bottom-0 bg-primary-dark h-full" >
      <button type="button" on:click={toggleMobileMenu} id="mobile-menu-btn" class="relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-hover hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-controls="mobile-menu" aria-expanded="false">
        <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.49375 32.0062C3.70293 30.2766 2.27451 28.2076 1.29184 25.92C0.309176 23.6324 -0.208066 21.1721 -0.2297 18.6825C-0.251334 16.1928 0.223073 13.7239 1.16584 11.4195C2.10861 9.11524 3.50085 7.02177 5.26134 5.26128C7.02183 3.50079 9.1153 2.10855 11.4196 1.16578C13.7239 0.223012 16.1929 -0.251395 18.6825 -0.229761C21.1721 -0.208127 23.6325 0.309115 25.9201 1.29178C28.2077 2.27445 30.2766 3.70287 32.0062 5.49369C35.4217 9.02998 37.3116 13.7663 37.2689 18.6825C37.2262 23.5986 35.2542 28.3014 31.7778 31.7778C28.3014 35.2542 23.5987 37.2261 18.6825 37.2688C13.7663 37.3115 9.03004 35.4216 5.49375 32.0062ZM8.1375 29.3624C10.9521 32.177 14.7695 33.7583 18.75 33.7583C22.7305 33.7583 26.5479 32.177 29.3625 29.3624C32.1771 26.5478 33.7583 22.7304 33.7583 18.7499C33.7583 14.7695 32.1771 10.952 29.3625 8.13744C26.5479 5.32283 22.7305 3.74159 18.75 3.74159C14.7695 3.74159 10.9521 5.32283 8.1375 8.13744C5.32289 10.952 3.74165 14.7695 3.74165 18.7499C3.74165 22.7304 5.32289 26.5478 8.1375 29.3624ZM26.7 13.4437L21.3937 18.7499L26.7 24.0562L24.0562 26.6999L18.75 21.3937L13.4437 26.6999L10.8 24.0562L16.1062 18.7499L10.8 13.4437L13.4437 10.7999L18.75 16.1062L24.0562 10.7999L26.7 13.4437Z" fill="white"/>
        </svg>
      </button>
      <div class="flex flex-col gap-10 space-y-1 pt-20 px-2 pb-3 sm:px-3 uppercase text-center h-full">
        <a href="/" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-xl font-medium" aria-current="page">try it!</a>
        <a href="/" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-xl font-medium">learn</a>
        <a href="/" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-xl font-medium">support</a>
        <a href="/" class="text-gray-300 hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-xl font-medium">pricing</a>
        <a href="/" class="text-accent hover:bg-primary hover:text-white block rounded-md px-3 py-2 text-xl font-bold">talk to sales</a>
        <Button href="/" color="blue" class="rounded-2xl uppercase text-white w-full mx-auto">login</Button>
      </div>
    </div>
  </nav>