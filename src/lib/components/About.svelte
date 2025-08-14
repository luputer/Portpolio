<!-- @format -->
<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { User, Award, Target, Heart } from "lucide-svelte";

  let isVisible = false;

  const stats = [
    { label: "Years Experience", value: "1+", icon: Award },
    { label: "Projects Completed", value: "5+", icon: Target },
    { label: "Happy Clients", value: "2+", icon: Heart },
    { label: "Technologies", value: "10+", icon: User },
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>
<section id="about" class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      {#if isVisible}
        <div in:fade={{ duration: 800 }}>
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2
              in:fly={{ y: 30, duration: 800 }}
              class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              About <span class="gradient-text">Me</span>
            </h2>
            <p
              in:fly={{ y: 30, duration: 800, delay: 200 }}
              class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Passionate about creating digital experiences that make a
              difference
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Left Content -->
            <div in:fly={{ x: -50, duration: 800, delay: 400 }}>
              <div class="space-y-6">
                <h3
                  class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
                >
                  Hi there! I'm Saidi
                </h3>

                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm a passionate fullstack Web developer and mobile dev with
                  over 1 years of experience creating scalable web applications
                  and mobile solutions. I love turning complex problems into
                  simple, beautiful and intuitive digital experiences.
                </p>

                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My journey in development started with a curiosity about how
                  technology can solve real-world problems. Since then, I've
                  worked with startups, agencies, and established companies to
                  deliver full-stack solutions and mobile apps that drive
                  results.
                </p>

                <div class="space-y-4">
                  <h4
                    class="text-xl font-semibold text-gray-900 dark:text-white"
                  >
                    What I Do:
                  </h4>
                  <ul class="space-y-2">
                    <li
                      class="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <div class="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      Frontend Development (React, Svelte, Vue, NextJS)
                    </li>
                    <li
                      class="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <div class="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      Backend Development (Node.js, Python, Go, php, Laravel)
                    </li>
                    <li
                      class="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <div class="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                      Mobile App Development (React Native, Flutter, java)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Right Content - Image & Stats -->
            <div in:fly={{ x: 50, duration: 800, delay: 600 }}>
              <div class="relative">
                <!-- Profile Image -->
                <div class="relative mb-8">
                  <div
                    class="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="John Doe at work"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <!-- Floating Card -->
                  <div
                    class="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div class="text-center">
                      <div
                        class="text-2xl font-bold text-primary-600 dark:text-primary-400"
                      >
                        100%
                      </div>
                      <div class="text-sm text-gray-600 dark:text-gray-400">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div
            in:fly={{ y: 50, duration: 800, delay: 800 }}
            class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {#each stats as stat, index}
              <div
                class="text-center p-6 rounded-xl glass hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300"
                >
                  <svelte:component this={stat.icon} size={24} />
                </div>
                <div
                  class="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {stat.value}
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
