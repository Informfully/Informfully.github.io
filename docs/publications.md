# Meteor Publications

Please see [Server Overview](./server.md) for more information on the back end.

## articleLikes

* Publishes all currently active likes and dislikes by a user for a particular article, sorted by the creation date
* Arguments:
  
  * articleId: ID of the article

## articleTotalLikes

* Publishes the total currently active likes and dislikes by the participants in an experiment for a particular article
* Arguments:

  * articleId: ID of the article
  * experimentId: Id of experiment

## articleViews

* Publishes viewing information (like how many times the article has been opened) by a user for a particular article
* Arguments:

  * articleId: ID of the article

## experiments

* Publishes experiments that the user owns (assuming that the user is 'admin')

## activeExperiment

* Publishes the experiment that the user takes part in (a user can take part in only one experiment)

## newsArticles

* Publishes news articles scoped to a given experiment (matching `experimentIds`), sorted by datePublished. Articles are no longer global by default — see the `experimentIds`/`visibility` fields on [newsArticles](./database.md#newsarticles).

## allArticlesAdmin

* Publishes, for the article-management admin interface, every article the current researcher can manage: articles attached to an experiment they own, plus their own not-yet-attached (`experimentIds: []`) uploads

## notification

* Publication to check for new articles. Only publishes a single object at a time with the timestamp of the most current recommended article. If there are no recommendations, the newest timestamp of the newest article is published.

## newsArticlesJoined

* Publishes the recommended articles for the user
* If there are no recommendations, returns the latest articles
* Reactive to changes regarding Reading List and Favourites List, i.e., it automatically updates their respective statuses
* Not reactive to newly added articles or recommendations!
* Arguments:

  * limit: Number of articles that should be returned
  * date: current date (variable not used in current implementation)

## newsArticlesInReadingList

* Publishes news articles in the Reading List of the user, fully reactive

## newsArticlesInArchive

* Publishes news articles in the Favourites List of the user, fully reactive

## furtherRecommendedNewsArticles

* Publishes news articles that have the same primaryCategory as the article with articleId
* Publishes either articles from the Recommendations collection (sorted according to prediction score) or from the newsArticles collection (sorted according to datePublished)
* Arguments:

  * limit: Number of articles that should be returned
  * primaryCategory: primaryCategory of the returned articles
  * articleId: the article for which the further recommendations are generated

## surveys

* Publishes surveys that are owned by the user

## surveys.unanswered

* Publishes the surveys that the current user has not answered yet

## userData

* Publishes own roles, experiments (the user is admin of), and fullName for the current user

## users.all

* Publishes all users that the current user 'owns' (all users that participate in experiments that the current (admin) user owns)

## userGroups

* Publishes, to a researcher, every user group belonging to an experiment they own (admin view)

## activeUserGroup

* Publishes the single user-group document a participant currently belongs to (matched via their `participatesIn`/`userGroup` fields), including its live `mode`. Implemented with a manual cursor `observe()` (rather than a plain reactive query) so a mode change made on the server — by hand or by the [scheduler](./scheduling.md) — propagates to the participant's running app within seconds.

## wrappedReport

* Publishes the current participant's own, currently visible [Wrapped](./wrapped.md) report (`isVisible: true`, most recent, `releases` field excluded). Never delivers an unreleased report.

## wrappedReports.forExperiment

* Publishes, to the owning researcher, every participant's Wrapped report for an experiment — used by the Wrapped researcher dashboard

## scheduledEvents

* Publishes the one-off and recurring-generated scheduled events for an experiment (admin-only), used by the scheduling admin UI to show upcoming/past events and their status
* Arguments:

  * experimentId

## recurringSchedules

* Publishes the recurring schedules defined for an experiment (admin-only)
* Arguments:

  * experimentId
