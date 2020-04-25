<template>
  <atoms-calc-button
    :number-unit-array="numberUnitArray"
    :handle-add-input="handleAddInput"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    numberUnitArray: {
      type: Array,
      required: true
    },
    handleAddInput: {
      type: Function,
      requird: true
    }
  }
})
</script>
