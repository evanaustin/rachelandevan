<template>
  <div>
    <q-page class="column flex flex-center">
      <h1>{{ diffDays }}</h1>
      <h5 class="text-center">days until
        <br>
        our After-Party!
      </h5>
    </q-page>
  </div>
</template>

<script>
const imgs = [
  "https://live.staticflickr.com/65535/50296327082_213ddd75ec_k.jpg",
  "https://live.staticflickr.com/65535/50296168576_e34286f5b4_k.jpg",
  "https://live.staticflickr.com/65535/50295492693_8652397b43_k.jpg",
  "https://live.staticflickr.com/65535/50295493113_adef0aa4b4_k.jpg",
  "https://live.staticflickr.com/65535/50296327012_df4abfd947_b.jpg"
];

export default {
  name: 'Home',
  computed: {
    oneDay() {
      return 24 * 60 * 60 * 1000;
    },
    diffDays() {
      return Math.round(Math.abs((this.today - this.wedding) / this.oneDay)) + 1
    }
  },
  data() {
    return {
      today: new Date(),
      wedding: new Date(2021, 6, 17)
    }
  }
}
</script>

<style lang="sass">
.page_
  h1, h5
    text-shadow: 0 0 15px #777
    margin: 0
    color: #fff

  h1
    font-weight: 400

  h5
    margin-top: 1rem
    font-weight: 500

  .q-page-container
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-image: url("~assets/sunrisesmile.jpg")
      background-size: cover
      background-position: center
      filter: brightness(95%)
      @media screen and (max-width: 600px)
        background-position: 66% center
</style>
