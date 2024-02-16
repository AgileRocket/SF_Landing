<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
</script>

<section>
  <Hero animation={"pricing"} />
</section>

<section class="container flex flex-col gap-[2em] px-4">
  <h2 class="text-center text-sm lg:text-lg font-medium md:px-[11.25em]">
    Our goal is to provide innovative and powerful<br /> scheduling solutions, all
    at an affordable rate.
  </h2>
  <div class="price-tags-container">
    <div class="price-tag">
      <p
        class="flex items-center text-[8rem] md:text-[9.375rem] font-semibold md:font-bold text-white leading-[1]"
      >
        <span class="text-[5rem] md:text-[6.25]">$</span>15
      </p>
      <div
        class="flex-grow lg:flex-grow-0 flex flex-col md:justify-between md:h-[8.5em] md:ms-[2.5em]"
      >
        <p class="text-white text-[1rem] md:text-[1.5rem]">
          USD per user, per month
        </p>
        <p class="text-[#25F168] text-[.8rem] md:text-[1rem] font-semibold">
          1 <span class="uppercase underline">month free</span> with annual billing
        </p>
        <button type="button" class="contact-sales-btn mt-auto"
          >contact sales</button
        >
      </div>
    </div>

    <div class="price-tag">
      <p
        class="flex items-center text-[8rem] md:text-[9.375rem] font-semibold md:font-bold text-white leading-[1]"
      >
        <span class="text-[5rem] md:text-[6.25]">$</span>10
      </p>
      <div
        class="flex-grow lg:flex-grow-0 flex flex-col md:justify-between md:h-[8.5em] md:ms-[2.5em]"
      >
        <p class="text-white text-[1rem] md:text-[1.5rem]">
          USD per user, per month
        </p>
        <p class="text-black text-[.8rem] md:text-[1rem] capitalize font-bold">
          educational + government
        </p>
        <button type="button" class="contact-sales-btn mt-auto"
          >contact sales</button
        >
      </div>
    </div>
    <div
      class="custom-tag flex flex-col md:flex-row justify-center items-center gap-5 w-full h-[14em]"
    >
      <div class="hidden md:block w-[27em] mt-[-1.5em]">
        <img
          src="/src/lib/assets/graphics/money_gears_graphic.svg"
          alt="Gears Graphic"
        />
      </div>
      <div class="flex flex-col items-center md:items-start gap-2">
        <h2 class="text-[2.1rem] text-white capitalize font-semibold">
          custom tailored
        </h2>
        <h3
          class="text-[1rem] text-white text-center md:text-start font-normal leading-[200%]"
        >
          Looking for a customized solution?<br />We got you covered!
        </h3>
        <button type="button" class="contact-sales-btn">contact sales</button>
      </div>
    </div>
  </div>
</section>

<section
  class="container md:w-[50em] bg-primary-lightest rounded-3xl py-8 px-6 my-[2.5em]"
>
  <Table noborder={true} divClass="transparent">
    <TableHead>
      <TableHeadCell
        ><h2 class="text-[1.4rem] md:text-[1.75rem] leading-4">
          What's Included?
        </h2>
        <br />
        <p class="text-[0.65rem] md:text-[1rem] md:font-normal">
          Just some of the incentivizing features we provide
        </p>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="text-[0.7rem]">
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >AI Schedule Builder<span class="checkmark"></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Drafts & Manual Schedule Builders<span class="checkmark"
          ></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >World class lottery system<span class="checkmark"
          ></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Smart Shift AI Generator (coming soon)<span class="checkmark"
          ></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Smart Calendar Syncing<span class="checkmark"></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Easy-to-use trades and shift splitting<span class="checkmark"
          ></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Data Analytics<span class="checkmark"></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Read-Only & Admin Users<span class="checkmark"></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Mobile App (coming soon)<span class="checkmark"
          ></span></TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell tdClass="flex justify-between"
          >Live support<span class="checkmark"></span></TableBodyCell
        >
      </TableBodyRow>
    </TableBody>
  </Table>
</section>

<style lang="postcss">
  .price-tags-container {
    @apply flex;
    @apply flex-col;
    @apply items-center;
    @apply gap-[2em];
  }
  .price-tag {
    @apply flex;
    @apply flex-col md:flex-row;
    @apply justify-around lg:justify-center;
    @apply md:items-center;
    @apply bg-primary;
    @apply py-4 ps-4 md:ps-8 lg:ps-0;
    @apply h-[17em] md:h-[15em];
    @apply w-[18em] md:w-[40em] lg:w-[50em];
    border-radius: 2em;
    clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%);
    background: linear-gradient(
      to right,
      rgba(65, 97, 158, 1) 0%,
      rgba(65, 97, 158, 0.85) 25%,
      rgba(65, 97, 158, 0.62) 75%,
      rgba(65, 97, 158, 0.4) 100%
    );
  }

  .custom-tag::before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    z-index: -1;
    @apply h-[14em];
    @apply bg-primary;
  }

  .contact-sales-btn {
    @apply px-3;
    @apply py-2;
    @apply bg-primary-medium;
    @apply text-[1.125rem];
    @apply rounded-2xl;
    @apply capitalize;
    @apply text-white;
    @apply w-40;
    @apply hover:bg-accent;
  }

  .checkmark {
    display: block;
    background: url("/src/lib/assets/icons/checkmark.png");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 1.5em;
    height: 1.5em;
  }
  :global(th) {
    padding: 0 !important;
  }

  :global(tbody) {
    display: flex;
    flex-direction: column;
    row-gap: 1.5em;
    margin-top: 3em;
  }
  :global(tr) {
    @apply text-[.75rem] md:text-[1rem] !important;
    font-weight: 500;
    background: transparent !important;
  }
</style>
