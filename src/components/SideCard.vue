<template>
  <div class="item-wrapper" >
    <div class="item-left">
      <div class="item-left_top">
        <p style="opacity: 0;">{{ side.id }}</p>
        <p>{{ side.id }}</p>
      </div>
      <h2 class="item-element">
        {{ side.element }}
      </h2>
    </div>
   
    <div class="item-right">
      <h3>{{ side.title }}</h3>
      <!-- <p class="item-description">{{ side.description }}</p> -->
      <p class="item-description item-cost">${{ side.cost }}</p>
    </div>
  </div>
</template>

<script>
import SideService from "@/services/SideService.js";

export default {
  name: "MenuView",
  props: {
    side: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      sides: null,
    }
  },
  mounted() {
    // get events from mock db when component is crsiped
    SideService.getItems()
      .then((response) => {
        this.sides = response.data;
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
  height: 100px;
  width: 50%;
}
.item-left {
  border: 1px solid var(--pumpkin);
  padding: 0px;
  text-align: center;
  height: 100px;
  width: 100px;
}
.item-left_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100px;
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
  color: var(--pumpkin);
}
.item-right {
  height: 100px;
  border: 1px solid var(--pumpkin);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  padding: 0px 15px
}
.item-right h3 {
  color: var(--pumpkin);
}
.item-right span {
  color: var(--off-white);
  font-weight: 500;
}
.item-cost {
  font-weight: 700;
  letter-spacing: 1px;
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
  .item-left_top {
    width: 75px;
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
