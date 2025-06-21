<script lang="ts">
  import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-svelte';

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://github.com', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:john@example.com', icon: Mail, label: 'Email' }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'Contact' }
  ];

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<footer class="bg-gray-900 text-gray-300 relative">
  <!-- Back to top button -->
  <button
    on:click={scrollToTop}
    class="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
    aria-label="Back to top"
  >
    <ArrowUp size={20} />
  </button>

  <div class="container mx-auto px-4 py-12">
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Brand Section -->
      <div class="md:col-span-2">
        <div class="flex items-center space-x-2 mb-4">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            JD
          </div>
          <span class="text-2xl font-bold text-white">John Doe</span>
        </div>
        <p class="text-gray-400 leading-relaxed mb-6 max-w-md">
          Fullstack developer and mobile dev passionate about creating 
          scalable digital solutions. Let's build something amazing together.
        </p>
        
        <!-- Social Links -->
        <div class="flex space-x-4">
          {#each socialLinks as link}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-300"
              aria-label={link.label}
            >
              <svelte:component this={link.icon} size={20} />
            </a>
          {/each}
        </div>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-white font-semibold mb-4">Quick Links</h3>
        <ul class="space-y-2">
          {#each quickLinks as link}
            <li>
              <a
                href={link.href}
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Contact Info -->
      <div>
        <h3 class="text-white font-semibold mb-4">Get In Touch</h3>
        <div class="space-y-2 text-sm">
          <p class="text-gray-400">San Francisco, CA</p>
          <p class="text-gray-400">john@example.com</p>
          <p class="text-gray-400">+1 (555) 123-4567</p>
        </div>
        
        <div class="mt-6">
          <p class="text-sm text-gray-400 mb-2">Available for:</p>
          <div class="flex flex-wrap gap-2">
            <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Freelance</span>
            <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Full-time</span>
            <span class="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">Consulting</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
      <div class="flex items-center space-x-1 text-sm text-gray-400 mb-4 md:mb-0">
        <span>© {currentYear} John Doe. Made with</span>
        <Heart size={16} class="text-red-500 mx-1" />
        <span>using Svelte & Tailwind CSS</span>
      </div>
      
      <div class="text-sm text-gray-400">
        <span>All rights reserved.</span>
      </div>
    </div>
  </div>
</footer>