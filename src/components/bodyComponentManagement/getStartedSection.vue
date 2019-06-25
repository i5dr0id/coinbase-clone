<template>
  <div class="getstarted-section">
    <div class="getstarted-section-flex">
      <div class="getstarted-section-flex-row">
        <div class="getstarted-section-text">
          <h2 class="getstarted-section-text-title">Ready to buy bitcoin?</h2>
          <span class="getstarted-section-text-sub">Get started with NGN 50 or less.</span>
        </div>
        <form class="form-email">
          <input type="email" placeholder="Email address">
          <button class="btn-submit">
            <span class="btn-email-text">Get started</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.getstarted-section {
  background-color: rgb(0, 47, 107);
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
.getstarted-section-flex {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  margin: 0px auto;
}
.getstarted-section-flex-row {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  padding: 100px 0px;
}

.getstarted-section-text {
  font-size: 40px;
  color: rgb(255, 255, 255);
}
.getstarted-section-text-title {
  font-size: 40px;
  font-weight: 600;
  margin: 0px;
}

.getstarted-section-text-sub {
  font-weight: 400;
  margin: 0px;
}

.form-email {
  margin-top: 8px;
  width: 455px;
  display: flex;
  border-radius: 8px;
}

input {
  margin-right: 10px;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  color: rgb(11, 52, 102);
  flex: 1 1 0%;
  padding: 13px 16px 15px;
  border-radius: 4px;
  border-style: none;
}

.btn-submit {
  position: relative;
  width: auto;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 16px;
  background-color: rgb(5, 177, 105);
  margin: 0px;
  border-radius: 4px;
  transition: all 80ms ease-in-out 0s;
  padding: 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(5, 177, 105);
}

.btn-email-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  font-family: Graphik, sans-serif;
  font-weight: 500;
}
@media (max-width: 992px) {

.getstarted-section-flex-row {
      flex-flow: column;
    padding: 76px 0px;
}

.getstarted-section-text {
      font-size: 32px;
    text-align: center;
    padding-bottom: 88px;
}
}
</style>

