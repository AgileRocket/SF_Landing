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

<div class="relative bg-white">
  <div
    class="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end"
  >
    <div
      class="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2"
    >
      <div class="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
        <img
          class="absolute inset-0 h-full w-full bg-gray-50 object-cover object-bottom"
          src="/src/lib/assets/graphics/algorithm.jpg"
          alt="AI Development"
        />
      </div>
    </div>
    <div class="px-6 lg:contents">
      <div
        class="mx-auto max-w-2xl pb-24 lg:pt-12 sm:pb-32 sm:pt-20 lg:ml-4 lg:mr-0 lg:w-full lg:max-w-xl lg:flex-none xl:w-1/2"
      >
        <div class="my-6">
          <div
            class="border border-white hover:border-accent rounded p-1 transition-all duration-200 w-fit"
          >
            <a
              class="flex items-center gap-x-4 text-accent text-sm font-semi-bold"
              href="/home/articles"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} />
              All Articles
            </a>
          </div>
        </div>
        <p class="text-base font-semibold leading-7 text-indigo-600">
          {d.title_text}
        </p>
        <h1
          class="mt-2 text-lg font-bold tracking-tight text-gray-900 lg:text-3xl"
        >
          {d.subtitle_text}
        </h1>
        <p class="mt-6 text-xl leading-8 text-gray-700">
          {d.introduction_text_bold}
        </p>
        <div
          class="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none"
        >
          <p>
            {d.introduction_text}
          </p>
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
  </div>
</div>
