
<style>
body{
  margin: 0px;
}
</style>

<template>
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Body from './components/Body'
import Footer from './components/Footer';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  },
  methods: {
    ...mapActions([
      'LOAD_DATA'
    ])
  },
  mounted () {
    this.LOAD_DATA()
  },
  computed: {
    ...mapGetters([
      'getDataReady',
      'getCurrentSection'
    ])
  }
}
</script>