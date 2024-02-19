<script>
  import {
    Heading,
    P,
    Button,
    Card,
    Blockquote,
    AccordionItem,
    Accordion,
  } from "flowbite-svelte";
  import { ArrowRightOutline, QuoteSolid } from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import CustomFooter from "$lib/components/CustomFooter.svelte";

  // Set Navbar Background Color based on scroll position
  let LottiePlayer;
  let SB_LottiePlayer;
  let SC_LottiePlayer;
  let SS_LottiePlayer;
  let DM_LottiePlayer;

  onMount(async () => {
    const module = await import("@lottiefiles/svelte-lottie-player");
    LottiePlayer = module.LottiePlayer;
    SB_LottiePlayer = module.LottiePlayer;
    SC_LottiePlayer = module.LottiePlayer;
    SS_LottiePlayer = module.LottiePlayer;
    DM_LottiePlayer = module.LottiePlayer;

    // Set features button 1 to be active
    toggleActive(1);
  });

  // Toggle selected feature button
  let isActive = null;
  const toggleActive = (button) => {
    isActive = button;
  };

  // Lottie Controls
  let controlsLayout = [
    "previousFrame",
    "playpause",
    "stop",
    "nextFrame",
    "progress",
    "frame",
    "loop",
    "spacer",
    "background",
    "snapshot",
    "zoom",
    "info",
  ];
</script>

