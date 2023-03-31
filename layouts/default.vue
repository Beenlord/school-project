<template>
  <div class="DefaultLayout">
    <Nuxt />
    <Icons />
    <Icon class="project-logo" id="logo" />
  </div>
</template>

<script>
import Icons from '@/components/dynamic/Icons.vue';

export default {
  components: {
    Icons,
  },
  data: () => {
    return {
      curtain: false,
    };
  }
};
</script>

<style lang="scss">
.DefaultLayout {
  .project-logo {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
