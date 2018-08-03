Closures
Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.

Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −

function create() {
   var counter = 0;
	
   return {
      increment: function() {
         counter++;
      },
	   print: function() {
         console.log(counter);
      }
   }
}

var c = create();
c.increment();
c.print();     // ==> 1
This pattern allows you to create objects with methods that operate on data that isn't visible to the outside world. 
It should be noted that data hiding is the very basis of object-oriented programming.






<head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>

      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("p").css("background-color", "yellow");
         });
      </script>
   </head>
	
   <body>
      <div>
         <p class = "myclass">This is a paragraph.</p>
         <p id = "myid">This is second paragraph.</p>
         <p>This is third paragraph.</p>
      </div>
   </body>
   
   
   
   
   
   
   
   
   
   
   
   // .attr()       .text()
   <head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            var title = $("em").attr("title");//fetch title attribute of <em> tag
            $("#divid").text(title);//set title as text to tag with id="divid"
         });
      </script>
   </head>
	
   <body>
      <div>
         <em title = "Bold and Brave">This is first paragraph.</em>
         <p id = "myid">This is second paragraph.</p>
         <div id = "divid"></div>
      </div>
   </body>

   
   
   
   
   
   //The attr(name, value) method
    <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("#myimg").attr("src", "/jquery/images/jquery.jpg");
         });
      </script>
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  //Showing and Hiding Elements
	//Toggling the Elements
	
	
	
	<script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("div").click(function () {
               var content = $(this).html();
               $("#result").text( content );
            });
         });
      </script>
	  
	  
	  
	  
	  //
	  $(this).replaceWith("<h1>JQuery is Great</h1>");
	  
	  
	  
	  
	  //to remove a DOM elementFromPoint
	   <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("div").click(function () {
               $(this).remove( );
            });
         });
      </script>
	  
	  
	  //add a DOM element before or after
	  
	  $(this).before('<div class="div"></div>' );
	  
	  
	  
	  https://www.nimblecowork.com/?gclid=EAIaIQobChMI-brB0uLN3AIVi00rCh2-Sg2IEAEYASAAEgLq7fD_BwE
	  
	  
	  
	  
	  
	  
	  
	  
	  //css one property
	   $("li").eq(2).css("color", "red");
	   
	   
	   //css many properties
	   $("li").eq(2).css({"color":"red", "background-color":"green"});//{} are important
	   
	   
	   
	   
	   
	   
	   
	   // JQuery CSS Methods
Following table lists down all the methods which you can use to play with CSS properties −

Sr.No.	Method & Description
1	css( name )
Return a style property on the first matched element.

2	css( name, value )
Set a single style property to a value on all matched elements.

3	css( properties )
Set a key/value object as style properties to all matched elements.

4	height( val )
Set the CSS height of every matched element.

5	height( )
Get the current computed, pixel, height of the first matched element.

6	innerHeight( )
Gets the inner height (excludes the border and includes the padding) for the first matched element.

7	innerWidth( )
Gets the inner width (excludes the border and includes the padding) for the first matched element.

8	offset( )
Get the current offset of the first matched element, in pixels, relative to the document.

9	offsetParent( )
Returns a jQuery collection with the positioned parent of the first matched element.

10	outerHeight( [margin] )
Gets the outer height (includes the border and padding by default) for the first matched element.

11	outerWidth( [margin] )
Get the outer width (includes the border and padding by default) for the first matched element.

12	position( )
Gets the top and left position of an element relative to its offset parent.

13	scrollLeft( val )
When a value is passed in, the scroll left offset is set to that value on all matched elements.

14	scrollLeft( )
Gets the scroll left offset of the first matched element.

15	scrollTop( val )
When a value is passed in, the scroll top offset is set to that value on all matched elements.

16	scrollTop( )
Gets the scroll top offset of the first matched element.

17	width( val )
Set the CSS width of every matched element.

18	width( )
Get the current computed, pixel, width of the first matched element.
   
   
   
   
   
   //DOM Traversal
   Most of the DOM Traversal Methods do not modify the jQuery object and they are used 
   to filter out elements from a document based on given conditions.
//filter selector

<script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("li").filter(".middle").addClass("selected");
         });
      </script>
		
      <style>
         .selected { color:red; }
      </style>
   </head>
	
   <body>
      <div>
         <ul>
            <li class = "top">list item 1</li>
            <li class = "top">list item 2</li>
            <li class = "middle">list item 3</li>
            <li class = "middle">list item 4</li>
            <li class = "bottom">list item 5</li>
            <li class = "bottom">list item 6</li>
         </ul>
      </div>
   </body>
/*list item 1
list item 2
list item 3 //red
list item 4 //red
list item 5
list item 6   
*/








