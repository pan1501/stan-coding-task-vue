<style scoped>
.footer {
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #1e1e1e;
  color: #fff;
  padding: 40px 0px;
}
.footer-top {
  color: #bdbdbd;
  text-align: left;
  font-size: 11px;
  padding: 0px 10%;
}
.footer-top .links {
  list-style: none;
  padding: 0px;
}
.footer-top li {
  display: inline-block;
}
.footer-top li:hover {
    color:#09f;
    cursor: pointer;
}
.footer-top li::after {
  content: "|";
  display: inline-block;
  padding: 0 0.5em 0 0.6em;
  color: #999;
}

.footer-top li:last-child:after {
  content: "";
}

.footer-top .copyright {
  top: 60px;
  margin: 0;
  text-align: left;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0px 10%;
}
.footer-bottom .social-container, .store-container {
    margin: 1em 0;
    padding: 5px 0;
    display: grid;
    width: 300px;
    justify-content: center;
}
.footer-bottom .social-container {
    grid-gap: 30px;
    grid-template-columns: auto auto auto;
}
.footer-bottom .store-container {
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill, 135px);;
}
.footer-bottom .social-container .social {
    width: 30px;
    height: 30px;
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: center center;
    cursor: pointer;
}
.footer-bottom .store-container .store {
    width: 135px;
    height: 40px;
    background-size: 135px 40px;
    background-repeat: no-repeat;
    background-color: transparent;
    background-position: center center;
    cursor: pointer;
}

.footer-bottom .social-container .facebook {
    background-image: url(../assets/facebook-white.svg);
}
.footer-bottom .social-container .facebook:hover {
    background-image: url(../assets/facebook-blue.svg);
}
.footer-bottom .social-container .twitter {
    background-image: url(../assets/twitter-white.svg);
}
.footer-bottom .social-container .twitter:hover {
    background-image: url(../assets/twitter-blue.svg);
}
.footer-bottom .social-container .instagram {
    background-image: url(../assets/instagram-white.svg);
}
.footer-bottom .social-container .instagram:hover {
    background-image: url(../assets/instagram-blue.svg);
}

.footer-bottom .store-container .android {
    background-image: url(../assets/play-store.svg);
}
.footer-bottom .store-container .ios {
    background-image: url(../assets/app-store.svg);
}
</style>

<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="links">
        <li v-on:click="setCurrentSection('home')">Home</li>
        <li v-on:click="setCurrentSection('unknown')">Terms and Conditions</li>
        <li v-on:click="setCurrentSection('unknown')">Privacy Policy</li>
        <li v-on:click="setCurrentSection('unknown')">Collection Statement</li>
        <li v-on:click="setCurrentSection('unknown')">Help</li>
        <li v-on:click="setCurrentSection('unknown')">Manage Account</li>
      </ul>
      <div class="copyright">
        <p>Copyright 2021 DEMO Streaming. All Rights Reserved</p>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="social-container">
          <div class="facebook social" v-on:click="setCurrentSection('unknown')"></div>
          <div class="twitter social" v-on:click="setCurrentSection('unknown')"></div>
          <div class="instagram social" v-on:click="setCurrentSection('unknown')"></div>
      </div>
      <div class="store-container">
          <div class="android store" v-on:click="setCurrentSection('unknown')"></div>
          <div class="ios store" v-on:click="setCurrentSection('unknown')"></div>
      </div>
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
    }
  }
};
</script>
