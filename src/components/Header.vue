<style scoped>
.banner {
  position: relative;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 50%);
  position: fixed;
  width: 100%;
  top: 0;
}
.banner .top {
  background-color: #0072fb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;
}
.banner .top .logo h1 {
  color: white;
  cursor: pointer;
}
.banner .top .login-container {
  display: flex;
  justify-content: space-between;
  width: 175px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.banner .top .login-container .login {
  color: white;
}
.banner .top .login-container .free-trail a {
  line-height: 2rem;
  font-size: 14px;
  font-weight: 400;
  display: inline-block;
  padding: 0 0.75rem;
  line-height: 1.875rem;
  border: 1px solid transparent;
  vertical-align: middle;
  font-size: 11px;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.025em;
  white-space: nowrap;
  background-image: none;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  background-color: #343434;
  color: white;
}
.banner .bottom {
  display: flex;
  background-color: #343434;
  padding: 0px 10%;
}
.banner .bottom .subtitle {
  color: white;
  align-items: center;
}
</style>

<template>
  <div class="banner">
    <div class="top">
      <div class="logo">
        <h1 v-on:click="setCurrentSection('home')">DEMO Streaming</h1>
      </div>
      <div class="login-container">
        <div class="login">
          <a>Log in</a>
        </div>
        <div class="free-trail">
          <a>Start your free trial</a>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h2 class="subtitle">Popular {{ changeTitle(getCurrentSection) }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["getCurrentSection"])
  },
  methods: {
    ...mapMutations(["SET_CURRENTSECTION"]),
    setCurrentSection(currentSection) {
      this.SET_CURRENTSECTION(currentSection);
    },
    changeTitle(currentSection) {
      switch (currentSection) {
        case "home":
          return "Titles";
        case "movie":
          return "Movies";
        case "series":
          return "Series";
        default:
          return "Home";
      }
    }
  }
};
</script>
