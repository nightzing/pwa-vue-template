<template>
    <div class="app-user-page">
        <div class="app-user-title text-xs-center">
            <div class="user-avatar">
                <p>
                    <v-icon class="user-avatar-icon user-icon">face</v-icon>
                </p>
                <p>pwa-vue</p>
            </div>
            <v-list two-line>
                <template v-for="item in items">
                    <v-list-tile avatar :key="item.title">
                        <v-list-tile-avatar>
                            <v-icon class="user-icon">{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </template>
            </v-list>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'user',
    data() {
        return {
            items: [
                {
                    title: 'Photos',
                    icon: 'photo_library',
                    subtitle: 'Jan 9, 2014'
                },
                {
                    title: 'Favorites',
                    icon: 'favorite',
                    subtitle: 'Feb 9, 2016'
                },
                {
                    title: 'Work',
                    icon: 'work',
                    subtitle: 'Nov 9, 2017'
                }
            ]
        };
    },
    methods: {
        ...mapActions('appShell/appHeader', [
            'setAppHeader'
        ]),
        ...mapActions('appShell/appBottomNavigator', [
            'showBottomNav',
            'activateBottomNav'
        ])
    },
    activated() {
        this.setAppHeader({
            show: true,
            title: 'pwa-vue-template',
            showMenu: true,
            showBack: false,
            showLogo: true,
            actions: [
                {
                    icon: 'search',
                    route: '/search'
                }
            ]
        });

        // 设置当前 bottom navigator 显示的 item
        this.activateBottomNav('user');
        this.showBottomNav();
    },
    async asyncData({store, route}) {
        await new Promise(resolve => {
            setTimeout(resolve, 1000);
        });
    }
};
</script>

<style lang="scss" scoped>

.user-icon {
    color: rgba(0,0,0,0.38);
}
.user-avatar {
    color: rgba(0,0,0,0.54);
    margin: 50px auto 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &-icon {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background:rgba(0,0,0,0.38);
        font-size: 70px;
    }
}
.material-icons {
    display: inline-flex;
}
</style>
