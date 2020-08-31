const card = Vue.component('card', {
	props: {
		options: {
			required: true,
			type: Object,
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
	template: `<div class="card">
				  <div :class="{'card-main': true, 'card-main-selected': cardSelected }" v-on:click="cardSelected=!cardSelected; onceLeft=false" 
				  v-on:mouseover="cardHover=true" v-on:mouseleave="cardHover=false; onceLeft=true" :disabled="!options.inStock">
				      <p :class="{'common-text': true, 'p-highlighted': cardHover && cardSelected && onceLeft}">{{headerPhrase()}}</p>
				      <h1>Нямушка</h1>
				      <h2>с {{options.withTaste}}</h2>
				      <p><b>{{options.portions}}</b> {{portionPhrase()}}</p>
				      <p v-if="options.numberOfMice">
				      <b v-if="options.numberOfMice != 1">{{options.numberOfMice}}</b> {{micePhrase()}} в подарок</p>
				      <div :class="{'weight': true, 'weight-value-selected': cardSelected}">
					      <span class="weight-value">{{options.weight}}</span>
					      <br>
					      <span class="weight-units">кг</span>
				      </div>
				  </div>
				  <p :class="{'card-comment': true, 'y-highlighted': !options.inStock}" v-html="statusPhrase()">
				  </p>
			   </div>
			  `,
	data() {
		return {
			cardHover: false,
			cardSelected: false,
			onceLeft: false,
		}
	},
	methods: {
		headerPhrase() {
			if (this.cardHover && this.cardSelected && this.onceLeft) {
				return "Котэ не одобряет?";
			}
			else {
				return "Сказочное заморское явство";
			}
		},
		portionPhrase() {
			let stringPortion = String(this.options.portions);
			let lastElement = stringPortion[stringPortion.length - 1];
			if  (lastElement > 1 && lastElement <= 4) {
				return "порции";
			}
			else if (lastElement == 1) {
				return "порция";
			}
			else {
				return "порций";
			}
		},
		micePhrase() {
			let stringMice = String(this.options.numberOfMice);
			let lastElement = stringMice[stringMice.length - 1];
			if  (lastElement > 1 && lastElement <= 4) {
				return "мыши";
			}
			else if (lastElement == 1) {
				return "мышь";
			}
			else {
				return "мышей";
			}
		},
		statusPhrase() {
			if (!this.options.inStock) {
				return `Печалька, с ${this.options.withTaste} закончился`;
			}
			if (this.cardSelected) {
				return this.options.description;
			}
			else {
				return `Чего сидишь? Порадуй котэ, <a class="dotted" v-on:click="cardSelected=true">купи.</a>`;
			}
		}
	},
	mounted() {
		/* --- preloading images (for better user @click experience) --- */
		let defaultImage = new Image();
		let selectedImage = new Image();
		defaultImage.src = 'images/cat_default.png';
		selectedImage.src = 'images/cat_selected.png';
		/* --- end preloading images ---*/
	}
});

const app = new Vue({
	el: '#app',
	data: {
		fuaGra: {
			portions: 1,
			withTaste: "фуа-гра",
			numberOfMice: 1,
			weight: '0.5',
			inStock: true,
			description: "Печень утки разварная с артишоками.",
		},
		fish: {
			portions: 100,
			withTaste: "рыбой",
			numberOfMice: 2,
			weight: '2',
			inStock: true,
			description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
		},
		chicken: {
			portions: 1,
			withTaste: "курой",
			numberOfMice: 5,
			weight: '10',
			inStock: false,
			description: "Филе из цыплят с трюфелями в бульоне.",
		}
	}

});