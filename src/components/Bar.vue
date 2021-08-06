<template>
  <transition name="Bar" appear>
    <div class="Bar" v-if="show">
      <div class="row" :style="{ display: row ?? 'inline-flex' }">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bar",
  props: {
    show: Boolean,
    row: String,
  },
});
</script>

<style lang="scss">
.Bar {
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
.Bar .row {
  margin-top: 2em;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: inline-flex;
}
.Bar-enter-active {
  animation: bounce 1s ease-in-out;
}
.Bar-leave-from {
  transform: translateY(0);
}
.Bar-leave-to {
  transform: translateY(60%);
}
.Bar-leave-active {
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
