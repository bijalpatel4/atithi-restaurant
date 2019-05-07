
   

	function realTimeClock(){
		   
		      var rightnow = new Date();
			  var hours = rightnow.getHours();
			  var minutes = rightnow.getMinutes();
			  var seconds = rightnow.getSeconds();
			if (hours < 10) {
			var hourstring = "0" + hours.toString();
			} else {
			var hourstring = hours.toString();
			}

			if (minutes < 10) {
			var minutestring = "0" + minutes.toString();
			} else {
			var minutestring = minutes.toString();
			}

			if (seconds < 10) {
			var secondstring = "0" + seconds.toString();
			} else {
			var secondstring = seconds.toString();
			}

			var timestring = hourstring + ":" + minutestring +":" + secondstring;
			// display to the screen
			var timeplace = document.getElementById("time");
			timeplace.innerHTML  = timestring;
			greetings(hours);
			setTimeout('realTimeClock()', 1000);
			
		}

		realTimeClock();

		function greetings(hours){

			if (hours>=0 && hours<6) {
		          text = "What are you doing that early?";
		          bgColor = 'green';
		        } else if (hours>=6 && hours<12) {
		          text= "Good Morning!";
		          bgColor = 'yellow';
		        } else if (hours>=12 && hours<18) {
		          text = "Good Afternoon!";
		          bgColor = 'orange';
		        } else if (hours>=18 && hours<24) {
		          text = "Good Evening!";
		          bgColor = 'purple';
		        } else {
		          text = "Invalid hour for earth! Are you on Mars?";
		        }
		      let greetingId = document.getElementById('greetings');
		        greetingId.innerHTML = "<b>" + text +"</b>";
		       greetingId.style.background = bgColor;
		      

		}

		function randomQuote(start,end){

		     return Math.floor(Math.random() * end + start);
		}


		var quotes = [" All our dreams can come true, if we have the courage to pursue them. ",
			               " Our greatest glory is not in never falling, but in rising every time we fall. ",
			               "It does not matter how slowly you go as long as you do not stop.",
			               " Everything you’ve ever wanted is on the other side of fear."];

			var randQuotes = quotes[randomQuote(0,quotes.length)];
		    var quotesId  = document.getElementById("quotes");
		    quotesId.innerHTML = randQuotes;
        
        function createCalander(){
           var months = ["January","Februrary","March","April","May","June","July","August","September","October","November", "December"];
           var weeks = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
           var today = new Date();
           var year = today.getFullYear();
           var month = today.getMonth();
           var date = today.getDate();
           var day = today.getDay();

        var table = document.createElement("table");
        var th = document.createElement("th");
        table.appendChild(th);
        th.colSpan = "7";
        th.innerHTML = months[month] +" " + year;  
        
         
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for(var i = 0; i<7 ;i++){
            var td = document.createElement("td");
            td.innerHTML = weeks[i];
            tr.appendChild(td);
        }
        document.getElementById('calander').appendChild(table);
        

		startspaces = date % 7;
		startspaces = day - startspaces + 1;
        if (startspaces < 0) startspaces +=7;

        var tr1 = document.createElement("tr");
       
        table.appendChild(tr1);
   
         
         for(var j = 0;j<startspaces;j++){
         	 var td = document.createElement("td");
         	 tr1.appendChild(td);
         }
         var lastDate = (new Date(year,month+1,0)).getDate();
          var dayCount = 1;
         for(var k = startspaces; k<7;k++){
         	 var td = document.createElement("td");
         	 td.innerHTML = dayCount ;
         	 if(dayCount===date){
         	 	td.bgColor= "red";
         	 }
         	 dayCount++;
         	 tr1.appendChild(td);
         }
         for(var r= 0; r<5;r++){
         	 var tr2 = document.createElement("tr");
         	 for(var c = 0;c<7;c++){
         	 	 var td = document.createElement("td");
         	 	 if(dayCount <= lastDate){
         	 	 	td.innerHTML =dayCount;
         	 	 	if(dayCount===date){
         	 	      td.bgColor =  "red";
         	 	     
         	        }
         	 	 	dayCount++;
         	 	 }
         	     tr2.appendChild(td);
         	 }
         	 table.appendChild(tr2);

         }
        

        }
        createCalander();