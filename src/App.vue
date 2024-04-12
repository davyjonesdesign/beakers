/* eslint-disable */
<template>
  <div class="home-wrapper">
    <div id="nav">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.89795 60.89783"><g id="a"/><g id="b"><g id="c"><g><path class="d" d="M60.85962,0H0V60.89783H60.89795V0m-6.23486,43.44135c0,5.49884-4.45752,9.95648-9.9563,9.95648H8.73462V7.5h29.62378c5.49878,0,9.9563,4.45764,9.9563,9.95642v3.51959c0,1.53442-.35718,2.98193-.97729,4.28003,4.22021,1.15503,7.32568,5.00702,7.32568,9.59369v8.59161Z"/><path class="d" d="M44.70679,30.9325H18.69116c-2.0542,0-3.7251,1.59454-3.88599,3.60797v12.81818h29.90161c2.15991,0,3.91724-1.75726,3.91724-3.9173v-8.59161c0-2.15991-1.75732-3.91724-3.91724-3.91724Z"/><path class="d" d="M24.63379,24.89331h13.72461c2.15991,0,3.91699-1.75726,3.91699-3.9173v-3.51959c0-2.15997-1.75708-3.91724-3.91699-3.91724H14.80518v12.14154c1.19385-.50665,2.50708-.78741,3.88599-.78741h5.94263Z"/></g></g></g></svg>
        
      </div>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/menu">Menu</router-link>
        <!-- <router-link to="/about">About</router-link> -->
        <!-- <router-link to="/about">Location</router-link> -->
      </div>
    </div>
    <router-view />
    <footer>
      <h5>created by:</h5> <h4>Davy Jones</h4>
    </footer>
  </div>
</template>

<style>
html {
  margin: 0;
  --off-white: #F0FFFF;
  --midnight: #152726;
  --navy: #000000;
  --sunrise: #FFBA52;
  --pumpkin: #C25908;
  --sky: #A2F0FA;
  --transition: all 0.2s ease-in-out 0s;

}
body {
  margin: 0;
  color: var(--off-white);

}
body::-webkit-scrollbar {
  width: 1em;
}
 
body::-webkit-scrollbar-track {
  border: 1px solid var(--navy);
  -webkit-box-shadow: none;
  background: var(--midnight);
}
 
body::-webkit-scrollbar-thumb {
  background-color: var(--navy);
  outline: none;
}
body::-webkit-scrollbar-thumb:hover {
  background: var(--off-white);
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0 0;
  height: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  transition: var(--transition);
  color: var(--midnight);
  text-decoration: none;
  border: 1px solid var(--off-white) ;
  padding: 10px 30px;
  font-weight: bold;
  height: 22px;
  color: var(--off-white);
  margin: 0 5px;
  /* background: var(--navy); */
}
a:hover {
  background: var(--off-white);
  color: var(--midnight);
}

#app {
  margin: 0;
  background: var(--midnight);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--off-white);
}

#nav {
  z-index: 10000;
  background: var(--navy);
  position: sticky;
  top: 0;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  /* box-shadow: 4px 0 10px rgba(0, 0, 0, 1); */
  /* border: 2px solid var(--navy); */
}


#nav a.router-link-exact-active {
  color: var(--midnight);
  border-color: var(--off-white);
  background: var(--off-white);
}

#nav .logo {
  width: 44px;
  height: 44px;  
}
#nav svg {
  fill: var(--off-white);
}

@media only screen and (max-width: 768px) {
 body {
   font-size: 80%;
 }
}
footer {
  height: 40px;
  /* padding: 10px; */
  background: var(--navy);
  border-top: 1px solid var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
}
footer h4 {
  margin: 0 0 0 10px;
}
</style>
