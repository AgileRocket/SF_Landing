<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Calendly from "$lib/components/Calendly.svelte";
  import { Input, Label, Button, Checkbox, A } from "flowbite-svelte";
</script>

<div class="page-body">
  <section>
    <Hero
      title={"schedule a"}
      titleAccent={[{ ignore: "", accent: "live demo" }]}
      description={"We cannot wait to show you what we've built.  Let's get started today!"}
      animationData={[{ name: "Contact", width: "450", height: "500" }]}
      sClass={"gap-20 lg:px-12"}
      h1Class={"lg:mt-[-2em]"}
    />
  </section>

  <div class="container flex flex-col gap-y-8">
    <section class="flex flex-col justify-center items-center pb-10 px-1">
      <p class="text-sm md:text-lg text-center font-medium mb-3">
        Ready to schedule a live demo and discussion? Let's make it happen!
      </p>
      <Calendly />
      <p
        class="text-center text-xs mt-5 md:px-16 lg:px-48 xl:px-64 lg:my-8 text-gray-400"
      >
        You can also reach us at <a class="text-accent" href="tel:"
          >(877) 885-5590</a
        > to learn more, or fill out the form below.
      </p>
    </section>

    <section class="mb-10 md:w-[60%] mx-auto">
      <form>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Label for="name" class="mb-2">Name</Label>
            <Input type="text" id="name" placeholder="John Doe" required />
          </div>
          <div class="mb-6">
            <Label for="email" class="mb-2">Email address</Label>
            <Input
              type="email"
              id="email"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div>
            <Label for="company" class="mb-2">Company / Entity</Label>
            <Input
              type="text"
              id="company"
              placeholder="i.e. Hospital Name"
              required
            />
          </div>
          <div>
            <Label for="phone" class="mb-2">Phone number</Label>
            <Input
              type="tel"
              id="phone"
              placeholder="(123) 456-7890"
              pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
              required
            />
          </div>
          <div>
            <Label for="providers" class="mb-2 text-xs"
              >Number of providers to schedule.
            </Label>
            <Input type="number" id="providers" placeholder="" required />
          </div>
          <div>
            <Label for="locations" class="mb-2 text-xs"
              >Number of hospitals / locations staffed.
            </Label>
            <Input type="number" id="hospitals" placeholder="" required />
          </div>
        </div>

        <Checkbox class="mb-6 space-x-1 rtl:space-x-reverse" required>
          <p>
            I agree with the <a
              class="text-accent hover:underline"
              href="/home/contact">terms and conditions</a
            >.
          </p>
        </Checkbox>
        <Button type="submit" class="bg-accent">Submit</Button>
      </form>
    </section>
  </div>
</div>

<style>
  .page-body {
    animation: 2s fadeIn;
  }
</style>
