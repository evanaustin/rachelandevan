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
        />
      </q-list>
    </q-drawer>
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
  name: 'Drawer',
  props: ["leftDrawerOpen"],
  components: { EssentialLink },
  data () {
    return {
      // leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style lang="sass">
.q-drawer
  width: 375px !important
  // padding-top: 1rem
  background: transparent
  // background-image: url("/img/aqua.jpg")
  // background-size: cover
  // font-family: Raleway
  font-family: Poiret One
  // color: #ffffff
  color: #fff
  // text-decoration-thickness: 110%;
  // text-shadow: 0.5px 0.5px 0 #fff //#E34F50
  font-weight: 500
  font-size: 32px

  &.q-drawer--bordered
    border-color: #ffffff

  .q-item.q-router-link--active
    color: #fff
    // text-decoration: underline
    background: rgba(255,255,255,0.1)
    padding-right: 50px
    // width: 150%
</style>
