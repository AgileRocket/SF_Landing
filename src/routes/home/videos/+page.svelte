<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import { videosData, Categories } from "$lib/stores/videoDataStore";
  import {
    Button,
    Tabs,
    TabItem,
    Video,
    Dropdown,
    DropdownItem,
    Search,
  } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
  import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

  export let videos: any;
  $: videos = $videosData;

  var categories = Object.keys(Categories);
  categories = categories.filter((item) => item.length > 1);

  let selectedDropdownIndex = 0;
  let selectedDropdown = categories[selectedDropdownIndex];
  let dropdownOpen = false;

  let inputValue = "";
  let filteredSearchVideos: any = [];

  const handleDropdown: any = (e: {
    preventDefault: () => void;
    target: { value: number };
  }) => {
    dropdownOpen = false;
    e.preventDefault();
    selectedDropdownIndex = e.target.value;
    selectedDropdown = categories[selectedDropdownIndex];

    if (selectedDropdownIndex == Categories.All) {
      resetFilters();
      return filteredSearchVideos;
    } else {
      return (filteredSearchVideos = videos.filter(
        (video: { category: number }) => video.category == selectedDropdownIndex
      ));
    }
  };

  const handleInput = () => {
    resetFilters();
    return (filteredSearchVideos = videos.filter((video: { title: string }) =>
      video.title.toLowerCase().match(inputValue.toLowerCase())
    ));
  };

  function resetFilters() {
    filteredSearchVideos = [];
    selectedDropdownIndex = 0;
    selectedDropdown = categories[selectedDropdownIndex];
  }

  const clearSearch = () => {
    inputValue = "";
  };

  // Toggle selected feature button
  var isActive = 0;
  const toggleActive = (button: number) => {
    isActive = button;
  };
</script>

<div class="page-body">
  <section>
    <Hero
      title={"Lights, Camera,"}
      titleAccent={[{ ignore: "", accent: "Schedule!" }]}
      description={"Explore our on-demand video library."}
      animationData={[{ name: "Videos", width: "350", height: "400" }]}
      sClass={"gap-20 lg:px-12"}
      h1Class={"lg:mt-[-2em]"}
    />
  </section>

  <div class="inner-body container flex flex-col gap-12 mb-16">
    <Tabs
      style="pill"
      class="flex flex-col md:flex-row justify-between items-center gap-8 flex-nowrap"
      contentClass="'p-4 rounded-lg mt-4'"
    >
      <span class="flex items-center justify-start xs:gap-4">
        <TabItem
          on:click={() => {
            toggleActive(0);
          }}
          open
          activeClasses="bg-accent text-white rounded-xl w-[10em] p-2"
          inactiveClasses="bg-white text-inherit rounded-xl w-[10em] p-2"
        >
          <span slot="title">User Guides</span>
        </TabItem>
        <TabItem
          on:click={() => {
            toggleActive(1);
          }}
          activeClasses="bg-accent text-white rounded-xl w-[10em] p-2"
          inactiveClasses="bg-white text-inherit rounded-xl w-[10em] p-2"
        >
          <span slot="title">Admin Guides</span>
        </TabItem>
      </span>
      <form class="flex justify-end">
        <Button
          class="bg-primary rounded-e-none whitespace-nowrap border border-e-0 border-primary-700"
        >
          {selectedDropdown}
          <ChevronDownSolid class="w-2.5 h-2.5 ms-2.5" />
        </Button>
        <Dropdown bind:open={dropdownOpen}>
          {#each categories as category, index}
            <DropdownItem
              on:click={handleDropdown}
              class={selectedDropdown === category ? "underline" : ""}
              value={index}
            >
              {category}
            </DropdownItem>
          {/each}
        </Dropdown>

        <Search
          bind:value={inputValue}
          on:input={handleInput}
          on:click={resetFilters}
          size="md"
          class="rounded-none py-2.5 w-40 md:w-96"
          placeholder="Search All"
        />
        <button
          type="button"
          on:click={resetFilters}
          on:click={clearSearch}
          class="bg-white text-primary rounded-s-none whitespace-nowrap rounded-e-md active:bg-accent active:text-white px-4"
        >
          <span class="hidden md:inline">Reset</span>
          <FontAwesomeIcon
            class="md:hidden"
            icon={faArrowRotateLeft}
            color={"white"}
            size={"1x"}
          />
        </button>
      </form>
    </Tabs>

    <!-- VIDEOS -->
    <section
      class="grid grid-rows-1 md:grid-cols-1 lg:grid-cols-2 justify-center gap-8"
    >
      {#if filteredSearchVideos.length > 0}
        {#each filteredSearchVideos as video}
          {#if video.guide === isActive}
            <div class="article-card hidden" data-category={video.category}>
              <div class="col-span-6">
                <Video
                  class="w-full h-auto rounded-t-2xl"
                  src={video.url}
                  controls
                  poster={video.poster}
                  style="object-fit: fill"
                />
              </div>
              <a
                class="featured-info col-span-6 flex flex-col justify-evenly p-2"
                href="/home/articles"
              >
                <h2
                  class="mb-2 text-lg font-semibold tracking-tight text-gray-900"
                >
                  {video.title}
                </h2>
                <p class="mb-3 font-normal text-gray-700 text-sm leading-tight">
                  {video.description}
                </p>
              </a>
            </div>
          {/if}
        {/each}
      {:else}
        {#each videos as video}
          {#if video.guide === isActive}
            <div class="article-card" data-category={video.category}>
              <div class="col-span-6">
                <Video
                  class="w-full h-auto rounded-t-2xl"
                  src={video.url}
                  controls
                  poster={video.poster}
                  style="object-fit: fill"
                />
              </div>
              <a
                class="featured-info col-span-6 flex flex-col justify-evenly p-2"
                href="/home/articles"
              >
                <h2
                  class="mb-2 text-lg font-semibold tracking-tight text-gray-900"
                >
                  {video.title}
                </h2>
                <p class="mb-3 font-normal text-gray-700 text-sm leading-tight">
                  {video.description}
                </p>
              </a>
            </div>
          {/if}
        {/each}
      {/if}
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
    @apply grid;
    @apply grid-rows-1;
    @apply gap-4;
    @apply rounded-2xl;
    @apply bg-white;
    @apply overflow-hidden;
    @apply w-full;
    @apply md:p-4;
    box-shadow: -2px 10px 50px rgba(94, 94, 118, 0.5);
  }
</style>
