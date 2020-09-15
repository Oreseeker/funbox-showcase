<template>
  <div class="card">
    <div
      class="card-main no-select"
      :class="cardMainClasses"
      v-on:click="cardSelected=!cardSelected; onceLeft=false"
      v-on:mouseover="cardHover=true"
      v-on:mouseleave="cardHover=false; onceLeft=true"
    >
      <p class="common-text" :class="commonTextClasses">{{headerPhrase()}}</p>
      <h1>{{options.name}}</h1>
      <h2>с {{options.withTaste}}</h2>
      <p>
        <b>{{options.portions}}</b>
        {{portionPhrase()}}
      </p>
      <p v-if="options.numberOfMice">
        <b v-if="options.numberOfMice != 1">{{options.numberOfMice}}</b>
        {{micePhrase()}} в подарок
      </p>
      <div class="weight" :class="weightClasses">
        <div class="weight-value">{{options.weight}}</div>
        <div class="weight-units">кг</div>
      </div>
    </div>
    <p
      class="card-comment"
      :class="commentClasses"
      v-if="cardDisabled"
    >Печалька, с {{options.withTaste}} закончился</p>
    <p class="card-comment" :class="commentClasses" v-else-if="cardSelected">{{options.description}}</p>
    <p class="card-comment" :class="commentClasses" v-else>
      Чего сидишь? Порадуй котэ,
      <a class="dotted no-select" v-on:click="cardSelected=true">купи.</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      required: true,
      type: Object,
      name: {
        required: true,
        type: String
      },
      portions: {
        required: true,
        type: Number
      },
      withTaste: {
        required: true,
        type: Number
      },
      numberOfMice: {
        required: true,
        type: Number
      },
      inStock: {
        required: true,
        type: Boolean
      },
      description: {
        required: true,
        type: String
      },
      weight: {
        required: true,
        type: String
      }
    }
  },
  data() {
    return {
      cardHover: false,
      cardSelected: false,
      onceLeft: false,
      cardDisabled: !this.options.inStock
    };
  },
  methods: {
    headerPhrase() {
      if (this.cardHover && this.cardSelected && this.onceLeft) {
        return "Котэ не одобряет?";
      } else {
        return "Сказочное заморское явство";
      }
    },
    portionPhrase() {
      let stringPortion = String(this.options.portions);
      let lastElement = stringPortion[stringPortion.length - 1];
      if (lastElement > 1 && lastElement <= 4) {
        return "порции";
      } else if (lastElement == 1) {
        return "порция";
      } else {
        return "порций";
      }
    },
    micePhrase() {
      let stringMice = String(this.options.numberOfMice);
      let lastElement = stringMice[stringMice.length - 1];
      if (lastElement > 1 && lastElement <= 4) {
        return "мыши";
      } else if (lastElement == 1) {
        return "мышь";
      } else {
        return "мышей";
      }
    }
  },
  computed: {
    cardMainClasses() {
      return {
        "card-main-selected": this.cardSelected && !this.cardDisabled,
        "card-main-hover": this.cardHover && !this.cardDisabled,
        "card-main-hover-selected":
          this.cardSelected && this.cardHover && !this.cardDisabled,
        "card-main-default":
          !this.cardSelected && !this.cardHover && !this.cardDisabled,
        "card-main-disabled": this.cardDisabled,
        "text-disabled": this.cardDisabled
      };
    },
    commonTextClasses() {
      return {
        "common-text": true,
        "p-highlighted": this.cardHover && this.cardSelected && this.onceLeft
      };
    },
    weightClasses() {
      return {
        "weight-selected": this.cardSelected && !this.cardDisabled,
        "weight-default":
          !this.cardSelected && !this.cardHover && !this.cardDisabled,
        "weight-default-hover": this.cardHover && !this.cardDisabled,
        "weight-selected-hover":
          this.cardHover &&
          this.cardSelected &&
          this.onceLeft &&
          !this.cardDisabled,
        "weight-disabled": this.cardDisabled
      };
    },
    commentClasses() {
      return { "y-highlighted": this.cardDisabled };
    }
  }
};
</script>

<style scoped>
.card {
  width: 320px;
}

.card-main {
  position: relative;
  width: 100%; /*320px*/
  height: 480px;
  background-color: transparent;
  box-sizing: border-box;
  padding: 6.25% 18.75% 0 14.0625%; /*20px 60px 0 45px*/
  background-position: left 0 bottom 0; /*-24px -90px*/
  background-repeat: no-repeat;
  background-size: contain; /*370px wide*/
  font-size: 16px;
  user-select: none;
  cursor: pointer;
}

.card-main-default {
  background-image: url("../assets/images/cat_default.png");
}

.card-main-hover {
  background-image: url("../assets/images/cat_default_hover.png");
}

.card-main-selected {
  background-image: url("../assets/images/cat_selected.png");
}

.card-main-hover-selected {
  background-image: url("../assets/images/cat_selected_hover.png");
}

.card-main-disabled {
  background-image: url('../assets/images/cat_disabled.png');
}

.text-disabled > * {
  color: #d4d4d4 !important;
}

.card > * {
  font-family: "Trebuchet MS";
  color: #666666;
}

.card-comment {
  position: relative;
  text-align: center;
  color: white;
  margin-top: 5%;
  font-size: 13px; /*13 px*/
}

.card-comment a {
  cursor: pointer;
}

.y-highlighted {
  color: #ffff66;
}

.p-highlighted {
  color: #e62e7a;
}

.card-main h1 {
  color: black;
  margin-top: 5.3125%;
  margin-bottom: 1.25%;
  font-weight: bold;
  font-size: 3rem;
}

.card-main h2 {
  color: black;
  margin-bottom: 5.3125%;
  font-weight: bold;
  font-size: 1.5rem;
}

.card-main p {
  font-weight: regular;
  font-size: 0.875rem;
}

.common-text {
  font-size: 1rem;
}

a.dotted {
  color: #1698d9;
  text-decoration: underline dashed;
}

.weight {
  position: absolute;
  border-radius: 50%;
  color: white;
  text-align: center;
  width: 25%;
  height: 16.66666%;
  right: 4.6875%;
  bottom: 3.125%;
}

.weight-default {
  background-color: #1698d9;
}

.weight-default-hover {
  background-color: #2ea8e6;
}

.weight-selected {
  background-color: #d91667;
}

.weight-selected-hover {
  background-color: #e62e7a;
}

.weight-disabled {
  background-color: #b3b3b3;
  color: white !important;
}

.weight-value {
  font-size: 2.625rem; /* 42px*/
  margin-top: 12.5%;
}

.weight-units {
  font-size: 1.3125rem; /*21px*/
  line-height: 16px;
}

</style>