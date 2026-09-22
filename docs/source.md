# Code Overview

The Informfully Platform repository contains the app front end and website back end, plus two smaller Python services: `fastapi_app/` (the [Researcher Data API](./researcher-api.md)) and `llmChatService/` (backs the experimental article chatbot). All of these run together via Docker Compose — see [Docker Setup](./docker.md). To gain a better understanding of how to write and extend this platform, we provide a brief project overview below, focused on the two largest parts: the `frontend` and `backend` directories.

## ``frontend`` Directory

::: warning
This section describes the current TypeScript / `expo-router` frontend. It replaces an older description (plain JavaScript, `App.js` entry point, `react-navigation`, Yarn) that no longer matches the codebase.
:::

The mobile app is based on [React Native](https://reactnative.dev/), a JavaScript/TypeScript framework for developing native applications for iOS and Android, and [Expo](https://expo.dev/), a set of tools built on top of React Native.
If you have no experience with React Native, it is recommended that you check out [Getting Started](https://reactnative.dev/docs/getting-started/) and [Environment Setup](https://reactnative.dev/docs/environment-setup).

Most of the codebase has been migrated to TypeScript (roughly 80% of source files are `.ts`/`.tsx`); new code should be written in TypeScript. Routing uses [`expo-router`](https://docs.expo.dev/router/introduction/), Expo's file-based router, rather than `react-navigation`: every file under `app/` is a route, and grouping folders like `app/(app)/` or `app/(public)/` define route groups (e.g. authenticated vs. public screens) without adding a path segment. Dependencies are managed with npm (`npm install --legacy-peer-deps`, see [Installation Instructions](./install.md)).

Here is a summary of the frontend repo folder structure:

```console

    app/            # expo-router routes (file-based)
      (app)/         # authenticated route group: Home, Settings, ReadingList, ...
      (public)/      # public route group: SignIn, SignUp, ForgotPassword
      (survey)/      # survey route group
      Article.tsx
      Tutorial.tsx
    api/
      meteorCalls.ts # the meteorCall() helper
      contracts/     # one Zod-validated MethodContract per Meteor method
    components/
      articles/       # feed rendering, incl. modes/ (Normal vs TikTok)
      wrapped/         # Informfully Wrapped overlay + slide mapping
      survey/
      navigation/, navigator/, providers/, screens/, elements/, icons/, utils/
    hooks/           # e.g. useBookmark, useFavourite, useColorMode, useChat
    services/        # e.g. videoService
    lib/
    styles/
    types/
    config/
    assets/
    package.json
    tsconfig.json
    metro.config.js
    babel.config.js

```

### Typed Meteor Calls

Meteor method calls from the frontend go through a single `meteorCall` helper (`api/meteorCalls.ts`) rather than calling `Meteor.call` directly with a hard-coded method name and untyped arguments:

```typescript
export const meteorCall = <TSchema extends z.ZodTypeAny | undefined>(
  contract: MethodContract<TSchema>,
  params?: MethodParams<TSchema>,
): Promise<any> => { /* ... */ }
```

Each `MethodContract` (`api/contracts/*.ts`) pairs a method name with an optional [Zod](https://zod.dev/) schema for its arguments, giving compile-time and runtime validation that a call's arguments match what the corresponding Meteor method expects. `meteorCall` also centralizes auth: it checks `Meteor.userId()` (the live DDP session) before calling, and skips the call rather than letting it silently fail if the user isn't authenticated yet.

### Feed Rendering Architecture

To support both feed modes (Normal and TikTok, see [Mobile App](./app.md#tiktok-mode)) without duplicating logic, mode-specific rendering sits behind a small strategy pattern:

* `types/user-group-mode.ts` declares the enum: `UserGroupMode.LEGACY = "Normal"`, `UserGroupMode.TIKTOK = "TikTok"`.
* `components/articles/RenderArticlesWithMode.tsx` dispatches on this enum to a mode-specific implementation — `ArticleLegacy.tsx` or `ArticleTiktok.tsx` under `components/articles/modes/` — while data fetching and article-list state upstream of it stay mode-agnostic.

Adding a third feed mode means adding an enum value, a new component under `components/articles/modes/`, and one case in `RenderArticlesWithMode` — no changes elsewhere.

### Patched Dependencies

The project uses [`patch-package`](https://www.npmjs.com/package/patch-package) (run automatically via the `postinstall` npm script) to patch `expo-av` (kept intentionally rather than migrated to the newer `expo-video`, since a full migration was out of scope) against breaking changes in `expo-modules-core`. Don't "clean up" by removing the patch step or upgrading `expo-modules-core` without re-checking this.

Finally, `app.json` is a configuration file used by Expo. It is the go-to place for configuring parts of the mobile app that do not belong in the code, such as the app name, icon, or version number. A full list of all available properties can be found in the [Expo documentation](https://docs.expo.dev/versions/latest/config/app/).

## ``backend`` Directory

The back end repository is based on [Meteor](https://www.meteor.com/) with [React](https://reactjs.org/).
It is highly encouraged to complete the following [Tutorial](https://react-tutorial.meteor.com/), to get a better understanding of Meteor and how it can be used together with React (which is the framework used for the development of the admin website user interface) or React Native (which is the framework used for the development of the mobile app user interface).
The back end repository contains both the Meteor backend (`server`) and the React-based admin website (`client`).
Complete the aforementioned tutorial to gain a better understanding of why the backend repository is structured as it is.
Below is a short overview of the structure.

The Meteor framework is a JavaScript NodeJS backend solution which integrates well with React and React Native and ships with [MongoDB](https://www.mongodb.com/).
It features a unique approach to project directories and files.
There is a set of directory names that causes the framework to apply a predefined file load order and availability.
For instance, a file that is inside a directory called `server` can only be loaded on the server, i.e., the backend code.

Similarly, files that are inside a directory called `startup` are loaded during startup.
In the [Meteor documentation](https://guide.meteor.com/structure.html), Meteor explains and suggests a very clean project structure that considers their special file load behaviour.
In the back end repository, we use the application structure as suggested by the Meteor documentation and have further separated the code semantically for different groups and types of components.
Furthermore, we very clearly distinguish between different layers and concepts inside the application.
Here is a summary of the backend repository structure:

```console

    .build/
    .meteor/
    bundle/
    client/
    stylesheets/
        base/
        components/
        defaults/
        elements/
        ...
    main.js
    imports/
    api/
        client/
        server/
        ...
    lib/
    startup/
        client/
        server/
    ui/
        components/
        elements/
        layout/
        modules/
        pages/
        App.jsx
        ...
    node_modules/
    public/
    fonts/
    images/
    server/
    main.js
    ...
    tests/
    .eslintrc.json
    .snippets.sh
    build.sh
    ...

```

::: warning
The paragraph below (`.build/`/`bundle/` via `build.sh` + `meteor build`) described an older manual deployment flow. The current Docker image (`backend/Dockerfile`) instead runs `meteor run` directly from source inside the container — see [Docker Setup](./docker.md) and [Back End Deployment](./deployment.md).
:::

The `.meteor/` directory is automatically generated when running Meteor locally (or inside the container) and should not be manually modified. It contains Meteor's local build cache and package version pins (`.meteor/release`, `.meteor/versions`).

The directories `client/` and `server/` in the root of the backend repository include all the code that needs to be available in only one of the environments.
In both directories, there is a file called `main.js`, which imports files from the `imports/` directory and loads everything needed in the environment.
For the `client/` directory, these are the available routes (i.e., URLs).
For the `server/` directory, these include the set of database collections, publications, and some configurations.
The configurations include so-called fixtures as well as a configuration file for account management (e.g., signing in and registrations).
A fixture is a set of records that is inserted into the database in case the database is empty.
It is commonly used in software projects in which certain records need to be available for development (and possibly also in production).
In our case, this includes some news articles, a survey, and an experiment.

On the client, stylesheets are bundled and loaded automatically.
Since they are not required to be available on the server, they reside in the `client/` directory.
There is a set of directories inside the directory `client/stylesheets/` to distinguish between different groups of stylesheets.
Examples of such groups are `components`, `elements`, `layout`, and `defaults` such that `components` includes the stylesheets for components like the survey or an article, `elements` includes stylesheets for generic HTML elements like inputs, buttons and forms, `layout` includes stylesheets for different parts of the application like sections, titles and similar and `defaults` includes stylesheets of reusable elements like colours, fonts and media queries.

The `imports/` directory includes another very important segmentation.
It includes the directories `api`, `lib`, `startup`, and `ui`.
Inside the `api` directory, there are only files that comprise the server's API.
That is, it includes all publications, collections, and methods.
Again, it is separated into directories for client/server and components or concerns.
The `lib` directory includes code that can be reused across the entire project and which is not specific to any of the environments.
It consists of utility functions such as splitting strings, constructing arrays, sorting arrays, and similar.
Within the directory, the code is further divided into components and concerns.

The `startup` directory includes all files, for each directory, that are needed during startup.
Specifically, there is an `index.js` file for both the server and the client that loads all necessary files during startup.
This simplifies the startup process and allows us to load the `index.js` files into the `main.js` file, splitting the complexity.
The `ui` directory contains all React components used for the user interface of the admin website.
The directory includes a very similar structure to the one applied to the `client/stylesheets/` directory.
There are again different groups of components such as `layouts`, `elements`, and `modules`.
Inside those directories, subdirectories for various component types were created, such as `survey`, `articles`, and `header`.

All the third-party packages are managed in the `package.json` file.
From it, the `package-lock.json` file will be generated when running `meteor npm install`, which fetches all the required packages and stores them in the `node_modules` folder.

For better code quality and consistency, the software project again includes an [ESLint](https://eslint.org/) configuration (`.eslintrc.json`).

### A Note on Meteor 3's Async API

The backend runs on Meteor 3, whose data-layer APIs (e.g. `findOneAsync`, `updateAsync`, `countAsync`) are asynchronous, unlike the synchronous, Fibers-based APIs of Meteor 2. Two conventions in this codebase exist specifically to avoid bugs from that migration and should be kept when writing new publications:

* A cursor observer's `added`/`removed` callbacks should be wrapped in an initialization guard, so the initial data set isn't sent to the client twice.
* A publication's role/permission checks should resolve the publication's own user explicitly (rather than relying on ambient context), since relying on ambient context has produced sporadic false "permission denied" errors under the async API.
