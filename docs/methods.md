# Meteor Methods

Please see [Server Overview](./server.md) for more information on the back end.

## answers

**answers.add**

* Adds a user's answers to a survey to the collection
* Input:

  * surveyId: ID of Survey
  * surveyAnswers: Array with answers to the survey

## archive

**archive.article.add**

* Add an article to the Favourites List of the current user
* Input:
  
  * articleId: ID of the article

**archive.article.remove**

* Remove an article from the Favourites List of the current user
* Input:
  
  * articleId: ID of the article

## articleLikes/articleTotalLikes

**articleLikes.insert**

* Adds a statement of the current user for a particular article
* Adds the likes to the total likes of all users participating in the experiment
* Input:
  
  * articleId: ID of the article
  * articleQuestionId: Id of statement
  * experimentId: Id of the experiment the user participates in

**articleLikes.remove**

* Removes a statement like from the current user for a particular article
* Subtracts the likes from the total likes of all users participating in the experiment
* Input:

  * articleId: ID of the article
  * articleQuestionId: Id of statement
  * experimentId: Id of the experiment the user participates in

**articleDislikes.insert**

* Adds a statement of dislike from the current user for a particular article
* Adds the dislike to the total dislikes of all users participating in the experiment
* Input:

  * articleId: ID of the article
  * articleQuestionId: Id of statement
  * experimentId: Id of the experiment the user participates in

**articleDislikes.remove**

* Removes a statement dislike from the current user for a particular article
* Subtracts the dislike from the total dislikes of all users participating in the experiment
* Input:

  * articleId: ID of the article
  * articleQuestionId: Id of statement
  * experimentId: Id of the experiment the user participates in

## articles

See [Experiment-Scoped Articles](./article-scoping.md) for the admin UI these methods back.

**articles.create**

* Creates a new article, scoped to the calling researcher (recorded as `createdBy`) and attached to `experimentId`
* Input:

  * title, lead, primaryCategory, datePublished, url, outlet, author, image, body, experimentId

**articles.fetchMetadata**

* Fetches and parses metadata (e.g. title, lead, image) for a given URL, to help pre-fill the article-creation form
* Input:

  * url: URL to fetch metadata for

**articles.setExperimentScope**

* Adds or removes an experiment from an article's `experimentIds`, so one stored article can serve several of a researcher's experiments without duplication
* Input:

  * articleId: ID of the article
  * experimentId: ID of the experiment to attach/detach
  * include: Boolean, whether the experiment should be added (`true`) or removed (`false`)

**articles.overrideContent**

* Used when a researcher uploads a URL that already exists in their own scope and chooses to replace the stored version; also attaches the article to a further experiment
* Input:

  * articleId, experimentId, title, lead, primaryCategory, datePublished, url, outlet, author, image, body

**newsArticles.bookmark.update**

* Toggles the *bookmark* state of an article for a user
* Cycles between **in readingList** and **not in readingList**
* Uses methods _readingList.article.remove_ and _readingList.article.add_
* Input:

  * articleId: Id of the article

**newsArticles.favourite.update**

* Toggles the *favourite* state of an article for a user
* Cycles between **in favouritesList** and **not in favouritesList**
* Uses methods _archive.article.remove_ and _archive.article.add_
* Input:

  * articleId: ID of the article

## articleViews

**articleViews.add**

* Adds an additional article view for the current user
* Input:

  * articleId: ID of the article

**articleViews.duration.update**

* Adds time to the view duration of a particular article for the current user
* Input:

  * articleId: ID of the article

**articleViews.maxScrolledContent.update**

* Updates how much a user has scrolled down in a particular article, keeping the max value
* Input:

  * articleId: ID of the article
  * maxScrolledContent: A value between 0 and 1, showing how much of the article content has been seen by the user

## experiments

**experiments.create**

* Creates a new experiment and assigns the new experiment to the user (who now owns the experiment)
* Input:

  * name: name of new experiment

**experiments.remove**

* Deletes and experiments from the database
* Input:

  * experimentId: ID of the experiment to remove

**experiments.update**

* Updates the name and launch status of an experiment
* Input:

  * experiment: experiment object

**experiments.launch**

* Launches an experiment (meaning some configurations cannot be changed anymore)
* Input:

  * experimentId: ID of the experiment

**experiments.likeSurvey.update**

* Updates the likeSurvey (now known as 'statements', shown after each article) of an experiment
* Input:

  * experimentId: ID of the experiment the likeSurvey belongs to
  * likeSurvey: likeSurvey object

**experiments.likeSurvey.remove**

* Removes the likeSurvey (statements) of an experiment
* Input:

  * experimentId: ID of the experiment the likeSurvey belongs to

**experiments.addUsers**

* Adds additional users to an experiment
* Input:

  * experimentId: ID of the experiment
  * amount: Number of new users
  * userGroup: Subgroup the users will be assigned

## userGroups

**userGroups.create**

* Creates a new user group within an experiment, with a live feed `mode`
* Input:

  * userGroup: name of the new group
  * experimentId: ID of the experiment
  * algorithm: recommender algorithm identifier (optional)
  * mode: `"Normal"` or `"TikTok"` (defaults to `"Normal"`)

