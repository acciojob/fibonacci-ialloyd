function fibonacci(num) {
// your code here
	let numb=Number(num);
		
	if(numb<=0 || numb==1){

		return 0;
	}

	let c=0;
	
	for(let i=2; i<=numb; i++){

		let a=0, b=1;

		 c=a+b;

		a=b;
		b=c;
		
	}

	

	return c;

	
	
}

module.exports = fibonacci;
