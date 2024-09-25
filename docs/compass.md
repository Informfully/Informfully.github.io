---
title: Getting Started
---

The dababase used for Informfully is MongoDB. In this overview, we will
use [MongoDB Compass](https://www.mongodb.com/products/tools/compass) a
free GUI to explore the database and its collections. MongoDB Compass
allows you to query the back end. (In the context of MongoDB a \"table\"
in the database is referred to as \"collection\" and \"entry/tupel\" as
\"document\" instead.) In order to customize the recommendations shown
to users, you need to edit the following collections: `users`, `items`,
and `recommendations` as shown below.

Customization of recommendation list entries is done using three steps:
\* Create user account and retried thier IDs \* Scrape/upload items to
recommend and retrieve their IDs \* Create item recommendaitons lists
for users

# Retrieving User IDs

![Home screen](img/database_screenshots/collection_users.png){width="720px"}

`users` collection: The first step of creating recommendation requires
you to extract User IDs. In the user collection, you can filter by
e-mail address or creation date. This allows you to retrieve the
ObjectIDs of the users you have created on the [website
earlier](https://informfully.readthedocs.io/en/latest/items.html).
Export the users and save the IDs. We recommend you either create a
custom mapping between the back end IDs and your external recommender
framework or use the ObjectIDs in your framework as well.

# Retrieving Item IDs

![Home screen](img/database_screenshots/collection_items.png){width="720px"}

`items` collection: Retrieving item IDs is identical to user IDs. Simply
export the IDs you need from this collection. Make sure that both the
back end as well as your recommender framework use the same IDs when it
comes to generating user-specific recommendation lists.

:::: note
::: title
Note
:::

Please visit the [Item
Entries](https://informfully.readthedocs.io/en/latest/items.html) page
to see how you can create custom entries. We provide an example entry of
a news article. The collection, however, can accomodate any item and be
configured to match your use case.
::::

# Creating Recommendation Lists

![Home screen](img/database_screenshots/collection_recommendations.png){width="720px"}

`recommendationLists` collection: The last step in creating custom
recommendations is to bring together user IDs and item IDs. You can add
entries 1) manually via MongoDB compass, 2) import them via the
interface, or 3) add them using a script).

:::: note
::: title
Note
:::

Please visit the [Recommendation
List](https://informfully.readthedocs.io/en/latest/recommendations.html)
page to see how you can create entries with item and user IDs.
::::
