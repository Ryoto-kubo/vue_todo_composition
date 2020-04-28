<template>
  <div class="calculator_wrapper">
    <div class="title_wrapper">
      <molecules-title />
    </div>
    <div class="input_wrapper">
      <molecules-calc-input :input-value="inputValue" />
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
import { defineComponent, reactive, ref } from '@vue/composition-api'
function useAddInput(operator: Record<string, string>) {
  const inputValue = ref('')
  const historyArray = ref<string[]>([])

  const handleInputClear = (): void => {
    inputValue.value = ''
  }
  const handleInputBinomialOperator = (cmd: string): void => {
    inputValue.value += ' ' + cmd + ' '
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
            inputValue.value = String(numArray[index] + numArray[index + 1])
            break
          case operator.minus:
            inputValue.value = String(numArray[index] - numArray[index + 1])
            break
          case operator.multiplication:
            inputValue.value = String(numArray[index] * numArray[index + 1])
            break
          case operator.division:
            inputValue.value = String(numArray[index] / numArray[index + 1])
            break
        }
      } else {
        switch (element) {
          case operator.plus:
            inputValue.value = String(
              Number(inputValue.value) + numArray[index + 1]
            )
            break
          case operator.minus:
            inputValue.value = String(
              Number(inputValue.value) - numArray[index + 1]
            )
            break
          case operator.multiplication:
            inputValue.value = String(
              Number(inputValue.value) * numArray[index + 1]
            )
            break
          case operator.division:
            inputValue.value = String(
              Number(inputValue.value) / numArray[index + 1]
            )
            break
        }
      }
    })
  }
  const handleInputValueToArray = (): void => {
    const inputValueArray = inputValue.value.split(' ')
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
    historyArray.value.push(inputValue.value)
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
    inputValue.value += cmd
  }

  return {
    inputValue,
    historyArray,
    handleAddInput
  }
}

export default defineComponent({
  props: {
    operator: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { operator } = props
    const numberUnitArray = reactive([
      ['(', ')', '%', 'AC'],
      ['7', '8', '9', '÷'],
      ['4', '5', '6', '×'],
      ['1', '2', '3', '-'],
      ['0', '.', '=', '+']
    ])
    const { inputValue, historyArray, handleAddInput } = useAddInput(operator)

    return {
      numberUnitArray,

      inputValue,
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
