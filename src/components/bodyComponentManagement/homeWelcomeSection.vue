<template>
  <div class="home-welcome">
    <div class="home-welcome-main">
      <div class="home-welcome-main-flex">
        <h2 class="home-welcome-main-message">Buy and sell cryptocurrency</h2>
        <p
          class="home-welcome-sub-message"
        >Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</p>
        <form class="home-main-form">
          <input
            type="email"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            placeholder="Email address"
            value
          >
          <button type="green" class="btn-submit">
            <span class="form-btn-text">Get started</span>
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
.home-welcome {
  background-color: rgb(22, 82, 240);
}
.home-welcome-main {
  display: flex;
  flex-direction: row;
  width: 100%;
  /* max-width: 1180px; */
  justify-content: center;
  margin: 0px auto;
  padding: 35px 0px 200px;
}

.home-welcome-main-flex {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: white;
  max-width: 660px;
}
.home-welcome-main-message {
  font-size: 48px;
  font-weight: 600;
  font-style: normal;
  line-height: 1.17;
  margin: 0px;
}

.home-welcome-sub-message {
  opacity: 0.9;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  color: rgb(255, 255, 255);
  margin: 24px 0px;
}
.home-main-form {
  margin-top: 8px;
  width: 455px;
  display: flex;
  border-radius: 8px;
}

.home-main-form input {
  margin-right: 10px;
  font-family: Graphik, sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.75;
  color: rgb(11, 52, 102);
  flex: 1 1 0%;
  padding: 13px 16px 15px;
  border-radius: 4px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
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
  border-image: initial;
}

.form-btn-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
  font-family: Graphik, sans-serif;
  font-weight: bold;
}

@media (max-width: 560px) {
  .home-main-form {
    width: 100% !important;
    flex-direction: column !important;
  }

  .home-welcome-main {
    /* margin: 0px !important; */
    /* padding: 13px 16px 15px !important; */
  }

  .home-welcome-main-flex {
    text-align: center !important;
  }
  .home-welcome-main {
    /* padding: 50px 24px 113px !important; */
  }

  /* margin-right: 10px;
    margin-left: 10px; */
  .home-main-form input {
    margin-right: 20px;
    margin-left: 20px;
  }

  .home-main-form button {
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 10px;
  }
}
</style>

