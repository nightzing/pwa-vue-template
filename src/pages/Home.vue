<template>
    <div>
        <div :class="$style.content">
            <h2>hello,pwa</h2>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "home",
  props: {},
  methods: {
    ...mapActions("appShell/appHeader", ["setAppHeader"]),
    ...mapActions("appShell/appBottomNavigator", [
      "showBottomNav",
      "activateBottomNav"
    ])
  },
  async asyncData() {
    await new Promise((resolve, reject) => {
      setTimeout(resolve, 500);
    });
  },
  activated() {
    this.setAppHeader({
      show: true,
      title: "pwa-vue-template",
      showMenu: true,
      showBack: false,
      showLogo: true,
      actions: [
        {
          icon: "search",
          route: "/search"
        }
      ]
    });

    this.activateBottomNav("home");
    this.showBottomNav();
  },
};
</script>

<style lang="scss" scoped module>
.content {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 46px;
    font-weight: 500;
  }

  h2,
  h4 {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
