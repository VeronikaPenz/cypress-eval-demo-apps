<template>
  <div class="button-group">
    <Button @click="emit('result', mc.add(input, 10))">+10</Button>
    <Button @click="emit('result', mc.subtract(input, 10))">-10</Button>
    <Button @click="emit('result', mc.multiply(input, 2))">x2</Button>
    <Button @click="emit('result', mc.divide(input, 2))">/2</Button>
  </div>
</template>

<script lang="ts">
import {ref} from "vue";
import InputNumber from "primevue/inputnumber";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import {MathController} from "@/shared/MathController";

export default {
  name: "CalculatorButtons",
  components: {
    InputNumber, FloatLabel, Button
  },
  props: {
    input: {
      type: Number,
      required: true
    }
  },
  emits: ['result'],
  setup(props: any, {emit}: any) {
    const mc = ref(new MathController());
    return {
      mc,
      emit
    }
  }
}
</script>

<style lang="scss" scoped>
.button-group {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}
</style>