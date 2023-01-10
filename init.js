function init_home(){

//     const date = new Date();
// 	let day = date.getDate();
// 	let hour = date.getHours();
// 	let minute = date.getMinutes();
// 	let second = date.getSeconds(); 
                
//     document.getElementById('clock').innerHTML = day+ '&nbsp;&nbsp;:&nbsp;&nbsp;'+hour+'&nbsp;&nbsp;:&nbsp;&nbsp;'+minute+'&nbsp;&nbsp;:&nbsp;&nbsp;'+second;


    
    
	 $.ajax({
	                type:   "POST",
	                url:    "https://www.smartr.app/home.php",
	                headers: {
	                    "Access-Control-Allow-Origin":"*" ,
	                    // Access-Control-Allow-Origin
	                    //"Access-Control-Allow-Headers" : "Content-Type"

	                },
	                data:   {
	                },
	                dataType: 'JSON',
	                success: (response) =>{
	 
	                	document.getElementById('num_1').innerHTML = response[0].num_1;
	                	document.getElementById('num_2').innerHTML = response[0].num_2;
	                	document.getElementById('num_3').innerHTML = response[0].num_3;
	                	document.getElementById('num_4').innerHTML = response[0].num_4;
	                	document.getElementById('num_1_2').innerHTML = response[0].num_1;
	                	document.getElementById('num_2_2').innerHTML = response[0].num_2;
	                	document.getElementById('num_3_2').innerHTML = response[0].num_3;
	                	document.getElementById('num_4_2').innerHTML = response[0].num_4;
	                	document.getElementById('num_1_3').innerHTML = response[0].num_1;
	                	document.getElementById('num_2_3').innerHTML = response[0].num_2;
	                	document.getElementById('num_3_3').innerHTML = response[0].num_3;
	                	document.getElementById('num_4_3').innerHTML = response[0].num_4;
	                	console.log(response[0].num_1);
	                	console.log(response[0].num_2);
	                	console.log(response[0].num_3);
	                	console.log(response[0].num_4);
	                	document.getElementById('text_1').innerHTML = response[0].text_1;
	                	document.getElementById('text_2').innerHTML = response[0].text_2;
	                	document.getElementById('text_3').innerHTML = response[0].text_3;
	                	document.getElementById('text_4').innerHTML = response[0].text_4;
	                	document.getElementById('text_5').innerHTML = response[0].text_5;
	                	document.getElementById('text_6').innerHTML = response[0].text_6;
	                	document.getElementById('text_7').innerHTML = response[0].text_7;
	                	document.getElementById('text_8').innerHTML = response[0].text_8;
	                	document.getElementById('text_9').innerHTML = response[0].text_9;
	                	document.getElementById('text_10').innerHTML = response[0].text_10;
	                	document.getElementById('text_11').innerHTML = response[0].text_12;
	                	document.getElementById('text_12').innerHTML = response[0].text_13;
	                	document.getElementById('text_13').innerHTML = response[0].text_14;
	                	document.getElementById('text_14').innerHTML = response[0].text_14;
	                	document.getElementById('text_15').innerHTML = response[0].text_15;
																																							

	                	document.getElementById('img_1').innerHTML = "<img class='u-image u-image-contain u-image-default u-preserve-proportions u-image-1' src='images/"+response[0].img_1+"' data-image-width='76' data-image-height='71'> ";
	                	document.getElementById('img_2').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/'+response[0].img_2+'" data-image-width="65" data-image-height="55">';
	                	document.getElementById('img_3').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/'+response[0].img_3+'" data-image-width="188" data-image-height="186">';
	                	document.getElementById('img_4').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-4" src="images/'+response[0].img_4+'" data-image-width="174" data-image-height="166">';
	               // 	document.getElementById('img_5').innerHTML = '<img class="u-image u-image-default u-image-2" src="images/'+response[0].img_5+'" data-image-width="284" data-image-height="450" data-animation-name="customAnimationIn" data-animation-duration="1500">';
	                },
	                error: function () {
	                    console.log ("ERROR:");
	                }
	            });
 }

