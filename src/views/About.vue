<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a-button type="primary" @click="handleClick">Button></a-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message.info('This is a normal message')
    },
  },
}
</script>
