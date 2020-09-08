This project contains product cards  of cat food implemented in Vue.js, HTML5, CSS3. Each card has a hover and a selected states.  
While selected hover effects are a little bit different. In the selected state hover effect is applied after initial selection of the product card.
Multiple cards can be selected at a time by clicking either on the card itself or the label "купи" under the card.

Card information can be changed. Each card is a Vue component which accepts data object as a prop. Structure of this data object is the following:


productCard: {
            name: ...,
            portions: ...,
            withTaste: ...,
            numberOfMice: ...,
            weight: ...,
            inStock: ...,
            description: ...,
        }

Here:
* **name** - is a product name ('Нямушка' by default). String.
* **portions** - a number of portions in each packaging. Number.
* **withTaste** - a taste of the cat food. String. Note that if this is specified in Russian then Genitive should be used.
* **numberOfMice** - number of mice provided with the good. Number.
* **weight** - weight of the packaging. String.
* **inStock** - defines whether the good is in stock. Boolean. This parameter influences how card is displayed. If it equals to false, then card will be displayed as gray and clicking on it will have not effect.
* **description** - a brief description of the particular cat food. String.

The structure of the project:
* **index.html** - this is where everything is displayed.
* **styles.css** - all styles are written here.
* **js** - the folder contains js files for the project. 
  * **vue.js** - Vue 2 library
  * **scripts,js** - contains everything except Vue.
* **images** - contains images used in the project.
* **fonts** - contains additional fonts.
* **prototype** - contains templates for the site in .psd, .sketch and .otf formats.