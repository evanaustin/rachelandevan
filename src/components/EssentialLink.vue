<template>
	<q-item v-if="!link.includes('http')" clickable tag="a" :to="link">
		<q-item-section>
			<q-item-label>{{ title }}</q-item-label>
		</q-item-section>
	</q-item>
	<q-item v-else clickable tag="a" :href="link" target="_blank">
		<q-item-section>
			<q-item-label>{{ title }}</q-item-label>
		</q-item-section>
	</q-item>
</template>

<script>
	export default {
		name: "EssentialLink",
		props: {
			title: {
				type: String,
				required: true,
			},

			caption: {
				type: String,
				default: "",
			},

			link: {
				type: String,
				default: "#",
			},

			icon: {
				type: String,
				default: "",
			},
		},
	};
</script>
