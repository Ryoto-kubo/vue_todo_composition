<template>
  <div>
    <div class="accordion_wrapper">
      <organismsAccordion id="0" />
    </div>
    <div class="accordion_wrapper">
      <organismsAccordion id="1" />
    </div>
  </div>
</template>

<script>
import organismsAccordion from '../organisms/organismsAccordion'
export default {
  components: {
    organismsAccordion
  }
}
</script>

<style lang="scss" scoped></style>
