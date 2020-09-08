<template>
	<q-page class="flex flex-center">
		<div class="q-pa-md full-width">
			<lightbox :items="images"></lightbox>
		</div>
	</q-page>
</template>

<script>
	export default {
		name: "Photos",
		data() {
			return {
				images: [
					"https://live.staticflickr.com/65535/50296327082_213ddd75ec_k.jpg",
					"https://live.staticflickr.com/65535/50296168576_e34286f5b4_k.jpg",
					"https://live.staticflickr.com/65535/50295492693_8652397b43_k.jpg",
					"https://live.staticflickr.com/65535/50295493113_adef0aa4b4_k.jpg",
					"https://live.staticflickr.com/65535/50296327012_df4abfd947_b.jpg",
					"https://live.staticflickr.com/65535/50296328352_67dcc41ff1_h.jpg",
					"https://live.staticflickr.com/65535/50296169826_f0dd58d3ed_k.jpg",
					"https://live.staticflickr.com/65535/50295494893_5714a9b7f7_h.jpg",
					"https://live.staticflickr.com/65535/50296171396_359d40fc74_h.jpg",
					"https://live.staticflickr.com/65535/50296330447_2d6e759b4c_h.jpg",
          "https://live.staticflickr.com/65535/50295495548_4a50bc4617_h.jpg",
          "https://live.staticflickr.com/65535/50296331122_a391173654_h.jpg",
          "https://live.staticflickr.com/65535/50296331492_db3fef525a_h.jpg",
          "https://live.staticflickr.com/65535/50295496543_3ea990a2be_h.jpg",
          "https://live.staticflickr.com/65535/50295496958_98d556ee31_h.jpg",
          "https://live.staticflickr.com/65535/50296332107_ecb68ac38c_b.jpg",
          "https://live.staticflickr.com/65535/50296334512_837aa9298c_b.jpg",
          "https://live.staticflickr.com/65535/50296335122_48c5ce4fd1_b.jpg",
          "https://live.staticflickr.com/65535/50296166176_a9b1eddd2f_b.jpg"
				],
			};
		},
	};
</script>

<style lang="scss">
.lb-grid {
	height: 1000px;
}
</style>
