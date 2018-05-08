<template>
    <div class="detail-wrapper">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <article class="detail-content text-xs-center">
                        <header class="detail-title text-xs-center">
                            详情页 {{$route.params.id}}
                        </header>
                        <router-link :to="{
                            name: 'detail',
                            params: {
                                id: Number($route.params.id) + 1
                            }
                        }">
                            详情页 {{Number($route.params.id) + 1}}
                        </router-link>
                        <p>
                    Progressive Web App, 简称 PWA，是提升 Web App 的体验的一种新方法，能给用户原生应用的体验。

PWA 能做到原生应用的体验不是靠特指某一项技术，而是经过应用一些新技术进行改进，在安全、性能和体验三个方面都有很大提升，PWA 本质上是 Web App，借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。
                        </p>
                    </article>
                </v-flex>
            </v-layout>
         </v-container>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'detail',
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'hideBottomNav'
        ])
    },
    async asyncData() {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500);
        });
    },
    created() {
        this.setAppHeader({
            show: true,
            title: 'pwa-vue',
            showMenu: false,
            showBack: true,
            showLogo: false,
            actions: [
                {
                    icon: 'home',
                    route: {
                        name: 'home'
                    }
                }
            ]
        });
        this.hideBottomNav();
    }
};
</script>

<style lang="scss" scoped>

.detail-content {
    font-size: 26px;
    line-height: 30px;
    margin-top: 30px;

    .detail-title {
        margin-bottom: 20px;
        padding: 10px 0;
        font-size: 36px;
        font-weight: bold;
    }

    p {
        text-align: left;
        padding-top: 20px;
    }
}
</style>
