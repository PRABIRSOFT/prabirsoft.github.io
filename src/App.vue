<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <Content></Content>
    </v-app>
  </div>
</template>

<script>
import Header from './components/Header'
import Content from './components/Content'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Header: Header,
    Content: Content
  }
}
</script>

<style>
</style>
