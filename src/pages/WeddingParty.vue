<template>
	<q-page class="flex">
		<div class="q-pa-md full-width">
			<div class="row q-col-gutter-x-md">
				<div class="col-6">
          <h6>Family of the Bride</h6>
					<q-list bordered separator>
						<q-item v-for="(name, role, ix) in brideParty" :key="ix">
							<q-item-section>
								<!-- <q-item-label overline>OVERLINE</q-item-label> -->
								<q-item-label>{{ name }}</q-item-label>
								<q-item-label caption>{{ role }}</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</div>
				<div class="col-6">
          <h6>Family of the Groom</h6>
					<q-list bordered separator>
						<q-item v-for="(name, role, ix) in groomParty" :key="ix">
							<q-item-section>
								<q-item-label>{{ name }}</q-item-label>
								<q-item-label caption>{{ role }}</q-item-label>
							</q-item-section>
						</q-item>
					</q-list>
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
	export default {
		name: "Wedding Party",
		data() {
			return {
				brideParty: {
					Bride: "Rachel Lauren Andrews",
					"Mother of the Bride": "Michele Smith",
					"Step-Father of the Bride": "Michael Smith",
					"Brother of the Bride": "Travis Andrews",
				},
				groomParty: {
					Groom: "Evan Austin Grinde",
					"Mother of the Groom": "Keri Grinde",
					"Father of the Groom": "Brian Grinde",
					"First Brother of the Groom": "Cleyton Grinde",
					"Second Brother of the Groom": "Zackary Grinde",
					// "Grandmother of the Groom": "Ursula Grinde",
				},
			};
		},
	};
</script>

<style lang="scss" scoped>
h6 {
  margin: 0 0 1rem;
}
</style>
