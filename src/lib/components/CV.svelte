<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    Download,
    Eye,
    Mail,
    Phone,
    MapPin,
    Globe,
    Github,
    Linkedin,
  } from "lucide-svelte";

  let isVisible = false;

  const personalInfo = {
    name: "John Doe",
    title: "Fullstack Developer & Mobile Dev",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  };

  const summary = `Experienced Fullstack Developer and Mobile Developer with 2+ years of expertise in building scalable web applications and mobile solutions. Proficient in modern JavaScript frameworks, cloud technologies, and mobile development platforms. Passionate about creating user-centric digital experiences and solving complex technical challenges.`;

  const experience = [
    {
      position: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of enterprise web applications serving 1M+ users",
        "Architected microservices handling 10M+ API requests daily",
        "Mentored team of 5 junior developers",
        "Improved application performance by 40% through optimization",
      ],
    },
    {
      position: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "Remote",
      achievements: [
        "Built 15+ responsive web applications from scratch",
        "Implemented design system used across 10+ products",
        "Reduced bundle size by 35% through code optimization",
        "Achieved 98% cross-browser compatibility",
      ],
    },
    {
      position: "Web Developer",
      company: "Digital Agency Pro",
      period: "2019 - 2020",
      location: "New York, NY",
      achievements: [
        "Delivered 25+ client projects on time and within budget",
        "Improved average site loading speed by 50%",
        "Achieved 95+ Google PageSpeed scores for all projects",
        "Increased client retention rate by 30%",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
    },
  ];

  const skills = {
    Frontend: [
      "React",
      "Vue.js",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
    ],
    Backend: [
      "Node.js",
      "Python",
      "Express.js",
      "Django",
      "PostgreSQL",
      "MongoDB",
    ],
    Mobile: ["React Native", "Flutter", "iOS", "Android", "Expo"],
    "Cloud & DevOps": [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
    ],
    Tools: ["Figma", "Webpack", "Vite", "Jest", "Cypress", "Postman"],
  };

  function downloadCV() {
    // In a real application, this would trigger a PDF download
    alert("CV download would start here");
  }

  function previewCV() {
    // In a real application, this would open a PDF preview
    alert("CV preview would open here");
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

    const section = document.getElementById("cv");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="cv" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            in:fly={{ y: 30, duration: 800 }}
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My <span class="gradient-text">CV</span>
          </h2>
          <p
            in:fly={{ y: 30, duration: 800, delay: 200 }}
            class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Complete overview of my professional experience, skills, and
            achievements
          </p>

          <!-- Action Buttons -->
          <div
            in:fly={{ y: 30, duration: 800, delay: 400 }}
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              on:click={downloadCV}
              class="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Download size={20} />
              <span>Download CV</span>
            </button>
            <button
              on:click={previewCV}
              class="flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            >
              <Eye size={20} />
              <span>Preview CV</span>
            </button>
          </div>
        </div>

        <!-- CV Content -->
        <div class="max-w-4xl mx-auto">
          <div
            class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          >
            <!-- Header -->
            <div
              in:fly={{ y: 50, duration: 800, delay: 600 }}
              class="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-8"
            >
              <div
                class="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
              >
                <div
                  class="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20"
                >
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                    alt="Profile"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="text-center md:text-left flex-1">
                  <h1 class="text-3xl md:text-4xl font-bold mb-2">
                    {personalInfo.name}
                  </h1>
                  <p class="text-xl text-white/90 mb-4">{personalInfo.title}</p>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div
                      class="flex items-center justify-center md:justify-start space-x-2"
                    >
                      <Mail size={16} />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div
                      class="flex items-center justify-center md:justify-start space-x-2"
                    >
                      <Phone size={16} />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div
                      class="flex items-center justify-center md:justify-start space-x-2"
                    >
                      <MapPin size={16} />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div
                      class="flex items-center justify-center md:justify-start space-x-2"
                    >
                      <Globe size={16} />
                      <span>johndoe.dev</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-8 space-y-8">
              <!-- Summary -->
              <div in:fly={{ y: 50, duration: 800, delay: 800 }}>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Professional Summary
                </h3>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {summary}
                </p>
              </div>

              <!-- Experience -->
              <div in:fly={{ y: 50, duration: 800, delay: 1000 }}>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Work Experience
                </h3>
                <div class="space-y-6">
                  {#each experience as job}
                    <div class="border-l-4 border-primary-500 pl-6">
                      <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between mb-2"
                      >
                        <h4
                          class="text-xl font-semibold text-gray-900 dark:text-white"
                        >
                          {job.position}
                        </h4>
                        <span
                          class="text-primary-600 dark:text-primary-400 font-medium"
                          >{job.period}</span
                        >
                      </div>
                      <div
                        class="flex flex-col md:flex-row md:items-center md:justify-between mb-3"
                      >
                        <p
                          class="text-lg text-primary-600 dark:text-primary-400 font-medium"
                        >
                          {job.company}
                        </p>
                        <span class="text-gray-500 dark:text-gray-400"
                          >{job.location}</span
                        >
                      </div>
                      <ul class="space-y-1">
                        {#each job.achievements as achievement}
                          <li
                            class="flex items-start space-x-2 text-gray-600 dark:text-gray-400"
                          >
                            <div
                              class="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"
                            />
                            <span>{achievement}</span>
                          </li>
                        {/each}
                      </ul>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Education -->
              <div in:fly={{ y: 50, duration: 800, delay: 1200 }}>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Education
                </h3>
                {#each education as edu}
                  <div class="border-l-4 border-secondary-500 pl-6">
                    <div
                      class="flex flex-col md:flex-row md:items-center md:justify-between mb-2"
                    >
                      <h4
                        class="text-xl font-semibold text-gray-900 dark:text-white"
                      >
                        {edu.degree}
                      </h4>
                      <span
                        class="text-secondary-600 dark:text-secondary-400 font-medium"
                        >{edu.period}</span
                      >
                    </div>
                    <p
                      class="text-lg text-secondary-600 dark:text-secondary-400 font-medium mb-1"
                    >
                      {edu.school}
                    </p>
                    <p class="text-gray-600 dark:text-gray-400">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                {/each}
              </div>

              <!-- Skills -->
              <div in:fly={{ y: 50, duration: 800, delay: 1400 }}>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Technical Skills
                </h3>
                <div class="grid md:grid-cols-2 gap-6">
                  {#each Object.entries(skills) as [category, skillList]}
                    <div>
                      <h4
                        class="text-lg font-semibold text-gray-900 dark:text-white mb-3"
                      >
                        {category}
                      </h4>
                      <div class="flex flex-wrap gap-2">
                        {#each skillList as skill}
                          <span
                            class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        {/each}
                      </div>
                    </div>
                  {/each}
                </div>
              </div>

              <!-- Contact Links -->
              <div in:fly={{ y: 50, duration: 800, delay: 1600 }}>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                >
                  Connect With Me
                </h3>
                <div class="flex flex-wrap gap-4">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="mailto:{personalInfo.email}"
                    class="flex items-center space-x-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors duration-200"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
