
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo"></p>




<button onclick="this.innerHTML=Date()">The time is?</button>




<button onclick="displayDate()">The time is?</button>

<script>
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
</script>

<p id="demo"></p>





Here is a list of some common HTML events:

Event		Description
onchange	An HTML element has been changed
onclick		The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload		The browser has finished loading the page





<body>

<p onclick="this.innerHTML='GOOD JOB!'">Click me.</p>

</body>






<button onclick="myFunction()">Click Me</button>

<p id="demo"></p> 

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
</script>





<span onmouseover="this.style.color='red'">Mouse over me!</span>






<p id="demo"></p>

<script>
var x = "John";              // x is a string
var y = new String("John");  // y is an object
document.getElementById("demo").innerHTML =(x==y)+" "+(x===y);//true  false
</script>




<p id="demo"></p>

<script>
var x = new String("John"); 
var y = new String("John");
document.getElementById("demo").innerHTML = x==y;//false we cant compare objects
</script>








<p id="demo"></p>

<script>
var x1 = {};
var x2 = "";
var x3 = 0;
var x4 = false;
var x5 = [];
var x6 = /()/;
var x7 = function(){};

document.getElementById("demo").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";
</script>
/*output:   x1: object
			x2: string
			x3: number
			x4: boolean
			x5: object
			x6: object
			x7: function
			*/
			
			
			
			
var x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
var x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
var x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
var x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
var x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
var x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number



//x = (0 == "");     // true
//x = (1 == "1");    // true
//x = (1 == true);   // true
//x = (0 === "");    // false
//x = (1 === "1");   // false
//x = (1 === true);  // false










//If a function is called with a missing argument, the value of the missing argument is set to undefined.
//Undefined values can break your code. It is a good habit to assign default values to arguments.
<script>
function myFunction(x, y) {
    if (y === undefined) {
        y = 1;
    }    
    return x * y;
}
document.getElementById("demo").innerHTML = myFunction(4);
</script>









//Always end your switch statements with a default. 
//Even if you think there is no need for it.
<p id="demo"></p>

<script>
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
        break;
    default:
         day = "unknown";
}
document.getElementById("demo").innerHTML = "Today is " + day;
</script>





//It is a common mistake to forget that switch statements use strict comparison:
//This case switch will not display an alert:
<p id="demo"></p>

<script>
var x = 10;
switch(x) {
    case "10": alert("Hello");
}
</script>






//You must use a "backslash" if you must break a statement in a string:
var x = "Hello \
World!";



// JS lintint tools
https://www.sitepoint.com/comparison-javascript-linting-tools/









//JSON
<p id="demo"></p>

<script>
var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[2].firstName + " " + obj.employees[1].lastName;
</script>



var myObj = {"name":"John", "age":31, "city":"New York"};
var myJSON = JSON.stringify(myObj);









//VALIDATION
<input id="numb">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo"></p>

<script>
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}
</script>





//validate Alphabets
function allLetter(name)
{ 
	var letters = /^[A-Za-z]+$/;
	if(name.value.match(letters))
	{
	return true;
	}
	else
	{
	alert(name.name+' must have alphabet characters only');
	name.focus();
	return false;
	}
}






//captcha code
<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a random number.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
var x=Math.ceil(Math.random()*10);
var y=Math.ceil(Math.random()*10);
var z=(Math.ceil(Math.random()*10)%4);
var res=0;
if(z===0)
{
res=x+y;
}
else if(z===1)
{
res=x-y;
}
else if(z===2)
{
res=x*y;
}
else
{
res=Math.floor(x/y);
}
    document.getElementById("demo").innerHTML = x+" "+y+" "+z+"ans: "+res;
}
</script>

</body>
</html>




//for drop down validation
	if (what.selectedIndex < 1)				 
	{
		alert("Please enter your course.");
		what.focus();
		return false;
	}





//validation of form
https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php







//real captcha

<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a random number.</p>
<button onclick="operands()">OPERANDS</button>
<button onclick="operator()">OPERATOR</button>
<button onclick="captcha(x,y,z)">CAPTCHA</button>

<p id="demo"></p>

<script>
var x=0,y=0,z=0,op="",res=0;

function operands() 
{
x=Math.ceil(Math.random()*10);
y=Math.ceil(Math.random()*10);  
}
function operator() 
{
z=(Math.ceil(Math.random()*10))%4;

}

function captcha(x,y,z) 
{
 var x1=x;
var y1=y;
var z1=z;

if(z1===0)
{
op="+";
res=x1+y1;
}
else if(z1===1)
{
op="-";
res=x1-y1;
}
else if(z1===2)
{
op="*";
res=x1*y1;
}
else
{
op="/";
res=Math.floor(x1/y1);
}
    document.getElementById("demo").innerHTML = x1+" "+op+" "+y1;
}

</script>

</body>
</html>

