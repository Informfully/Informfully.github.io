# Recommender System

This overview outlines the [Informfully Recommenders](https://github.com/Informfully/Recommenders) repository. 
It can be used in combination with the Informfully Research Platform or in a stand-alone fashion.
Informfully Recommenders is an extension of [Cornac](https://github.com/PreferredAI/cornac).
And you can look at the [Tutorial Notebook](https://github.com/Informfully/Experiments/tree/main/experiments/recsys_2025) for hands-on examples of everything outlined here.

![uml/framework_extension_v4.2.png](uml/framework_extension_v4.2.png)

The diagram above shows the extended framework Informfully Recommenders provides.
It includes four dedicated stages: pre-processing, in-processing, post-processing, and evaluation.
Additionally, it features a save state manager that allows the results of any stage to be stored and loaded.
This allows for reusing existing data, e.g., applying different re-rankers to the same candidate list.
Please find below an outline of the individual components, along with a link to their dedicated wiki pages for further information.

## Pre-processing Stage

* [Data Loading](./loading.md)
* [Data Augmentation](./augmentation.md)

## In-processing Stage

* [Data Splitting](./splitting.md) 
* [Participatory Diversity](./participatory.md)
* [Deliberative Diversity](./deliberative.md)
* [Random Walks](./randomwalks.md)
* [Neural Baselines](./neural.md)

## Post-processing Stage

* [Re-rankers](./reranker.md)
* [User Simulator](./simulator.md)

## Evaluation Stage

* [Metrics](./metrics.md)
* [Visualization](./recommendations.md)
