<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    ChevronDown,
    Github,
    Linkedin,
    Mail,
    Instagram,
  } from "lucide-svelte";

  let typewriterText = "";
  let showCursor = true;
  let mounted = false;

  const fullText = "Fullstack Developer & Mobile Dev";

  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  onMount(() => {
    mounted = true;

    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        typewriterText += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        // Blink cursor
        setInterval(() => {
          showCursor = !showCursor;
        }, 500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  });
</script>

<section
  id="home"
  class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
>
  <!-- Floating Particles -->
  <div class="floating-particles">
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
  </div>

  <!-- Background Pattern -->
  <div class="absolute inset-0 opacity-10">
    <svg class="w-full h-full" viewBox="0 0 100 100" fill="none">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="currentColor"
            stroke-width="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div class="container mx-auto px-4 text-center relative z-10">
    {#if mounted}
      <div in:fade={{ duration: 800, delay: 200 }}>
        <div class="mb-8 mt-6">
          <div class="w-32 h-32 mx-auto mb-8 relative">
            <div
              class="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 animate-pulse-glow"
            />
            <img
              src="gambar.png"
              alt="Profile"
              class="absolute inset-2 w-28 h-28 rounded-full  border-4 border-white dark:border-gray-800"
            />
          </div>
        </div>

        <h1
          in:fly={{ y: 30, duration: 800, delay: 400 }}
          class="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm <span class="gradient-text">Saidi</span>
        </h1>

        <div in:fly={{ y: 30, duration: 800, delay: 600 }} class="mb-8">
          <div
            class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium h-12 flex items-center justify-center"
          >
            <span class="mr-2">{typewriterText}</span>
            {#if showCursor}
              <span class="animate-pulse">|</span>
            {/if}
          </div>
        </div>

        <p
          in:fly={{ y: 30, duration: 800, delay: 800 }}
          class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build scalable web applications and mobile apps that deliver
          exceptional user experiences. Let's create something amazing together.
        </p>

        <div
          in:fly={{ y: 30, duration: 800, delay: 1000 }}
          class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            on:click={scrollToAbout}
            class="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2"
          >
            <span>About Me</span>
          </button>

          <a
            href="#projects"
            class="px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        <!-- Social Links -->
        <div
          in:fly={{ y: 30, duration: 800, delay: 1200 }}
          class="flex items-center justify-center space-x-6"
        >
          <a
            href="https://github.com/luputer"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-saidi-560a49294/"
            target="_blank"
            rel="noopener noreferrer"
            class="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:m.saidibjm1@gmail.com"
            class="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/mhmad_saidi/"
            class="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    {/if}
  </div>

  <!-- Scroll Indicator -->
  <div
    class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
  >
    <ChevronDown size={32} class="text-gray-400 dark:text-gray-500" />
  </div>
</section>
