# Google Play Store Deployment

Before deploying the mobile app to the Google Play Store, the back end has to be deployed to a server — see [Back End Deployment](./deployment.md). Configure the frontend to point at that server via `frontend/.env` (see [Installation Instructions](./install.md#pointing-the-app-at-your-backend)).

::: warning
`expo eject` (Expo's old managed → bare workflow migration command) is deprecated. The project no longer commits a generated `android/` directory; native project files are generated on demand (e.g. via `npx expo prebuild` or implicitly by `npx expo run:android`).
:::

## Requirements

* Google Developer Account
* An Android upload keystore (`.jks` file)

## Signing

Release builds (package `ch.uzh.ifi.news`, see `app.json`) must be signed with an upload key before they can be submitted to the Play Store. Generate a Java KeyStore file and reference it via the `signingConfig` block in `android/app/build.gradle`, so every release build is signed consistently with the same key.

## Building the App

```console
cd frontend
npm install --legacy-peer-deps

# Generates the native android/ project from app.json + config plugins
npx expo prebuild --platform android

# Build a signed release
cd android
./gradlew bundleRelease   # AAB, for Play Store submission
# or: ./gradlew assembleRelease   # APK
```

The build output is an `.aab` (App Bundle, preferred for Play Store) or `.apk` under `android/app/build/outputs/`.
