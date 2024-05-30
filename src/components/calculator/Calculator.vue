<template>
  <div class="calculator flex justify-content-center align-items-center">
    <h1>Calculator</h1>
    <br>
    <FloatLabel>
      <InputNumber id="number-input" v-model="input"></InputNumber>
      <label for="number-input">Number</label>
    </FloatLabel>
    <CalculatorButtons :input="input" @result="result = $event"></CalculatorButtons>
    <h2 v-if="result">Result: {{ result }}</h2>
  </div>

</template>

<script lang="ts">
import {ref} from "vue";
import InputNumber from "primevue/inputnumber";
import FloatLabel from "primevue/floatlabel";
import Button from "primevue/button";
import {MathController} from "@/shared/MathController";
import CalculatorButtons from "@/components/calculator/CalculatorButtons.vue";

export default {
  name: "Calculator",
  components: {
    CalculatorButtons,
    InputNumber, FloatLabel, Button
  },
  setup() {
    const input = ref(4);
    const result = ref();

    const mc = ref(new MathController());

    return {
      input,
      result,
      mc
    }
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  flex-direction: column;

  .button-group {
    display: flex;
    gap: 5px;
    margin-top: 10px;
  }
}
</style>