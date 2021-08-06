<template>
  <div>
    <ImageViewer :image="images[imageIndex]" :mostra="show" />

    <WaterMark :logoPath="api.getApiLogoPath()" />

    <InfoBar
      :show="show"
      :title="images[imageIndex]?.description"
      :description="images[imageIndex]?.alt_description"
      :changeImage="changeImage"
    />

    <SearchBar @images-loaded="onImagesLoaded" :api="api" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageViewer from "./ImageViewer.vue";
import InfoBar from "./InfoBar.vue";
import WaterMark from "./waterMark.vue";
import SearchBar from "./SearchBar.vue";
import ImageInterface from "../imageAPIs/image_interface";
import ApiProvaider from "../imageAPIs/api_provider";

export default defineComponent({
  name: "ImageSearch",
  components: {
    ImageViewer,
    InfoBar,
    SearchBar,
    WaterMark,
  },
  data() {
    return {
      show: false,
      imageIndex: 0,
      images: new Array<ImageInterface>(),
      api: ApiProvaider.provideApi(),
    };
  },
  methods: {
    onImagesLoaded(images: ImageInterface[]) {
      this.images = images;
      this.imageIndex = -1;
      this.changeImage();
    },
    changeImage(): void {
      this.show = false;
      setTimeout(() => {
        this.imageIndex = (this.imageIndex + 1) % this.images.length;
        this.show = true;
      }, 500);
    },
  },
});
</script>

<style lang="scss">
.neomorphism {
  border: 0px;
  background: #32373d;
  box-shadow: 16px 16px 33px #1d1f23, -16px -16px 33px #484f57;
}
</style>
