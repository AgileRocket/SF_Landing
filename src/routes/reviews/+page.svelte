<script>
  import Hero from "$lib/components/Hero.svelte";
  import { Card } from "flowbite-svelte";
  import { reviewsData, avatars } from "$lib/stores/reviewsDataStore";
  import {
    UserDoctorSolid,
    UserGearSolid,
    UserNurseSolid,
  } from "svelte-awesome-icons";

  export let reviews;
  $: reviews = $reviewsData;
</script>

<section>
  <Hero
    title={"don't just take our word for it..."}
    titleAccent={[{ ignore: "", accent: "" }]}
    description={"ScheduleForward clients consistently point out two things: Ease of use and time saved.  Check out some of our reviews below!"}
    animationData={[{ name: "Reviews", width: "450", height: "500" }]}
    sClass={"gap-20 lg:px-12"}
    h1Class={"lg:mt-[-2em]"}
  />
</section>

<div class="container flex flex-col gap-y-8 mb-12">
  <section>
    <Card padding="none" size="xl" class="grid md:grid-cols-2">
      {#each reviews as review}
        <figure
          class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e"
        >
          <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500">
            <h3 class="text-lg font-semibold text-gray-900">
              {review.highlight}
            </h3>
            <p class="my-4 font-light">
              "{review.quote}"
            </p>
          </blockquote>
          <figcaption
            class="flex justify-center items-center space-x-3 rtl:space-x-reverse"
          >
            {#if review.avatar === avatars.physician}
              <UserDoctorSolid size="40" color="#0264D3" />
            {:else if review.avatar === avatars.admin}
              <UserGearSolid size="40" color="#0264D3" />
            {:else if review.avatar === avatars.nurse}
              <UserNurseSolid size="40" color="#0264D3" />
            {/if}
            <div class="space-y-0.5 font-medium text-left">
              <div>{review.name}</div>
              <div class="text-sm font-light text-gray-500">
                {review.title}
              </div>
            </div>
          </figcaption>
        </figure>
      {/each}
    </Card>
  </section>
</div>
