//javascript function to multiply two numbers
<h2 id="demo"></h2>

<script>
function myFunction(p1, p2) {
    return p1 * p2;
}
document.getElementById("demo").innerHTML = myFunction(-4, 3);
</script>
//output:  -12



<p id="demo"></p>

<script>
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}
</script>
//output:   12



//try-catch-finally
try {
  try {
    throw new Error('oops');
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "finally"
// "outer" "oops"




try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
//if return statement in finally, outer catch won't work

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch


//Array equals() function
Array.prototype.equals =
   function(array)
   {
      if (this === array)
         return true;

      if (array === null || array === undefined)
         return false;

      array = [].concat(array); // make sure this is an array

      if (this.length != array.length)
         return false;

      for (var i = 0; i < this.length; ++i) 
         if (this[i] !== array[i]) //check each element
            return false;
      return true;
   };



array.equals(array): true
['A', 'B'].equals(null): false
['A', 'B'].equals(undefined): false
[1].equals(4.5): false
[1].equals([1, 2]): false
array1.equals(array2): true
array1.equals(array3): false



//JAVASCRIPT AUGMENTING OBJECTS
https://www.sitepoint.com/augmenting-javascript-core-objects/


//RECURSION IN JAVASCRIPT

//Factorial using For Loop
var factor = function(number) {
  var result = 1;
  var count;
  for (count = number; count > 1; count--) {
    result *= count;
  }
  return result;
};
console.log(factor(6));
// 720



//Recursion
var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6));
// 720



//SCOPE of Variables
The Lifetime of JavaScript Variables
The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

In a web browser, global variables are deleted when you close the browser window (or tab),
 but remain available to new pages loaded into the same window.




//global if without datatype
<p id="demo"></p>

<script>
myFunction();

// code here can use carName as a global variable
document.getElementById("demo").innerHTML = "I can display " + carName;//access outside function

function myFunction() {
    carName = "Volvo";//inside function 
}
</script>



//Closures
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


Chaining Methods, also known as Cascading, refers to repeatedly calling one method after another on an object, in one continuous line of code.
 This technique abounds in jQuery and other JavaScript libraries and it is even common in some JavaScript native methods.

Writing code like this:
str.replace("k", "R").toUpperCase().substr(0,4); 

is not just pleasurable and convenient but also succinct and intelligible. It allows us to read code like a sentence, flowing gracefully across
 the page. It also frees us from the monotonous, blocky structures we usually construct.
 
 
 //Javascript Arrays
 
 var cars = ["Saab", "Volvo", "BMW"];//using an array literal
 
 var cars = new Array("Saab", "Volvo", "BMW");//using new keyword
 
 
 
 
 //add elements to array on click
 
 <!DOCTYPE html>
<html>
<body>

<h2>JavaScript Arrays</h2>

<p>The push method appends a new element to an array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
    fruits.push("Lemon");//push "lemon"
    document.getElementById("demo").innerHTML = fruits;
}
</script>

</body>
</html>





function myFunction() {
    fruits[12] = "Lemon";
    fruits[10] = "Leen";
    document.getElementById("demo").innerHTML = fruits;
     fruits[8] = "meet";// not accessed
}



//difference array and object
The Difference Between Arrays and Objects
In JavaScript, arrays use numbered indexes.  

In JavaScript, objects use named indexes.



// Array Methods
https://www.w3schools.com/Jsref/jsref_obj_array.asp

//Method	   		Description
concat()	    Joins two or more arrays, and returns a copy of the joined arrays
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	    Returns a key/value pair Array Iteration Object
every()	        Checks if every element in an array pass a test
fill()			Fill the elements in an array with a static value
filter()		Creates a new array with every element in an array that pass a test
find()			Returns the value of the first element in an array that pass a test
findIndex()		Returns the index of the first element in an array that pass a test
forEach()		Calls a function for each array element
from()			Creates an array from an object
includes()		Check if an array contains the specified element
indexOf()		Search the array for an element and returns its position
isArray()		Checks whether an object is an array
join()			Joins all elements of an array into a string
keys()			Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
map()			Creates a new array with the result of calling a function for each array element
pop()			Removes the last element of an array, and returns that element
push()			Adds new elements to the end of an array, and returns the new length
reduce()		Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()		Reverses the order of the elements in an array
shift()			Removes the first element of an array, and returns that element
slice()			Selects a part of an array, and returns the new array
some()			Checks if any of the elements in an array pass a test
sort()			Sorts the elements of an array
splice()		Adds/Removes elements from an array
toString()		Converts an array to a string, and returns the result
unshift()		Adds new elements to the beginning of an array, and returns the new length
valueOf()		Returns the primitive value of an array






//Sort
<script>
var stringArray = ['Blue', 'Humpback', 'Beluga'];
var numericStringArray = ['80', '9', '700'];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

document.write('stringArray:', stringArray.join());
document.write('Sorted:', stringArray.sort());

document.write('numberArray:', numberArray.join());
document.write('Sorted without a compare function:', numberArray.sort());
document.write('Sorted with compareNumbers:', numberArray.sort(compareNumbers)); //[1,5,40,200]

</script>





//regExp
//search
<p id="demo"></p>

<script>
var str = "Visit W3Schools!"; 
var n = str.search("W3Schools");
document.getElementById("demo").innerHTML = n;
</script>
//output: 6



//replace
<button onclick="myFunction()">Try it</button>

<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
    var str = document.getElementById("demo").innerHTML; 
    var txt = str.replace("Microsoft","W3Schools");
    document.getElementById("demo").innerHTML = txt;
}
</script>
//output:  Please visit W3Schools!



//replace//g
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var str = "Is this all there is?";
    var patt1 = /is/g;
    var result = str.replace(patt1,"");
    document.getElementById("demo").innerHTML = result;
}
</script>
//output:  Is th all there ?