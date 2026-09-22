<template>
  <div>
    <transition name="contentsContainer">
      <slot name="headText"></slot>
    </transition>
    <slot name="contents"></slot>
  </div>
</template>

<script>
export default {
  name: "ContentsContainer",
};
</script>
<style lang="scss" scoped></style>
