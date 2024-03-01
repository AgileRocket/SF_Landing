<script lang="ts">
  import { page } from "$app/stores";
  import DefaultArticleTemplate from "$lib/components/articles/ArticleTemplate_4.svelte";
  import { onMount } from "svelte";

  let articleData: any;
  let DynamicArticleTemplate: any;
  let totalArticleTemplates = 4;

  async function loadData(params: any) {
    const articleName = params.slug;
    const index = articleName.indexOf("_");
    const number = articleName.substring(index + 1);
    let articleFile = articleName + ".json";

    var tempArticleData = {};

    // Forces article number to adhere to the corresponding article template of 1,2,3, or 4.
    let articleNumber = ((number - 1) % totalArticleTemplates) + 1;

    const response = await fetch(`/${articleFile}`);
    if (response.ok) {
      tempArticleData = await response.json();
    } else {
      console.log("====================================");
      console.log("FAILED TO LOAD JSON DATA");
      console.log("====================================");
    }

    switch (articleNumber) {
      case 1:
        import("$lib/components/articles/ArticleTemplate_1.svelte").then(
          (module) => {
            DynamicArticleTemplate = module.default;
          }
        );
        break;
      case 2:
        import("$lib/components/articles/ArticleTemplate_2.svelte").then(
          (module) => {
            DynamicArticleTemplate = module.default;
          }
        );
        break;
      case 3:
        import("$lib/components/articles/ArticleTemplate_3.svelte").then(
          (module) => {
            DynamicArticleTemplate = module.default;
          }
        );
        break;
      default:
        DynamicArticleTemplate = DefaultArticleTemplate;
        break;
    }

    articleData = tempArticleData;
  }
  onMount(() => {
    loadData($page.params);
  });
</script>

{#if articleData}
  <section>
    <svelte:component this={DynamicArticleTemplate} {articleData} />
  </section>
{/if}

<style lang="postcss">
  section {
    animation: 2s fadeIn;
  }
</style>
