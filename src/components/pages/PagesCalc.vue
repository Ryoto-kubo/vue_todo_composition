<template>
  <template-calc :operator="Operator" />
</template>

<script lang="ts">
import templateCalc from '@/components/templates/templateCalc.vue'
import { defineComponent } from '@vue/composition-api'
import { Operator } from '../../common/operator'
export default defineComponent({
  components: {
    templateCalc
  },
  setup() {
    return {
      Operator
    }
  }
})
</script>

<style></style>
