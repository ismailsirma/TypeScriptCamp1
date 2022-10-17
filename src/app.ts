import { validate } from 'class-validator'

import Product from './models/product.model'

const p1 = new Product('',  -5.99)
validate(p1).then(errors => {
	if(errors.length > 0) {
		console.log('VALIDATION ERRIRS!')
		console.log(errors)
	} else {
		console.log(p1.getInformation())
	}	
})