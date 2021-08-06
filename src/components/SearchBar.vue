<template>
  <InfoBar class="fixedBar" :show="true" row="block">
    <div>
      <select v-model="selectedTag">
        <option disabled value="" :style="{ opacity: '0.6' }">
          select a tag
        </option>
        <option v-for="(tag, index) in tags" :value="tag" :key="index">
          {{ tag }}
        </option>
      </select>
    </div>
    <div style="display: inline-flex" :style="{ marginTop: '.5em' }">
      <input v-model="query" />
      <BlueButton :clickCallback="searchImages" class="searchButton">
        <img :src="require('../assets/search.svg')" style="width: 1.5em" />
      </BlueButton>
    </div>
  </InfoBar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InfoBar from "./InfoBar.vue";
import BlueButton from "./BlueButton.vue";
import ImageInterface from "../imageAPIs/image_interface";
import ApiInterface from "../imageAPIs/api_interface";

export default defineComponent({
  name: "SearshBar",
  components: {
    InfoBar,
    BlueButton,
  },
  props: {
    api: {
      type: Object as () => ApiInterface,
    },
  },
  data() {
    return {
      tags: [] as string[],
      selectedTag: "",
      query: "sky",
    };
  },
  methods: {
    handleError(err: any) {
      console.log("Error:", err.message);
    },
    emitImagesLoadedEvent(images: ImageInterface[]) {
      this.$emit("images-loaded", images);
    },
    searchImages() {
      if (this.api) {
        const promise = this.api
          .getImagesByQuery(this.query)
          .then((images: ImageInterface[]) => {
            this.emitImagesLoadedEvent(images);
          })
          .catch((err) => {
            this.handleError(err);
          });
      }
    },
    getImagesByTag(tag: string): void {
      if (this.api) {
        const promise = this.api
          .getImagesByTag(this.query, tag)
          .then((images: ImageInterface[]) => {
            this.emitImagesLoadedEvent(images);
          })
          .catch((err) => {
            this.handleError(err);
          });
      }
    },
  },
  created() {
    this.tags = this.api ? this.api.getApiTagList() : [];
    this.searchImages();
  },
  watch: {
    selectedTag(value: string) {
      this.getImagesByTag(value);
    },
  },
});
</script>

<style lang="scss">
.searchButton {
  margin-top: 1em;
  margin-left: 0.5em;
}
select,
input {
  box-shadow: inset 6px 6px 8px 0px #363b41;
  width: 100%;
  border-radius: 2em;
  background: linear-gradient(145deg, #2d3237, #363b41);
  background: #494f56;
  color: #8eb7cf;
  border: 0px;
  font-size: 1.5em;
  margin-left: 0;
  margin-right: auto;
  padding: 0.25em;
  padding-left: 1em;
  padding-top: 0.3em;
}
input {
  margin-top: 1em;
  width: 70%;
}
select option:disabled {
  color: #000;
  font-weight: bold;
}
select:focus-visible,
input:focus-visible {
  border: none;
  outline: none;
}
.fixedBar {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  height: 22vh;
  min-height: 160px;
  width: 100%;
  margin-left: 0;
}
</style>
