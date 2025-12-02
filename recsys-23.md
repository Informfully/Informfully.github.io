---
layout: home

hero:
  name: "Informfully"
  text: "@ RecSys '23"
  tagline: Your All-in-One Solution for User Studies
  image:
    light: /iphone-app.png
    dark: /iphone-app-dark.png
    alt: Informfully Logo
  actions:
    - theme: brand
      text: Contact us
      link: "mailto:info@informfully.ch"
    - theme: alt
      text: Download Informfully
      link: "/#download"

features:
  - title: 📊 Real-time monitoring
    details: Look at how your users rate and engage with the recommended content. All interactions can be monitored online and exported.
  - title: 🎥 Multimedia content
    details: Pictures, podcasts, videos, or a mix of everything! Informfully supports a wide range of content types that you can push to users at any time.
  - title: 📝 In-app surveys
    details: The app features a built-in survey tool that allows you to send questionnaires to the participants and personalized notifications. Evaluate the answers automatically and export them.
  - title: 🔬 Use it for your own research
    details: You can use Informfully for free in your own research. It can be custom-tailored to your preferences and experimental design.
markdownStyles: false
---

<div class="home-content vp-doc">

## Diversity for News Recommenders

Thank you very much for visiting our poster at RecSys '23. On this site, you find all information and documents related to our RecSys submission. You can also take a look at our Informfully news app. The app is part of ongoing research in the domain of media consumption and AI. You can get more information <a target="_blank" href="https://github.com/informfully">here.</a>

## Resources

<ResourceLinks :resources="recsys23" />

## Community

Thank you for your visit at RecSys '23! We are looking forward to your feedback and contributions. Feel free to contact us and join our community.

<Community />

</div>

<Footer />

<script setup>
import ResourceLinks from './components/ResourceLinks.vue'
import Community from './components/Community.vue'
import Footer from './.vitepress/theme/Footer.vue'

import recsys23 from './db/recsys23.json'
</script>

<style scoped>
.home-content {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 640px) {
    padding: 0 48px;
  }
  padding: 0 24px;
}

.home-content.first {
  margin-top: 50px;
}

.home-button {
  margin: 20px auto;
  text-align: center;
}

.home-button a {
  text-decoration: none;
}

.home-content img {
  margin: 20px auto;
  border-radius: 10px;
}
</style>
