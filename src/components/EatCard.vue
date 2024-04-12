<template>
  <div class="item-wrapper" >
    <div class="item-left">
      <p style="opacity: 0;">{{ eat.id }}</p>
      <h2 class="item-element">
       {{ eat.element }}
      </h2>
      <p>{{ eat.id }}</p>
    </div>
    <div class="item-right">
      <h3>{{ eat.title }} <span class="item-cost">— ${{ eat.cost }}</span></h3>
      <p class="item-description">{{ eat.description }}</p>
    </div>
  </div>
</template>

<script>
import EatService from "@/services/EatService.js";

export default {
  name: "MenuView",
  props: {
    eat: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      eats: null,
    }
  },
  mounted() {
    // get events from mock db when component is created
    EatService.getItems()
      .then((response) => {
        this.eats = response.data;
      })
      // .then((r) => {
      // for (let i = 0; i < r.data.length; i++) {
      //   this.ports.push(r.data[i]);
      // }
      .catch((error) => {
        console.log(error);
      });
      console.log(this.eats)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-wrapper {
  display: flex;
  height: 125px;
  width: 100%;
}
.item-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 125px;
  width: 150px;
  padding: 0px;
  border: 1px solid var(--sunrise)
}
.item-left p {
  align-self: flex-start;
  margin: 2px 5px 0 0;
  font-size: 20px;
}
.item-element {
  /* align-self: center;
  justify-self: center; */
  font-size: 48px;
  color: var(--sunrise);
}
.item-right {
  height: 125px;
  border: 1px solid var(--sunrise);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0px 15px
}
.item-cost {
  font-weight: 700;
  letter-spacing: 1px;
}
.item-right h3 {
  color: var(--sunrise);
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
