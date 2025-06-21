<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let isVisible = false;
  let skillsAnimated = false;

  // SVG Icons as components
  const ReactIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26z"/></svg>`;
  
  const VueIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2,3L12,22L22,3H18.5L12,14.5L5.5,3H2Z"/></svg>`;
  
  const SvelteIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.354 21.125a2.847 2.847 0 0 0 4.539-.827 2.848 2.848 0 0 0-.981-3.896l-1.077-.781a.282.282 0 0 1-.095-.37.282.282 0 0 1 .37-.096l1.077.781a3.413 3.413 0 0 1 1.176 4.666 3.413 3.413 0 0 1-5.447.992 3.413 3.413 0 0 1-1.176-4.666.282.282 0 0 1 .37-.095.282.282 0 0 1 .095.37 2.847 2.847 0 0 0 .981 3.896l.168.026zm3.292-14.25a2.847 2.847 0 0 0-4.539.827 2.848 2.848 0 0 0 .981 3.896l1.077.781a.282.282 0 0 1 .095.37.282.282 0 0 1-.37.096l-1.077-.781a3.413 3.413 0 0 1-1.176-4.666 3.413 3.413 0 0 1 5.447-.992 3.413 3.413 0 0 1 1.176 4.666.282.282 0 0 1-.37.095.282.282 0 0 1-.095-.37 2.847 2.847 0 0 0-.981-3.896l-.168-.026z"/></svg>`;
  
  const NodeIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.32,6.61 3,7.12 3,7.66V16.34C3,16.88 3.32,17.39 3.78,17.65L11.22,21.95C11.45,22.08 11.73,22.15 12,22.15C12.27,22.15 12.55,22.08 12.78,21.95L20.22,17.65C20.68,17.39 21,16.88 21,16.34V7.66C21,7.12 20.68,6.61 20.22,6.35L12.78,2.05C12.55,1.92 12.27,1.85 12,1.85M12,3.05L19,7V17L12,21L5,17V7L12,3.05M8,7.5V9.5L12,11.5L16,9.5V7.5L12,9.5L8,7.5M8,10.5V12.5L12,14.5L16,12.5V10.5L12,12.5L8,10.5M8,13.5V15.5L12,17.5L16,15.5V13.5L12,15.5L8,13.5Z"/></svg>`;
  
  const PythonIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.89C7,14.31 8.28,13.04 9.86,13.04H15.11C16.69,13.04 17.96,11.76 17.96,10.18V7.5H19.14M9.86,1.5H14.14A2.86,2.86 0 0,1 17,4.36V8.11C17,9.69 15.72,10.96 14.14,10.96H8.89C7.31,10.96 6.04,12.24 6.04,13.82V16.5H4.86A2.86,2.86 0 0,1 2,13.64V9.86A2.86,2.86 0 0,1 4.86,7H12C12,6.61 11.68,6.04 11.29,6.04H7V4.36A2.86,2.86 0 0,1 9.86,1.5M12,2.25A0.75,0.75 0 0,0 11.25,3A0.75,0.75 0 0,0 12,3.75A0.75,0.75 0 0,0 12.75,3A0.75,0.75 0 0,0 12,2.25M12,20.25A0.75,0.75 0 0,0 11.25,21A0.75,0.75 0 0,0 12,21.75A0.75,0.75 0 0,0 12.75,21A0.75,0.75 0 0,0 12,20.25Z"/></svg>`;
  
  const TypeScriptIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z"/></svg>`;
  
  const TailwindIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12,6C9.33,6 7.67,7.33 7,10C8,8.67 9.17,8.17 10.5,8.5C11.26,8.67 11.81,9.24 12.41,9.86C13.39,10.87 14.56,12 17,12C19.67,12 21.33,10.67 22,8C21,9.33 19.83,9.83 18.5,9.5C17.74,9.33 17.19,8.76 16.59,8.14C15.61,7.13 14.44,6 12,6M7,12C4.33,12 2.67,13.33 2,16C3,14.67 4.17,14.17 5.5,14.5C6.26,14.67 6.81,15.24 7.41,15.86C8.39,16.87 9.56,18 12,18C14.67,18 16.33,16.67 17,14C16,15.33 14.83,15.83 13.5,15.5C12.74,15.33 12.19,14.76 11.59,14.14C10.61,13.13 9.44,12 7,12Z"/></svg>`;
  
  const PostgreSQLIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.128 0c-.624 0-1.22.047-1.804.125-2.375.32-2.734 1.406-2.734 3.156v2.344h5.468v.688H11.25c-1.59 0-2.984.953-3.422 2.781-.5 2.094-.516 3.406 0 5.594.375 1.625 1.281 2.812 2.875 2.812h1.859v-2.469c0-1.812 1.563-3.406 3.438-3.406h5.438c1.531 0 2.75-1.281 2.75-2.812V3.281C23.188 1.5 21.438 0 17.128 0zm-2.969 1.781c.594 0 1.063.5 1.063 1.094 0 .625-.469 1.125-1.063 1.125-.625 0-1.094-.5-1.094-1.125 0-.594.469-1.094 1.094-1.094z"/><path d="M6.844 7.5v2.344c0 1.844-1.562 3.406-3.437 3.406H-2.031c-1.531 0-2.75 1.281-2.75 2.812v5.532c0 1.781 1.75 3.281 6.062 3.281 3.969 0 6.094-1.5 6.094-3.281v-2.344H1.906v-.688h8.531c1.594 0 2.188-.953 2.75-2.812.594-1.906.563-3.75 0-5.594-.406-1.344-1.156-2.656-2.75-2.656H6.844zm-3.125 11.25c.625 0 1.094.5 1.094 1.125 0 .594-.469 1.094-1.094 1.094-.594 0-1.063-.5-1.063-1.094 0-.625.469-1.125 1.063-1.125z"/></svg>`;
  
  const MongoIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5,2C13,2 13.5,2 14,2.5C16,3 17,4 18,6C19,8 19,10 19,12C19,14 19,16 18,18C17,20 16,21 14,21.5C13.5,22 13,22 12.5,22C12,22 11.5,22 11,21.5C9,21 8,20 7,18C6,16 6,14 6,12C6,10 6,8 7,6C8,4 9,3 11,2.5C11.5,2 12,2 12.5,2M12.5,4C12,4 11.5,4 11,4.5C9.5,5 8.5,6 7.5,7.5C6.5,9 6.5,10.5 6.5,12C6.5,13.5 6.5,15 7.5,16.5C8.5,18 9.5,19 11,19.5C11.5,20 12,20 12.5,20C13,20 13.5,20 14,19.5C15.5,19 16.5,18 17.5,16.5C18.5,15 18.5,13.5 18.5,12C18.5,10.5 18.5,9 17.5,7.5C16.5,6 15.5,5 14,4.5C13.5,4 13,4 12.5,4Z"/></svg>`;
  
  const FigmaIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.5,2A2.5,2.5 0 0,0 5,4.5V7.5A2.5,2.5 0 0,0 7.5,10H10V7.5A2.5,2.5 0 0,0 7.5,5A2.5,2.5 0 0,0 5,7.5V10A2.5,2.5 0 0,0 7.5,12.5A2.5,2.5 0 0,0 10,10V7.5A2.5,2.5 0 0,0 7.5,5M16.5,2A2.5,2.5 0 0,0 14,4.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 19,4.5A2.5,2.5 0 0,0 16.5,2M7.5,12A2.5,2.5 0 0,0 5,14.5A2.5,2.5 0 0,0 7.5,17A2.5,2.5 0 0,0 10,14.5A2.5,2.5 0 0,0 7.5,12M16.5,12A2.5,2.5 0 0,0 14,14.5A2.5,2.5 0 0,0 16.5,17A2.5,2.5 0 0,0 19,14.5A2.5,2.5 0 0,0 16.5,12M7.5,17A2.5,2.5 0 0,0 5,19.5A2.5,2.5 0 0,0 7.5,22A2.5,2.5 0 0,0 10,19.5V17H7.5Z"/></svg>`;
  
  const DockerIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.81 10.25C21.75 10.21 21.68 10.19 21.61 10.19C21.46 10.19 21.32 10.25 21.22 10.35C21.12 10.45 21.06 10.59 21.06 10.74C21.06 10.89 21.12 11.03 21.22 11.13C21.32 11.23 21.46 11.29 21.61 11.29C21.68 11.29 21.75 11.27 21.81 11.23V10.25M13.59 10.67H12.57V11.7H13.59V10.67M13.59 9.65H12.57V10.67H13.59V9.65M15.64 10.67H14.61V11.7H15.64V10.67M11.54 10.67H10.52V11.7H11.54V10.67M9.5 10.67H8.47V11.7H9.5V10.67M11.54 9.65H10.52V10.67H11.54V9.65M17.68 10.67H16.66V11.7H17.68V10.67M11.54 8.63H10.52V9.65H11.54V8.63M7.45 10.67H6.42V11.7H7.45V10.67M21.81 8.75V9.77C21.75 9.73 21.68 9.71 21.61 9.71C21.46 9.71 21.32 9.77 21.22 9.87C21.12 9.97 21.06 10.11 21.06 10.26C21.06 10.41 21.12 10.55 21.22 10.65C21.32 10.75 21.46 10.81 21.61 10.81C21.68 10.81 21.75 10.79 21.81 10.75V8.75M5.4 10.67H4.38V11.7H5.4V10.67M21.81 7.73V8.75C21.75 8.71 21.68 8.69 21.61 8.69C21.46 8.69 21.32 8.75 21.22 8.85C21.12 8.95 21.06 9.09 21.06 9.24C21.06 9.39 21.12 9.53 21.22 9.63C21.32 9.73 21.46 9.79 21.61 9.79C21.68 9.79 21.75 9.77 21.81 9.73V7.73M3.35 10.67H2.33V11.7H3.35V10.67Z"/></svg>`;
  
  const GitIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C11.85,4.77 10.83,5.25 10.44,6.18C10.05,7.11 10.53,8.13 11.46,8.52C11.5,8.53 11.54,8.54 11.58,8.55L10.07,7.04L2.6,14.5L2.6,10.59Z"/></svg>`;

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'from-blue-500 to-blue-600', icon: ReactIcon },
        { name: 'Svelte', level: 85, color: 'from-orange-500 to-red-500', icon: SvelteIcon },
        { name: 'Vue.js', level: 80, color: 'from-green-500 to-green-600', icon: VueIcon },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700', icon: TypeScriptIcon },
        { name: 'Tailwind CSS', level: 92, color: 'from-teal-500 to-cyan-500', icon: TailwindIcon }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-600 to-green-700', icon: NodeIcon },
        { name: 'Python', level: 80, color: 'from-yellow-500 to-yellow-600', icon: PythonIcon },
        { name: 'PostgreSQL', level: 82, color: 'from-blue-700 to-indigo-700', icon: PostgreSQLIcon },
        { name: 'MongoDB', level: 78, color: 'from-green-700 to-green-800', icon: MongoIcon }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Docker', level: 75, color: 'from-blue-600 to-blue-700', icon: DockerIcon },
        { name: 'Git', level: 90, color: 'from-red-600 to-red-700', icon: GitIcon },
        { name: 'Figma', level: 88, color: 'from-purple-500 to-pink-500', icon: FigmaIcon }
      ]
    }
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            // Delay skill animations
            setTimeout(() => {
              skillsAnimated = true;
            }, 600);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 in:fly={{ y: 30, duration: 800 }} class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span class="gradient-text">Skills</span>
          </h2>
          <p in:fly={{ y: 30, duration: 800, delay: 200 }} class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <!-- Skills Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {#each skillCategories as category, categoryIndex}
            <div 
              in:fly={{ y: 50, duration: 800, delay: 400 + (categoryIndex * 100) }}
              class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <!-- Category Header -->
              <div class="mb-6">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              </div>

              <!-- Skills List -->
              <div class="space-y-6">
                {#each category.skills as skill, skillIndex}
                  <div class="flex items-center space-x-4">
                    <!-- Skill Icon -->
                    <div class="w-10 h-10 p-2 bg-gradient-to-br {skill.color} rounded-lg text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {@html skill.icon}
                    </div>
                    
                    <!-- Skill Info -->
                    <div class="flex-1">
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <!-- Progress Bar -->
                      <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          class="h-2 rounded-full bg-gradient-to-r {skill.color} transition-all duration-1000 ease-out"
                          style="width: {skillsAnimated ? skill.level : 0}%"
                        ></div>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>

        <!-- Additional Info -->
        <div in:fly={{ y: 50, duration: 800, delay: 1000 }} class="mt-16 text-center">
          <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p class="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Technology evolves rapidly, and so do I. I'm constantly learning new technologies, 
              experimenting with cutting-edge tools, and staying updated with industry best practices. 
              My passion for continuous learning ensures that I deliver modern, efficient solutions.
            </p>
            
            <!-- Learning Stats -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
                <div class="text-gray-600 dark:text-gray-400">Technologies Mastered</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">50+</div>
                <div class="text-gray-600 dark:text-gray-400">Courses Completed</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">5+</div>
                <div class="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>