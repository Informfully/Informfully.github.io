# Installation Instructions

The back end (the app server, database, Researcher API, and in-app chat service) runs as a set of Docker containers. The mobile app front end is a separate project that talks to the back end over the network; you run it locally and point it at your back end.

## Prerequisites

* **Docker** and **Docker Compose** ([install Docker](https://www.docker.com/products/docker-desktop)) — runs the entire back end.
* **Node.js** and **npm** — needed to install and run the frontend; use a recent Node LTS release.
* **Expo Go** or a development build — to run the app on a device or simulator. Because the app uses native modules, a plain Expo Go client from the store is not guaranteed to work; use a development build instead (see `expo run:android` / `expo run:ios` below).

## Download the Codebase

```console
git clone https://github.com/Informfully/Platform.git
cd Platform
```

## Configure Environment Variables

Copy the example environment file and fill in the required secrets:

```console
cp .env.example .env
```

`.env` currently defines:

| Variable | Purpose |
| --- | --- |
| `API_JWT_SECRET` | Secret used to secure the connection between the platform's services. Set this to a random string, even in development. |
| `ROOT_URL` | The public URL of the platform (e.g. `http://localhost:3000`). |
| `CADDY_HOSTNAME` | Domain name used for the HTTPS certificate in a production deployment. Can be left empty for local development. |
| `GROQ_API_KEY` | API key for the in-app chat service's language model. |

## Start the Backend

```console
# Start all backend services in detached mode
docker compose up -d

# Or, to rebuild images after a dependency change
docker compose up --build -d
```

This starts the platform's back end services: the app server, its database, the Researcher API, and the in-app chat service. See [Docker Setup](./docker.md) for details on each service, and [Local Development](./development.md) for day-to-day workflows.

Make sure ports **3000** (back end) and **8081** (used by the frontend) are reachable on your system; when testing purely on a simulator on the same machine you can ignore this.

## Install and Run the Frontend

```console
cd frontend
npm install --legacy-peer-deps
npx expo start --clear
```

If you need to reset a broken install, remove the lockfile and `node_modules` first:

```console
rm -rf package-lock.json node_modules frontend/node_modules
npm install --legacy-peer-deps
```

### Pointing the App at Your Backend

The frontend needs to reach the Meteor backend over the network. Configure this in `frontend/.env` (copy from `frontend/.env.example`):

* **Same local network** (e.g. phone and laptop on the same Wi-Fi): set `EXPO_PUBLIC_SERVER_IP` to your backend machine's IP address.
* **Tunnel** (e.g. when the local-network option doesn't work): set up a tunnel (e.g. [ngrok](https://ngrok.com/)) to port 3000, then set `EXPO_PACKAGER_PROXY_URL` to the tunnel URL.

## Next Step: Run the Code

Please see the next instruction page for [Local Development](./development.md).
