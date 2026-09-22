# Apple App Store Deployment

Before deploying the mobile app to the Apple App Store, the back end has to be deployed to a server — see [Back End Deployment](./deployment.md). Configure the frontend to point at that server via `frontend/.env` (see [Installation Instructions](./install.md#pointing-the-app-at-your-backend)).

::: warning
`expo eject` (Expo's old managed → bare workflow migration command) is deprecated. The project no longer commits a generated `ios/` directory; native project files are generated on demand (e.g. via `npx expo prebuild` or implicitly by `npx expo run:ios`).
:::

## Requirements

* Apple Developer Account and an Apple device with Xcode
* A provisioning profile for bundle identifier `ch.uzh.ifi.ddis-news` (see `app.json`)

## Building and Uploading the App

```console
cd frontend
npm install --legacy-peer-deps

# Generates the native ios/ project from app.json + config plugins
npx expo prebuild --platform ios
```

Builds currently cannot be uploaded to App Store Connect directly from Xcode. Instead:

1. Open the generated `ios/` project in Xcode.
2. Disable automatic signing and manually select the provisioning profile for `ch.uzh.ifi.ddis-news`.
3. Archive the build and export it as an `.ipa`.
4. Upload the `.ipa` to App Store Connect using Apple's [Transporter](https://apps.apple.com/us/app/transporter/id1450874784) application.

## Known App Store Review Requirement: Account Deletion

Apple's App Store Review Guidelines require that any app allowing account creation also provide an **in-app** way to delete the account — not just a link to an external page. This has caused rejections in past submission cycles. See [Mobile App → Settings Menu](./app.md#settings-menu) for the current (request-only) status of account deletion in this app, and confirm it has been fully wired up before resubmitting.
