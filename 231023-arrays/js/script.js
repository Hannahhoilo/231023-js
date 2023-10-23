//  ------------------------------
//  lengt = how many characters

// const text = 'message';

// console.log(text.lenght);


// const shoppingList = ['jeans', 'watch', 'belt', 'hat', 'socks'];

// console.log(shoppingItems.length);



//  ----------------------------

//  Push = adds an element to the end of an array

// const shoppingItems = ['jeans', 'watch'];

// shippongItems.push('boots');



//  ------------------

// pop = removes an element from the end of the array - 
//        returns deleted element

// const shoppingCart = ['jeans', 'watch', 'tie'];

// shoppingCart.pop()

// const deletedItem = shoppingCart.pop()


//------------------

// unshift() = adds an element to the beginning of an array

// const shoppingItems = ['jeans', 'watch'];

// shoppingItems.unshift('shirt');
// console.log(shoppingItems);



//-------

// shift() = removes the first element from the begginning of an array
//    returns the deleted element 

//const shoppingItems = ['shirt', 'jeans', 'watch']


// -----------

/// splice() = used to add, remove abd replace items in an array
//    returns an array containing the deleted aelement


// const shoppingItems = ['shirt', 'watch'];

// shoppingItems.splice(1, 0, 'boots');

// const deletedItem = shoppingItems.splice(2, 1);


// // replacing the lement at index 0 
// shoppingItems.splice(0, 1, 'tie');



//  -------
//  Array.isArray = checks value is a array type or not 
//  isArray

// const arr = ()=>{};
// console.log(typeof(arr));


// const shoppingItems = ['shirt', 'watch'];

// console.log(Array.isArray(shoppingItems));




// ------------

// some() = recieves a function. it checks if at least
//     one element in the array passes the test appliaied by the function
//    if the test is passed it returns true, otherwise false

// const shoppingItems = ['shirt', 'watch'];

// const button = document.querySelector('button');
// button.addEventListener('click', ()=>{

// })

// const numbers = [1,2,3,4,5,6,7];

// const result = numbers.some((number)=>{
// 	return number === 4
// })

// console.log(result);


//  --------


//every() = the every method receives a function. it checks if all 
//     th elements in the array pass the test applied by the function. 
//   if the test is oassed it returns true or false.

// // Declaring an array
// const numbers = [1,3,4,5,6,7];
// // Checking if all the elements in this array are bigger than 5
// const result = numbers.every((element)=>{
// return element > 5
// });
// console.log(result); // False


// ------


// concat() = attaches (joines) two or more 
//  arrays and returns a new array

// const fist = [1,2,3,4,5,6,7];
// const second = [8,9,10];

// const result = first.concat(second);

// console.log(result);



//   -------

// reverse() = shows in reverse it also reverset it 

// concat() = attaches (joines) two or more 
//  arrays and returns a new array

// const fist = [1,2,3,4,5,6,7];
// const second = [8,9,10];


// console.log(first.reverse);


//  --------

//  join() = returns a string, 
// joins all the element in an array and returns 
// them as a string. the elements can be separated bu 
// voma or any other specific string separator

// const shoppingCart = ['jeans', 'shirt'];

// console.log(shoppingCart.join());


//  ----

// includes() = checks if an array includes a specific value.
//  it returns a boolean as a result

// const shoppingCart = ['jeans', 'shirt'];

// console.log(shoppingCart.includes('jeans')); //true

// console.log(shoppingCart.includes('boots')); //false

//--


// toString = transform somthing to a string

// const shoppingCart = ['jeans', 'shirt'];

// console.log(shoppingCart.toString('jeans'));


//  -----

//  Array.from() = creates a array from iterable (for exapmle a string)

// const text = 'message';

// console.log(Array.from(text));


//   ------- 

// slice() = slices an array from the 
//  starting index to the ending indec and returns a new array

// const shoppingCart = ['shirt', 'boots', 'panst'];

// const clonedCart = shopingCart.slice();

// console.log(shoppingCart.slice(0.1))

// const slicedArray




//   exercise 1 
// push method and for loop to solve 


// const emptyArray = [];

// function createdNumber (number1, number2) {
// 	for (let i = number1; i <= number2; i++){
// 		emptyArray.push(i)
// 	}
// 	return emptyArray
// }
// console.log(createdNumber(1,50));



// exercise 2 


// function isArray(input){
// 	if (Array.isArray(input)){
// 		return true 
// 	}
// 	else {
// 		return false
// 	}
// }

// console.log(isArray());



//  Array.isArray = checks value is a array type or not 
//  isArray

// const arr = ()=>{};
// console.log(typeof(arr));