<div class="container mx-auto">
  <div
    class="fixed top-0 left-0 right-0 h-full bg-cover bg-no-repeat z-negative bg-primary-background"
  ></div>
  <div class="container fixed top-20 md:top-40">
    <section
      class="hero flex flex-col justify-center xl:gap-4 text-center md:justify-start md:text-start z-10 w-full"
    >
      <Heading
        tag="h1"
        class="font-medium tracking-tighter md:leading-[1.1]"
        customSize="text-3xl md:text-5xl"
        >Scheduling <span
          class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500 font-semibold"
          >simplified</span
        ><br />
        by advanced AI
      </Heading>
      <div class="md:flex md:flex-row-reverse">
        <div class="md:flex-1 lottie hero-lottie-container flex items-center">
          {#if LottiePlayer}
            <LottiePlayer
              src="/src/lib/assets/animations/Hero Section Calendar.json"
              autoplay={true}
              loop={true}
              controls={false}
              renderer="svg"
              background="transparent"
              width={null}
              height={null}
              {controlsLayout}
            />
          {/if}
        </div>
        <div class="md:flex-1 my-6">
          <h2
            class="text-sm text-center md:text-start capitalize leading-7 mb-6"
          >
            A revolutionary Approach to scheduling, Inspired by Physicians for
            Physicians.
          </h2>
          <div class="flex flex-col gap-2 md:flex-row md:mt-10">
            <Button
              href="/"
              color="blue"
              class="rounded-2xl font-semibold uppercase text-white px-0 flex-1"
              >try it!</Button
            >
            <Button
              href="/contact"
              class="capitalize text-accent ring-transparent ring-2 hover:ring-accent transition-all px-0 flex-1"
              border
              >schedule a demo
              <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
            </Button>
          </div>
        </div>
      </div>
      <P class="text-xs text-center md:text-start uppercase"
        >trusted by industry leaders</P
      >
      <div
        class="flex items-center justify-around md:gap-8 md:justify-start w-full"
      >
        <img
          class="w-28 md:w-36"
          src="/src/lib/assets/graphics/u_of_a_logo.png"
          alt="University of Arizona"
        />
        <img
          class="w-28 md:w-36"
          src="/src/lib/assets/graphics/banner_logo.png"
          alt="Banner Health"
        />
        <img
          class="w-28 md:w-36"
          src="/src/lib/assets/graphics/va_logo.png"
          alt="US Dept. of Veterans Affairs"
        />
      </div>
    </section>
  </div>
  <main
    class="parallax-content container left-0 right-0 z-10 shadow-xl"
    style="background: linear-gradient(to bottom, transparent, transparent 5%, white 5%, white;"
  >
    <div
      class="curved-edge absolute left-0 right-0 h-60 bg-cover bg-no-repeat z-0"
      style="background-image: url('src/lib/assets/backgrounds/curved_background.png');"
    ></div>
    <div class="flex flex-col gap-16 px-2">
      <section
        class="relative flex flex-col items-center gap-10 z-10 pt-32 md:pt-48 lg:pt-52"
      >
        <Heading
          tag="h2"
          align="center"
          class="uppercase text-xl md:text-3xl font-medium"
          >Scheduling is Complex.<br />We make it
          <span class="text-accent">easy.</span></Heading
        >
        <div
          class="flex flex-col md:flex-row items-center md:items-start xl:justify-center w-full"
        >
          <Card
            class="bg-transparent border-none shadow-none w-60 md:w-80 text-center"
          >
            <div class="flex flex-col items-center gap-2 pb-4">
              <img
                class="w-20 h-20"
                src="/src/lib/assets/icons/Clock.png"
                alt="Save Time Icon"
              />
              <h5 class="mb-1 text-md font-semibold text-gray-900 uppercase">
                save time
              </h5>
              <span class="text-xs md:text-2xs text-gray-500">
                Our fine-tuned AI greatly reduces time spent slotting your
                staff.</span
              >
            </div>
          </Card>
          <Card
            class="bg-transparent border-none shadow-none w-60 md:w-80 text-center"
          >
            <div class="flex flex-col items-center gap-2 pb-4">
              <img
                class="w-20 h-20"
                src="/src/lib/assets/icons/incentivize.png"
                alt="Save Time Icon"
              />
              <h5 class="mb-1 text-md font-semibold text-gray-900 uppercase">
                incentivize
              </h5>
              <span class="text-xs md:text-2xs text-gray-500"
                >Four ways to build a schedule. Countless ways to a happier
                work-life.</span
              >
            </div>
          </Card>
          <Card
            class="bg-transparent border-none shadow-none w-60 md:w-80 text-center"
          >
            <div class="flex flex-col items-center gap-2 pb-4">
              <img
                class="w-20 h-20"
                src="/src/lib/assets/icons/productivity.png"
                alt="Save Time Icon"
              />
              <h5 class="mb-1 text-md font-semibold text-gray-900 uppercase">
                boost
              </h5>
              <span class="text-xs md:text-2xs text-gray-500"
                >Streamlined scheduling; focus on what truly matters.</span
              >
            </div>
          </Card>
          <Card
            class="bg-transparent border-none shadow-none w-60 md:w-80 text-center"
          >
            <div class="flex flex-col items-center gap-2 pb-4">
              <img
                class="w-20 h-20"
                src="/src/lib/assets/icons/reduce_cost.png"
                alt="Save Time Icon"
              />
              <h5 class="mb-1 text-md font-semibold text-gray-900 uppercase">
                cost-cutting
              </h5>
              <span class="text-xs md:text-2xs text-gray-500"
                >Time saved, morale boosted, productivity increased –
                affordably.</span
              >
            </div>
          </Card>
        </div>
      </section>
      <section
        class="flex flex-col w-full justify-center items-center bg-primary-lightest py-4 lg:py-16 xl:px-10"
      >
        <Heading
          tag="h2"
          class="capitalize text-center md:text-start text-primary font-medium pb-4"
          customSize="text-lg md:text-3xl lg:text-6xl"
          >scheduling features<br />our users
          <span class="underline text-red-500">love</span></Heading
        >
        <Card
          class="bg-transparent border-none shadow-none min-w-full md:hidden"
        >
          <Accordion>
            <AccordionItem>
              <span
                slot="header"
                class="text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider"
                >schedule builder</span
              >
              <div
                class="lottie sb-lottie-container flex items-center mt-1 mb-6"
              >
                {#if SB_LottiePlayer}
                  <SB_LottiePlayer
                    src="/src/lib/assets/animations/Schedule Builder.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <p class="mb-2 text-gray-700 leading-9">
                A scheduling admin's work-life: Tedious and stressful! This is
                why we offer our suite of options to utilize our unique AI
                toolkit. Remain as hands on - or off - as you choose!
              </p>
            </AccordionItem>
            <AccordionItem>
              <span
                slot="header"
                class="text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider"
                >smart calendar</span
              >
              <div class="lottie sc-lottie-container flex items-center">
                {#if SC_LottiePlayer}
                  <SC_LottiePlayer
                    src="/src/lib/assets/animations/Smart Calendar.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <p class="mb-2 text-gray-700 leading-9">
                Incorporate and view personal events alongside your work
                schedule. Sync your schedule and alerts with iCal, MS Outlook,
                Gmail, etc.
              </p>
            </AccordionItem>
            <AccordionItem>
              <span
                slot="header"
                class="text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider"
                >shift swapping</span
              >
              <div
                class="lottie ss-lottie-container flex justify-center items-center mt-1 mb-6"
              >
                {#if SS_LottiePlayer}
                  <SS_LottiePlayer
                    src="/src/lib/assets/animations/Shift Swapping.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <p class="mb-2 text-gray-700 leading-9">
                Submit / approve shift changes and trades in real-time without
                requiring administrator overhead.
              </p>
            </AccordionItem>
            <AccordionItem>
              <span
                slot="header"
                class="text-md lg:text-lg font-semibold lg:font-medium text-accent uppercase lg:text-start tracking-wider"
                >data management</span
              >
              <div
                class="lottie dm-lottie-container flex justify-center items-center mt-1 mb-6"
              >
                {#if DM_LottiePlayer}
                  <DM_LottiePlayer
                    src="/src/lib/assets/animations/Data Management.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <p class="mb-2 text-gray-700 leading-9">
                Data securely stored, managed, and backed up on a cloud-based
                solution.
              </p>
            </AccordionItem>
          </Accordion>
        </Card>

        <!-- TABLET + -->
        <div class="hidden md:flex w-full mt-8">
          <div class="flex-1 flex flex-col gap-8 mr-4">
            <button
              type="button"
              on:click={() => {
                toggleActive(1);
              }}
              class:feature-active={isActive === 1}
              class="features-link"
            >
              <span class="flex justify-between items-center"
                >schedule builder
                <ArrowRightOutline
                  class="w-4 h-4 text-primary-lightest"
                /></span
              >
            </button>
            <button
              type="button"
              on:click={() => {
                toggleActive(2);
              }}
              class:feature-active={isActive === 2}
              class="features-link"
            >
              <span class="flex justify-between items-center"
                >smart calendar
                <ArrowRightOutline
                  class="w-4 h-4 text-primary-lightest"
                /></span
              >
            </button>
            <button
              type="button"
              on:click={() => {
                toggleActive(3);
              }}
              class:feature-active={isActive === 3}
              class="features-link"
            >
              <span class="flex justify-between items-center"
                >shift swapping
                <ArrowRightOutline
                  class="w-4 h-4 text-primary-lightest"
                /></span
              >
            </button>
            <button
              type="button"
              on:click={() => {
                toggleActive(4);
              }}
              class:feature-active={isActive === 4}
              class="features-link"
            >
              <span class="flex justify-between items-center"
                >data management
                <ArrowRightOutline
                  class="w-4 h-4 text-primary-lightest"
                /></span
              >
            </button>
          </div>
          <div class="flex-1" style="margin-top:-8em">
            <div class:feature-animation-active={isActive === 1} class="hidden">
              <div
                class="lottie sb-lottie-container flex items-center mt-1 mb-6"
              >
                {#if SB_LottiePlayer}
                  <SB_LottiePlayer
                    src="/src/lib/assets/animations/Schedule Builder.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <h3 class="capitalize text-accent font-medium pt-8 lg:pt-16 pb-4">
                scheulde builder
              </h3>
              <p class="mb-2 text-gray-700 leading-9">
                A scheduling admin's work-life: Tedious and stressful! This is
                why we offer our suite of options to utilize our unique AI
                toolkit. Remain as hands on - or off - as you choose!
              </p>
            </div>
            <div class:feature-animation-active={isActive === 2} class="hidden">
              <div class="lottie sc-lottie-container flex items-center">
                {#if SC_LottiePlayer}
                  <SC_LottiePlayer
                    src="/src/lib/assets/animations/Smart Calendar.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <h3 class="capitalize text-accent font-medium pt-8 pb-4">
                smart calendar
              </h3>
              <p class="mb-2 text-gray-700 leading-9">
                Incorporate and view personal events alongside your work
                schedule. Sync your schedule and alerts with iCal, MS Outlook,
                Gmail, etc.
              </p>
            </div>
            <div class:feature-animation-active={isActive === 3} class="hidden">
              <div
                class="lottie ss-lottie-container flex justify-center items-center mt-1 mb-6"
              >
                {#if SS_LottiePlayer}
                  <SS_LottiePlayer
                    src="/src/lib/assets/animations/Shift Swapping.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <h3 class="capitalize text-accent font-medium pt-8 pb-4">
                shift swapping
              </h3>
              <p class="mb-2 text-gray-700 leading-9">
                Submit / approve shift changes and trades in real-time without
                requiring administrator overhead.
              </p>
            </div>
            <div class:feature-animation-active={isActive === 4} class="hidden">
              <div
                class="lottie dm-lottie-container flex justify-center items-center mt-1 mb-6"
              >
                {#if DM_LottiePlayer}
                  <DM_LottiePlayer
                    src="/src/lib/assets/animations/Data Management.json"
                    autoplay={true}
                    loop={true}
                    controls={false}
                    renderer="svg"
                    background="transparent"
                    width={null}
                    height={null}
                    {controlsLayout}
                  />
                {/if}
              </div>
              <h3 class="capitalize text-accent font-medium pt-8 pb-4">
                data management
              </h3>
              <p class="mb-2 text-gray-700 leading-9">
                Data securely stored, managed, and backed up on a cloud-based
                solution.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col items-center gap-16">
        <div class="flex flex-col gap-5 mx-1 my-8">
          <figure class="mx-auto p-2 rounded-lg w-full md:w-11/12">
            <QuoteSolid class="mx-auto mb-3 w-8 h-8 text-primary" />
            <Blockquote alignment="center" size="xs md:lg" class="font-normal"
              >ScheduleForward is an extraordinary application. If anyone wants
              a sample of testimonials, just let me know; it's unlike any other
              scheduling system that I know of. If I had to name 3 top wellness
              interventions for our faculty, this may be #1 for them.</Blockquote
            >
            <figcaption
              class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse"
            >
              <div
                class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-400"
              >
                <cite class="pe-2 text-xs font-light text-gray-900 capitalize"
                  >sam keim</cite
                >
                <cite class="ps-2 text-xs font-light text-gray-500"
                  >Dept. Chair at UMC Banner</cite
                >
              </div>
            </figcaption>
          </figure>
          <a
            href="/reviews"
            class="mb-6 mx-auto text-xs sm:px-16 capitalize text-accent underline"
            >see more testimonials</a
          >
        </div>
      </section>
    </div>
    <!-- FOOTER IS HERE ONLY FOR HOME PAGE; LAYOUT.SVELTE FOR ALL OTHER PAGES! -->
    <section class="parallax-footer relative">
      <CustomFooter />
    </section>
  </main>
</div>

<style lang="postcss">
  .curved-edge {
    @apply lg:top-[-1.65em] xl:top-[-3.4em];
  }

  .parallax-content {
    position: absolute;
    z-index: 2;
    transition: 0.8s all;
    animation: 2s fadeIn;
    @apply top-[46em] md:top-[34em] lg:top-[36em] xl:top-[40em];
  }

  .lottie {
    transition: 0.8s all;
    animation: 5s fadeIn;
  }

  .hero-lottie-container {
    transform: scale(0.65);
    height: 220px;
  }

  .sb-lottie-container {
    transform: scale(0.75);
    height: 200px;
  }

  .sc-lottie-container {
    transform: scale(1.1);
    height: 225px;
  }

  .ss-lottie-container {
    transform: scale(0.75);
    height: 200px;
  }

  .dm-lottie-container {
    transform: scale(0.75);
    height: 200px;
  }

  .hero-lottie-container {
    @apply md:scale-100;
  }

  .features-link {
    @apply md:text-lg;
    @apply md:uppercase;
    @apply md:cursor-pointer;
    @apply md:rounded-2xl;
    @apply md:px-4;
    @apply md:py-2;
    @apply xl:w-96;
  }

  .features-link:hover {
    @apply md:text-accent;
  }

  .feature-active {
    @apply md:bg-accent;
    @apply md:text-white !important;
  }

  .feature-animation-active {
    @apply block !important;
  }
</style>
