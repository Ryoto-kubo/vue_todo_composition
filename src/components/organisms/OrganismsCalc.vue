<template>
  <div class="calculator_wrapper">
    <div class="title_wrapper">
      <molecules-title />
    </div>
    <div class="input_wrapper">
      <molecules-calc-display
        :input-value="inputValue"
        :handle-show-history="handleShowHistory"
      />
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
import { defineComponent, reactive, Ref, toRefs } from '@vue/composition-api'
function useAddInput(operator: Record<string, string>) {
  const state = reactive<{ historyArray: string[]; inputValue: string }>({
    historyArray: [],
    inputValue: ''
  })
  const handleInputClear = (): void => {
    state.inputValue = ''
  }
  const handleInputBinomialOperator = (cmd: string): void => {
    state.inputValue += ' ' + cmd + ' '
  }
  const handleCalculation = (
    numArray: number[],
    operatorArray: string[],
    operator: Record<string, string>
  ): void => {
    operatorArray.map((element, index) => {
      if (index === 0) {
        switch (element) {
          case operator.plus:
            state.inputValue = String(numArray[index] + numArray[index + 1])
            break
          case operator.minus:
            state.inputValue = String(numArray[index] - numArray[index + 1])
            break
          case operator.multiplication:
            state.inputValue = String(numArray[index] * numArray[index + 1])
            break
          case operator.division:
            state.inputValue = String(numArray[index] / numArray[index + 1])
            break
        }
      } else {
        switch (element) {
          case operator.plus:
            state.inputValue = String(
              Number(state.inputValue) + numArray[index + 1]
            )
            break
          case operator.minus:
            state.inputValue = String(
              Number(state.inputValue) - numArray[index + 1]
            )
            break
          case operator.multiplication:
            state.inputValue = String(
              Number(state.inputValue) * numArray[index + 1]
            )
            break
          case operator.division:
            state.inputValue = String(
              Number(state.inputValue) / numArray[index + 1]
            )
            break
        }
      }
    })
  }
  const handleInputValueToArray = (): void => {
    const inputValueArray = state.inputValue.split(' ')
    const operatorArray: string[] = []
    const numArray: number[] = []
    inputValueArray.map(element => {
      if (
        element === '+' ||
        element === '-' ||
        element === '×' ||
        element === '÷'
      ) {
        operatorArray.push(element)
      } else {
        numArray.push(Number(element))
      }
    })
    handleCalculation(numArray, operatorArray, operator)
    state.historyArray.push(state.inputValue)
  }
  const handleAddInput = (cmd: string): void => {
    if (cmd === 'AC') {
      handleInputClear()
      return
    }
    if (cmd === '+' || cmd === '-' || cmd === '÷' || cmd === '×') {
      handleInputBinomialOperator(cmd)
      return
    }
    if (cmd === '=') {
      handleInputValueToArray()
      return
    }
    state.inputValue += cmd
  }

  return {
    ...toRefs(state),
    handleAddInput
  }
}

function useShowHistory(inputValue: Ref<string>) {
  const handleShowHistory = () => {
    console.log(inputValue)
  }

  return {
    handleShowHistory
  }
}
export default defineComponent({
  props: {
    operator: {
      type: Object,
      required: true
    },
    numberUnitArray: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const { operator } = props
    const { inputValue, handleAddInput } = useAddInput(operator)
    const { handleShowHistory } = useShowHistory(inputValue)

    return {
      inputValue,
      handleAddInput,

      handleShowHistory
    }
  }
})
</script>

<style lang="scss" scoped>
.input_wrapper {
  margin-bottom: 20px;
}
</style>
