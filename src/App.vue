<template>
  <div id="app" light>
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'

export default {
  name: 'App',
  components: {
    Header: Header,
    Content: Content
  }
}
</script>

<style>
#app {}
</style>
