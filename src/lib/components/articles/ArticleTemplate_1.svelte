<script lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faArrowLeftLong,
    faCalendarCheck,
  } from "@fortawesome/free-solid-svg-icons";

  import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS

  import Splitter from "$lib/components/articles/Splitter.svelte";
  export let articleData: any;

  let d = articleData;
</script>

<div class="relative isolate overflow-hidden bg-white py-24 sm:py-32">
  <div
    class="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
    aria-hidden="true"
  >
    <div
      class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
      style="clip-path: polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"
    ></div>
  </div>
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="my-6">
      <div
        class="border border-white hover:border-accent rounded p-1 transition-all duration-200 w-fit"
      >
        <a
          class="flex items-center gap-x-4 text-accent text-sm font-semi-bold"
          href="/articles"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} />
          All Articles
        </a>
      </div>
    </div>
    <span class="flex flex-col lg:flex-row items-center gap-x-4">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <p
          class="text-lg font-semibold leading-8 tracking-tight text-indigo-600"
        >
          {d.title_text}
        </p>
        <h1
          class="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {d.subtitle_text}
        </h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          {d.introduction_text_bold}
        </p>
        <Splitter text={d.introduction_text} wordsPerParagraph={100} />
      </div>
      <div class="relative lg:order-last lg:col-span-5">
        <svg
          class="absolute -top-[20rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e87443c8-56e4-4c20-9111-55b82fa704e3"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0.5 0V200M200 0.5L0 0.499983" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
          />
        </svg>
        <figure class="border-l border-indigo-600 pl-8">
          <blockquote
            class="text-sm mt-4 lg:mt-0 lg:text-xl font-semibold leading-8 tracking-tight text-gray-900"
          >
            <p>
              “{d.quote_text}”
            </p>
          </blockquote>
          <figcaption class="flex mt-4 gap-x-4">
            <div class="text-sm leading-6">
              <div class="font-semibold text-gray-600">
                {d.quote_author_text}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </span>

    <div
      class="mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none"
    >
      <div class="text-base leading-7 text-gray-700 lg:col-span-7">
        {#if d.sections}
          {#each d.sections as section}
            {#if section}
              {#if section.title}
                <h2
                  class="mt-10 mb-2 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  {section.title}
                </h2>
              {/if}
              {#if section.subtitle}
                <h3>{section.subtitle}</h3>
              {/if}
              {#if section.section_title}
                <p class="mt-8 text-lg text-gray-800 font-medium">
                  {section.section_title}
                </p>
              {/if}
              <p class="mt-6 text-xs leading-6 text-gray-700">
                {#if section.text}
                  <Splitter text={section.text} wordsPerParagraph={150} />
                {/if}
              </p>
              {#if section.list_section}
                {#each section.list_section as ls}
                  <p class="my-6 text-xs leading-6 text-gray-700">
                    {ls.pre_text}
                  </p>
                  {#each ls.list_items as bullet}
                    <ul>
                      <li>
                        <FontAwesomeIcon
                          icon={faCalendarCheck}
                          class="text-accent me-2"
                        />
                        <strong class="font-semibold text-gray-900"
                          >{bullet.bullet_point}</strong
                        >
                        {#if bullet.sub_bullets}
                          <ul class="list-disc ml-16">
                            {#each bullet.sub_bullets as sb}
                              <li>{sb}</li>
                            {/each}
                          </ul>
                        {/if}
                      </li>
                    </ul>
                  {/each}
                  {#if ls.post_text}
                    <p class="mt-6 text-xs leading-6 text-gray-700">
                      {ls.post_text}
                    </p>
                  {/if}
                {/each}
              {/if}
              {#if section.backlink_text}
                <p class="mt-6 text-xs leading-6 text-gray-700">
                  {#each section.backlink_text as text}
                    {text.pre_text}<a
                      class="text-accent font-medium"
                      href={text.backlink[1]}>{text.backlink[0]}</a
                    >{text.post_text}
                  {/each}
                </p>
              {/if}
            {/if}
          {/each}
        {/if}
      </div>
    </div>
  </div>
</div>
