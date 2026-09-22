# Local Development

## Running the Backend

Start the full back end (app server, database, Researcher API, in-app chat service) with Docker Compose from the repository root (see [Installation Instructions](./install.md) for prerequisites and `.env` setup):

```console
# Start all services in detached mode
docker compose up -d

# Rebuild images first (e.g. after changing a Dockerfile or dependencies)
docker compose up --build -d
```

In local/dev mode, the admin website is reachable at `http://localhost:3000`.

To follow logs or check container status:

```console
docker compose logs -f meteor
docker compose ps
```

### Inspecting the Database

The database is exposed on the host at port `27017`. Connect [MongoDB Compass](https://www.mongodb.com/products/compass) using:

```
mongodb://localhost:27017/meteor
```

In this documentation, we adhere to MongoDB's naming convention: tables are collections, and tuples are documents. There is no need to create a document collection yourself — the database creates one automatically when the first document is inserted.

### First Maintainer Account

If no accounts exist yet on startup, the platform automatically creates a first account with the `admin` and `maintainer` roles (currently seeded as username `adam`, email `adam@uzh.ch`, password `password`). Change this immediately in any shared or long-lived environment, and remove the seed once a real maintainer account exists.

## Running the Frontend

```console
cd frontend
npm install --legacy-peer-deps
npx expo start --clear
```

Point the app at your running backend via `frontend/.env` (see [Installation Instructions](./install.md#pointing-the-app-at-your-backend) for the local-network vs. tunnel options).

After starting Metro, scan the printed QR code to test on a physical device (recommended), or connect a simulator/emulator. Because the app relies on native modules, use a development build rather than the generic Expo Go client from the store:

```console
npx expo run:android
npx expo run:ios
```

Changes to the source code are reflected live via Fast Refresh while `expo start` is running.

## Next Step: Platform Deployment

Please see the next instruction pages for [App Deployment](./native.md) and [Back End Deployment](./deployment.md).
