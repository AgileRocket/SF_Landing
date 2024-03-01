<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import { Button, Tooltip } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<div class="page-body">
  <section>
    <Hero
      title={"Beyond the"}
      titleAccent={[{ ignore: "", accent: "Algorithm" }]}
      description={"Delve into the world beyond algorithms as we unravel, the secrets to mastering efficient scheduling, empowering you with the knowledge to transform your approach and optimize your operations."}
      animationData={[{ name: "Articles", width: "450", height: "500" }]}
      sClass={"gap-20 lg:px-12"}
      h1Class={"lg:mt-[-2em]"}
    />
  </section>

  <div class="inner-body container flex flex-col gap-12 my-8">
    <h2 class="text-3xl text-primary-dark text-center mb-[-0.75em]">
      Featured
    </h2>
    <section class="flex h-auto w-100 mb-8">
      <a class="article-card md:grid-cols-12" href="/home/articles/article_1">
        <div class="col-span-6">
          <img
            class="rounded-t-2xl md:rounded-2xl"
            src="/src/lib/assets/graphics/featured.jpg"
            alt="blog_1"
          />
        </div>
        <div class="featured-info col-span-6 flex flex-col justify-evenly p-2">
          <p>January 2024</p>
          <h5
            class="mb-2 text-lg md:text-2xl font-semibold tracking-tight text-gray-900"
          >
            Behind the Scenes: What makes ScheduleForward great?
          </h5>
          <p
            class="mb-3 font-normal text-gray-700 text-xs lg:text-lg leading-tight"
          >
            The Evolution of ScheduleForward's Feature Updates
          </p>
          <Button class="bg-primary w-fit">
            Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
        </div>
      </a>
    </section>

    <section class="mx-1 flex justify-center">
      <ul class="flex gap-x-8 text-lg">
        <li>
          <Button
            class="text-primary-dark hover:text-accent transition-all duration-300"
            >Featured
          </Button>
          <Tooltip color="green">Coming Soon</Tooltip>
        </li>
        <li>
          <Button
            class="text-primary-dark hover:text-accent transition-all duration-300"
            >Learn</Button
          >
          <Tooltip color="green">Coming Soon</Tooltip>
        </li>
        <li>
          <Button
            class="text-primary-dark hover:text-accent transition-all duration-300"
            >Community</Button
          >
          <Tooltip color="green">Coming Soon</Tooltip>
        </li>
      </ul>
    </section>

    <section
      class="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8"
    >
      <a href="/home/articles/article_2" class="article-card">
        <div class="col-span-6">
          <img
            class="rounded-t-2xl md:rounded-2xl"
            src="/src/lib/assets/graphics/article_2.jpg"
            alt="blog_1"
          />
        </div>
        <div class="featured-info col-span-6 flex flex-col justify-evenly p-2">
          <p class="text-xs text-primary-light">February 2024</p>
          <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">
            Demystifying Scheduling AI
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm leading-tight">
            A Deep Dive into ScheduleForward's Algorithm
          </p>
          <Button class="bg-primary w-fit">
            Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
        </div>
      </a>
      <div class="article-card">
        <div class="coming-soon"></div>
        <div class="col-span-6">
          <img
            class="rounded-t-2xl md:rounded-2xl"
            src="/src/lib/assets/graphics/article_3.jpg"
            alt="blog_1"
          />
        </div>
        <a
          class="featured-info col-span-6 flex flex-col justify-evenly p-2"
          href="/home/articles"
        >
          <p class="text-xs text-primary-light">March 2024</p>
          <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">
            Balancing Act
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm leading-tight">
            Tips for Optimal Employee Work-Life Scheduling
          </p>
          <Button class="bg-primary w-fit" href="/home/articles/article_3">
            Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
        </a>
      </div>
      <div class="article-card">
        <div class="coming-soon"></div>
        <div class="col-span-6">
          <img
            class="rounded-t-2xl md:rounded-2xl"
            src="/src/lib/assets/graphics/article_4.jpg"
            alt="blog_1"
          />
        </div>
        <a
          class="featured-info col-span-6 flex flex-col justify-evenly p-2"
          href="/home/articles"
        >
          <p class="text-xs text-primary-light">April 2024</p>
          <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900">
            User Spotlight
          </h5>
          <p class="mb-3 font-normal text-gray-700 text-sm leading-tight">
            Success Stories and Best Practices with ScheduleForward
          </p>
          <Button class="bg-primary w-fit" href="/home/articles/article_4">
            Read more <ArrowRightOutline class="w-3.5 h-3.5 ms-2 text-white" />
          </Button>
        </a>
      </div>
    </section>
  </div>
</div>

<style lang="postcss">
  .page-body {
    animation: 2s fadeIn;
  }
  .inner-body::before {
    content: url("/src/lib/assets/backgrounds/blurd3-36.jpg");
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.5;
    z-index: -1;
  }

  .article-card {
    @apply relative;
    @apply grid;
    @apply grid-rows-1;
    @apply gap-4;
    @apply rounded-2xl;
    @apply bg-white;
    @apply overflow-hidden;
    @apply w-full;
    @apply md:p-4;
    @apply mx-1;
    box-shadow: -2px 10px 50px rgba(94, 94, 118, 0.5);
    transition: all 0.4s;
  }

  .article-card:hover,
  .article-card:active {
    box-shadow: -2px 10px 50px rgba(2, 100, 211, 1);
  }

  .coming-soon {
    @apply absolute;
    @apply top-0;
    @apply left-0;
    @apply right-0;
    @apply bottom-0;
    @apply bg-[rgba(255,255,255,0.75)];
    @apply z-50;
  }

  .coming-soon::after {
    content: "coming soon";
    position: absolute;
    top: 25%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -25%);
    font-size: 2.5rem;
    @apply text-accent;
    @apply font-semibold;
    text-align: center;
    text-transform: capitalize;
  }
</style>
