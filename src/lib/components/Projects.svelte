<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { ExternalLink, Github, X } from "lucide-svelte";

  let isVisible = false;
  let selectedProject = null;

  const projects = [
    {
      id: 1,
      title: "Tomatech",
      shortDescription: "Tomato Leaf Disease Detection Application",
      description:
        "A web application to detect diseases on tomato leaves using machine learning technology. This application helps farmers and users to identify diseases on tomato plants quickly and accurately.",
      image: "project/tomatech.jpg",
      gallery: [
        "project/tomatech2.png",
        "project/tomatech3.png",
        "project/tomatech4.png",
        "project/tomatech4.png",
      ],
      technologies: [
        "React",
        "Python",
        "TensorFlow",
        "Node-js",
        "Flask",
        "Tailwind CSS",
      ],
      liveUrl: "https://toma-tech.vercel.app/",
      githubUrl: "https://github.com/luputer/TomaTechs",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Simpadu",
      shortDescription: "menagament employee apps and attendance",
      description:
        "A feature-rich task management application with real-time collaboration, drag-and-drop functionality, team chat, file sharing, and progress tracking. Built with modern technologies for optimal performance.",
      image: "project/simpadu.png",
      gallery: [
        "project/simpadu2.png",
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "React-Native wind",
        "expres-js",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/luputer/Simpadu_Mobile",
      category: "Mobile",
    },
    {
      id: 3,
      title: "Portfolio Website",
      shortDescription: "Responsive portfolio with modern animations",
      description:
        "A stunning portfolio website showcasing creative work with smooth animations, responsive design, and optimized performance. Features include project galleries, contact forms, and social media integration.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      technologies: ["Svelte", "Typscript", "Tailwind CSS"],
      liveUrl: "https://saidiportpolio.vercel.app/",
      githubUrl: "https://github.com/johndoe/portfolio",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      shortDescription: "Real-time weather tracking application",
      description:
        "An intuitive weather dashboard providing real-time weather data, forecasts, and weather maps. Features location-based weather, weather alerts, and beautiful data visualizations.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1405870/pexels-photo-1405870.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      technologies: ["React", "D3.js", "Weather API", "Chart.js", "PWA"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/weather",
      category: "Web App",
    },
    {
      id: 5,
      title: "Social Media App",
      shortDescription: "Modern social networking platform",
      description:
        "A comprehensive social media platform with user profiles, real-time messaging, photo sharing, stories, and advanced privacy controls. Built for scalability and performance.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/social",
      category: "Web Development",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      shortDescription: "Mobile-first fitness and health app",
      description:
        "A comprehensive fitness tracking application with workout planning, progress tracking, nutrition logging, and social features. Includes integration with wearable devices and health APIs.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "HealthKit",
        "Firebase",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/fitness",
      category: "Mobile App",
    },
  ];

  function openProject(project) {
    selectedProject = project;
    document.body.style.overflow = "hidden";
  }

  function closeProject() {
    selectedProject = null;
    document.body.style.overflow = "auto";
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            in:fly={{ y: 30, duration: 800 }}
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span class="gradient-text">Projects</span>
          </h2>
          <p
            in:fly={{ y: 30, duration: 800, delay: 200 }}
            class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each projects as project, index}
            <div
              in:fly={{ y: 50, duration: 800, delay: 400 + index * 100 }}
              class="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
              on:click={() => openProject(project)}
              role="button"
              tabindex="0"
              on:keydown={(e) => e.key === "Enter" && openProject(project)}
            >
              <!-- Project Image -->
              <div class="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="absolute bottom-4 left-4 right-4">
                    <span
                      class="inline-block px-3 py-1 bg-primary-500 text-white text-sm rounded-full"
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Project Content -->
              <div class="p-6">
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                >
                  {project.title}
                </h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies.slice(0, 3) as tech}
                    <span
                      class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  {/each}
                  {#if project.technologies.length > 3}
                    <span
                      class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      +{project.technologies.length - 3} more
                    </span>
                  {/if}
                </div>

                <!-- Links -->
                <div class="flex items-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                    on:click|stopPropagation
                  >
                    <ExternalLink size={16} />
                    <span class="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    on:click|stopPropagation
                  >
                    <Github size={16} />
                    <span class="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</section>

<!-- Project Modal -->
{#if selectedProject}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 200 }}
    on:click={closeProject}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      on:click|stopPropagation
      in:fly={{ y: 50, duration: 300 }}
    >
      <!-- Modal Header -->
      <div
        class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between"
      >
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
          {selectedProject.title}
        </h3>
        <button
          on:click={closeProject}
          class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
        >
          <X size={24} />
        </button>
      </div>

      <!-- Modal Content -->
      <div class="p-6">
        <!-- Gallery -->
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          {#each selectedProject.gallery as image, index}
            <img
              src={image}
              alt="{selectedProject.title} screenshot {index + 1}"
              class="w-full h-48 object-cover rounded-lg"
            />
          {/each}
        </div>

        <!-- Description -->
        <div class="mb-6">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            About This Project
          </h4>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {selectedProject.description}
          </p>
        </div>

        <!-- Technologies -->
        <div class="mb-6">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Technologies Used
          </h4>
          <div class="flex flex-wrap gap-2">
            {#each selectedProject.technologies as tech}
              <span
                class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
              >
                {tech}
              </span>
            {/each}
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink size={20} />
            <span>View Live Demo</span>
          </a>
          <a
            href={selectedProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Github size={20} />
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}
