<!-- @format -->
<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-svelte";

  let isVisible = false;

  const experiences = [
    {
      id: 1,
      company: "HAFECT",
      position: "Web developer",
      location: "Barito kuala, Banjarmasin",
      period: "14 juli 2025 - Present",
      type: "Intern",
      description:
        "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      achievements: [
        "Increased application performance by 40% through optimization",
        "Led a team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Architected microservices handling 1M+ daily requests",
      ],
      technologies: ["laravel", "livewire", "mysql", "tailwindCss", "Docker"],
      companyUrl: "https://hafecs.id/",
    },
    {
      id: 2,
      company: "Dbs Coding Camp",
      position: "Full-Stack Cohort",
      location: "Remote",
      period: "feb 2025 - jun 2025",
      type: "Corse",  
      description:
        "Developed responsive web applications and mobile-first interfaces. Collaborated closely with design team to implement pixel-perfect UI components and smooth user experiences.",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Reduced bundle size by 35% through code optimization",
        "Implemented design system used across 10+ products",
        "Achieved 98% cross-browser compatibility",
      ],
      technologies: [
        "React.js",
        "Python",
        "supabase",
        "GCP",
        "TensorFlow",
        "Flask",
        "PostgreSQL",
      ],
      companyUrl: "https://startupxyz.example.com",
    },
    {
      id: 3,
      company: "Politeknik Negeri Banjarmasin",
      position: "Mobile Developer",
      location: "New York, NY",
      period: "2019 - 2020",
      type: "PBL",
      description:
        "Created custom websites and web applications for diverse clients ranging from small businesses to large corporations. Focused on performance optimization and SEO best practices.",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Improved average site loading speed by 50%",
        "Achieved 95+ Google PageSpeed scores for all projects",
        "Increased client retention rate by 30%",
      ],
      technologies: [
        "React Native",
        "Typscript",
        "Express Js",
        "MySQL",
        "Expo",
        "React Native Wind",
      ],
      companyUrl: "https://digitalagencypro.example.com",
    },
    {
      id: 4,
      company: "Kominpo VSGA",
      position: "Junior Mobile Developer",
      location: "Various",
      period: "2018 - 2019",
      type: "Freelance",
      description:
        "Provided web development services to small and medium businesses. Specialized in e-commerce solutions, business websites, and custom web applications.",
      achievements: [
        "Completed 20+ freelance projects successfully",
        "Built e-commerce platforms generating $500K+ in sales",
        "Maintained 5-star rating across all platforms",
        "Established long-term partnerships with 8 clients",
      ],
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Python",
        "Django",
        "Shopify",
      ],
      companyUrl: null,
    },
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

    const section = document.getElementById("experience");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>
<section id="experience" class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            in:fly={{ y: 30, duration: 800 }}
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Work <span class="gradient-text">Experience</span>
          </h2>
          <p
            in:fly={{ y: 30, duration: 800, delay: 200 }}
            class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <!-- Timeline -->
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div
              class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-secondary-500"
            />

            {#each experiences as experience, index}
              <div
                in:fly={{ y: 50, duration: 800, delay: 400 + index * 200 }}
                class="relative flex items-center mb-12 {index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'}"
              >
                <!-- Timeline Dot -->
                <div
                  class="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                />

                <!-- Content Card -->
                <div
                  class="ml-20 md:ml-0 md:w-5/12 {index % 2 === 0
                    ? 'md:mr-auto md:pr-8'
                    : 'md:ml-auto md:pl-8'}"
                >
                  <div
                    class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <!-- Company Header -->
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        <div
                          class="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300"
                        >
                          <Building2 size={20} />
                        </div>
                        <div>
                          <h3
                            class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                          >
                            {experience.position}
                          </h3>
                          <div class="flex items-center space-x-2">
                            <span
                              class="text-primary-600 dark:text-primary-400 font-semibold"
                              >{experience.company}</span
                            >
                            {#if experience.companyUrl}
                              <a
                                href={experience.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                              >
                                <ExternalLink size={14} />
                              </a>
                            {/if}
                          </div>
                        </div>
                      </div>
                      <span
                        class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-2 rounded-full"
                      >
                        {experience.type}
                      </span>
                    </div>

                    <!-- Period & Location -->
                    <div
                      class="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div class="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                      <div class="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <!-- Description -->
                    <p
                      class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                    >
                      {experience.description}
                    </p>

                    <!-- Key Achievements -->
                    <div class="mb-4">
                      <h4
                        class="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Key Achievements:
                      </h4>
                      <ul class="space-y-1">
                        {#each experience.achievements as achievement}
                          <li
                            class="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"
                            />
                            <span>{achievement}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>

                    <!-- Technologies -->
                    <div>
                      <h4
                        class="text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Technologies:
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        {#each experience.technologies as tech}
                          <span
                            class="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        {/each}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Summary Stats -->
        <div in:fly={{ y: 50, duration: 800, delay: 1200 }} class="mt-16">
          <div
            class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8"
          >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div
                  class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                >
                  5+
                </div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">
                  Years Experience
                </div>
              </div>
              <div>
                <div
                  class="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2"
                >
                  60+
                </div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">
                  Projects Completed
                </div>
              </div>
              <div>
                <div
                  class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2"
                >
                  4
                </div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">
                  Companies
                </div>
              </div>
              <div>
                <div
                  class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2"
                >
                  15+
                </div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
