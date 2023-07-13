function fibonacci(num) {
// your code here
	if(n<=0 || n==1){

		return 0;
	}

	let c=0;
	
	for(let i=2; i<=num; i++){

		let a=0, b=1;

		 c=a+b;

		a=b;
		b=c;
		
	}

	

	return c;

	
	
}

module.exports = fibonacci;
