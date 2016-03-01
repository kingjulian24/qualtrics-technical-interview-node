import lodash from 'lodash'; // functional utilities lib
import knucklebone from 'knucklebone'; // ajax lib

const cartoonsCont = document.getElementById('cartoons-container');

knucklebone.getJson('/api/cartoons')
.success(cartoonsArr => {

	/*
		What is a 'DocumentFragment'? Purpose? 
	*/
	const frag = document.createDocumentFragment();
	
	_.each(cartoonsArr, cartoonObj => {
		const cartoonElm = document.createElement('div');
		
		/*
			ADD css class "entry" to the `cartoonElm` element;
		*/

		/*
			Make it so when you click on `cartoonElm` element:
				The list of characters, `cartoonObj.characters`, is alerted to the user
		*/

		cartoonElm.textContent = cartoonObj.title;
		frag.appendChild(cartoonElm);
	});

	cartoonsCont.appendChild(frag);
})
.error(res => console.error(res));
