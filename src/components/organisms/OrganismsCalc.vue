<template>
  <div>
    <molecules-title />
    <molecules-calc-input />
    <!-- <molecules-number-button /> -->
  </div>
</template>

<script lnag="ts">
import { defineComponent, computed, reactive, ref } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const numberArray = reactive([
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['0', '.', '+', '=']
    ])

    return {
      numberArray
    }
  }
})
</script>

<style></style>
