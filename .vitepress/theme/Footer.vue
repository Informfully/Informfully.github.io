<template>
    <footer style="margin-top: 20px;">
        <div class="app-screens" v-if="props.hasScreenshots">
            <img src="./app_screens.png" alt="Informfully app screenshots" />
        </div>
        <div class="footer-main custom-block details" :style="props.style">
            <div class="footer-row">
                <div class="footer-col">
                    <h4>Informfully</h4>
                    <p>
                        Website: <a href="index.html">www.informfully.ch</a><br />
                        E-mail:
                        <a href="mailto:info@informfully.ch?subject=Study Participation">info@informfully.ch</a><br />
                    </p>
                </div>

                <div class="footer-col">
                    <h4>Contact</h4>
                    <p>
                        Universität Zürich <br />
                        Zentrale Informatik <br />
                        Stampfenbachstrasse 73 <br />
                        CH-8006 Zürich <br />
                    </p>
                </div>

                <div class="footer-col">
                    <h4>Navigation</h4>
                    <ul class="list-links">
                        <li><a href="/">Home</a></li>
                        <li><a target="_blank" href="https://ddis-news.ifi.uzh.ch/privacy-policy">Privacy policy
                                (CH/DE)</a></li>
                        <li><a target="_blank" href="https://ddis-news.ifi.uzh.ch/terms-and-conditions">Terms and
                                conditions (CH/DE)</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Conditions of Participation</h4>
                    <p>
                        Please contact the responsible research group if you have any questions regarding your account
                        information and/or use of your data.
                    </p>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="footer-row">
                <div class="footer-col">
                    <div class="copyright">
                        <span>© Copyright Informfully {{ new Date().getFullYear() }}.</span>
                        <br>
                        <span class="made-by">Informfully made with ❤️ by <a href="https://github.com/lucienheitz" target="_blank">Lucien Heitz</a>, <a href="https://pandermatt.ch" target="_blank">Pascal Andermatt</a>, and <a href="https://mamié.ch" target="_blank">Noah Mamié</a>.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const props = defineProps({
    style: {
        type: String,
        default: "border-radius: 0",
    },
    hasScreenshots: {
        type: Boolean,
        default: true,
    },
});
</script>

<style scoped lang="scss">
.footer-main {
    padding: 2rem;
}

.app-screens {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
}

.footer-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-col {
    flex: 1;
    flex-basis: 250px;

    h4 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
}

.list-links {
    list-style-type: none;
    padding: 0;
}

a {
    text-decoration: none;
}

.footer-bottom {
    padding: 1rem;
    text-align: center;
}


a:hover {
    text-decoration: underline;
}

.made-by {
    font-size: 0.8rem;
    color: var(--vp-c-text-2);
}
</style>
