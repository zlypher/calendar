<template>
  <div>
    <nav class="nav">
      <div class="u-container nav-content">
        TODO
        <nuxt-link class="nav-btn" to="/login">Login</nuxt-link>
      </div>
    </nav>
    <nuxt/>
    <footer class="footer">
      <div class="u-container">
        &copy; Chain Calendar 2018
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "~assets/variables.scss";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: $color-white;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: $color-white;
  background-color: #35495e;
}

.nav {
  background-color: #343a40!important;
  padding: 16px;
  color: $color-white;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-btn {
  padding: 8px 16px;
  border: 1px solid $color-white;
  border-radius: 4px;
  text-decoration: none;
  color: $color-white;
}

.footer {
  margin-top: 32px;
  padding: 16px;
  background-color: rgba(0, 0, 0, .03);
  border-top: 1px solid rgba(0, 0, 0, .125);
  color: #6c757d!important;
}

.u-container {
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