//  setInterval(init_home, 1000);
 
 function init_taxi(){

	 $.ajax({
	                type:   "POST",
	                url:    "https://www.smartr.app/taxi.php",
	                headers: {
	                    "Access-Control-Allow-Origin":"*" ,
	                    // Access-Control-Allow-Origin
	                    //"Access-Control-Allow-Headers" : "Content-Type"

	                },
	                data:   {
	                },
	                dataType: 'JSON',
	                success: (response) =>{
	                	document.getElementById('num_1').innerHTML = response[0].num_1;
	                	document.getElementById('num_2').innerHTML = response[0].num_2;
	                	document.getElementById('num_3').innerHTML = response[0].num_3;
	                	document.getElementById('num_4').innerHTML = response[0].num_4;
	                	document.getElementById('num_1_2').innerHTML = response[0].num_1;
	                	document.getElementById('num_2_2').innerHTML = response[0].num_2;
	                	document.getElementById('num_3_2').innerHTML = response[0].num_3;
	                	document.getElementById('num_4_2').innerHTML = response[0].num_4;
	                	document.getElementById('text_1').innerHTML = response[0].text_1;
	                	document.getElementById('text_2').innerHTML = response[0].text_2;
	                	document.getElementById('text_3').innerHTML = response[0].text_3;
	                	document.getElementById('text_4').innerHTML = response[0].text_4;
	                	document.getElementById('text_5').innerHTML = response[0].text_5;
	                	document.getElementById('text_6').innerHTML = response[0].text_6;
	                	document.getElementById('text_7').innerHTML = response[0].text_7;
	                	document.getElementById('text_8').innerHTML = response[0].text_8;
	                	document.getElementById('text_9').innerHTML = response[0].text_9;
	                	document.getElementById('text_10').innerHTML = response[0].text_10;
	                	document.getElementById('text_11').innerHTML = response[0].text_12;
	                	document.getElementById('text_12').innerHTML = response[0].text_13;
	                	document.getElementById('text_13').innerHTML = response[0].text_14;
	                	document.getElementById('text_14').innerHTML = response[0].text_14;
	                	document.getElementById('text_15').innerHTML = response[0].text_15;
	                	
	                	document.getElementById('img_1').innerHTML = "<img class='u-image u-image-contain u-image-default u-preserve-proportions u-image-6' src='images/"+response[0].img_1+"'' data-image-width='136' data-image-height='157'>";
	                	document.getElementById('img_2').innerHTML = '<img class="u-border-3 u-border-white u-image u-image-circle u-preserve-proportions u-image-1" src="images/'+response[0].img_2+'" alt="" data-image-width="199" data-image-height="198">';
	                	document.getElementById('img_3').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="images/'+response[0].img_3+'" data-image-width="157" data-image-height="157">';
	                	document.getElementById('img_4').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/'+response[0].img_4+'" data-image-width="244" data-image-height="126">';
	                	document.getElementById('img_5').innerHTML = '<img class="u-image u-image-contain u-image-default u-image-2" src="images/'+response[0].img_5+'" data-image-width="286" data-image-height="300" data-animation-name="customAnimationIn" data-animation-duration="1500">';
	              
	                	
	                },
	                error: function () {
	                    console.log ("ERROR:");
	                }
	            });
 }




  function init_stake(){

	 $.ajax({
	                type:   "POST",
	                url:    "https://www.smartr.app/stake.php",
	                headers: {
	                    "Access-Control-Allow-Origin":"*" ,
	                    // Access-Control-Allow-Origin
	                    //"Access-Control-Allow-Headers" : "Content-Type"

	                },
	                data:   {
	                },
	                dataType: 'JSON',
	                success: (response) =>{

	                	document.getElementById('num_1').innerHTML = response[0].num_1;
	                	document.getElementById('num_2').innerHTML = response[0].num_2;
	                	document.getElementById('num_3').innerHTML = response[0].num_3;
	                	document.getElementById('num_4').innerHTML = response[0].num_4;
	                	document.getElementById('num_5').innerHTML = response[0].num_5;
	                	document.getElementById('num_6').innerHTML = response[0].num_6;
	                	document.getElementById('num_7').innerHTML = response[0].num_7;
	                	document.getElementById('num_8').innerHTML = response[0].num_8;
	                	document.getElementById('num_9').innerHTML = response[0].num_9;
	                	document.getElementById('num_10').innerHTML = response[0].num_10;
	                	document.getElementById('num_11').innerHTML = response[0].num_11;
	                	document.getElementById('num_12').innerHTML = response[0].num_12;
	                	document.getElementById('num_13').innerHTML = response[0].num_13;
	                	document.getElementById('num_14').innerHTML = response[0].num_14;
	                	
	                	document.getElementById('text_1').innerHTML = response[0].text_1;
	                	document.getElementById('text_2').innerHTML = response[0].text_2;
	                	document.getElementById('text_3').innerHTML = response[0].text_3;
	                	document.getElementById('text_4').innerHTML = response[0].text_4;


		                document.getElementById('img_1').innerHTML = '<img class="u-image u-image-contain u-image-default u-image-1" src="images/'+response[0].img_1+'" data-image-width="792" data-image-height="878">';	
		                document.getElementById('img_2').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-1" src="images/'+response[0].img_2+'" data-image-width="157" data-image-height="157">';
		                document.getElementById('img_3').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-2" src="images/'+response[0].img_3+'" data-image-width="167" data-image-height="144">';
		                document.getElementById('img_4').innerHTML = '<img class="u-image u-image-contain u-image-default u-preserve-proportions u-image-3" src="images/'+response[0].img_4+'" data-image-width="168" data-image-height="182">';
	                	
	                },
	                error: function () {
	                    console.log ("ERROR:");
	                }
	            });
 }