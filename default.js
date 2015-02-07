//alert("Found default.js");

function myFunction()
{
	var fruits=["Banana","Orange", "Apple","Mango"];
	fruits.sort();
	var x=document.getElementById("demo");
	x.innerHTML=fruits;

}

function myReverseFunction(){
	var fruits2=["Banana", "Mango","Apple", "Orange"];
	fruits2.reverse();
	var y=document.getElementById("reverse");
	y.innerHTML=fruits2;
}

function myNumericFunction(){
	var points=[40,100,1,5,25,10];
	points.push(1000);
	points.sort(sortfunc);
	var y=document.getElementById("reverseNumber");
	y.innerHTML=points;
}

function sortfunc(a,b){
	return a - b; 
}

function displayText(txt){
	alert(txt);
}

function Jeffproduct(a,b){
	return a*b;
}

function todaydate(){
	var today_date=new Date();
	var myyear=today_date.getYear();
	var mymonth=today_date.getMonth()+1;
	var mytoday=today_date.getDate();
	document.write(myyear+"/"+mymonth+"/"+mytoday);
}

/******************************************************************
* Convert Centigrade to Farenheit or back
*******************************************************************/
function convert(degree){
	if(degree=="C"){
		F=document.getElementById("c").value * 9 / 5 + 32;
		document.getElementById("f").value=Math.round(F);
	}else{
		C=(document.getElementById("f").value-32)*5/9;
		document.getElementById("c").value = Math.round(C);
	}
}

function show_confirm(){
	var r=confirm("Press a button!");
	if(r==true){
		alert("You pressed OK!");
	}else{
		alert("You pressed Cancel!");
	}
}

function show_prompt(){
	var name=prompt("Please enter your name", "Harry Potter");
	if(name!=null && name!=""){
		document.write("<p>Hello "+ name + "! How art thou today?</p>");
	}
}

/******************************************************************
* create a document
*******************************************************************/
function createDoc(){
	var doc=document.open("text/html","replace");
	var txt="<html><body>Learning about HTML DOM is fun!</body></html>";
	doc.write(txt);
	doc.close()
}

/*********************************************************************
* Disable a dropdown box
**********************************************************************/
function disable(){
	document.getElementById("mySelect").disabled=true;
}

/*********************************************************************
* Enable a dropdown box
**********************************************************************/
function enable(){
	document.getElementById("mySelect").disabled=false;
	document.getElementById("mySelect").multiple=true;
}

/**********************************************************************
* Remove an element from select
***********************************************************************/
function removeOption(){
	var x=document.getElementById("mySelect");
	x.remove(x.selectedIndex);
}


/**********************************************************************
* Factorial - You know what that does...
***********************************************************************/
function factorial(n){
	if(n==0)return(1);
	return(n*factorial(n-1));
}

/*********************************************
* Return array of factors of a number
*********************************************/
function factors(a){
	var b=1;
	var retval=new Array();
	while(b<=a){
		if((a%b)==0){
			retval.push(b);
		}
		b++;
	}
	return retval;
}

/*********************************************
*  Return the sum of the proper divisors of a number
**********************************************/
function divisorSum(a){
	var arr = factors(a);
	var retVal = 0;
	for(var i=0; i < arr.length-1; i++){
		retVal += arr[i];	
	}//end for
	
return retVal;
}//end of function 



/*********************************************
* Fibonacci Numbers
*********************************************/
function fibonacci(startNumber, endNumber){
	var retval=new Array();
	var temp=new Array();
	temp[0]=startNumber;
	temp[1]=1;
	for(var i=2; i<=endNumber;i++){
		first = i-1;
		second = i-2;
		temp[i]=temp[first]+temp[second];
		retval.push("<TR><TD>"+(i+1)+"</TD><TD>"+temp[i]+"</TD></TR>");
	}
	return retval;
}


/****************************************************
*Described in htmlgoodies/primers/jsp/article.php/11915_3665066_4/The-JavaScript-Diaries-Part-8.htm
****************************************************/

var bookWindow;
function newWindow(link){
	bookWindow=window.open(link,"new1", "width=240,height=360");
	if(bookWindow.open){
		bookWindow.close;
	}
bookWindow.focus();
}


var newWin;

function checkWin() {
  if (!newWin || newWin.closed) {
	 newWin=window.open("","","width=300,height=250");
	 setTimeout("winContent()",100);
  }
  else {
    	newWin.focus();
  }
}

function winContent() {
   var content = "<html><head><title>The Other Window <\/title><\/head><body>";
   content += "<h2>It Worked!<\/h2>";
   content += "<p>This window is a sub window of the main one that opened it.";

   content += "<form><input type='button' value='Bring Main Window to Front' onclick='self.opener.focus()'><p>";
   content += "<input type='button'value='Move This Window to Back' onclick='self.blur()'><p>";
   content += "<input type='button' value='Close This Window' onclick='self.close()'>";
   content += "<\/form><\/body><\/html>";
   newWin.document.write(content);

   newWin.document.close();
}

/*****************************************************************************************************
* From htmlgoodies.com 
* http://www.htmlgoodies.com/primers/jsp/article.php/11915_3666746_2/The-JavaScript-Diaries-Part-9.htm
******************************************************************************************************/
function alert_me(){
  alert("You resized me! Now my outer width is: "
    +this.outerWidth+" and my outer height is: "+this.outerHeight);
  this.focus();
}

/******************************************************************************************************
* From htmlgoodies.com
* http://www.htmlgoodies.com/primers/jsp/article.php/11915_3672361_3/The-JavaScript-Diaries-Part-12.htm
******************************************************************************************************/
var offInfo = new Array();
  offInfo["president"] = "Michael Smith: 555-1212";
  offInfo["vpresident"] = "Sherry Gables: 555-4578";
  offInfo["treasurer"] = "Nick Adams: 555-1916";
  offInfo["secretary"] = "Leslie Jones: 555-8745";

function displayOff(offInfo,entry) {
  var nameTele=offInfo[entry];
  document.musicForm.nameTeleBox.value=nameTele;
}


function intersection_destructive(a, b){
  var result = new Array();
  while( a.length > 0 && b.length > 0 )
  {  
     if      (a[0] < b[0] ){ a.shift(); }
     else if (a[0] > b[0] ){ b.shift(); }
     else /* they're equal */
     {
       result.push(a.shift());
       b.shift();
     }
  }

  return result;
}

 function gcd(a,b)
      {
      var temp;
      if(a < 0) {a = -a;};
      if(b < 0) {b = -b;};
      if(b > a) {temp = a; a = b; b = temp;};
      while (true) {
         a %= b;
         if(a == 0) {return b;};
         b %= a;
         if(b == 0) {return a;};
      };
      return b;
	  
	// Downloaded 2/7/15 from http://userpages.umbc.edu/~rcampbel/NumbThy/Class/Programming/JavaScript/
  }