<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
        <div class="tab" v-bind:class="{active: currentTab === 1}" @click="changeTab(1)">My Tasks</div>
      </router-link>
      <router-link to="/in-progress">
        <div class="tab" v-bind:class="{active: currentTab === 2}" @click="changeTab(2)">In Progress</div>
      </router-link>
      <router-link to="/completed">
        <div class="tab" v-bind:class="{active: currentTab === 3}" @click="changeTab(3)">Completed</div>
      </router-link>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentTab: 1
    }
  },
  methods: {
    changeTab(i) {
      console.log(i)
      this.currentTab = i
    }
  }
}
</script>

<style>
:root {
  --main-color: #4A90E2;
  --tab-line-color: #00408B;
  --yellow-color: #F5A623;
  --light-yellow-color: #FFF2DC;
  --item-background-color: #F2F2F2;
  --hint-text-color: #C8C8C8;
  --icon-color: #757575;
  --background-color: #E1E1E1;
  --white-color: #ffffff;
  --black-color: #000000;
  --font-size-title: 24px;
}
* {
  font-family: Roboto-Medium;
  box-sizing: border-box;
}
html, body {
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
<style scoped>
.header {
  background: var(--main-color);
  height: 76px;
  display: flex;
  justify-content: center;
}
.body {
  background: var(--background-color);
  padding: 24px 0;
}
.tab {
  font-size: var(--font-size-title);
  color: var(--tab-line-color);
  text-align: center;
  width: 220px;
  padding: 23px 0 25px;
  height: 76px;
  /*flex: 0 0 30%;*/
}
.tab.active {
  color: var(--white-color);
  border-bottom: 5px solid var(--tab-line-color);
}
</style>