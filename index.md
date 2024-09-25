---
layout: home

hero:
  name: "Informfully"
  tagline: Your All-in-One Solution for User Studies
  image:
    src: /iphone-app.png
    alt: Informfully Logo
  actions:
    - theme: brand
      text: Contact us
      link: "mailto:info@informfully.ch"
    - theme: alt
      text: Download Informfully
      link: "#download"

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


## What Is Informfully?

Do you want to push news, videos, songs, or pictures to user panels and see how they react? We got you covered! Informfully is an all-in-one content delivery platform that allows you to set up your users studies within minutes. No coding required! Run it on Android, iOS, or in your browser. Give it a try and <a href="#download" class="smoothscroll">download it right now</a>!

Informfully is fully open-source. Become a member today!

<a href="https://github.com/Informfully">
  <i class="ri-github-fill"></i>
  Join Informfully on GitHub
</a>


## Free for Academia

As part of Informfully's committment to research, the services are offered for free to research institutions. Take a look at the projects below to see how Informfully was successfuly used in the past to support research.

## How does Informfully work?

</div>
<How />
<div class="home-content vp-doc">

## Media

<MediaLinks />

</div>

<DownloadCallToAction />

<div class="home-content vp-doc">

## Community

Thank you for choosing Informfully!
Access the code on GitHub and become part of our community. We’d love to hear your feedback and welcome any contributions. Don’t hesitate to reach out at [info@informfully.ch](mailto:info@informfully.ch).

<Community />


</div>

<Footer />

<script setup>
import Community from './components/Community.vue'
import MediaLinks from './components/MediaLinks.vue'
import DownloadCallToAction from './components/DownloadCallToAction.vue'
import How from './components/How.vue'
import Footer from './.vitepress/theme/Footer.vue'
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
