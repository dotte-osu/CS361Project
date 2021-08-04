<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="success">
        <b-navbar-brand class="navbar-header" href="#"
          ><router-link class="link" to="/"
            >7 Wonders Of Oregon</router-link
          ></b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#"
              ><router-link class="link" to="/compare"
                >Compare</router-link
              ></b-nav-item
            >
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Locations" right>
              <b-dropdown-item @click="reloadPage('Columbia River Gorge')"
                >Columbia River Gorge</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('Crater Lake')"
                >Crater Lake</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('Painted Hills')"
                >Painted Hills</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('Oregon Coast')"
                >Oregon Coast</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('Smith Rock')"
                >Smith Rock</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('The Wallowas')"
                >The Wallowas</b-dropdown-item
              >
              <b-dropdown-item @click="reloadPage('Mt. Hood')"
                >Mt. Hood</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    reloadPage(locName) {
      if (locName != this.$route.params.locname) {
        if (window.location.pathname.includes("location")) {
          this.$router.push(locName);
        } else {
          this.$router.push("/location/" + locName);
        }
        window.location.reload();
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap");

#app {
  font-family: "Otomanopee One", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  padding: 0;
  margin: 50px;
}

h1,
h2 {
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
