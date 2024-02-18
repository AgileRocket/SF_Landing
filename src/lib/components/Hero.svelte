<script lang="ts">
  import { onMount } from "svelte";

  export let title: string;
  export let titleAccent;
  export let description: string;
  export let animationData;
  export let sClass: string;
  export let h1Class: string;
  let LottiePlayerHero;

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

  onMount(async () => {
    const module = await import("@lottiefiles/svelte-lottie-player");
    LottiePlayerHero = module.LottiePlayer;
  });
</script>

<div class="hero-container bg-primary-background z-0">
  <div
    class="container flex flex-col lg:flex-row justify-center items-center pt-16 {sClass}"
  >
    <div>
      <h1
        class="text-2xl md:text-4xl text-center lg:text-start text-white font-medium capitalize {h1Class}"
      >
        <span style="filter:drop-shadow(0 0 2px #0264D3)">
          {title}
          <br />
          {titleAccent[0].ignore}</span
        ><span class=" text-accent capitalize" style="filter:none"
          >{titleAccent[0].accent}</span
        >
      </h1>
      {#if description !== ""}
        <p
          class=" text-primary text-center lg:text-start text-xs md:text-sm leading-5 md:leading-7 pt-4"
        >
          {description}
        </p>
      {/if}
    </div>
    <div
      class="flex justify-center lottie w-48 lg:w-auto h-[14em] lg:h-auto mt-[-5em] lg:mt-0"
    >
      {#if LottiePlayerHero && animationData}
        <LottiePlayerHero
          src="/src/lib/assets/animations/{animationData[0].name}.json"
          autoplay={true}
          loop={true}
          controls={false}
          renderer="svg"
          background="transparent"
          width={animationData[0].width}
          height={animationData[0].height}
          {controlsLayout}
        />
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .hero-container {
    clip-path: ellipse(80% 90% at 50% 2%);
  }

  .lottie {
    transition: 0.8s all;
    animation: 5s fadeIn;
  }
</style>
