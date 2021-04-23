<style scoped>
.body{
  padding-top: 150px;
  min-height: 570px;
}
body .unknown {
  padding: 0px 10%;
}
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 30px;
  padding: 50px 10%;
}
.card-background {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(../assets/movie-placeholder.png);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5), 0px 8px 16px rgba(0, 0, 0, 0.5),
    0px 16px 32px rgba(0, 0, 0, 0.5);
  height: 250px;
  border-radius: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-background h1 {
  color: white;
}
.card-subtitle {
  margin-top: 12px;
  font-size: 14px;
  text-align: left;
  color: #343434;
}
</style>

<template>
  <div class="body" v-if="getDataReady">
    <div v-if="getCurrentSection === 'home'" class="card-container">
      <div :key="index" v-for="(type, index) in getProgramTypes">
        <div class="card-background" v-on:click="setCurrentSection(type)">
          <h1>{{ type.toUpperCase() }}</h1>
        </div>
        <div class="card-subtitle">
          <h3>Popular {{ type }}</h3>
        </div>
      </div>
    </div>
    <div class='unknown' v-else-if="getCurrentSection === 'unknown'">
      <h3>Oops, something went wrong...</h3>
    </div>
    <div v-else class="card-container">
      <div
        :key="index"
        v-for="(record, index) in getNestedData[getCurrentSection]"
      >
        <div class="card-background" :style="{ backgroundImage: `url(${record.images['Poster Art'].url})` }">
        </div>
        <div class="card-subtitle">
          <h3>{{record.title}}</h3>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class='unknown'>
      <h3>Loading...</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Body",
  components: {},
  computed: {
    ...mapGetters(['getDataReady',"getCurrentSection", "getProgramTypes", "getNestedData"])
  },
  methods: {
    ...mapMutations(["SET_CURRENTSECTION"]),
    setCurrentSection(currentSection) {
      this.SET_CURRENTSECTION(currentSection);
    }
  }
};
</script>
