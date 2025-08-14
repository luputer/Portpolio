<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
  } from "lucide-svelte";

  let isVisible = false;
  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  let isSubmitting = false;
  let submitStatus = null; // 'success', 'error', or null

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m.saidibjm1@gmai.com",
      href: "mailto:m.saidibjm1@gmai.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 878-6573-1570",
      href: "tel:+62 878-6573-1570",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kalimantan, Indonesia",
      href: "https://maps.google.com/?q=San+Francisco,CA",
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = null;

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real application, you would submit to your backend or use a service like Formspree
      console.log("Form submitted:", formData);

      submitStatus = "success";
      formData = { name: "", email: "", subject: "", message: "" };
    } catch (error) {
      console.error("Form submission error:", error);
      submitStatus = "error";
    } finally {
      isSubmitting = false;

      // Clear status after 5 seconds
      setTimeout(() => {
        submitStatus = null;
      }, 5000);
    }
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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800">
  <div class="container mx-auto px-4">
    {#if isVisible}
      <div in:fade={{ duration: 800 }}>
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2
            in:fly={{ y: 30, duration: 800 }}
            class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Get In <span class="gradient-text">Touch</span>
          </h2>
          <p
            in:fly={{ y: 30, duration: 800, delay: 200 }}
            class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Ready to start your next project? Let's work together to create
            something amazing
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Contact Info -->
          <div in:fly={{ x: -50, duration: 800, delay: 400 }}>
            <div class="space-y-8">
              <div>
                <h3
                  class="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Let's Connect
                </h3>
                <p
                  class="text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
                >
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you're a company looking to hire, or
                  you're a fellow developer wanting to collaborate, I'd love to
                  hear from you.
                </p>
              </div>

              <!-- Contact Methods -->
              <div class="space-y-6">
                {#each contactInfo as info}
                  <a
                    href={info.href}
                    class="flex items-center space-x-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined}
                  >
                    <div
                      class="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300"
                    >
                      <svelte:component this={info.icon} size={20} />
                    </div>
                    <div>
                      <div class="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </div>
                      <div class="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </a>
                {/each}
              </div>

              <!-- Social CTA -->
              <div
                class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6"
              >
                <h4
                  class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Quick Response Guaranteed
                </h4>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  I typically respond to all inquiries within 24 hours. For
                  urgent matters, feel free to call directly.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div in:fly={{ x: 50, duration: 800, delay: 600 }}>
            <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
              <form on:submit={handleSubmit} class="space-y-6">
                <!-- Name & Email Row -->
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      bind:value={formData.name}
                      required
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      bind:value={formData.email}
                      required
                      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <!-- Subject -->
                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    bind:value={formData.subject}
                    required
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <!-- Message -->
                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    bind:value={formData.message}
                    required
                    rows="6"
                    class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                >
                  {#if isSubmitting}
                    <div
                      class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                    />
                    <span>Sending...</span>
                  {:else}
                    <Send
                      size={20}
                      class="group-hover:translate-x-1 transition-transform duration-200"
                    />
                    <span>Send Message</span>
                  {/if}
                </button>

                <!-- Status Messages -->
                {#if submitStatus === "success"}
                  <div
                    in:fade={{ duration: 300 }}
                    class="flex items-center space-x-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400"
                  >
                    <CheckCircle size={20} />
                    <span
                      >Thank you! Your message has been sent successfully.</span
                    >
                  </div>
                {/if}

                {#if submitStatus === "error"}
                  <div
                    in:fade={{ duration: 300 }}
                    class="flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span
                      >Sorry, there was an error sending your message. Please
                      try again.</span
                    >
                  </div>
                {/if}
              </form>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>
