<template>
  <div class="menu">
    <div class="menu-header">
      <h1>
        Menu
      </h1>
    </div>
    <h2 class="header">
      eats
    </h2>
    <div class="cat-wrapper">
      <EatCard v-for="eat in eats" :key="eat.id" :eat="eat" />
    </div>
    <h2 class="header sips">
      sips
    </h2>
    <div class="cat-wrapper">
      <SipCard v-for="sip in sips" :key="sip.id" :sip="sip" />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import EatCard from "@/components/EatCard.vue";
import EatService from "@/services/EatService.js";
import SipCard from "@/components/SipCard.vue";
import SipService from "@/services/SipService.js";

export default {
  name: "Home",
  components: {
    EatCard,
    SipCard
  },
  data() {
    return {
      eats: null,
      sips: null
    }
  },
  created() {
    // get events from mock db when component is created
    EatService.getItems()
      .then(response => {
        this.eats = response.data
      })
      // .then((r) => {
      // for (let i = 0; i < r.data.length; i++) {
      //   this.ports.push(r.data[i]);
      // }
      .catch(error => {
        console.log(error)
      })
    // const tempPorts = ref(this.data)
    // get events from mock db when component is created
    SipService.getItems()
      .then(response => {
        this.sips = response.data
      })
      // .then((r) => {
      // for (let i = 0; i < r.data.length; i++) {
      //   this.ports.push(r.data[i]);
      // }
      .catch(error => {
        console.log(error)
      })
    // const tempPorts = ref(this.data)
  }
};
</script>

<style scoped>
.menu {
  padding-bottom: 30px;
}
.home-wrapper {
  /* display: flex;
  flex-direction: column;
  overflow-y: scroll; */
  padding: 10px
}
.splash-img {
  width: 100vw;
  object-fit: fill;
  height: 200px;
}
.logo {
  padding: 80px 0 100px;
  background: var(--midnight);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/matheus-frade-KO46ZfbNdtY-unsplash_edit.jpg');
  background-size: cover;
  background-attachment: fixed;
  border: 1px solid var(--navy)
  /* opacity: .3; */
}
.logo svg {
  fill: var(--off-white);
  max-width: 400px;

}
.header {
  margin: 40px 15px 0;
  letter-spacing: .5px;
  background: var(--sunrise);
  padding: 5px;
  text-align: center;
  color: var(--midnight);
}
.menu-header {
  font-weight: 800;
  margin: 40px 30px;
  /* text-align: center; */
  /* text-decoration: underline; */
}
.sips {
  background: var(--sky);

}
.cat-wrapper {
  margin: 0 15px;
  display: grid;
  grid-template-rows: auto auto auto;
  border: 1px solid var(--navy);
  grid-auto-flow: column;
  overflow-x: scroll;
  padding: 10px;
}
.cat-wrapper::-webkit-scrollbar {
    width: 1em;
}
 
.cat-wrapper::-webkit-scrollbar-track {
    border: 1px solid var(--navy);
    -webkit-box-shadow: none;
    /* background: var(--navy); */
}
 
.cat-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--navy);
  outline: none;
}

</style>

