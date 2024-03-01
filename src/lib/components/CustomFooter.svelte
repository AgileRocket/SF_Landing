<script>
  import {
    Footer,
    FooterCopyright,
    FooterLinkGroup,
    FooterLink,
    FooterBrand,
    FooterIcon,
  } from "flowbite-svelte";
  import { TwitterSolid, YoutubeSolid } from "flowbite-svelte-icons";
</script>

<Footer footerType="socialmedia" class="overflow-hidden bg-primary-background">
  <div class="flex flex-col md:flex-row justify-evenly">
    <div class="flex justify-center items-center mb-4">
      <FooterBrand
        href="/"
        src="/src/lib/assets/graphics/sf_primary_logo.png"
        alt="ScheduleForward Logo"
        name="ScheduleForward"
        aClass="flex md:flex-col items-center xl:scale-150"
        spanClass="text-lg font-medium mt-2"
      />
    </div>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3 xl:gap-20">
      <div
        class="flex flex-col justify-center items-center text-center md:text-start"
      >
        <FooterLinkGroup>
          <FooterLink liClass="mb-4 uppercase text-accent" href="/home"
            >try it!</FooterLink
          >
          <FooterLink liClass="mb-4 uppercase text-accent" href="/home/pricing"
            >pricing</FooterLink
          >
          <FooterLink liClass="mb-4 uppercase text-accent" href="/home/contact"
            >talk to sales</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <div class="flex flex-col text-center md:text-start">
        <h2
          class="mb-6 font-semibold uppercase text-gray-900 text-center md:text-start"
        >
          learn more
        </h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4 uppercase" href="/videos"
            >video library</FooterLink
          >
          <FooterLink liClass="mb-4 uppercase" href="/reviews"
            >reviews</FooterLink
          >
          <FooterLink liClass="mb-4 uppercase" href="/articles"
            >articles</FooterLink
          >
        </FooterLinkGroup>
      </div>
      <div class="flex flex-col text-center">
        <h2
          class="mb-6 text-sm font-semibold uppercase text-gray-900 text-center md:text-start"
        >
          support
        </h2>
        <FooterLinkGroup class="text-center md:text-start">
          <FooterLink liClass="mb-4 uppercase" href="/about">about</FooterLink>
          <FooterLink liClass="mb-4 uppercase" href="/contact"
            >contact us</FooterLink
          >
          <!-- <FooterLink liClass="mb-4 uppercase" href="/">FAQs</FooterLink> -->
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-primary-medium sm:mx-auto lg:my-8" />
  <div class="flex flex-col items-center justify-center">
    <FooterCopyright
      href="/"
      by="ScheduleForward"
      spanClass="text-xs text-center"
    />
    <div class="flex flex-row mt-4 space-x-6 rtl:space-x-reverse">
      <FooterIcon href="/">
        <YoutubeSolid class="w-8 h-8 text-gray-500 hover:text-gray-900" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="w-8 h-8 text-gray-500 hover:text-gray-900" />
      </FooterIcon>
    </div>
  </div>
</Footer>
