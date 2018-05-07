<template>
    <transition name="fade">
        <div
            v-show="show"
            v-bind:class="[{'app-mask-show': show}, 'app-mask-wrapper']"
            @click.stop="closeAppMask">
        </div>
    </transition>
</template>

<script>
export default {
    props: ['show'],
    methods: {
        closeAppMask() {
            this.$emit('close-mask');
        }
    }
};
</script>

<style lang="scss" scoped>

.app-mask-wrapper {
  width: 100%;
  height: 100%;
  z-index: $app-mask-zindex;
  background: $app-mask-bgcolor;
  opacity: $app-mask-opacity;
  position: fixed;
  top: 0;
  left: 0;

  &.fade-enter, &.fade-leave-active {

    opacity: 0;
    transition: 0 $app-mask-duration;
  }

  &.fade-leave, &.fade-enter-active {
    transition: 0 $app-mask-duration;
  }
}
</style>
