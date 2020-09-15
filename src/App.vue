<template>
  <div class="wrp">
    <div class="wrp-inner">
    <div class="wrapper">
      <h1 class="intro-header">Ты сегодня покормил кота?</h1>
      <div id="app">
        <card :options="fuaGra"></card>
        <card :options="fish"></card>
        <card :options="chicken"></card>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: {
    Card
  },
  data() {
    return {
      fuaGra: {
        name: "Нямушка",
        portions: 1,
        withTaste: "фуа-гра",
        numberOfMice: 1,
        weight: "0,5",
        inStock: true,
        description: "Печень утки разварная с артишоками."
      },
      fish: {
        name: "Нямушка",
        portions: 10,
        withTaste: "рыбой",
        numberOfMice: 2,
        weight: "2",
        inStock: true,
        description: "Головы щучьи с чесноком да свежайшая сёмгушка."
      },
      chicken: {
        name: "Нямушка",
        portions: 100,
        withTaste: "курой",
        numberOfMice: 5,
        weight: "10",
        inStock: false,
        description: "Филе из цыплят с трюфелями в бульоне."
      }
    };
  }
};
</script>

<style>
.wrp {
  display: flex;
  flex-direction: column;
}
@font-face {
  font-family: "Eco";
  src: url("./assets/fonts/Exo2_0Thin.woff");
  font-weight: thin;
}

@font-face {
  font-family: "Trebuchet MS";
  src: url("./assets/fonts/trebuc.woff");
  font-weight: regular;
}

@font-face {
  font-family: "Trebuchet MS";
  src: url("./assets/fonts/trebuchetmsbold.woff");
  font-weight: bold;
}

html {
  font-size: 16px;
}

body {
  margin: 0;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      transparent,
      rgba(0, 0, 0, 0.5)
    ),
    url("./assets/images/background.png");
  width: 100%;
  min-height: 600px;
}

p {
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0;
}

h2 {
  margin: 0;
}

h1.intro-header {
  font-family: "Eco";
  font-weight: thin;
  color: white;
  text-align: center;
  margin-bottom: 2.03125%; /* 26px */
  font-size: 2.25rem;
}
.wrapper {
  width: 100%;
  height: max-content;
  margin: auto;
}

.wrp-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.break {
  flex-basis: 100%;
  height: 0;
}

.no-select {
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media screen and (max-width: 360px) {
  html {
    font-size: 3.7vw !important;
  }
  .card {
    width: 70% !important;
    margin-bottom: 20px !important;
    height: 120vw !important;
  }
  .card-main {
    height: 110vw !important;
    width: 100% !important;
    background-size: 100% 100% !important;
  }

  .weight-value {
    line-height: 100% !important;
  }
}

@media screen and (min-width: 360px) {
  .card {
    margin: 0 3.125% 2.03125% 3.125% !important;
  }
  .weight-value {
    line-height: 42px !important;
  }
}
</style>
