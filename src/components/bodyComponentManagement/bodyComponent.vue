<template>
  <div class="main">
    <homeWelcomeSection/>
    <statisticsTableSection/>
    <portfolioSection/>
    <hr>
    <valueSection/>
    <stripeSection/>
    <instructionsSection/>
    <getStartedSection/>
  </div>
</template>

<script>
import homeWelcomeSection from "./homeWelcomeSection";
import statisticsTableSection from "./statisticsTableSection";
import portfolioSection from "./portfolioSection";
import valueSection from "./valueSection";
import stripeSection from "./stripeSection";
import instructionsSection from "./instructionsSection";
import getStartedSection from "./getStartedSection";
export default {
  components: {
    homeWelcomeSection,
    statisticsTableSection,
    portfolioSection,
    valueSection,
    stripeSection,
    instructionsSection,
    getStartedSection
  }
};
</script>

<style scoped>
.main {
}
hr {
  margin: 0;
  padding: 0;
  /* height: 1px !important; */
  color: rgb(238, 238, 238);
}
</style>

