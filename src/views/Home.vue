<template>
  <div class="home">
    <headerComponent/>
    <bodyComponent/>
    <footerComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import headerComponent from "@/components/headerComponent";
import bodyComponent from "@/components/bodyComponentManagement/bodyComponent";
import footerComponent from "@/components/footerComponent";

export default {
  name: "home",
  components: {
    headerComponent,
    bodyComponent,
    footerComponent
  }
};
</script>

<style scoped>
.home {
}
</style>

