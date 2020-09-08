<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white" bordered>
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
            alt="Rachel & Evan"
            src="~assets/re-logo-black.svg"
          >
        </q-toolbar-title>

        <div>We're getting married!</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
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
    title: 'Travel & Accommodations',
    link: 'travel-and-accommodations'
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
    link: 'registry'
  }
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass">
.q-toolbar__title
  padding: 15px 0

  img
    height: 45px
</style>
