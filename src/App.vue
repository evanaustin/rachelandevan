<template>
  <div id="q-app" :class="`page${route}`">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    route() {
      return this.$route.path.replace('/','_');
    }
  }
}
</script>

<style lang="sass">
</style>
