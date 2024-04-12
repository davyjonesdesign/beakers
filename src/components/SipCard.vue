<template>
  <div class="item-wrapper" >
    <div class="item-left">
      <p style="opacity: 0;">{{ sip.id }}</p>
      <h2 class="item-element">
       {{ sip.element }}
      </h2>
      <p>{{ sip.id }}</p>
    </div>
    <div class="item-right">
      <h3>{{ sip.title }} <span>— ${{ sip.cost }}</span></h3>
      <p class="item-description">{{ sip.description }}</p>
    </div>
  </div>
</template>

<script>
import SipService from "@/services/SipService.js";

export default {
  name: "MenuView",
  props: {
    sip: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      sips: null,
    }
  },
  mounted() {
    // get events from mock db when component is crsiped
    SipService.getItems()
      .then((response) => {
        this.sips = response.data;
      })
      // .then((r) => {
      // for (let i = 0; i < r.data.length; i++) {
      //   this.ports.push(r.data[i]);
      // }
      .catch((error) => {
        console.log(error);
      });
      console.log(this.sips)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-wrapper {
  display: flex;
  width: 50%;
  height: 125px;
}
.item-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 175px;
  padding: 0px;
  border: 1px solid var(--sky)
}
.item-left p {
  align-self: flex-start;
  margin:2px 5px 0 0;
  font-size: 20px;
}
.item-element {
  /* align-self: center;
  justify-self: center; */
  font-size: 48px;
  color: var(--sky);
}
.item-right {
  border: 1px solid var(--sky);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0px 15px
}
.item-right h3 {
  color: var(--sky);
}
.item-right span {
  color: var(--off-white);
  font-weight: 500;
}

@media only screen and (max-width: 768px) {
  .item-wrapper {
    height: 75px;
  }
  .item-left {
    height: 75px;
    width: 75px;
  }
  .item-left p {
    font-size: 16px;
  }
  .item-right {
    height: 75px;
    width: 200px;
  }
  .item-element {
    font-size: 2em;
  }
}
@media only screen and (min-width: 768px) {
  .item-right h3 {
    font-size: 24px;
  }
  .item-right span {
    font-size: 18px;
  }
}

</style>
