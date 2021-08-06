<template>
  <div class="imageCard neomorphism">
    <img
      :src="image?.urls.regular"
      :alt="image?.alt_description"
      v-if="image"
    />
    <transition name="aperture" mode="out-in">
      <div class="aperture" v-show="mostra"></div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageViewer",
  props: {
    image: Object,
    mostra: Boolean,
  },
});
</script>

<style lang="scss">
.aperture {
  width: 100%;
  height: 100%;
  border: 0px solid var(--background);
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
}
.imageCard {
  position: fixed;
  left: 13%;
  top: 3em;
  width: 70vw;
  height: 70vw;
  padding: 0.5em;
  border-radius: 50%;
}
.imageCard img {
  border-radius: 50%;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
.aperture-enter-from,
.aperture-leave-to {
  border: 40vw solid var(--background);
}
.aperture-enter-active,
.aperture-leave-active {
  transition: all 1s ease;
}
</style>
