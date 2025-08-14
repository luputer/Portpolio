<script lang="ts">
  import Header from "./lib/components/Header.svelte";
  import Hero from "./lib/components/Hero.svelte";
  import About from "./lib/components/About.svelte";
  import Experience from "./lib/components/Experience.svelte";
  import Projects from "./lib/components/Projects.svelte";
  import Skills from "./lib/components/Skills.svelte";
  import Certificates from "./lib/components/Certificates.svelte";
  import CV from "./lib/components/CV.svelte";
  import Contact from "./lib/components/Contact.svelte";
  import Footer from "./lib/components/Footer.svelte";
</script>

<main class="overflow-x-hidden">
  <Header />
  <Hero />
  <About />
  <Experience />
  <Projects />
  <Skills />
  <!-- <Certificates /> -->
  <CV />
  <Contact />
  <Footer />
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
