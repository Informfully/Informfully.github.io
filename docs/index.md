---
outline: deep
---

![Informfully banner logo](img/logo_banner.png){width="700px"}

Welcome to [Informfully](https://informfully.ch/)! Informfully is an
open-source reproducibility platform for content distribution and
conducting user experiments.

This is the combined and official Informfully Documentation for all
[code repositories](https://github.com/orgs/Informfully/repositories).
For a tutorial on how to use Informfully, start with the
`install`{.interpreted-text role="doc"} section and the
`installation`{.interpreted-text role="ref"} instructions of the
project.

**Links and Resources:** [GitHub](https://github.com/orgs/Informfully)
\| [Website](https://informfully.ch) \| [X](https://x.com/informfully)
\| [DDIS@UZH](https://www.ifi.uzh.ch/en/ddis.html) \| [Google
Play](https://play.google.com/store/apps/details?id=ch.uzh.ifi.news) \|
[App Store](https://apps.apple.com/us/app/informfully/id1460234202)

::: info
There are two different ways of that you can use Informfully: 1) Use the
front end and back end deployed by the University of Zurich or 2) Deploy
the whole application on your own. The upcoming tutorial focuses on the
self-hosted deployment of Informfully. If you want to use the
Informfully Platform as a cloud service, hosted at the University of
Zurich, please reach out to us: <info@informfully.ch>
:::

## Overview

The Informfully platform allows you to push algorithmically curated
text, image, audio, and video content to users and automatically
generates a detailed log of their consumption history. It is a
domain-agnostic and platform-independent solution to fit your specific
needs. The platform was designed to accommodate different experiment
types through versatility, ease of use, and scalability. It features
three core components:

-   a front end for displaying and interacting with recommended items,
-   a back end for researchers to create and maintain user experiments,
    and
-   a simple JSON-based exchange format (JREX) for ranked item
    recommendations to interface with third-party services.

This documentation provides you with all the information you need to
successfully configure and deploy Informfully. It is structured as
follows:

-   **Getting Started** serves as an overall introduction, including how
    to install the codebase, create a development environment, and notes
    on the deployment.
-   **Running Experiments** provide an in-depth overview of how to use
    the Informfully platform to conduct user studies.
-   **Customizing Recommendaiton** provides a tutorial on how to connect
    Informfully with your recommender framework for forwarding
    personalized recommendations.
-   **Technical Documentation** provides the same insights for various
    technical aspects in order to customize and extend the platform.
-   **User Guides** provide tips and tricks for working with the
    codebase and useful links to tutorials (as this documentation is not
    a tutorial on how to use React Native and Meteor).

![Informfully app screenshots](img/informfully_assets/informfully_app_screens.png){width="700px"}

## Citation

If you use any Informfully code/repository in a scientific publication,
we ask you to cite the following papers:

-   [Informfully - Research Platform for Reproducible User
    Studies](https://www.researchgate.net/publication/383261885_Informfully_-_Research_Platform_for_Reproducible_User_Studies),
    Heitz *et al.*, Proceedings of the 18th ACM Conference on
    Recommender Systems, 2024.

``` console
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

``` console
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

``` console
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

## Support

You are welcome to contribute to the Informfully ecosystem and become a
part of the community. Feel free to:

-   fork any of the [Informfully
    repositories](https://github.com/Informfully/Documentation) and
-   make changes and create pull requests.

Please post your feature requests and bug reports in our [GitHub
issues](https://github.com/Informfully/Documentation/issues) section.

## License

Released under the [MIT
License](https://github.com/Informfully/Documentation/blob/main/LICENSE).
(Please note that the respective copyright licenses of third-party
libraries and dependencies apply.)

