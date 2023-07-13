function fibonacci(num) {
// your code here
	
		
	if(num<=0 || num==1){

		return 0;
	}

	let c=0;
	let a=0;
	let b=1;
	
	for(let i=2; i<=num; i++){

		c=a+b;

		a=b;
		b=c;
		
	}

	

	return c;

	
	
}

module.exports = fibonacci;
