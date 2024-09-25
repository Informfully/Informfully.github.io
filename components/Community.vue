<template>
    <div class="join-community">
        <div class="community-links">
            <a class="button" href="https://github.com/Informfully">
                <i class="ri-github-fill"></i> GitHub
            </a>
            <a class="button" href="https://x.com/informfully">
                <i class="ri-twitter-x-fill"></i> Twitter
            </a>
        </div>
    </div>
    <div class="thank-you">
        <p>From Switzerland with <i class="ri-heart-fill red"></i></p>
    </div>
</template>


<style scoped lang="scss">
.join-community {
    text-align: center;
    margin-top: 2rem;
}

.community-links {
    display: flex;
    justify-content: center;
    gap: 1rem;

    .button {
        border-radius: 40px;
        background: var(--vp-c-bg-soft);
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        text-decoration: none;

        transition: background 0.3s, color 0.3s;

        i {
            margin-right: 0.5rem;
        }

        &:hover {
            background: var(--vp-c-brand-3);
            color: white;
        }
    }
}

.thank-you {
    text-align: center;

    .red {
        color: red;
    }
}
</style>
