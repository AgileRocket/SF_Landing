<style>
  .parallax-box {
    position: relative;
    top: 4em;
    height: 100vh;
    z-index: 0;
  }
  .parallax-content {
    position: absolute;
    top:65%;
    z-index: 2;
  }
</style>

<div class="parallax-box mx-auto mt-4">
  <div class="fixed top-0 left-0 right-0 h-5/6 bg-cover bg-no-repeat z-negative" style="background-image: url('src/lib/assets/backgrounds/hero_background.png');"></div>
  <div class="fixed">
    <section id="hero" class="relative px-1 flex flex-col justify-center items-center gap-2">
      <div class="absolute right-0 w-full h-96 bg-cover bg-no-repeat opacity-75 z-0" style="background-image: url('src/lib/assets/graphics/calendar_graphic.svg'); bottom: -5em"></div>
      <span class="z-10">
        <h1 class="uppercase text-center text-lg font-semibold">simplify scheduling with advanced ai tools</h1>
        <p class="flex flex-col text-center text-xs font-light mt-4">Experience a Revolutionary Approach to Incentive-Based Scheduling, <span>Inspired by Physicians for Physicians.</span></p>
        <video class="w-full rounded-3xl my-6" poster="src/lib/assets/backgrounds/video_placeholder_image.png" controls>
          <source src="https://www.youtube.com/watch?v=f2DdUS9GXr4" type="video/mp4">
        </video>
        <div class="flex flex-col gap-2">
          <a class="flex justify-center bg-primary text-white px-4 py-2 rounded-3xl w-full text-center capitalize">get started</a>
          <a class="flex gap-2 justify-center text-accent font-medium px-4 py-2 rounded-3xl w-full text-center capitalize">schedule a tour<img src="src/lib/assets/icons/arrow_icon.svg"/></a>
        </div>
      </span>
    </section>
  </div>
  <main class="parallax-content left-0 right-0 bg-white z-10" style="height:100em;">
    <div class="absolute left-0 right-0 h-40 bg-cover bg-no-repeat z-0" style="margin-top:-3em; background-image: url('src/lib/assets/backgrounds/curved_background.svg');"></div>
    <section class="relative flex flex-col items-center z-10">
      <h2 class=" text-xl text-center">Scheduling is Complex.<br>Let’s simplify it.</h2>
    </section>
  </main>
  
</div>

