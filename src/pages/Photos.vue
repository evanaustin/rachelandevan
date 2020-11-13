<template>
	<q-page>
		<div class="q-pa-md full-width">
			<div class="container">
				<q-infinite-scroll @load="getNextBatch" :offset="50">
					<stack
						:column-min-width="300"
						:gutter-width="15"
						:gutter-height="15"
						monitor-images-loaded
					>
						<stack-item
							v-for="(image, i) in cleanImages"
							:key="i"
							style="transition: transform 300ms"
						>
							<img
								class="full-width"
								:src="image.url_z"
								@click="openLightbox(image.url_o)"
							/>
						</stack-item>
					</stack>

					<template #loading>
						<div class="row justify-center q-my-md">
							<q-spinner-dots v-if="morePages" color="primary" size="40px"></q-spinner-dots>
						</div>
					</template>
				</q-infinite-scroll>
			</div>
		</div>

		<q-dialog v-model="lightbox">
			<q-card style="width: 900px; max-width: 80vw">
				<!-- <q-card-section class="row items-center q-pb-none">
					<q-space></q-space>
					<q-btn icon="close" flat round dense v-close-popup></q-btn>
				</q-card-section> -->

				<q-card-section>
					<img class="full-width" :src="lightboxImage" />
				</q-card-section>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
	import axios from "axios";
	import { Stack, StackItem } from "vue-stack-grid";

	export default {
		name: "Photos",
		components: {
			Stack,
			StackItem,
		},
		data: () => ({
			loading: false,
			lightbox: false,
			lightboxImage: "",
			images: [],
      page: 1,
      morePages: true,
		}),
		computed: {
			cleanImages() {
				return this.images.filter((image) => image.url_n);
			},
		},
		methods: {
			loadImages(page = 1) {
				this.loading = true;
				this.fetchImages(page)
					.then((response) => {
						console.log(response.data.photoset.photo);
						this.images = this.images.concat(response.data.photoset.photo);
						this.loading = false;
					})
					.catch((error) => {
            // console.log("An error ocurred: ", error);
            this.morePages = false;
					});
			},
			fetchImages(page) {
				return axios({
					method: "get",
					url: "https://api.flickr.com/services/rest",
					params: {
						method: "flickr.photosets.getPhotos",
						api_key: "03f7ab90875d4d36d39aea26daed8f3b",
						photoset_id: "72157716861731176",
						extras: "url_n, url_m, url_z, url_l, url_o, date_taken",
						page,
						format: "json",
						nojsoncallback: 1,
						per_page: 20,
					},
				});
			},
			getNextBatch(index, done) {
        if (!this.morePages) return false;

        console.log(index, done);
				setTimeout(() => {
					this.page++;
					this.loadImages(this.page);
					done();
				}, 2000);
			},
			openLightbox(image) {
				this.lightboxImage = image;
				this.lightbox = true;
			},
		},
		beforeMount() {
			this.loadImages();
		},
	};
</script>

<style lang="sass">
.page_photos
  header
    background-color: transparent !important

  .q-page-container
    padding-top: 4rem !important
    padding-bottom: 4rem !important

  .q-page
    margin: 0 4rem

  .container
    margin: 0 auto
</style>
