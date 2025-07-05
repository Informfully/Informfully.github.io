---
layout: home

hero:
  name: "Informfully"
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

## Community

Thank you for choosing Informfully!
Access the code on GitHub and become part of our community. We’d love to hear your feedback and welcome any contributions. Don’t hesitate to reach out at [info@informfully.ch](mailto:info@informfully.ch).

<Community />

## How does Informfully work?

</div>
<How />

<DownloadCallToAction />
<div class="home-content vp-doc">

<div class="no-border-top">

## Free for Academia

As part of Informfully's committment to research, the services are offered for free to research institutions. Take a look at the projects below to see how Informfully was successfuly used in the past to support research.

</div>

## Media

<MediaLinks />

## Citation

If you use any Informfully code/repository in a scientific publication,
we ask you to cite the following papers:

-   [Informfully - Research Platform for Reproducible User
    Studies](https://www.researchgate.net/publication/383261885_Informfully_-_Research_Platform_for_Reproducible_User_Studies),
    Heitz *et al.*, Proceedings of the 18th ACM Conference on
    Recommender Systems, 2024.

```
@inproceedings{heitz2024informfully,
   title={Informfully - Research Platform for Reproducible User Studies},
   author={Heitz, Lucien and Croci, Julian A and Sachdeva, Madhav and Bernstein, Abraham},
   booktitle={Proceedings of the 18th ACM Conference on Recommender Systems},
   year={2024}
}
```

-   [Deliberative Diversity for News Recommendations -
    Operationalization and Experimental User
    Study](https://dl.acm.org/doi/10.1145/3604915.3608834), Heitz *et
    al.*, Proceedings of the 17th ACM Conference on Recommender Systems,
    813--819, 2023.

```
@inproceedings{heitz2023deliberative,
   title={Deliberative Diversity for News Recommendations: Operationalization and Experimental User Study},
   author={Heitz, Lucien and Lischka, Juliane A and Abdullah, Rana and Laugwitz, Laura and Meyer, Hendrik and Bernstein, Abraham},
   booktitle={Proceedings of the 17th ACM Conference on Recommender Systems},
   pages={813--819},
   year={2023}
}
```

-   [Benefits of Diverse News Recommendations for Democracy: A User
    Study](https://www.tandfonline.com/doi/full/10.1080/21670811.2021.2021804),
    Heitz *et al.*, Digital Journalism, 10(10): 1710--1730, 2022.

```
@article{heitz2022benefits,
   title={Benefits of diverse news recommendations for democracy: A user study},
   author={Heitz, Lucien and Lischka, Juliane A and Birrer, Alena and Paudel, Bibek and Tolmeijer, Suzanne and Laugwitz, Laura and Bernstein, Abraham},
   journal={Digital Journalism},
   volume={10},
   number={10},
   pages={1710--1730},
   year={2022},
   publisher={Taylor \& Francis}
}
```

## Contributing

You are welcome to contribute to the Informfully ecosystem and become a part of our community.
Feel free to:

- Fork any of the [Informfully repositories](https://github.com/Informfully/Documentation).
- Suggest new features in [Future Release](https://github.com/orgs/Informfully/projects/1).
- Make changes and create pull requests.

Please post your feature requests and bug reports in our [GitHub issues](https://github.com/Informfully/Documentation/issues) section.

## License

Released under the [MIT
License](https://github.com/Informfully/Documentation/blob/main/LICENSE).
(Please note that the respective copyright licenses of third-party
libraries and dependencies apply.)

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

.no-border-top {
  h2 {
    border-top: none !important;
    margin-top: 15px;
  }
}
</style>
