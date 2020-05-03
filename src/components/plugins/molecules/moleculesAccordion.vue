<template>
  <div class="accordion_container_title">
    <atomsLightBulbSvg />
    <div>
      <atomsAccordionTitle title="お子様のことを教えてください" />
      <atomsIconChevronDown :id="'js-rotate_arrow_0' + id" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion_container_title {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border: 3px solid #6fbae5;
  border-radius: 5px;
  box-shadow: 0 3px 6px #707070;
}
.rotate_active {
  animation: rotateUp 0.5s forwards;
}
@keyframes rotateUp {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-180deg);
  }
}
.rotate_disabled {
  animation: rotateDown 0.5s forwards;
}
@keyframes rotateDown {
  0% {
    transform: rotate(-180deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
