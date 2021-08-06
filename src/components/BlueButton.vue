<template>
  <button type="button" @click="clickCallback">
    <div>
      <div>
        <span><slot></slot></span>
      </div>
    </div>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlueButton",
  props: {
    clickCallback: Function,
  },
});
</script>

<style lang="scss">
button {
  border-radius: 50%;
  width: 4em;
  height: 4em;
  color: white;
  padding: 0;
  background: #32373d;
  box-shadow: 7px 7px 14px #1f2226, -7px -7px 14px #454c54;
  border: none;
}
button div {
  background: linear-gradient(145deg, #0ea5fb, #0c8bd4);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: none;
  padding: 5%;
}
button div div {
  background: linear-gradient(145deg, #0c8bd4, #0ea5fb);
  width: 90%;
  height: 90%;
  border-radius: 50%;
  border: none;
  margin: 0;
  position: relative;
}
button div div span {
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  left: 33%;
}
</style>
