# Database Collections

Overview of all document collections (database tables) that exist.
They can be accessed via MongoDB to run queries for recommender frameworks.
All collections marked with a \*-symbol collect data through the user's interactions with the app.

In the examples given below, Informfully is used as a news recommendation app.
Out of consistency (i.e., to be consistent with the use case of the other parts of the documentation), `article` is used instead of `items`.
For example, this overview uses `articleId` as a key attribute.
If Informfully is used in another capacity, all records labelled `articleId` can be simply renamed to `itemId`.

::: info

Please visit the [Informfully Datasets Repository](https://github.com/Informfully/Datasets).
For an example of the quality of the data once it is exported and the corresponding [Dataset Documentation](./datasets.md).
And read the [MongoDB Compass Tutorial](./compass.md) for instructions on how to interface/connect with the database in the back end.

:::

## answers*

**Description** Collects the survey results of all users.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `surveyId` | String | ID of survey. |
| `userId` | String | ID of user. |
| `answers` | Array of Objects | Answers of the user to all questions in the survey. |
| `createdAt` | Date | Time at which the data record was created. |

An example of what the answer field could look like is shown below:

```json

    "answers":[
        {
            "questionId": "dbEZHPsNryzY24vgP",
            "questionText": "Soll der Staat Menschen in Armut stärker unterstützen (Ausbau der Sozialhilfe)?",
            "selections": [{
                "_id": "29NqGpYwaNwAQhTZw",
                "text": "Eher ja",
                "value": 0.75
            }]
        },
    ...
    ]

```

## archive*

**Description** Collects whether an article has been archived and whether it is a part of the user's favourites list.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `articlePublishedDate` | Date | Date the article was published. |
| `createdAt` | Date | Time at which the data record was created. |
| `removedAt` | Date | Time at which the data record was removed. |

## articleLikes*

**Description** Collects the like/dislike status (current and historical) of the statements after an article.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `articleQuestionId` | String | ID of statement, comes from the objects in the answers array of the `likeSurvey`-field of an experiment's collection data record. |
| `articleAnswer` | Integer | Can be either 1 or -1, 1 stands for a Like, and -1 stands for a Dislike. |
| `createdAt` | Date | Time at which the data record was created. |
| `removedAt` | Date | Time at which the data record was removed. |

## articleTotalLikes*

**Description** The collection tracks the total likes/dislikes of users in an experiment.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `experimentId` | String | ID of experiment. |
| `counts` | String | Contains the total likes/dislikes for each statement. For more information about what the array looks like, see below. |
| `questions` | Date | Contains the IDs of statements for which at least one like/dislike has been given. |

An example of what the answer field could look like is shown below:

```json

    "counts": [
        {
            "articleQuestionId": "u9CqoCRqG7LmiaKF3",
            "countLikes": 5,
            "countDislikes": 1,
        },
        {
            "articleQuestionId": "br7CRMr3YeZdRedDd",
            "countLikes": 0,
            "countDislikes": 2,
        }
    ]

```

## articleViews*

**Description** Contains various information about all articles a user has accessed.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `articlePublishedDate` | Date | Date the article was published (referred to as `dateScraped` of the article). |
| `duration` | Integer | Duration in ms for which the article was open. |
| `maxScrolledContent` | Double | Shows how much the user has seen from the article's content; can be between 0 and 1; a 0 indicates that the user has not scrolled down yet. |
| `updatedAt` | Date | Date on which the article was last accessed, in case it has been opened multiple times. |
| `views` | Integer | Number of times the article has been viewed by this user. |
| `createdAt` | Date | Time at which the data record was created. |

## experiments

**Description** The `experiments` collection contains information(`_id`, `name`, etc.) about these experiments and surveys set by the admin.
The information can be modified on the `Information` page, while `likeSurvey` can be set on the `Feedback` page.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `name` | String | Name of the experiment, which is first set at the creation of the experiment. |
| `adminName` | String | Name of the admin of this experiment; by default, it is the string before `@` of the creator's email. |
| `contactInfo` | String | Contact information of the admin of this experiment; by default, it is the creator's email. |
| `description` | String | Text description of the experiments. |
| `urlPP` | String | URL to the Privacy Policy. |
| `urlTC` | String | URL to the Terms and Conditions. |
| `testingPhase` | Boolean | A flag that indicates whether the experiment has launched or not. A true value means that the experiment has not been launched yet. Once an experiment is launched, it cannot be returned to the design phase; no additional users can be added, survey questions cannot be edited, and statements in the Feedback surveys tab cannot be modified. |
| `likeSurvey` | Object | This field contains the statements that are shown after each article, and users can like or dislike them. For more information about the object's appearance, see below. |
| `feedbackEmail` | String | E-mail, which is shown in the mobile app, allows users to contact the researchers responsible for conducting the experiment in case of questions. |
| `explanationTagsDef` | Object | Contains objects that define the explanation tags used in the experiment. For more information about the object's appearance, see below. |
| `maxNrExplanationTags` | Integer | Limits the number of explanation tags that can be shown per article. Set to 0 in case you want to disable the use of explanation tags for the experiment. |
| `maxCharacterExplanationTagShort` | Integer | Limits the number of characters that are shown inside the explanation tags of each article preview. |
| `maxNrFurtherRecArticles` | Integer | Limits the number of articles that are recommended at the end of the `Article` page/screen. Set to 0 to disable those recommendations. |
| `totalLikesDislikesEnabled` | Boolean | Controls whether the total likes/dislikes are shown on the Article page/screen. Set to False to hide the total likes/dislikes. |
| `previewTitleLineHeight` | Integer | Controls the number of lines that are used for the title of an article on the small article previews. It can be increased up to 3 in case that `maxNrExplanationTags` is set to 0. |

An example of what the likeSurvey field could look like is shown below:

```json

    "likeSurvey": {
        "question": "Wieso mögen Sie den Artikel nicht?",
        "answers": [
            {
                "_id": "u9CqoCRqG7LmiaKF3",
                "text": "Ich stimme den Aussagen des Artikels nicht zu.",
                "value": 0
            },
            {
                "_id": "br7CRMr3YeZdRedDd",
                "text": "Ich mag den Schreibstil nicht.",
                "value": 0
            }
        ]
    }

```

An example of what the explanationTagsDef field could look like is shown below:

```json

    "explanationTagsDef": {
        "60feefd58bd1b5012ad6e689": {
            "_id": "60feefd58bd1b5012ad6e689",
            "textShort": "Int",
            "textLong": "Interests",
            "textColorLight": "#FFFFFF",
            "textColorDark": "#FFFFFF",
            "backgroundColorLight": "#44546A",
            "backgroundColorDark": "#44546A",
            "detailedExplanation": "Lorem ipsum dolor sit amet ..."
        },
        ...
    }

```

## explanationViews*

**Description** Whenever a user views the detailed recommendation explanations for an article, a record is created in the collection.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `createdAt` | Date | Time at which the data record was created. |

## explanations

**Description** Contains the recommendation explanation tags for each article and user.
See [Explainable Recommendations](https://github.com/Informfully/Explanations) for how explanations are shown inside the app.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `explanationTagsId` | Array of Strings | Contains the IDs of the explanation tags, which will be shown for this article and user. The possible explanation tag IDs are defined in the field `explanationTagsDef`. The array can also be empty. |

## newsArticles

**Description** Contains all the news articles that have been scraped and added to the database.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of article |
| `articleType` | String | Can be one of three: text, video, or podcast. Indicates whether the article contains a video, audio, or only text. |
| `title` | String | Title of the article. |
| `lead` | String | Lead of the article. |
| `body` | Array of Objects | Contains the article text as paragraphs. The paragraphs are objects of the array, and they have two properties: type (String) and text. |
| `url` | String | URL through which the article can be accessed. |
| `image` | String | Optional field, the URL to the cover image of the article. |
| `multimediaURL` | String | Contains a link to a video or audio file. The field should be set to null if empty. Should be consistent with the field `articleType` (meaning that if we have a text articleType, multimediaURL is set to null). |
| `multimediaDurationInMillis` | Integer | The length of the multimedia file (video or audio) in ms. Should be set to 1 if `articleType` is text. |
| `datePublished` | Date | Time at which the article was published on the news outlet's website. |
| `dateScraped` | Date | Time at which the article was scraped. |
| `dateUpdated` | Date | Outlets might update the article contents. Instead of creating a new article, the contents of the previous version are updated. |
| `dateDeleted` | Date | Optional field, we are sometimes asked by the outlets to remove articles. Instead of deleting them, we add a dateDeleted entry. Articles with this entry will not be shown. |
| `author` | String | Can also be a press agency or sponsored content. In case of multiple authors, separate them with a comma (,) symbol. |
| `outlet` | String | Current options include BLICK, NZZ, TAGI, SRF, WOZ, or WW. |
| `primaryCategory` | String | The category of an item. |
| `subCategories` | Array of Strings | The sub-categories of an article. This information is not always provided. |
| `language` | String | Language code of the article (e.g., en-US, de-CH, etc.) |
| `experimentIds` | Array of Strings | IDs of every experiment this article is visible in. An article is no longer global by default: it must be explicitly attached to one or more experiments, which lets concurrent studies on the same deployment use overlapping or disjoint article pools without interfering with each other. |
| `visibility` | String | Currently only `experiment_scoped` is used in practice. Reserved for future visibility levels. |
| `createdBy` | String | ID of the researcher (admin/maintainer user) who created/uploaded the article. Duplicate-URL detection on upload is scoped to this field (and the caller's own experiments) rather than being global, so two researchers can independently use the same source URL without blocking each other. |

::: info
When a researcher uploads a URL that already exists **in their own scope**, an override flow lets them replace the stored article content and additionally attach it to a further experiment (appended to `experimentIds`) rather than creating a duplicate document. See [Experiment-Scoped Articles](./article-scoping.md) for the admin UI and full picture.
:::

::: info

Be aware that Android devices can only handle websites secured by an SSL certificate (i.e., only HTTPS websites and no HTTP websites).
Therefore, data fields like URL or multimediaURL should only contain HTTPS websites.

:::

## pageViews*

**Description** Collects all the pages/menus a user has accessed.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userId` | String | ID of user. |
| `page` | String | Unique ID of each page/menu, e.g., `Home` for the home screen. |
| `previousPage` | String | Same as `page`, simply for the previous one (allows tracking how the user has navigated through the menus). |
| `parameters` | Object | Contains navigation parameters of the previous page (and sometimes of the current one), e.g., `articleId`. It is empty if there are no parameters to pass (for example, from `Home` to `Settings`). |
| `createdAt` | Date | Time at which the data record was created. |

## podcastAnalytics*

**Description** Collects all actions performed with an audio (including MiniPlayer).

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `action` | String | The action performed at this step. Currently available: play/stop, backwards, fastforward, sliderSearchComplete, single-/doubleTapLeft, single-/doubleTapRight, heartbeat every 10 seconds, fullscreenExit/-activate. |
| `podcastTimestamp` | Integer | Position in ms in the podcast at which this action was performed. |
| `createdAt` | Date | Time at which the data record was created. |

## readingList*

**Description** Collects whether an article has been read and whether it is a part of the user's bookmark list.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `articlePublishedDate` | Date | Date the article was published. |
| `createdAt` | Date | Time at which the data record was created. |
| `removedAt` | Date | Time at which the data record was removed. |

## recommendationLists

**Description** Collections that are shown on the home screen of a user in the exact ordering determined by the recommender system.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `prediction` | Double | Value that indicates the position of the item in the list (the higher the value, the further up in the list; no pre-defined range exists, it is up to the recommender system). |
| `recommendationAlgorithm` | String | Name of the algorithm used to create the recommendation (optional). |
| `isPreview` | Boolean | A flag which indicates whether the article should appear big on the screen with the title, lead, and image (if `FALSE`, the feed will only show a thumbnail image and the title). |
| `createdAt` | Date | Time at which the data record was created. |

An example of what the recommendations need to be formatted is shown below:

```json

    "recommendationLists": [
        {
            "_id": ObjectId("dbdwHPsadszY24vgP"),
            "userId": "ksgsouZYPvBA2GiQb",
            "articleId": "632aa0137143f66fb32c0d63",
            "prediction": 1000,
            "recommendationAlgorithm": "Test Algorithm 1",
            "isPreview": True,
            "createdAt": 2022-09-21T12:19:40.229+00:00
        },
        {
            "_id": ObjectId("dbEZHPsadszY24vgP"),
            "userId": "ksgsouZYPvBA2GiQb",
            "articleId": "632aa02f7143f66fb32c1125",
            "prediction": 1001,
            "recommendationAlgorithm": "Test Algorithm 1",
            "isPreview": False,
            "createdAt": 2022-09-21T12:19:41.229+00:00
        },
        ...
    ]

```

::: info

We provide an in-depth [recommendation list tutorial](./recommendations.md) on how to connect your recommender framework and the Informfully back end with the [relevant code](https://github.com/Informfully/Documentation/tree/main/sample).

:::

## signins*

**Description** Collects all times a user has accessed the app.
A new record is added each time the user refreshes the browser tab.
Hence, a record may not accurately reflect the actual timestamp at which a given user signed in (i.e., the initial sign-in action).
In return, for users who hardly ever sign out and hence hardly ever sign in, it (more) correctly reflects the last time the user has used the application.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userId` | String | ID of user. |
| `createdAt` | Date | Time at which the data record was created. |

An example of what the questions field could look like is shown below:

```json

    "questions": [
        {
            "_id": "dbEZHPsNryzY24vgP",
            "text": "Are you in favor of voting or higher social benefits?",
            "surveyId": "HKjXEn7cECXuqJig4",
            "minSelect": 1,
            "maxSelect": 1,
            "answers": [
                {
                    "_id": "RG8QYzfBZWn94SfpQ",
                    "text": "Yes",
                    "value": 1
                },
                {
                    "_id": "29NqGpYwaNwAQhTZw",
                    "text": "Rather yes",
                    "value": 0.75
                },
                {
                    "_id": "Z4tz763dMMkWPFrTd",
                    "text": "Rather no",
                    "value": 0.5
                },
                {
                    "_id": "NcMfsArhHXed8CSJR",
                    "text": "No",
                    "value": 0.25
                }
            ]
        },
        ...
    ]

```

## surveys

**Description** Contains all surveys that admin users have defined (and not deleted).

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userId` | String | ID of user. |
| `experiment` | String | ID of experiment |
| `isActive` | Boolean | A flag that indicates whether the survey will be shown in the mobile app to participants in the experiment. A True means that the survey will be shown. |
| `questions` | Array of Objects | Contains all the questions in the survey. For more information about what the array looks like, see below. |
| `createdBy` | String | ID of user. |
| `createdAt` | Date | Time at which the data record was created. |

## users*

**Description** Stores information of Maintainers, Admins, and Users.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `username``` | String | Username required for user to log in; username field can still be manually added, simply for display purposes in the app. |
| `emails` | Arra of Strings | Only for maintainers. |
| `roles` | Array of Strings | An Array consists of all the access rights of this account. This Array can be one of the following three: `{0:"user"}`, `{0:"user",1:"admin"}`, or `{0:"user",1:"admin",2:"maintainer"}`. |
| `profile` | Object | For Maintainers: `{createdAccount:Integer,lastLogin:Time}`; for Admins: `{maxUserAccount:Integer,createdAccount:Integer,plainTextInitialPassword:String,lastLogin:Time}`; for Users: `Null`. |
| `participatesIn` | String | For `Users`: the experiment `_id` that the user is in; for `Maintainers` and `Admins`: `default-experiment`. |
| `userGroup` | String | For `Users`: the user group name that the user is in (only one group at each point in time); for `Maintainers` and `Admins`: `baseline`. |
| `experiments` | Array | For `Maintainers` and `Admins`: the experiment `_id` that they own;fFor Users: `Null`. |
| `createdBy` | String | ID of user. |
| `services` | Object | Meteor default field for login, contains the password hash (bcrypt) and the loginTokens. They are used for authentication purposes. |
| `services.password` | Object | Encrypted password. |
| `createdAt` | Date | Time at which the data record was created. |

::: info

Regarding the `plainTextInitialPassword`, when the account is initially created, a random `plainTextInitialPassword` is generated.
This password is then sent to the administrators, who are strongly advised to change it as soon as possible.

:::

## userGroups

**Description** This collection maps the _id, name, of a user group to an algorithm.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `experimentId` | String | Experiment `_id` that this user group belongs to. |
| `name` | String | Name of this user group. |
| `mode` | String | Live feed mode shown to every participant in this group: `"Normal"` (the list-based feed) or `"TikTok"` (the swipe-based feed). Defaults to `"Normal"`. This field is reactive: changing it (by hand or via a [schedule](./scheduling.md)) propagates to every running app in the group within seconds over the existing publication. |

## recurringSchedules

**Description** A recurring rule that switches a user group's feed `mode` on a repeating daily pattern (e.g. "Normal from 00:00, TikTok from 07:00, every day"). See [Experiment Scheduling](./scheduling.md) for the full picture. Creating one of these pre-generates all of its individual `scheduledEvents` documents up front.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userGroupId` | String | ID of the user group this schedule applies to. |
| `experimentId` | String | ID of the owning experiment. |
| `startDate` / `endDate` | Date | Inclusive date range the recurring pattern is active for. |
| `dailySegments` | Array of Objects | Ordered list of `{ startMinute, mode }`, where `startMinute` is minutes from midnight **UTC** (0–1439) and `mode` is `"Normal"` or `"TikTok"`. |
| `status` | String | `"active"` or `"cancelled"`. Cancelling a recurring schedule cancels its still-`pending` child events but preserves already-`executed` ones for the record. |
| `createdAt` | Date | Time at which the data record was created. |
| `createdBy` | String | ID of the researcher who created the schedule. |

## scheduledEvents

**Description** A single, due-dated action executed by the scheduler — currently only feed-mode switches, either created directly (one-off) or pre-generated from a `recurringSchedules` document. See [Experiment Scheduling](./scheduling.md).

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userGroupId` | String | ID of the user group this event applies to. |
| `experimentId` | String | ID of the owning experiment. |
| `eventType` | String | Currently only `"mode_switch"` is implemented. |
| `scheduledAt` | Date | The due time at which the event should execute. |
| `payload` | Object | Event-specific data, e.g. `{ mode: "TikTok" }`. |
| `status` | String | `"pending"` → `"executed"` or `"cancelled"`. A failed execution attempt is left `"pending"` so it is retried on the next scheduler tick. |
| `executedAt` | Date | Set once the event has run. |
| `recurringScheduleId` | String | `null` for one-off events; otherwise the ID of the parent `recurringSchedules` document. |
| `createdAt` | Date | Time at which the data record was created. |

## videoAnalytics*

**Description** Collects all actions performed with a video.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `articleId` | String | ID of article. |
| `userId` | String | ID of user. |
| `action` | String | The action performed at this step. Currently available: play/stop, backwards, fastforward, sliderSearchComplete, single-/doubleTapLeft, single-/doubleTapRight, heartbeat every 10 seconds, fullscreenExit/-activate. |
| `videoTimestamp` | Integer | Position in ms in the video at which this action was performed. |
| `createdAt` | Date | Time at which the data record was created. |

## wrappedReports*

**Description** Stores [Informfully Wrapped](./wrapped.md) recap reports: a personal, Spotify-Wrapped-style summary of a participant's reading behavior, computed from seven other tracking collections (`articleViews`, `pageViews`, `signins`, `readingList`, `archive`, `articleLikes`, `multimediaEngagement`). Each generation inserts a **new** document rather than overwriting the previous one, so a participant's statistics over time are preserved.

| Attributes | Type | Description |
| --- | --- | --- |
| `_id` | String | ID of data record. |
| `userId` | String | ID of the participant this report is about. |
| `experimentId` | String | ID of the owning experiment. |
| `generatedAt` | Date | Time at which this report was computed. |
| `isVisible` | Boolean | Whether this is the participant's currently visible report. Generating a new report and making it visible hides any older one; the participant-facing publication only ever delivers a user's own report, and only once `isVisible` is true. |
| `shownAt` | Date | Set once, idempotently, the first time the participant actually opens the recap. |
| `rawData` | Object | Raw counts: `uniqueArticlesRead`, `totalReadingDurationMs`, `totalSessions`, `readingListCount`, `archiveCount`, `likesGiven`, `dislikesGiven`, `totalMultimediaEngagementDurationMs`, `avgScrollDepth`. |
| `features` | Object | Derived features: `avgReadingTimePerArticleSecs`, `deepReaderScore` (fraction of viewed articles scrolled past 80%), `topCategories` (top 3 by count), `mostActiveHour`, `mostActiveDayOfWeek`, `engagementRate`, `readingDays` (distinct days read), `diversityScore` (distinct categories read). |
| `releases` | Array of Objects | History of release events, appended whenever a researcher turns visibility on: `{ releasedAt, releasedBy, presentationIndex, featuresSnapshot }`, where `featuresSnapshot` is a copy of `features` at release time. |
