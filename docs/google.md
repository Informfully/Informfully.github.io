---
title: Google Play Store
---

Before deploying the mobile app to the Google Play Store, the back end
of the mobile app has to be deployed to a server. For that, simply
follow the same instructions as in [Back End
Deployment](https://informfully.readthedocs.io/en/latest/deployment.html).
Afterwards, make sure to change the `SERVER` constant in `App.js`
(located
[here](https://github.com/Informfully/Platform/blob/main/frontend/App.js))
to your server\'s address (e.g., `wss://your.domain/websocket`).

# Requirements

-   Google Developer Account
-   Android Keystore

# Building the App

We use Expo\'s bare workflow to generate native Android project code.
This allows the application to be further developed using the native
tools, such as Android Studio. Follow these steps to build an APK:

> 1.  Make sure that all the changes are committed (e.g., that your
>     working tree is clean).
> 2.  Navigate to the frontend folder on the command line.
> 3.  Type `npm install` in the command line.
> 4.  Type `expo eject` in the command line.
> 5.  Open the Android project with Android Studio.
> 6.  Configure the project.
> 7.  Open AndroidManifest.xml using the file browser in Android Studio
>     and add/remove permissions (look below for more details).
> 8.  Build -\> Generate Signed Bundle/APK -\> APK -\> Give the key
>     store path and enter credentials -\> Release with both V1 (JAR
>     Signature) and V2 (Full APK Signature) -\> Finish.
> 9.  The APK will be generated in
>     `/android/app/release/app-release.apk`.

We used the following to successfully deploy to the Play Store. In case
you have errors, try using the same versions:

-   Operating System: **Windows 10**
-   Android Studio: **4.2.2**
-   Android Gradle Plugin Version: **3.5.3**
-   Gradle Version: **6.3**
