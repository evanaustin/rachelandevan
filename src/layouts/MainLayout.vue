<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-transparent">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <img
            id="brand"
            alt="Rachel & Evan"
            src="~assets/re-logo-white.svg"
          >
        </q-toolbar-title>

        <div>
          <img
            id="hibiscus"
            src="~assets/hibiscus2.png"
          >
        </div>
      </q-toolbar>
    </q-header>

    <drawer :leftDrawerOpen="leftDrawerOpen" />
    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-transparent"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Drawer from 'layouts/Drawer.vue'

export default {
  name: 'MainLayout',
  components: { Drawer },
  data () {
    return {
      leftDrawerOpen: false,
    }
  }
}
</script>

<style lang="sass">
#brand
  margin-left: 1rem

.q-header
  // background-image: url("/img/aqua.jpg")
  // background-size: cover

.q-header--bordered
  border-color: #ffffff

.q-toolbar__title
  padding: 15px 0

  img
    height: 45px

#hibiscus
  width: 250px
  position: fixed
  top: -50px
  right: -50px
  // transform: rotate(180deg)
</style>
