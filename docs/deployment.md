# Back End Deployment (Website)

The back end deploys as the same Docker Compose stack described in [Docker Setup](./docker.md), running behind a Caddy reverse proxy for HTTPS. Deployment itself is automated by a two-stage GitLab CI/CD pipeline (`.gitlab-ci.yml`) across two virtual machines: a staging VM and a production VM.

## Pipeline Overview

The pipeline has two stages, `build` and `deploy`, each run separately for `staging` and `production`:

| Branch | Environment | Build | Deploy |
| --- | --- | --- | --- |
| `staging` | Staging VM | Automatic on push | Automatic on push |
| `main` | Production VM | Automatic on merge | **Manual** — must be triggered in GitLab |

* Pushing to the `staging` branch automatically `git pull`s on the staging VM, rebuilds the Docker images (`docker compose --profile proxy build`), and brings the stack up (`docker compose --profile proxy up -d`). This gives the team an always-up-to-date environment to validate changes against real infrastructure.
* Merging to `main` automatically builds on the production VM, but the deploy step is `when: manual` — someone has to explicitly trigger it from the GitLab pipeline UI. This means a broken or unreviewed build can never silently reach production.

Both jobs connect over SSH using CI/CD variables that must be configured per environment (`DEV_SSH_HOST`/`PROD_SSH_HOST`, `..._SSH_USER`, `..._SSH_PORT`, `..._SSH_PRIVATE_KEY`, `..._DEPLOY_PATH`). Configuring these requires **Maintainer**-level GitLab access (Developer access is not sufficient — the CI/CD settings menu where secrets/variables live is Maintainer-only).

## Manual Deployment (if not using the pipeline)

If you need to deploy or update a VM by hand, SSH into it and run the same commands the pipeline runs:

```console
ssh <user>@<host>
cd <deploy-path>
git pull origin <branch>
docker compose -f docker-compose.yml --profile proxy build
docker compose -f docker-compose.yml --profile proxy up -d
docker compose -f docker-compose.yml --profile proxy ps
```

Note the `--profile proxy` flag: the Caddy reverse proxy is defined behind a Compose [profile](https://docs.docker.com/compose/profiles/) and is only started when this flag is passed, so local development (`docker compose up -d`, no profile) does not spin up a Caddy instance unnecessarily.

## Reverse Proxy (Caddy)

The back end listens on its own internal port (`3000`) rather than the standard web ports, so a reverse proxy handles public HTTPS traffic. We use [Caddy](https://caddyserver.com/) (see `Caddyfile`), which automatically provisions and renews HTTPS certificates and keeps the app's live connections open through the proxy.

The proxy's hostname is configured via the `CADDY_HOSTNAME` environment variable (see [Installation Instructions](./install.md)).

::: info
If traffic isn't reaching the proxy at all (not even a TLS/connection error), check the VM's firewall before debugging Caddy's configuration — ports 80/443 need to be open to the internet, and a closed firewall fails silently from the proxy's point of view.
:::

## Known Issues

### Backend crashes with out-of-memory errors

Both VMs — production and staging (staging is a copy of production, used to observe how the app behaves before changes reach production) — are prone to the back end crashing under load.

The cause is memory exhaustion: the back end process runs out of memory and is killed, taking the container down with it. This can be confirmed via the Docker Compose logs — right before a crash, there's a burst of log output from the back end, and then the logs simply stop, since the process is no longer running to produce them:

```console
docker compose -f docker-compose.yml --profile proxy logs -f meteor
```

::: info
No corresponding error or stack trace signals the crash itself — the abrupt absence of further logs after a period of heavy output is the tell.
:::

## Deploy the App

Please see the other instruction page for [App Deployment](./native.md). If you already have the back end and apps up and running, go ahead and start your first [Use Experiment](./experiment.md).
