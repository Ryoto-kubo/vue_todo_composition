<template>
  <div class="title_contaier">
    <div class="title_contaier_item">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title_contaier {
  &_item {
    p {
      margin: 0;
      color: #6fbae5;
      font-weight: bold;
    }
  }
}
</style>
