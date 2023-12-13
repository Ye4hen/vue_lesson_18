<template>
    <header class="header">
        <div class="header__container container">
            <nav>
                <router-link :to="{ name: 'home' }">{{ $t('menu.home') }}</router-link> |
                <router-link :to="{ name: 'friends' }">{{ $t('menu.friends') }}</router-link> |
                <router-link :to="{ name: 'presents' }">{{ $t('menu.presents') }}</router-link> |
                <router-link :to="{ name: 'assignments' }">{{ $t('menu.presentsDistribution') }}</router-link>
            </nav>
            <div class="header__lang">
                <span>{{ $t('languages.currentLanguage') }} : {{ currentLanguage }}</span>
                <div class="header__buttons actions">
                    <v-btn class="main-button" elevation="2" @click="changeLocale('ua')">Укр.</v-btn>
                    <v-btn class="main-button" elevation="2" @click="changeLocale('en')">Eng.</v-btn>
                </div>
            </div>
        </div>
    </header>
    <router-view />
</template>

<script>
export default {
    computed: {
        currentLanguage() {
            return this.$i18n.locale === 'ua' ? 'Українська' : 'English'
        },
    },

    created() {
        this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE

        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== localStorage.getItem('lastLocale')) {
                self.$i18n.locale = localStorage.getItem('lastLocale')
                self.$router.go()
            }
        })
    },

    methods: {
        changeLocale(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLocale', lang)
        },
    },
}
</script>

<style lang="scss">
@import '@/assets/style/';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
