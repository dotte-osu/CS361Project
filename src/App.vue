<template>
  <div id="app">
      <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand class="navbar-header" href="#"><router-link class="link" to="/">7 Wonders Of Oregon</router-link></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"><router-link class="link" to="/compare">Compare</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Locations" right>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Columbia River Gorge">Columbia River Gorge</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Crater Lake">Crater Lake</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Painted Hills">Painted Hills</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Oregon Coast">Oregon Coast</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Smith Rock">Smith Rock</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/The Wallowas">The Wallowas</router-link></b-dropdown-item>
            <b-dropdown-item href="#"><router-link class="link" to="/location/Mt. Hood">Mt. Hood</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap');

#app {
  font-family: 'Otomanopee One', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1{
  padding: 0;
  margin: 50px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.link {
  color: black;
  outline: none;
}

.navbar-header {
  margin-left: 2%;
}
</style>
