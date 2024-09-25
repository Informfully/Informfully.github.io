<template>
    <div class="download-call-to-action">
        <div class="text">
            <h2 id="download">Download Now</h2>
            Informfully is availabe for Android and iOS. The download is free. To get access to the full set of
            features,
            you need to be enrolled in a user study. Send an e-mail to
            <a href="mailto:info@informfully.ch?subject=Study Participation" class="email">info@informfully.ch</a>
            to get full access.

            <div class="download-badges">
                <a href="https://apps.apple.com/de/app/ddis-news/id1460234202" class="badge-appstore">
                    <img src="/appstore.png" alt="App Store" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=ch.uzh.ifi.news" class="badge-googleplay">
                    <img src="/google-play.png" alt="Google Play" />
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.download-call-to-action {
    margin-top: 2rem;
    background: #F7F8FC;

    .dark & {
        background: #1A202C;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 300;
        line-height: 2;
        margin-bottom: 1rem;
    }

    .text {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem 24px;

        @media (min-width: 640px) {
            padding: 2rem 48px;
        }
    }

    .email {
        text-decoration: underline;
    }

    .download-badges {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;

        .badge-appstore,
        .badge-googleplay {
            display: block;
            width: 130px;
        }
    }
}
</style>
