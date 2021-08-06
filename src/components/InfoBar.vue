<template>
  <Bar :show="show" style="margin-top: 100%">
    <div class="col1">
      <div class="title">
        {{ title ?? "No Title" }}
      </div>
      <span>{{ description ?? "No description" }}</span>
    </div>
    <div class="col2">
      <BlueButton :clickCallback="changeImage">
        <img :src="require('../assets/arrow.svg')" style="width: 1.5em" />
      </BlueButton>
    </div>
  </Bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bar from "./Bar.vue";
import BlueButton from "./BlueButton.vue";

export default defineComponent({
  name: "InfoBar",
  components: {
    Bar,
    BlueButton,
  },
  props: {
    show: Boolean,
    row: String,
    description: String,
    title: String,
    changeImage: Function,
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
.Bar .row .col1 {
  width: 70%;
  color: white;
  text-align: initial;
  font-weight: 600;
  display: grid;
}
.Bar .row .col1 span {
  color: #92979c;
  font-weight: 100;
  font-size: 0.9em;
}
.Bar .row .col2 {
  width: 30%;
  display: grid;
  justify-content: end;
}
</style>
