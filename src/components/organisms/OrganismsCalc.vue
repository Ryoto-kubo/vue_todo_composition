<template>
  <div class="calculator_wrapper">
    <div class="title_wrapper">
      <molecules-title />
    </div>
    <div class="input_wrapper">
      <molecules-calc-input :default-value="defaultValue" />
    </div>
    <div class="button_wrapper">
      <molecules-calc-button
        :number-unit-array="numberUnitArray"
        :handle-add-input="handleAddInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import moleculesTitle from '@/components/plugins/molecules/moleculesTitle.vue'
import moleculesCalcInput from '@/components/plugins/molecules/moleculesCalcInput.vue'
import moleculesCalcButton from '@/components/plugins/molecules/moleculesCalcButton.vue'
import { defineComponent, reactive, ref } from '@vue/composition-api'

function useAddInput() {
  const defaultValue = ref('0')
  const handleAddInput = (num: string): void => {
    defaultValue.value += num
  }
  return {
    defaultValue,
    handleAddInput
  }
}

export default defineComponent({
  components: {
    moleculesTitle,
    moleculesCalcInput,
    moleculesCalcButton
  },
  setup() {
    const numberUnitArray = reactive([
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['0', '.', '+', '=']
    ])
    const { defaultValue, handleAddInput } = useAddInput()
    return {
      numberUnitArray,

      defaultValue,
      handleAddInput
    }
  }
})
</script>

<style lang="scss" scoped>
.input_wrapper {
  margin-bottom: 20px;
}
</style>