**userGroups.update**

* Generic key/value update on a user group document — used, among other things, to change `mode` live while the app is running (see [Experiment Scheduling](./scheduling.md))
* Input:

  * userGroupId: ID of the user group
  * experimentId: ID of the experiment
  * keyValueObject: `{ key, value }` pair to set

**userGroups.remove**

* Removes a user group from an experiment
* Input:

  * userGroupName, experimentId

**userGroups.get**

* Returns the user groups belonging to an experiment
* Input:

  * experimentId

## schedules

See [Experiment Scheduling](./scheduling.md) for the full design (recurring-schedule pre-materialization, the once-a-minute executor, UTC/minutes-from-midnight convention).

**schedules.createEvent**

* Creates a one-off `scheduledEvents` document that switches a user group's mode at a given time
* Input:

  * userGroupId, experimentId, scheduledAt, mode

**schedules.createRecurring**

* Creates a `recurringSchedules` document and pre-generates all of its corresponding `scheduledEvents` documents up front
* Input:

  * userGroupId, experimentId, startDate, endDate, dailySegments (array of `{ startMinute, mode }`, minutes from midnight UTC)

**schedules.cancelEvent**

* Cancels a single pending scheduled event
* Input:

  * eventId

**schedules.cancelRecurring**

* Cancels a recurring schedule and cascades cancellation to its still-pending child events (executed events are preserved)
* Input:

  * scheduleId

**schedules.listEvents**

* Lists scheduled events for an experiment (admin-only)
* Input:

  * experimentId

## wrapped

See [Informfully Wrapped](./wrapped.md) for the full feature description (computed metrics, release lifecycle).

**wrapped.generate**

* Computes and stores a new report document for one participant
* Input:

  * userId, experimentId

**wrapped.generateForExperiment**

* Computes and stores a new report for every participant in an experiment
* Input:

  * experimentId

**wrapped.setVisible**

* Toggles visibility of a participant's latest report; turning visibility on appends a release entry (who/when/a snapshot of the features)
* Input:

  * userId, experimentId, isVisible

**wrapped.setVisibleForExperiment**

* Bulk visibility toggle for every participant's latest report in an experiment
* Input:

  * experimentId, isVisible

**wrapped.markShown**

* Idempotently records the participant's first-view timestamp
* Input:

  * reportId

## explanationViews

**explanationViews.insert**

* Adds a record in the database if a user has viewed the detailed recommendation explanations for an article
* Input:

  * articleId: ID of the article

## pageViews

**pageViews.add**

* Adds a page view of an article for a particular user
* Uses methods _articleViews.add_ and _articleViews.duration.update_
* Input:

  * page: name of page
  * previousPage: name of previous page
  * currentParameters: navigation parameters of the current page
  * prevParameters: navigation parameters of the previous page

## podcastAnalytics

**podcastAnalytics.insert**

* Adds a record to the database of the type of action a user has performed when using the Audio player (including MiniPlayer)
* Input:

  * articleId: ID of the article
  * action: type of action performed by the user
  * podcastTimestamp: time in the audio player at which the action was performed

## readingList

**readingList.article.add**

* Add an article to the Reading List of the current user
* Input:

  * articleId: ID of the article

**readingList.article.remove**

* Remove an article from the Reading List of the current user
* Input:

  * articleId: ID of the article

## signins

**signins.add**

* Add a sign-in log entry for the current user

## surveys

**surveys.create**

* Create a new survey
* Input:

  * surveyName: Name of new survey
  * experimentId: ID of the experiment the survey should belong to

**surveys.delete**

* Deletes a survey
* Input:

  * surveyId: Id of survey

**surveys.update**

* Updates the activity status of a particular survey
* Input:

  * surveyId: Id of survey
  * isActive: New active value

**surveys.questions.update**

* Updates the questions of a survey
* Input:

  * surveyId: Id of survey
  * surveyQuestions: Array of questions

## users (default Meteor collection)

**user.sendVerificationMail**

* Sends a verification email to the current user

**user.surveys.reset**

* Removes any answers to surveys for the current user

**user.remove**

* Deletes a specific user from the collection **users**
* Input:
  
  * userId: ID of the user

**user.savePushToken**

* Adds a notification token for the particular user in the database
* Input:
  
  * userId: ID of the user
  * pushToken: Notification token

## videoAnalytics

**videoAnalytics.insert**

* Adds a record to the database of the type of action a user has performed when using the Video player
* Input:
  
  * articleId: ID of the article
  * action: type of action performed by the user
  * videoTimestamp: time in the video player at which the action was performed

## apiAuth

**apiAuth.issueToken**

* Issues a short-lived signed JWT (HS256, 10-minute default lifetime, configurable via the `API_JWT_TTL_SECONDS` env var) for the current user, provided they hold the `admin` or `maintainer` role. This is the authentication bridge used by the [Researcher Data API](./researcher-api.md) — the two services never share a session, only this signed token.
* No input; uses the currently logged-in user (`this.userId`)
* Returns: `{ token, expiresIn }`
