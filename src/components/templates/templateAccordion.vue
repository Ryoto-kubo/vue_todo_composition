<template>
  <div>
    <div class="accordion_wrapper">
      <organismsAccordion id="0" :handle-rotate-arrow="handleRotateArrow" />
    </div>
    <div class="accordion_wrapper">
      <organismsAccordion id="1" :handle-rotate-arrow="handleRotateArrow" />
    </div>
  </div>
</template>

<script>
import organismsAccordion from '../organisms/organismsAccordion'
export default {
  components: {
    organismsAccordion
  },
  props: {
    handleRotateArrow: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion_wrapper {
  margin-bottom: 30px;
}
</style>
