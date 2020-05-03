<template>
  <div class="accordion_contents">
    <div @click="handleIsShowAccordion()">
      <moleculesAccordion :id="id" />
    </div>
    <moleculesAccordionContents
      :is-show-accordion="isShowAccordion"
      v-if="isShowAccordion"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default {
  props: {
    id: {
      type: String,
      required: true
    },
    handleRotateArrow: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isShowAccordion: false
    }
  },
  methods: {
    handleIsShowAccordion() {
      this.isShowAccordion = !this.isShowAccordion
      this.handleRotateArrow(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion_contents {
  width: 100%;
  max-width: 350px;
  margin: auto;
}
</style>
