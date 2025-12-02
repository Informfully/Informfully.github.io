---
layout: home

hero:
  name: "Informfully"
  text: "@ BDWRS '23"
  tagline: Nudged to Learn
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

## Exploring longitudinal nudging effects in a news aggregator

Thank you very much for visiting our poster at DBWRS 23. On this site, you find all information and documents related to a pre-registered two-week field experiment on the effects of deliberate choice architecture design on engagement with and learning from particular news. In this experiment, we leveraged the Informfully news app to create a news aggregator with daily scraped UK news articles. Within the app, we implemented what we call a position and a complexity nudge and tested their effects on the selection of, engagement with, and learning from environmental news. The position nudge aims to facilitate this through prominent article ranking, while the complexity nudge leverages ChatGPT to produce new versions of the original article that are easier to understand. Furthermore, we introduced news personalization based on explicit and implicit user feedback during the second week of the experiment. More information on the experimental setup can be found in our pre-registrations. The analysis of the experimental results is still ongoing. You can also take a look at our Informfully news app itself. The app is part of ongoing research in the domain of media consumption and AI. You can get more information <a target="_blank" href="https://www.informfully.ch">here.</a>

## Resources

<ResourceLinks :resources="bdwrs23" />

</div>

<DownloadCallToAction />

<div class="home-content vp-doc">

<div class="no-border-top">

## Community

Thank you for your visit! We are looking forward to your feedback and contributions. Feel free to contact us and join our community.

<Community />

</div>

</div>

<Footer />

<script setup>
import ResourceLinks from './components/ResourceLinks.vue'
import Community from './components/Community.vue'
import DownloadCallToAction from './components/DownloadCallToAction.vue'
import Footer from './.vitepress/theme/Footer.vue'

import bdwrs23 from './db/bdwrs23.json'
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

.no-border-top {
  h2 {
    border-top: none !important;
    margin-top: 15px;
  }
}
</style>
