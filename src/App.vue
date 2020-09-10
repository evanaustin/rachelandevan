<template>
  <div id="q-app">
    <router-view />
    <img
      id="palm"
      src="~assets/palmleaf2.png"
    >
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
#palm
  width: 300px
  position: fixed
  bottom: -50px
  left: -50px
  transform: rotate(180deg)
</style>
