<template>
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
    title: 'Photos',
    link: 'photos'
  },
  {
    title: 'Registry',
    link: 'registry'
  }
];

export default {
  name: 'Drawer',
  props: {
    leftDrawerOpen: {
      default: true
    }
  },
  components: { EssentialLink },
  computed: {
    small() {
      return $q.screen.lt.sm;
    }
  },
  data () {
    return {
      // leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass">
</style>