Selector			Example			Example description
.class				.intro			Selects all elements with class="intro"
#id					#firstname		Selects the element with id="firstname"
*					*				Selects all elements
element				p				Selects all <p> elements
element,element		div, p			Selects all <div> elements and all <p> elements
element element		div p			Selects all <p> elements inside <div> elements
element>element		div > p			Selects all <p> elements where the parent is a <div> element
element+element		div + p			Selects all <p> elements that are placed immediately after <div> elements
element1~element2	p ~ ul			Selects every <ul> element that are preceded by a <p> element




















$("#signupForm").validate({
            rules: {
               username: {
                  required: true,
                  minlength: minUserLen,
                  maxlength: maxUserLen,
				  lettersonly: true 
               },
               first: {
                  required: true,
				  lettersonly: true 
               },
			   middle: {
                  required: true,
				  lettersonly: true 
               },
			   last: {
                  required: true,
				  lettersonly: true 
               },
			   email: {
                  required: true,
				  lettersonly: true 
               },
			   number: {
                  required: true,
	
               },
               password: {
                  required: true,
                  minlength: minPassLen,
                  maxlength: maxPassLen
 
               },
			   dob: {
                  required: true,
	
               },
			   gender: {
                  required: true,
			
               },
			   currAddr: {
                  required: true,
				  lettersonly: true 
               },
			   permAddr: {
                  required: true,
				  lettersonly: true 
               },
			   city: {
                  required: true,
				  lettersonly: true 
               },
			   state: {
                  required: true,
				  lettersonly: true 
               },
			   zip: {
                  required: true,
			
               },
            },
            messages: {
               username: {
                  required: "Username required",
                  minlength: usernameMsg,
                  maxlength: usernameMsg,
				  lettersonly: "only letters"
               },
			   first: {
                  required: "firstname required",
				  lettersonly: "only letters"
               },
			   middle: {
                  required: "middlename required",
				  lettersonly: "only letters"
               },
			   last: {
                  required: "lastname required",
				  lettersonly: "only letters"
               },
			   email: {
                  required: "email can't be empty",
               },
			   number: {
                  required: "phone number can't be empty",
			
               },
               password: {
                  required: "Password required",
                  minlength: passwordMsg,
                  maxlength: passwordMsg
               }
			   dob: {
                  required: "dob required",
			
               },
			   gender: {
                  required: "required",
		
               },
			   currAddr: {
                  required: "required",
				  lettersonly: "only letters" 
               },
			   permAddr: {
                  required: "required",
				  lettersonly: "only letters" 
               },
			   city: {
                  required: "required",
				  lettersonly: "only letters"
               },
			   state: {
                  required: "required",
				  lettersonly: "only letters"
               },
			   zip: {
                  required: "required",
			
               },
            }
         });
      });
   </script>












<div class="key"><span class="label">  </span>First Name</div>
<input type="text" id="round" name="first"><br><br>
<div class="key"><span class="label">  </span>Middle Name</div>
<input type="text" id="round" name="middle"><br><br>
<div class="key"><span class="label">  </span>Last Name</div>
<input type="text" id="round" name="last"><br><br><br>
<div class="key"><span class="label">  </span>Email</div>
<input type="email" id="round" name="email"><br><br><br>
<div class="key"><span class="label">  </span>Phone Number</div>
<input type="number" id="round" name="phone"><br><br><br>
<div class="key"><span class="label">  </span>Password</div>
<input type="password" id="round" name="password"><br><br><br>
<div class="key"><span class="label">  </span>Date Of Birth</div>
<input type="date" name="dob"><br><br><br>
<div class="key"><span class="label">  </span>Gender</div>
<br>
Male<input type="radio" name="gender" value="Male">
Female<input type="radio" name="gender" value="Female"><br><br>
<div class="key"><span class="label">  </span>Current Address</div>
<br>
<textarea name="currAddr" id="addr" rows="3" cols="40"></textarea><br><br>
<div class="key"><span class="label">  </span>Permanent Address</div>
<br>
<textarea name="permAddr" id="addr" rows="3" cols="40"></textarea><br><br>
<div class="key"><span class="label">  </span>City</div>
<br><input type="text" id="round" name="city"><br>
<div class="key"><span class="label">  </span>State</div>
<br><input type="text" id="round" name="state"><br>
<div class="key"><span class="label">  </span>Zip Code</div>
<br><input type="number" id="round" name="zip"><br><br>
Personal Interests
<br>
Sports<input type="checkbox" name="interests" value="sports">
Books<input type="checkbox" name="interests" value="sports">
Computer & Software<input type="checkbox" name="interests" value="sports">
Fashion<input type="checkbox" name="interests" value="sports">
Photography<input type="checkbox" name="interests" value="sports"><br><br>

<input type="submit" class ="submit" value="Submit">
		<!---------------------------------->
 
 
   </form>




8 Answers. Use either the <button> element or use an <input type="button"/> .
 there is no need to js or jquery. to stop page reloading just specify the the
 button type as 'button'. if you dont specify the button type
, browser will set it to 'reset' or 'submit' witch cause to page reload.