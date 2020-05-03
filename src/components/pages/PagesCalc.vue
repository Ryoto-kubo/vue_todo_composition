<template>
  <templateCalc :operator="Operator" :number-unit-array="numberUnitArray" />
</template>

<script lang="ts">
import templateCalc from '@/components/templates/templateCalc.vue'
import { defineComponent, reactive } from '@vue/composition-api'
import { Operator } from '../../common/operator'
export default defineComponent({
  components: {
    templateCalc
  },
  setup() {
    const numberUnitArray: string[][] = reactive([
      [
        { value: '(', type: 'operator' },
        { value: ')', type: 'operator' },
        { value: '%', type: 'operator' },
        { value: 'AC', type: 'operator' }
      ],
      [
        { value: '7', type: 'number' },
        { value: '8', type: 'number' },
        { value: '9', type: 'number' },
        { value: '÷', type: 'operator' }
      ],
      [
        { value: '4', type: 'number' },
        { value: '5', type: 'number' },
        { value: '6', type: 'number' },
        { value: '×', type: 'operator' }
      ],
      [
        { value: '1', type: 'number' },
        { value: '2', type: 'number' },
        { value: '3', type: 'number' },
        { value: '-', type: 'operator' }
      ],
      [
        { value: '0', type: 'number' },
        { value: '.', type: 'number' },
        { value: '=', type: 'calculation' },
        { value: '+', type: 'operator' }
      ]
    ])

    return {
      Operator,
      numberUnitArray
    }
  }
})
</script>

<style></style>
