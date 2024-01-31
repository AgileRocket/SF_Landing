<script>
  import { Heading, P, A, Mark, Secondary, Badge, Button, Video, Card, Blockquote, Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte';
  import { ArrowRightOutline, QuoteSolid, FacebookSolid, TwitterSolid, YoutubeSolid, LinkedinSolid} from 'flowbite-svelte-icons';
  import { updateNavbarColor, handleScroll, scrollPosition, scrollThreshold } from '$lib/stores/color';
  import { onMount } from 'svelte';

  // Set Navbar Background Color based on scroll position
  let parallaxContent;
  let heroBottom;
  var newScrollThreshold = 0;
  var parallaxContentStart = 0;
  var desktopVideoSrc = "/src/lib/assets/videos/personal_schedule.mp4"; // Initial Video

  onMount(() => {
    let heroBottomPosition = heroBottom.getBoundingClientRect();
    parallaxContentStart = heroBottomPosition.bottom;
    newScrollThreshold = heroBottomPosition.bottom;

    // Set where parallax content slider starts
    parallaxContent.style.top = (parallaxContentStart) + "px"
    updateNavbarColor(newScrollThreshold);

    // Set features button 1 to be active
    toggleActive(1)
  })

  const selectVideo = (url, button) => {
    desktopVideoSrc = url;
    toggleActive(button);
  }

  let isActive = null;
  const toggleActive = (button) => {
    isActive = button
  }
</script>

<style>
  .parallax-box {
    position: relative;
    top: 4em;
    height: 100vh;
    z-index: 0;
  }
  .parallax-content {
    position: absolute;
    z-index: 2;
    top: 200em;
    transition: .8s all;
    animation: 2s fadeIn;
  }

  @media (min-width:768px) {
    .parallax-box {
      top: 6em;
    }
    .bg-calendar {
      right: -20em;
    }
  }

  @media (min-width:850px) {
    .curved-edge {
      top: -1em;
    }
  }

  @media (min-width:1024px) {
    .active {
      @apply bg-primary-lightest;
      @apply p-4;
      @apply rounded-3xl;
    }

    .features-item:hover {
      @apply bg-primary-lightest;
      @apply rounded-3xl;
    }
  }

  @media (min-width:1100px) {
    .curved-edge {
      top: -2em;
    }
  }
  @media (min-width:1535px) {
    .bg-calendar {
      right: -34em;
    }
    .curved-edge {
      top: -5em;
    }
  }
</style>

<div class="parallax-box mx-auto mt-4">
  <div class="fixed top-0 left-0 right-0 h-full bg-cover bg-no-repeat z-negative" style="background-image: url('src/lib/assets/backgrounds/hero_background.png');"></div>
  <div class="fixed">
    <section bind:this={heroBottom} class="hero px-4 flex flex-col justify-center gap-2 text-center md:justify-start md:text-start z-10">
      <div class="bg-calendar absolute bottom-0 w-full h-full bg-cover xl:bg-contain bg-no-repeat z-negative xl:scale-150" style="background-image: url('src/lib/assets/graphics/calendar_graphic.svg'); bottom: -8em"></div>
      <Heading tag="h1" class="uppercase font-bold mb-4" customSize="text-lg xs:text-xl md:text-2xl" style="letter-spacing:1px">simplify scheduling with<br><Badge class="text-sm bg-primary-lightest xs:text-xl md:text-2xl text-accent font-semibold">advanced ai tools</Badge></Heading>
      <P class="mb-6 text-xs md:text-lg text-center md:text-start md:pe-48 lg:pe-80 capitalize">Experience a revolutionary Approach to scheduling, <br>Inspired by Physicians for Physicians.</P>
      <Video src="/src/lib/assets/videos/sf_intro.mp4" controls muted class="w-full md:max-w-xl h-auto rounded-2xl" poster="src/lib/assets/backgrounds/sf_intro_poster.png"/>
      <div class="flex flex-col gap-2 md:flex-row md:w-8/12 md:mt-5">
        <Button href="/" color="blue" class="rounded-2xl capitalize text-white w-full md:flex-1">get started</Button>
      <Button href="/" class="capitalize text-accent md:flex-1 ring-transparent ring-2 hover:ring-accent transition-all" border>schedule a tour
        <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
      </Button>
      </div>
    </section>
  </div>
  <main bind:this={parallaxContent} class="parallax-content left-0 right-0 z-10" style="background: linear-gradient(to bottom, transparent, transparent 5%, white 5%, white;">
    <div class="curved-edge absolute left-0 right-0 h-60 bg-cover bg-no-repeat z-0" style="background-image: url('src/lib/assets/backgrounds/curved_background.svg');"></div>
    <section class="relative flex flex-col items-center gap-8 z-10 pt-20 md:pt-40 lg:pt-52">
      <Heading tag="h2" align="center" class="uppercase text-xl md:text-2xl font-medium">Scheduling is Complex.<br>Let’s <span class="text-accent">simplify</span> it.</Heading>
      <div class="flex flex-col md:flex-row items-center md:items-start xl:justify-center w-full">
        <Card class="bg-transparent border-none shadow-none w-60 md:w-80 text-center">
          <div class="flex flex-col items-center gap-2 pb-4">
            <img class="w-20 h-20" src="/src/lib/assets/icons/Clock.svg" alt="Save Time Icon" />
            <h5 class="mb-1 text-md font-semibold text-gray-900  uppercase">save time</h5>
            <span class="text-xs md:text-2xs text-gray-500 ">Our fine-tuned algorithms are built to greatly reduce time spent slotting your staff accordingly.</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none w-60 md:w-80 text-center">
          <div class="flex flex-col items-center gap-2 pb-4">
            <img class="w-20 h-20" src="/src/lib/assets/icons/incentivize.svg" alt="Save Time Icon" />
            <h5 class="mb-1 text-md font-semibold text-gray-900  uppercase">incentivize</h5>
            <span class="text-xs md:text-2xs text-gray-500 ">Our unique lottery system provides an increase of individual control, while remaining within set rules.</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none w-60 md:w-80 text-center">
          <div class="flex flex-col items-center gap-2 pb-4">
            <img class="w-20 h-20" src="/src/lib/assets/icons/productivity.svg" alt="Save Time Icon" />
            <h5 class="mb-1 text-md font-semibold text-gray-900  uppercase">boost</h5>
            <span class="text-xs md:text-2xs text-gray-500 ">Less time spent scheduling; more time spent on what's really important.</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none w-60 md:w-80 text-center">
          <div class="flex flex-col items-center gap-2 pb-4">
            <img class="w-20 h-20" src="/src/lib/assets/icons/reduce_cost.svg" alt="Save Time Icon" />
            <h5 class="mb-1 text-md font-semibold text-gray-900  uppercase">cost-cutting</h5>
            <span class="text-xs md:text-2xs text-gray-500 ">Saving time, boosting morale, and increasing productivity. All at an affordable rate.</span>
          </div>
        </Card>
      </div>
    </section>
    <Heading tag="h3" class="capitalize text-center text-primary font-medium my-8 mb-2" customSize="text-lg md:text-2xl lg:text-6xl">discover the scheduling<br>features our users <span class="underline">love</span></Heading>
    <section class="flex overflow-x-auto lg:overflow-hidden snap-x xl:w-10/12 xl:mx-auto">
      <div class="flex w-full lg:w-auto lg:flex-1 lg:flex lg:flex-col lg:items-center lg:justify-start">
        <Card class="bg-transparent border-none shadow-none min-w-full text-center snap-center">
          <div on:click={() => selectVideo("/src/lib/assets/videos/schedule_builder.mp4", 1)} class:active={isActive === 1} class="features-item flex flex-col items-center lg:items-start gap-2 p-4 cursor-grab lg:cursor-pointer">
            <Video src="/src/lib/assets/videos/schedule_builder.mp4" autoplay loop class="w-full h-52 md:h-72 mb-6 lg:hidden"/>
            <h5 class="mb-1 text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider ">schedule builder</h5>
            <span class="text-xs md:text-lg lg:text-xs md:px-16 lg:px-0 text-gray-500 lg:text-start">Incorporate and view personal events alongside your work schedule.  Plus, these events can link to your personal calendars!</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none min-w-full text-center snap-center">
          <div on:click={() => selectVideo("/src/lib/assets/videos/smart_calendar.mp4", 2)} class:active={isActive === 2} class="features-item flex flex-col items-center lg:items-start gap-2 p-4 cursor-grab lg:cursor-pointer">
            <Video src="/src/lib/assets/videos/smart_calendar.mp4" autoplay loop class="w-full h-52 md:h-72 mb-6 lg:hidden"/>
            <h5 class="mb-1 text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider">smart calendar</h5>
            <span class="text-xs md:text-lg lg:text-xs md:px-16 lg:px-0 text-gray-500 lg:text-start">As with the personal schedule feature, you can sync your work schedule with iCal, MS Outlook, Gmail, etc.</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none min-w-full text-center snap-center">
          <div on:click={() => selectVideo("/src/lib/assets/videos/personal_schedule.mp4", 3)} class:active={isActive === 3} class="features-item flex flex-col items-center lg:items-start gap-2 p-4 cursor-grab lg:cursor-pointer">
            <Video src="/src/lib/assets/videos/personal_schedule.mp4" autoplay loop class="w-full h-52 md:h-72 mb-6 lg:hidden"/>
            <h5 class="mb-1 text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider">personal schedules</h5>
            <span class="text-xs md:text-lg lg:text-xs md:px-16 lg:px-0 text-gray-500 lg:text-start">Incorporate and view personal events alongside your work schedule.  Plus, these events can link to your personal calendars!</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none min-w-full text-center snap-center">
          <div on:click={() => selectVideo("/src/lib/assets/videos/shift_swapping.mp4", 4)} class:active={isActive === 4} class="features-item flex flex-col items-center lg:items-start gap-2 p-4 cursor-grab lg:cursor-pointer">
            <Video src="/src/lib/assets/videos/shift_swapping.mp4" autoplay loop class="w-full h-52 md:h-72 mb-6 lg:hidden"/>
            <h5 class="mb-1 text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider">shift swapping</h5>
            <span class="text-xs md:text-lg lg:text-xs md:px-16 lg:px-0 text-gray-500 lg:text-start">Submit / approve shift changes and trades in real-time without requiring administrator overhead.</span>
          </div>
        </Card>
        <Card class="bg-transparent border-none shadow-none min-w-full text-center snap-center">
          <div on:click={() => selectVideo("/src/lib/assets/videos/data_management.mp4", 5)} class:active={isActive === 5} class="features-item flex flex-col items-center lg:items-start gap-2 p-4 cursor-grab lg:cursor-pointer">
            <Video src="/src/lib/assets/videos/data_management.mp4" autoplay loop class="w-full h-52 md:h-72 mb-6 lg:hidden"/>
            <h5 class="mb-1 text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider">data management</h5>
            <span class="text-xs md:text-lg lg:text-xs md:px-16 lg:px-0 text-gray-500 lg:text-start">Data stored, managed, and backed up on a cloud-based solution.</span>
          </div>
        </Card>
      </div>
      <div class="lg:flex-1 w-full my-auto mx-auto hidden lg:block">
        <Video src={desktopVideoSrc} autoplay loop class="w-full h-100"/>
      </div>
    </section>
    <section class="xl:w-10/12 xl:mx-auto">
      <div class="flex flex-col items-center gap-16 mt-16">
        <div class="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-around w-full">
          <img class="w-48" src="/src/lib/assets/graphics/u_of_a_logo.svg" alt="University of Arizona"/>
          <img class="w-48" src="/src/lib/assets/graphics/banner_logo.svg" alt="Banner Health"/>
          <img class="w-48" src="/src/lib/assets/graphics/va_logo.svg" alt="US Dept. of Veterans Affairs"/>
        </div>
        <P class="text-sm lg:text-xl xl:px-48 text-center capitalize">trusted by users from productive business entities</P>
        <div class="flex flex-col gap-5 mx-1 my-8">
          <figure class="mx-auto bg-primary-lightest p-2 rounded-lg w-full md:w-11/12">
            <QuoteSolid class="mx-auto mb-3 w-8 h-8 text-primary" />
            <Blockquote alignment="center" size="xs md:lg" class="font-normal">ScheduleForward is an extraordinary application.  If anyone wants a sample of testimonials, just let me know; it's unlike any other scheduling system that I know of.  If I had to name 3 top wellness interventions for our faculty, this may be #1 for them.</Blockquote>
            <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
              <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-400">
                <cite class="pe-2 text-xs font-light text-gray-900 capitalize">sam keim</cite>
                <cite class="ps-2 text-xs font-light text-gray-500">Dept. Chair at UMC Banner</cite>
              </div>
            </figcaption>
          </figure>
          <a href="/" class="mb-6 ml-auto text-xs sm:px-16 capitalize text-accent underline">see more testimonies</a>
        </div>
      </div>
    </section>
    <!-- FOOTER IS HERE ONLY FOR HOME PAGE; LAYOUT.SVELTE FOR ALL OTHER PAGES! -->
    <Footer footerType="socialmedia" class="overflow-hidden bg-primary-lighter text-center">
      <div class="md:flex md:justify-start md:gap-12 xl:justify-evenly">
        <div class="flex justify-center items-center mb-4">
          <FooterBrand href="/" src="/src/lib/assets/graphics/sf_primary_logo.png" alt="ScheduleForward Logo" name="ScheduleForward" aClass="flex md:flex-col items-center xl:scale-150" spanClass="text-lg font-medium mt-2" />
        </div>
        <div class="grid grid-cols-1 gap-10 sm:grid-cols-3 xl:gap-20">
          <div class="flex flex-col justify-center items-center text-center">
            <FooterLinkGroup>
              <FooterLink liClass="mb-4 uppercase text-accent" href="/">try it!</FooterLink>
              <FooterLink liClass="mb-4 uppercase text-accent" href="/">pricing</FooterLink>
              <FooterLink liClass="mb-4 uppercase text-accent" href="/">schedule a tour</FooterLink>
              <FooterLink liClass="mb-4 uppercase text-accent" href="/">talk to sales</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 md:text-start">learn more</h2>
            <FooterLinkGroup>
              <FooterLink liClass="mb-4 uppercase" href="/">video library</FooterLink>
              <FooterLink liClass="mb-4 uppercase" href="/">testimonials</FooterLink>
              <FooterLink liClass="mb-4 uppercase" href="/">articles</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 md:text-start">support</h2>
            <FooterLinkGroup>
              <FooterLink liClass="mb-4 uppercase" href="/">about</FooterLink>
              <FooterLink liClass="mb-4 uppercase" href="/">contact us</FooterLink>
              <FooterLink liClass="mb-4 uppercase" href="/">FAQs</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex flex-col items-center justify-center">
        <FooterCopyright href="/" by="ScheduleForward" spanClass="text-xs" />
        <div class="flex flex-row mt-4 space-x-6 rtl:space-x-reverse sm:justify-center">
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
  </main>
  

</div>