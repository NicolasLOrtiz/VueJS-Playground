<script>
import DesignBasics from "../components/DesignBasics.vue";
import AccessibilityResources from "../components/AccessibilityResources.vue";
import LearnMore from "../components/LearnMore.vue";
import AccessibilityPageFooter from "../components/AccessibilityPageFooter.vue";

export default {
  name: "AccessibilityFundamentals",
  components: {
    DesignBasics,
    AccessibilityResources,
    LearnMore,
    AccessibilityPageFooter
  }
};
</script>

<template>
  <div id="app">
    <div class="container_top">
      <div>
        <h1 class="title">Accessibility with Vue</h1>
      </div>
      <DesignBasics />
    </div>
    <LearnMore />
    <AccessibilityResources />
    <AccessibilityPageFooter />
  </div>
</template>

<style lang="scss">
@import "../styles/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }

.title {
  background-color: $darkBlue;
  color: white;
  padding: 1em 0;
  margin: 0 auto;
  }
</style>
