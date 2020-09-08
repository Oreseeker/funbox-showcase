const card = Vue.component('card', {
	props: {
		options: {
			required: true,
			type: Object,
			name: {
				required: true,
				type: String,
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
	template: `<div class="card">
				  <div class="card-main no-select" 
				  :class="cardMainClasses" 
				  v-on:click="cardSelected=!cardSelected; onceLeft=false"
				  v-on:mouseover="cardHover=true" v-on:mouseleave="cardHover=false; onceLeft=true">
				      <p class="common-text" :class="commonTextClasses">{{headerPhrase()}}</p>
				      <h1>{{options.name}}</h1>
				      <h2>с {{options.withTaste}}</h2>
				      <p><b>{{options.portions}}</b> {{portionPhrase()}}</p>
				      <p v-if="options.numberOfMice">
				      <b v-if="options.numberOfMice != 1">{{options.numberOfMice}}</b> {{micePhrase()}} в подарок</p>
				      <div class="weight" :class="weightClasses">
					      <div class="weight-value">{{options.weight}}</div>
					      <div class="weight-units">кг</div>
				      </div>
				  </div>
				  <p class="card-comment" :class="commentClasses" v-if="cardDisabled">
				  	Печалька, с {{options.withTaste}} закончился
				  </p>
				  <p class="card-comment" :class="commentClasses" v-else-if="cardSelected">
				  	{{options.description}}
				  </p>
				  <p class="card-comment" :class="commentClasses" v-else="!options.inStock">
				  	Чего сидишь? Порадуй котэ, <a class="dotted no-select" v-on:click="cardSelected=true">купи.</a>
				  </p>
			   </div>
			  `,
	data() {
		return {
			cardHover: false,
			cardSelected: false,
			onceLeft: false,
			cardDisabled: !this.options.inStock,
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
	},
	computed: {
		cardMainClasses() {
			return {
				'card-main-selected': this.cardSelected && !this.cardDisabled, 
				'card-main-hover': this.cardHover && !this.cardDisabled, 
				'card-main-hover-selected': this.cardSelected && this.cardHover && !this.cardDisabled,  
				'card-main-default': !this.cardSelected && !this.cardHover && !this.cardDisabled,
				'card-main-disabled': this.cardDisabled,
				'text-disabled': this.cardDisabled,
			};
		},
		commonTextClasses() {
			return {'common-text': true, 'p-highlighted': this.cardHover && this.cardSelected && this.onceLeft};
		},
		weightClasses() {
			return {
				'weight-selected': this.cardSelected && !this.cardDisabled, 
				'weight-default': !this.cardSelected && !this.cardHover  && !this.cardDisabled,
				'weight-default-hover': this.cardHover && !this.cardDisabled, 
				'weight-selected-hover': this.cardHover && this.cardSelected && this.onceLeft && !this.cardDisabled,
				'weight-disabled': this.cardDisabled,
				};
		},
		commentClasses() {
			return {'y-highlighted': this.cardDisabled};
		}
	},
	mounted() {
		/* --- preloading images (for better user @click experience) --- */
		let defaultImage = new Image();
		let hoverImage = new Image();
		let selectedImage = new Image();
		let selectedHoverImage = new Image();
		defaultImage.src = 'images/cat_default.png';
		selectedImage.src = 'images/cat_selected.png';
		selectedHoverImage.src = 'images/cat_selected_hover.png';
		hoverImage.src = 'images/cat_default_hover.png';
		/* --- end preloading images ---*/
	},
});

const app = new Vue({
	el: '#app',
	data: {
		fuaGra: {
			name: 'Нямушка',
			portions: 1,
			withTaste: "фуа-гра",
			numberOfMice: 1,
			weight: '0,5',
			inStock: true,
			description: "Печень утки разварная с артишоками.",
		},
		fish: {
			name: 'Нямушка',
			portions: 10,
			withTaste: "рыбой",
			numberOfMice: 2,
			weight: '2',
			inStock: true,
			description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
		},
		chicken: {
			name: 'Нямушка',
			portions: 100,
			withTaste: "курой",
			numberOfMice: 5,
			weight: '10',
			inStock: false,
			description: "Филе из цыплят с трюфелями в бульоне.",
		}
	}

});