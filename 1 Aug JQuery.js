
<script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>
		
      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $('div').bind('click', function( event ){
               alert('Hi there!');
            });
         });
      </script>
<style>
         .div{ margin:10px;padding:12px; border:2px solid #666; height: 40px; width:60px;}
      </style>
   </head>
	
   <body>
      <p>Click on any square below to see the result:</p>
		
      <div class = "div" style = "background-color:blue;">ONE</div>
      <div class = "div" style = "background-color:green;">TWO</div>
      <div class = "div" style = "background-color:red;">THREE</div>
   </body>

//https://www.tutorialspoint.com/jquery/jquery-events.htm


//
  alert('Event type is ' + event.type);
               alert('pageX : ' + event.pageX);
               alert('pageY : ' + event.pageY);
               alert('Target : ' + event.target.innerHTML);


















































































































































