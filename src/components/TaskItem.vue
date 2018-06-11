<template>
  <div class="item">
    <div class="item-side">
      <input type="checkbox" name="" class="checkbox">
    </div>
    <div class="item-main">
      <div class="task-title">type sth...</div>
      <div>
        <i class="far fa-calendar-alt"></i>
        <span>5/12</span>
        <i class="far fa-file"></i>
        <i class="far fa-comment-dots"></i>
      </div>
    </div>
    <div class="item-side">
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-edit"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskItem'
}
</script>
<style scoped>
.item {
  max-width: 620px;
  position: relative;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 24px 32px 17px;
  align-items: flex-start;
  background: var(--item-background-color);
  margin-bottom: 8px;
}
.item-side {
  flex: 0 0 auto;
}
.item-main {
  flex: 1 1 auto;
  margin-left: 16px;
}
.item-main i {
  color: var(--icon-color);
}
.checkbox {
  background: #FFFFFF;
  border-radius: 2px;
  border: none;
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
}
.task-title {
  font-size: var(--font-size-title)
}
.fas.fa-star {
  color: var(--yellow-color);
}
</style>