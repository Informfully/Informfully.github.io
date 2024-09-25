<template>
    <div class="about-how-content vp-doc">
        <div class="about-how-steps">
            <div class="step" v-for="(step, index) in steps" :key="index">
                <div class="step-bubble">{{ index + 1 }}</div>
                <div class="step-content">
                    <h3>{{ step.title }}</h3>
                    <p v-html="step.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const steps = [
    {
        title: "Open an Informfully account",
        description:
            'Reach out to use via <a href="mailto:info@informfully.ch?subject=Study Participation">info@informfully.ch</a> to get access to the app\'s website for setting up your own user study. It is completely free!',
    },
    {
        title: "Create experiments and enlist users",
        description:
            "We provide you a web interface to configure your user study and to open accounts for your users. They can be exported and redistributed outside of our platform.",
    },
    {
        title: "Get your content ready",
        description:
            "Send us your multimedia items that you want to push to the users. Are you not allowed to share the content? You can also just give us a pointer to the online resource via an API. We take care of the rest.",
    },
    {
        title: "Recommend it your way",
        description:
            "Specify for each user what, how, and when they should see a specific piece of content. Select from among the built-in solutions or run your own model and forward us the results.",
    },
    {
        title: "Complementary user surveys",
        description:
            "Create complementary questionnaires to gather feedback. You can attach specific feedback questions or rating options for each recommendation.",
    },
    {
        title: "Ready? Go!",
        description:
            "You can launch betas to test everything. Once you are ready, launch the experiment. All interactions are stored and you can download the data at any point.",
    },
];
</script>

<style scoped lang="scss">
.about-how-steps {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 0 24px;

    @media (min-width: 640px) {
        padding: 0 48px;
    }
}

.step {
    display: flex;
    align-items: flex-start;
}

.step-bubble {
    background-color: var(--vp-c-brand-3);
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
    margin-right: 15px;
}

.step-content h3 {
    margin: 0;
    font-size: 1.2em;
}

.step-content p {
    margin-top: 10px;
    line-height: 1.6;
}

a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
