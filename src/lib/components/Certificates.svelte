<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Award, Calendar, ExternalLink, Download, CheckCircle } from 'lucide-svelte';

  let isVisible = false;

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-2023-001',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Demonstrates expertise in designing distributed systems on AWS platform',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      verifyUrl: 'https://aws.amazon.com/verification',
      certificateUrl: '#'
    },
    {
      id: 2,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credentialId: 'GCP-PD-2023-002',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Certified in building scalable applications on Google Cloud Platform',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Microservices'],
      verifyUrl: 'https://cloud.google.com/certification',
      certificateUrl: '#'
    },
    {
      id: 3,
      title: 'Meta React Native Specialist',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-RN-2022-003',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced certification in React Native mobile app development',
      skills: ['React Native', 'Mobile Development', 'JavaScript', 'iOS/Android'],
      verifyUrl: 'https://developers.facebook.com/certification',
      certificateUrl: '#'
    },
    {
      id: 4,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'MDB-DEV-2022-004',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expertise in MongoDB database design and development',
      skills: ['MongoDB', 'Database Design', 'Aggregation', 'Performance'],
      verifyUrl: 'https://university.mongodb.com/certification',
      certificateUrl: '#'
    },
    {
      id: 5,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2021',
      credentialId: 'DCA-2021-005',
      image: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Containerization and orchestration expertise with Docker',
      skills: ['Docker', 'Containerization', 'DevOps', 'Orchestration'],
      verifyUrl: 'https://docker.com/certification',
      certificateUrl: '#'
    },
    {
      id: 6,
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2021',
      credentialId: 'CKA-2021-006',
      image: 'https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Advanced Kubernetes cluster administration and management',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Cloud Native'],
      verifyUrl: 'https://cncf.io/certification',
      certificateUrl: '#'
    }
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
      { threshold: 0.1 }
    );

    const section = document.getElementById('certificates');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="certificates" class="py-20 bg-white dark:bg-gray-900">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 in:fly={{ y: 30, duration: 800 }} class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span class="gradient-text">Certificates</span> & Achievements
          </h2>
          <p in:fly={{ y: 30, duration: 800, delay: 200 }} class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <!-- Certificates Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {#each certificates as certificate, index}
            <div 
              in:fly={{ y: 50, duration: 800, delay: 400 + (index * 100) }}
              class="group bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <!-- Certificate Image -->
              <div class="relative overflow-hidden h-48">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div class="absolute top-4 right-4">
                    <div class="p-2 bg-green-500 rounded-full">
                      <CheckCircle size={16} class="text-white" />
                    </div>
                  </div>
                  <div class="absolute bottom-4 left-4">
                    <span class="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                      <Calendar size={14} class="mr-1" />
                      {certificate.date}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Certificate Content -->
              <div class="p-6">
                <!-- Title and Issuer -->
                <div class="mb-4">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p class="text-primary-600 dark:text-primary-400 font-semibold">
                    {certificate.issuer}
                  </p>
                </div>

                <!-- Description -->
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {certificate.description}
                </p>

                <!-- Skills -->
                <div class="mb-4">
                  <div class="flex flex-wrap gap-2">
                    {#each certificate.skills as skill}
                      <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">
                        {skill}
                      </span>
                    {/each}
                  </div>
                </div>

                <!-- Credential ID -->
                <div class="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <div class="text-xs text-gray-500 dark:text-gray-400 mb-1">Credential ID</div>
                  <div class="text-sm font-mono text-gray-700 dark:text-gray-300">{certificate.credentialId}</div>
                </div>

                <!-- Actions -->
                <div class="flex items-center justify-between">
                  <a 
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 text-sm"
                  >
                    <ExternalLink size={14} />
                    <span>Verify</span>
                  </a>
                  <a 
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200 text-sm"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <!-- Summary Stats -->
        <div in:fly={{ y: 50, duration: 800, delay: 1000 }} class="mt-16">
          <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div class="flex items-center justify-center mb-3">
                  <Award class="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">6+</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">Professional Certificates</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">3</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">Cloud Platforms</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">100%</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">Verified Credentials</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2023</div>
                <div class="text-gray-600 dark:text-gray-400 text-sm">Latest Certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>