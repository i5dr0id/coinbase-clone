<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  // min-height: 100vh;
  // overflow-x: hidden;
  // overflow-y: scroll;
}
@font-face {
  font-family: "Graphik";
  src: url("./assets/fonts/Graphik-Regular.ttf");
}

body,
html {
  font-family: Graphik, sans-serif;
    margin: 0 auto;
}
.w-100 {
  width: 100%;
}
</style>
