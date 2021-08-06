<template>
  <div>
    <ImageViewer :image="images[imageIndex]" :mostra="show" />

    <WaterMark :logoPath="api.getApiLogoPath()" />

    <InfoBar :show="show" style="margin-top: 100%">
      <div class="col1">
        <div class="title">
          {{ images[imageIndex]?.description ?? "No Title" }}
        </div>
        <span>{{
          images[imageIndex]?.alt_description ?? "No description"
        }}</span>
      </div>
      <div class="col2">
        <BlueButton :clickCallback="changeImage">
          <img :src="require('../assets/arrow.svg')" style="width: 1.5em" />
        </BlueButton>
      </div>
    </InfoBar>

    <SearchBar @images-loaded="onImagesLoaded" :api="api" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageViewer from "./ImageViewer.vue";
import InfoBar from "./InfoBar.vue";
import BlueButton from "./BlueButton.vue";
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
    BlueButton,
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
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.infoBar .row .col1 {
  width: 70%;
  color: white;
  text-align: initial;
  font-weight: 600;
  display: grid;
}
.infoBar .row .col1 span {
  color: #92979c;
  font-weight: 100;
  font-size: 0.9em;
}
.infoBar .row .col2 {
  width: 30%;
  display: grid;
  justify-content: end;
}
.neomorphism {
  border: 0px;
  background: #32373d;
  box-shadow: 16px 16px 33px #1d1f23, -16px -16px 33px #484f57;
}
</style>
