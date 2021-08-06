<template>
  <transition name="infoBar" appear>
    <div class="infoBar" v-if="show">
      <div class="row" :style="{ display: row ?? 'inline-flex' }">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoBar",
  props: {
    show: Boolean,
    row: String,
  },
});
</script>

<style lang="scss">
.infoBar {
  background: linear-gradient(180deg, #34393f, #1f2025);
  position: absolute;
  width: 98%;
  margin-left: 0.5%;
  height: 42vh;
  border-radius: 2em 2em 0 0;
  border: 1px solid #42464f;
  border-bottom: 0px;
  border-right: 0px;
  box-shadow: 10px 10px 4px #1d1f23;
}
.infoBar .row {
  margin-top: 2em;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
}
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
.infoBar-enter-active {
  animation: bounce 1s ease-in-out;
}
.infoBar-leave-from {
  transform: translateY(0);
}
.infoBar-leave-to {
  transform: translateY(60%);
}
.infoBar-leave-active {
  transition: all 0.5s ease;
}
@keyframes bounce {
  0% {
    transform: translateY(60%);
  }
  65% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-5%);
  }
  90% {
    transform: translateY(1%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
