<template>
  <div class="calculator">
    <organisms-calc />
  </div>
</template>

<script>
import organismsCalc from '@/components/organisms/organismsCalc'
export default {
  components: {
    organismsCalc
  }
}
</script>

<style lang="scss" scoped>
.calculator {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: auto;
}
</style>
