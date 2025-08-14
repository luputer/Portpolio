<script lang="ts">
  import { onMount } from 'svelte';
  import { darkMode, activeSection, isMenuOpen } from '../stores';
  import { Menu, X, Sun, Moon } from 'lucide-svelte';

  let scrollY = 0;
  let isScrolled = false;

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    // { id: 'certificates', label: 'Certificates' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' }
  ];

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      $isMenuOpen = false;
    }
  }

  function toggleDarkMode() {
    $darkMode = !$darkMode;
    if ($darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      $darkMode = true;
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 50;

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certificates', 'cv', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        $activeSection = current;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'glass shadow-lg' : 'bg-transparent'}">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
          MS
        </div>
        <span class="text-xl font-bold text-gray-900 dark:text-white">Muhammad Saidi</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-6">
        {#each sections as section}
          <button
            on:click={() => scrollToSection(section.id)}
            class="relative text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
            class:text-primary-600={$activeSection === section.id}
            class:dark:text-primary-400={$activeSection === section.id}
          >
            {section.label}
            {#if $activeSection === section.id}
              <div class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            {/if}
          </button>
        {/each}
      </div>

      <!-- Theme Toggle & Mobile Menu -->
      <div class="flex items-center space-x-4">
        <button
          on:click={toggleDarkMode}
          class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {#if $darkMode}
            <Sun size={20} />
          {:else}
            <Moon size={20} />
          {/if}
        </button>

        <!-- Mobile menu button -->
        <button
          class="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
          on:click={() => $isMenuOpen = !$isMenuOpen}
          aria-label="Toggle menu"
        >
          {#if $isMenuOpen}
            <X size={24} />
          {:else}
            <Menu size={24} />
          {/if}
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    {#if $isMenuOpen}
      <div class="lg:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div class="flex flex-col space-y-4">
          {#each sections as section}
            <button
              on:click={() => scrollToSection(section.id)}
              class="text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-2"
              class:text-primary-600={$activeSection === section.id}
              class:dark:text-primary-400={$activeSection === section.id}
            >
              {section.label}
            </button>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
</header>