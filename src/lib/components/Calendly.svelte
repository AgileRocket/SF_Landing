<script>
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  const initCalendlyWidget = () => {
    Calendly.initPopupWidget({
      url: "https://calendly.com/scheduleforward/sf-demo?hide_gdpr_banner=1&primary_color=0264d3",
    });
  };
</script>

<div>
  <link
    href="https://assets.calendly.com/assets/external/widget.css"
    rel="stylesheet"
  />
  <script
    src="https://assets.calendly.com/assets/external/widget.js"
    type="text/javascript"
    async
  ></script>
  <Button
    class="capitalize text-accent ring-transparent ring-2 hover:ring-accent transition-all flex-1"
    border
    on:click={initCalendlyWidget}
    >schedule a demo
    <ArrowRightOutline class="w-3.5 h-3.5 ms-2" />
  </Button>
</div>
