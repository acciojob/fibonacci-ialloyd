function fibonacci(num) {
// your code here
	
		
	if(num<=0 || num==1){

		return 0;
	}

	if(num==2){

		return 1;
	}

	let c=0;
	let a=0;
	let b=1;
	
	for(let i=3; i<=num; i++){

		c=a+b;

		a=b;
		b=c;
		
	}

	return c;
	
}
//let num=prompt("Enter number")
//alert(fibonacci(num))

module.exports = fibonacci;