// const shoppingItems = ['shirt', 'watch'];

// console.log(Array.isArray(shoppingItems));




// ------ exercise 3 

// const numbersArray = [1,2,3];

// function isArray(numbersArray){
// 	if (Array.isArray(numbersArray)){
// 		return true 
// 	}
// 	else {
// 		return false
// 	}
// }
// console.log(isArray(numbersArray));


// const numbersArrayLength = numbersArray.length;
// console.log(numbersArray.length);

// function lenght(numbersArray){
// 	if(!isArray(numbersArray)){
// 		return false
// 	}
	
// 	if (numbersArray.length < 3){
// 		return false
// 	}
// 	else {
// 		return numbersArray[0] + numbersArray[numbersArray.lenght - 1]
// 	}
// }
// console.log(lenght([25]));


//--------------------------------


//   (a) here is a parameter, its a input. a epmty variable. 
//   can benamed whatever i want 
//   paramether is a empty value

// dont mix argument with parameter 

//   function = do something (paranteses) inside the parathesis is an argument
//   do something (10)   <--- 10 is an argument


// function do something (a) {

// 	if (condition){

// 	}
// }



// //this is a arrowfunction
// const dosomething = () => {

// }



// -----------------------


// converting datatypes (part1)


//string to array

// const text = 'message';
// const convertedString = Array.from(text);
// console.log(convertedString);


// const text = 'message';
// const result = Array.from(text);
// console.log(result);

// //using the split
// const secondText = 'notification';
// const convertedString2 = secondText.split('');
// console.log(convertedString2)



//array to string 

// const shoppingItems = ['jeans', 'watch', 'belt', 'hat', 'socks'];

// const result = shoppingItems.join(' ');

// console.log(result);

// const shoppingItems = ['jeans', 'watch', 'belt', 'hat', 'socks'];
// const result = shoppingItems.toString('');
// console.log(result)


// numbr to string 

// const number = 1000;
// number.toString();
// console.log(typeof(number));

// eller 

// console.log(number.toString());


// string to number 

// const stringNumber = '25000';
// const convertedString1 = Number(stringNumber);
// console.log(convertedString1);

// eller 

// // Using the parseInt() method
// const stringNumber = '25000';
// const convertedString2 = parseInt(stringNumber)
// console.log(convertedString2);

// console.log(typeo(convertedString2))

// Using the parseInt() method
// const stringNumber = '23.4';
// const convertedString2 = parseFloat(stringNumber)
// console.log(convertedString2);

// Using the Unary plus method
// const stringNumber = '25.15';
// const convertedString4 = +stringNumber
// console.log(convertedString4);




// The NaN property - not a number 
// represents a value or the result of a calculation that is not of number type

// console.log(math.scrt(-1));

// console.log(parseInt('T'));


//isNan() the isnan function checks if a value is nan

// const checkType = (input) => {
// 	if (isNaN(input)) {
// 	return "Invalid Input";
// 	}
// 	return "Input is a number";
// 	};
// 	console.log(checkType(false)); // Invalid input


// -------------------  exercises part2 ----------------

// exercise 4 

// const numberArray = [1,2,3,'katt', 4,5,6];

// function isArray(numberArray){
// 	if (Array.isArray(numberArray)){
// 		return true 
// 	}
// 	else {
// 		return false
// 	}
// }
// console.log(isArray(numberArray));

// const result = numberArray.every((element)=>{
// return typeof element === 'number'
// });
// console.log(result); 


// const areNumber = (numbersArray)=>{
// 	return numbersArray.every((number)=>{
// 		if(typeof(number) === "number"){
// 			return true
// 		}
// 		else{
// 			return false
// 		}
// 	})
// }

// console.log(areNumber ([1,2,3]))

// exercise 5
// • Create a function that receives a parameter called ‘text’.

// • The parameter must be of type string. Otherwise, the function should be
// terminated. Also, if the string is empty, the function should be terminated.

// • If the previous conditions passed successfully, write a code that reverses
// the received string and displays it.

// const string = 'cat';

// function isArray(stringArray){
// 	if (!Array.isArray(stringArray)){
// 		return 'input is not an array' 
// 	}
// 	if (stringArray === '') return 'input is empty'
// 	else {
// 		return false
		
// 	}
// }
// console.log(isArray(string));
// console.log(sdfsff.reverse);

// //--------


// const reverseString = (text)=>{
// 	if(!typeof text === "string" && text-lenght === 0) {
// 		const strToArr = Array.from(text);
// 		const reversed = strToArr.reverse();
// 		const result = reversed.join('');
// 		return result
// 	}
// };
// reverseString("abcd");



// exercise 6 


