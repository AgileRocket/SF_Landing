<script lang="ts">
  export let text: string = "";
  export let wordsPerParagraph: number = 50;

  const splitTextIntoParagraphs = (text: string, count: number) => {
    // Split the text into sentences
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
    const paragraphs: any[] = [];
    let paragraphWords: string[] = [];
    let wordCount = 0;

    sentences.forEach((sentence) => {
      const wordsInSentence = sentence.split(/\s+/).length;

      // If adding this sentence exceeds the word count, start a new paragraph
      if (wordCount + wordsInSentence > count && wordCount > 0) {
        paragraphs.push(paragraphWords.join(" "));
        paragraphWords = [];
        wordCount = 0;
      }

      paragraphWords.push(sentence.trim());
      wordCount += wordsInSentence;
    });

    // Add any remaining words as a paragraph
    if (paragraphWords.length > 0) {
      paragraphs.push(paragraphWords.join(" "));
    }

    return paragraphs;
  };

  $: paragraphs = splitTextIntoParagraphs(text, wordsPerParagraph);
</script>

{#each paragraphs as paragraph}
  <p class="mt-6 text-xs leading-6 text-gray-700">{paragraph}</p>
{/each}
