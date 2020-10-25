<template>
  <q-layout view="hHh Lpr lFf">
    <q-header :class="leftDrawerOpen || $route.path == '/'  || $route.path == '/#' ?  'bg-transparent' : 'bg-white'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          :color="leftDrawerOpen || $route.path == '/'  || $route.path == '/#' ?  'white' : 'black'"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to="/">
            <img
              id="brand"
              alt="Rachel & Evan"
              :src="leftDrawerOpen || $route.path == '/'  || $route.path == '/#' ?  lightLogo : darkLogo"
            >
          </router-link>
        </q-toolbar-title>

        <div>
          <img
            id="hibiscus"
            src="~assets/hibiscus2.png"
          >
        </div>
      </q-toolbar>
    </q-header>

    <!-- <drawer :leftDrawerOpen="leftDrawerOpen" /> -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-transparent"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-list>

      <img
        id="palm"
        src="~assets/palmleaf2.png"
      >
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    link: '/#'
  },
  {
    title: 'Our Story',
    // caption: 'chat.quasar.dev',
    // icon: 'heart',
    link: 'story'
  },
  {
    title: 'Wedding Details',
    link: 'wedding-details'
  },
  {
    title: 'Travel & Stay',
    link: 'travel-and-stay'
  },
  {
    title: 'Wedding Party',
    link: 'wedding-party'
  },
  {
    title: 'Activities',
    link: 'activities'
  },
  {
    title: 'Ceremony',
    link: 'ceremony'
  },
  {
    title: 'Photos',
    link: 'photos'
  },
  {
    title: 'Registry',
    link: 'https://www.zola.com/registry/andrewsgrindewedding'
  }
];


export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      lightLogo: 'statics/re-logo-white.svg',
      darkLogo: 'statics/re-logo-black.svg',
      leftDrawerOpen: !this.$q.screen.lt.sm,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass">
</style>
