<template>
  <ImageSearch />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageSearch from "./components/ImageSearch.vue";

export default defineComponent({
  name: "App",
  components: {
    ImageSearch,
  },
});
</script>

<style lang="scss">
:root {
  --background: #32373d;
}
body {
  background: var(--background);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  width: 100%;
  height: 100%;
  padding-bottom: 2em;
  background: var(--background);
}
</style>
