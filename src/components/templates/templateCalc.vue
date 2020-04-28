<template>
  <div class="calculator">
    <organisms-calc :operator="operator" />
  </div>
</template>

<script>
import organismsCalc from '@/components/organisms/organismsCalc'
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  components: {
    organismsCalc
  },
  props: {
    operator: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.calculator {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: auto;
}
</style>
