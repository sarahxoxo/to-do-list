<template>
  <div class="main-container">
    <input type="" name="" placeholder="+ Add Task" class="add-task">
    <TaskItem></TaskItem>
    <TaskItem></TaskItem>
  </div>
</template>
<script>
import TaskItem from './TaskItem'

export default {
  name: 'Completed',
  components: {
    TaskItem
  }
}
</script>
<style scoped>
.main-container {
  width: 620px;
  margin: auto;

}
.add-task {
  background: var(--white-color);
  border: 2px solid var(--hint-text-color);
  border-radius: 5px;
  padding: 19px 33px 18px;
  width: 620px;
  font-size: var(--font-size-title);
  margin-bottom: 24px;
}
</style>