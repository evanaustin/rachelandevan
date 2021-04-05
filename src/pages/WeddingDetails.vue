<template>
  <q-page>
    <div class="q-pa-md full-width">
      <h1>Wedding Details</h1>
      <h5>Monday, May 3, 2021: Wedding Day!</h5>
      <p>
        We are eloping with immediate family to get married in
        <span class="struck">Kauai</span>,
        <span class="struck">St. Lucia</span>,
        <span class="struck">Key West</span> &hellip;<br />
        <strong>Sierra Vista in Bedford, VA!</strong> (plans have changed a
        couple times 😄).
      </p>
      <ul>
        <li>
          <strong>Wedding Ceremony and Reception at Sierra Vista</strong>
        </li>
        <ul>
          <li>6302 Forest Road</li>
          <li>Bedford, VA 24523</li>
          <li>6:30 pm</li>
          <li>Attire: Cocktail/Semi-Formal</li>
          <li>Catered reception dinner to follow</li>
        </ul>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "WeddingDetails",
};
</script>

<style lang="scss">
.struck {
  text-decoration: line-through;
}
// @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
// body {

// }
</style>
