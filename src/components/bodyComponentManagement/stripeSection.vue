<template>
  <div class="stripe-section">
    <div class="stripe-section-flex">
      <div class="stripe-section-stats">
        <div class="stripe-stats-text">
          <h1 class="stripe-stat-text-title">$150B+</h1>
          <span class="stripe-stat-text-sub">Cryptocurrency exchanged</span>
        </div>
        <div class="stripe-stats-text">
          <h1 class="stripe-stat-text-title">42</h1>
          <span class="stripe-stat-text-sub">Countries supported</span>
        </div>
        <div class="stripe-stats-text">
          <h1 class="stripe-stat-text-title">20M+</h1>
          <span class="stripe-stat-text-sub">Customers served</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stripe-section {
  display: flex;
  background: rgb(22, 82, 240);
}
.stripe-section-flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  margin: 0px auto;
  /* padding: 24px; */
}
.stripe-section-stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  flex: 1 1 auto;
  margin: 40px 0px;
}
.stripe-stats-text {
  text-align: center;
  flex: 1 1 0%;
}
.stripe-stats-text-title {
  line-height: 48px;
  font-size: 56px;
  font-weight: 500;
  margin: 0px 0px 12px;
}
.stripe-stats-text-sub {
  line-height: 24px;
  font-size: 16px;
  opacity: 0.7;
}
</style>

