<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import { Timeline, TimelineItem, Card, Avatar } from "flowbite-svelte";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faCalendar,
    faHandshakeAngle,
    faPenRuler,
    faCode,
    faRectangleAd,
    faHandHoldingHeart,
    faPaperPlane,
  } from "@fortawesome/free-solid-svg-icons";
  import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
</script>

<div class="page-body">
  <section>
    <Hero
      title={"all about"}
      titleAccent={[{ ignore: "schedule", accent: "Forward" }]}
      description={"We provide efficient and modern solutions for both admins and users alike.  This is why we believe our product stands second to none when it comes to quality and ease-of-use."}
      animationData={[{ name: "About", width: "450", height: "500" }]}
      sClass={"gap-20 lg:px-12"}
      h1Class={"lg:mt-[-2em]"}
    />
  </section>

  <div class="container flex flex-col gap-y-8">
    <p
      class="text-center text-xs md:text-sm lg:text-lg md:px-16 lg:px-48 xl:px-64 lg:my-8"
    >
      We are committed to premium user experiences at affordable rates.
      Cutting-Edge & Simple. <b>Never satisfied; always improving.</b>
    </p>

    <section
      class="flex flex-col md:flex-row-reverse md:justify-evenly md:items-center md:mt-8 lg:mt-16"
    >
      <div
        class="md:flex-1 relative h-[48em] md:h-[51.5em] lg:h-[68.5em] md:mt-[-4em] z-0"
      >
        <div class="circle circle-1"></div>
        <div class="story-container">
          <div
            class="flex flex-col gap-y-2 lg:gap-y-8 text-white text-2xs xs:text-xs lg:text-lg font-light ml-[1.5em] ps-[4em] xs:ps-[6.5em] lg:ps-[8em] pe-1 mt-[-2em]"
          >
            <h2
              class="our-story relative capitalize text-3xl lg:text-4xl font-medium"
            >
              Our story
            </h2>
            <p>
              ScheduleForward originated from programmer Tom Smallwood's
              observation of his wife navigating scheduling programs in the
              emergency department. Collaborating with ER doc Scott Lowry in
              2012, they crafted an automatic schedule generator. Despite
              prolonged calculations, the system stood out for granting direct
              provider input. Later, Dr. Lowry inspired the shift to an
              automated Lottery system. Keith Kowalski enhanced user experience
              in 2019, emphasizing simplicity.
            </p>
            <p>
              The UofA DEM and the Tucson VA embraced ScheduleForward, leading
              to nationwide and international adoption. Our commitment lies in
              responsive customer service and agility, continuously evolving to
              meet diverse client needs. Anticipate upcoming updates as we
              persistently refine our system based on evolving requirements.
            </p>
          </div>
        </div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>

      <div class="md:basis-2/5 ms-1 lg:pl-[2em]">
        <Timeline order="vertical">
          <TimelineItem title="White-Boarding" date="1980s">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span></svelte:fragment
            >
            <p class="mb-4 text-xs font-normal text-gray-500">
              Doug H. Lindsey, MD creates the lottery system on chalk board
            </p>
          </TimelineItem>
          <TimelineItem title="The Birth of a Spreadsheet" date="2000s">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              Kevin Reilly starts the lottery in Excel
            </p>
          </TimelineItem>
          <TimelineItem title="ScheduleForward begins " date="2012">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              We've got a name and a purpose!
            </p>
          </TimelineItem>
          <TimelineItem title="Revamp to Automate Lottery" date="2015">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500"></p>
          </TimelineItem>
          <TimelineItem
            title="Dr. Lowry Takes Over the Excel Lottery"
            date="2018"
          >
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500"></p>
          </TimelineItem>
          <TimelineItem title="Takeoff!" date="2019">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              First live lottery used by UofA DEM
            </p>
          </TimelineItem>
          <TimelineItem title="Expansion" date="2020">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              The Tucson VA becomes the second site to use ScheduleForward
            </p>
          </TimelineItem>
          <TimelineItem title="First Conference" date="2022">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-accent"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              Inaugural conference appearance at ACEP. Sales are a go!
            </p>
          </TimelineItem>
          <TimelineItem title="Residency Program Plan" date="2025">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-green-500"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              ScheduleForward will be offered <span class="uppercase text-bold"
                >free</span
              > to all EM residency programs.
            </p>
          </TimelineItem>
          <TimelineItem title="All Your Bases are Belong to Us" date="2030">
            <svelte:fragment slot="icon">
              <span
                class="flex absolute -start-3 justify-center items-center w-6 h-6 rounded-full ring-4 ring-green-500"
              >
                <FontAwesomeIcon
                  icon={faCalendar}
                  class="w-3 h-3 text-primary-600 dark:text-primary-400"
                />
              </span>
            </svelte:fragment>
            <p class="mb-4 text-xs font-normal text-gray-500">
              Overtake market share of scheduling programs (world conquered)
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    </section>

    <section class="mt-[-2em] mx-auto md:mt-4 md:mb-8">
      <Card padding="none" size="lg" class="grid">
        <figure
          class="flex flex-col justify-center items-center md:items-start p-8 text-center md:text-start bg-primary-lightest rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e"
        >
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900">
              A word from our CEO...
            </h3>
            <p class="my-4 font-medium text-xs md:text-sm">
              “ScheduleForward has removed 80% of my time and effort in building
              our schedules. For our office, it has eliminated 80 man-hours a
              year of data entry, now done with a single click of a button.”
            </p>
          </blockquote>
          <figcaption
            class="flex justify-center items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              class="w-9 h-9 md:w-16 md:h-16 rounded-full"
              src="/src/lib/assets/team/lowry.jpg"
              alt="Scott Lowry"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Scott Lowry</div>
              <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                MD, Arizona
              </div>
            </div>
          </figcaption>
        </figure>
      </Card>
    </section>

    <section class="flex flex-col items-center mx-1">
      <p
        class="uppercase text-2xl text-center font-semibold tracking-widest mb-4"
      >
        leadership
      </p>
      <div
        class="flex flex-col md:flex-row gap-y-6 md:justify-evenly md:w-full md:mb-8"
      >
        <div
          class="flex md:flex-col items-center space-x-4 md:space-x-0 rtl:space-x-reverse"
        >
          <Avatar src="/src/lib/assets/team/lowry.jpg" size={"xl"} rounded />
          <div class="space-y-1 md:text-center font-medium">
            <div>Scott Lowry, MD</div>
            <div class="text-sm text-gray-500">Founder, CEO</div>
          </div>
        </div>
        <div
          class="flex md:flex-col items-center space-x-4 md:space-x-0 rtl:space-x-reverse"
        >
          <Avatar
            src="/src/lib/assets/team/smallwood.jpg"
            size={"xl"}
            rounded
          />
          <div class="space-y-1 md:text-center font-medium">
            <div>Tom Smallwood</div>
            <div class="text-sm text-gray-500">Founder, CTO</div>
          </div>
        </div>
        <div
          class="flex md:flex-col items-center space-x-4 md:space-x-0 rtl:space-x-reverse"
        >
          <Avatar src="/src/lib/assets/team/kowalski.jpg" size={"xl"} rounded />
          <div class="space-y-1 md:text-center font-medium">
            <div>Keith Kowalski</div>
            <div class="text-sm text-gray-500">Founder, COO</div>
          </div>
        </div>
      </div>

      <p
        class="uppercase text-xl text-center font-semibold tracking-widest mt-12 mb-4"
      >
        team leads
      </p>
      <div
        class="flex flex-col md:flex-row gap-y-6 md:justify-evenly md:w-full"
      >
        <div
          class="flex md:flex-col items-center space-x-4 md:space-x-0 rtl:space-x-reverse"
        >
          <Avatar src="/src/lib/assets/team/tanya.jpg" size={"xl"} rounded />
          <div class="space-y-1 md:text-center font-medium">
            <div>Tanya K</div>
            <div class="text-sm text-gray-500">Design & Editing</div>
          </div>
        </div>
        <div
          class="flex md:flex-col items-center space-x-4 md:space-x-0 rtl:space-x-reverse"
        >
          <Avatar
            src="/src/lib/assets/team/villasenor.jpg"
            size={"xl"}
            rounded
          />
          <div class="space-y-1 md:text-center font-medium">
            <div>Daniel Villaseñor</div>
            <div class="text-sm text-gray-500">Sales & Marketing</div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="teams-container px-6 py-4">
        <p
          class="uppercase text-3xl text-center text-white font-medium tracking-widest pt-4"
        >
          our teams
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-14 py-16">
          <div class="team-info-container">
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              color={"white"}
              size={"2x"}
            />
            <p class="text-lg font-medium capitalize">customer support</p>
            <p class="text-xs font-light">
              The customer support team’s mission is to provide exceptional
              assistance, ensuring seamless and tailored scheduling solutions,
              while welcoming and onboarding new user with a warm and
              informative approach. We know changing platforms is hard, we’re
              here to help and make it as easy as possible.
            </p>
          </div>
          <div class="team-info-container">
            <FontAwesomeIcon icon={faPenRuler} color={"white"} size={"2x"} />
            <p class="text-lg font-medium capitalize">
              design & user experience
            </p>
            <p class="text-xs font-light">
              It doesn’t matter how sophisticated a program is if you can’t
              figure out how to use it. Our experienced design team not only
              makes our system easy on the eyes, but easy to use.
              ScheduleForward couldn’t be easier for the users, and admin now
              have a Turbo-Tax-like wizard to step them through setting up their
              department’s schedules. The system does all the work for you!
            </p>
          </div>
          <div class="team-info-container">
            <FontAwesomeIcon icon={faCode} color={"white"} size={"2x"} />
            <p class="text-lg font-medium capitalize">development</p>
            <p class="text-xs font-light">
              At ScheduleForward we believe software must continually improve or
              it will be obsolete. We have a constantly growing list of future
              features we want to add. Our development team begins building the
              next feature while our testing team works on releasing our latest
              updates. We never stop improving. Many of our features come from
              direct user requests and suggestions. No other company is as agile
              on updating and building new features to meet and exceed current
              user requests.
            </p>
          </div>
          <div class="team-info-container">
            <FontAwesomeIcon icon={faPaperPlane} color={"white"} size={"2x"} />
            <p class="text-lg font-medium capitalize">finance & legal</p>
            <p class="text-xs font-light">
              Lean business models and more than fair contracts keeps our
              finance and legal teams… bored. We have open contracts with our
              basic contract being month-to-month, you can leave at anytime and
              not lose any large investment. Since we’ve never lost a client, it
              is easy for us to offer open contracts that don’t lock you in to
              our services. We know you we’ll keep you and your faculty happy,
              so we don’t have to tie you to any long term contracts. (Long term
              contracts are available for those wanting to lock in lower rates.
              – legal wanted this added…)
            </p>
          </div>
          <div class="team-info-container">
            <FontAwesomeIcon
              icon={faHandHoldingHeart}
              color={"white"}
              size={"2x"}
            />
            <p class="text-lg font-medium capitalize">human resources</p>
            <p class="text-xs font-light">
              Our internal H.R. department is second to none with some of the
              most flexible hours and best sick leave policies in the industry.
              Working for us might be the only thing nicer than using our
              product!
            </p>
          </div>
          <div class="team-info-container">
            <FontAwesomeIcon icon={faRectangleAd} color={"white"} size={"2x"} />
            <p class="text-lg font-medium capitalize">sales & marketing</p>
            <p class="text-xs font-light">
              We try low to non-pressure sales. We offer free demos and don’t
              hide our rates. We work with you and your faculty to help
              transition to our system. Our sales team provides service, too, so
              we all know what you need and how to help, not just sell.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style lang="postcss">
  .page-body {
    animation: 2s fadeIn;
  }
  .story-container {
    @apply relative;
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    @apply bg-primary-secondary;
    @apply h-full;
    clip-path: circle(52% at 77% 50%);
    z-index: -1;
  }

  @media (min-width: 1280px) {
    .story-container {
      clip-path: circle(52% at 66% 50%);
    }
  }

  .our-story::before {
    content: "story";
    position: absolute;
    top: -0.55em;
    left: 0em;
    color: rgba(255, 255, 255, 0.1);
    font-size: 9rem;
    text-transform: uppercase;
    @apply hidden md:block;
  }

  .circle {
    content: "";
    @apply absolute;
    @apply bg-primary-lightest;
    clip-path: circle(50% at 50% 50%);
    z-index: 1;
  }
  .circle-1 {
    @apply top-[-1.5em] xl:top-[2.5em];
    @apply right-0;
    @apply h-[8.75em];
    @apply w-[8.75em];
  }
  .circle-2 {
    @apply bottom-[-1.5em] xl:bottom-[0.5em];
    @apply right-[5em] xl:right-[11em];
    @apply h-[7.8em];
    @apply w-[7.8em];
  }
  .circle-3 {
    @apply bottom-[3.5em];
    @apply right-[13em] xl:right-[22em];
    @apply h-[5.9em];
    @apply w-[5.9em];
  }

  .teams-container::before {
    @apply absolute;
    content: "";
    @apply h-[150em] md:h-[85em] lg:h-[74em];
    @apply bg-primary-secondary;
    @apply w-full;
    left: 0;
    right: 0;
    z-index: -1;
  }

  .team-info-container {
    @apply flex;
    @apply flex-col;
    @apply items-start;
    @apply gap-y-2;
    @apply text-white;
  }

  /* USED IN TIME LINE */
  :global(li h3) {
    @apply text-xs !important;
  }
</style>
