<script lang="ts">
  import { onMount } from "svelte";

  let LottiePlayer2;
  export let animation;

  onMount(async () => {
    const module = await import("@lottiefiles/svelte-lottie-player");
    LottiePlayer2 = module.LottiePlayer;
  });

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

<div class="hero-container bg-primary-medium z-0">
  <div class="flex justify-center pt-16 pb-24 md:py-20">
    <h1
      class="relative flex flex-col justify-center items-center text-2xl md:text-4xl text-center text-white font-medium capitalize"
    >
      simple. effective.<span class="text-accent">affordable.</span>
      <div
        class="lottie h-[100px] md:absolute md:right-[-2em] mt-[-2.5em] md:mt-[-1.75em] mb-2 md:mb-0"
      >
        {#if LottiePlayer2}
          <LottiePlayer2
            src="/src/lib/assets/animations/{animation}.json"
            autoplay={true}
            loop={true}
            controls={false}
            renderer="svg"
            background="transparent"
            width={200}
            height={200}
            {controlsLayout}
          />
        {/if}
      </div>
    </h1>
  </div>
</div>

<style>
  .hero-container {
    clip-path: ellipse(80% 90% at 50% 2%);
  }

  .lottie {
    transition: 0.8s all;
    animation: 5s fadeIn;
  }
</style>
