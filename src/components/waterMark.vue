<template>
  <div class="waterMark">
    <img :src="logoPath" :style="{ width: '5em' }" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WaterMark",
  props: {
    logoPath: String,
  },
});
</script>

<style lang="scss">
.waterMark {
  position: absolute;
  top: 60vh;
  justify-content: center;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  opacity: 0.2;
  font-size: 2em;
  width: 100%;
}
</style>
