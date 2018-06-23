
window.onload = function() {
var price = document.getElementById('price');
var total = document.getElementById('total');
var calculate = document.getElementById('calculate');
var taxed = document.getElementById('taxed');
var ipPort = "localhost:3000"
price.focus	();


calculate.onclick = function() {
	var gstprice = 18;
	var taxed1 = (price.value / 100 ) * 18;
	var total1 = parseInt(taxed1) + parseInt(price.value) ;
	taxed.value = taxed1;
	total.value = total1;
	
};
	document.getElementById('price').onblur = function() {
		
	//	window.alert("OnFocus");
		console.log("OnFocus");
		document.getElementById('calculate').focus()	;
		
	};
	document.getElementById('calculate').onmouseover = function() {
		
		//window.confirm("Continue");
		console.log("Click here to calculate gst")
	};

	//like 1
	var blikeele  = document.getElementById("likebutton");
blikeele.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var counter =  request.responseText;
            var span=document.getElementById('likecount');
            span.innerHTML = counter.toString();
           
        } 
        }
    };
	request.open('GET','http://'+ipPort+'/counter',true);
        request.send(null);
};

//like 2
	var blikeele2  = document.getElementById("likebutton2");
blikeele2.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var counter2 =  request.responseText;
            var span=document.getElementById('likecount2');
            span.innerHTML = counter2.toString();
           
        } 
        }
    };
	request.open('GET','http://'+ipPort+'/counter2',true);
        request.send(null);
};

//like 3
	var blikeele3  = document.getElementById("likebutton3");
blikeele3.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var counter3 =  request.responseText;
            var span=document.getElementById('likecount3');
            span.innerHTML = counter3.toString();
           
        } 
        }
    };
	request.open('GET','http://'+ipPort+'/counter3',true);
        request.send(null);
};

//Comment 1
var commentsop = document.getElementById('commentoutput');
var submitclick = document.getElementById('commentbutton');
 submitclick.onclick = function() {
var commentsip = document.getElementById('commentin');
 commentsipvalue=commentsip.value;
 if(commentsipvalue!=='')
    {
		var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var list = ' ';
                var comments =  request.responseText;
				comments=JSON.parse(comments);
				 for(var temp=0;temp<comments.length;++temp) {
							 list += ('<li>' + comments[temp]);
							  commentsop.innerHTML = list.toString();
							  commentsip.value="";
							}
							} 
							}
						};
						request.open('GET','http://'+ipPort+'/submit-comment?commentinput='+commentsipvalue,true);
            request.send(null);
	}
 };

//Comment 2
var commentsop2 = document.getElementById('commentoutput2');
var submitclick2 = document.getElementById('commentbutton2');
 submitclick2.onclick = function() {
var commentsip2 = document.getElementById('commentin2');
 commentsipvalue2=commentsip2.value;
 if(commentsipvalue2!=='')
    {
		var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var list = ' ';
                var comments2 =  request.responseText;
				comments2=JSON.parse(comments2);
				 for(var temp=0;temp<comments2.length;++temp) {
							 list += ('<li>' + comments2[temp]);
							  commentsop2.innerHTML = list.toString();
							  commentsip2.value="";
							}
							} 
							}
						};
						request.open('GET','http://'+ipPort+'/submit-comment2?commentinput2='+commentsipvalue2,true);
            request.send(null);
	}
 };

//Comment 3
var commentsop3 = document.getElementById('commentoutput3');
var submitclick3 = document.getElementById('commentbutton3');
 submitclick3.onclick = function() {
var commentsip3 = document.getElementById('commentin3');
 commentsipvalue3=commentsip3.value;
 if(commentsipvalue3!=='')
    {
		var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var list = ' ';
                var comments3 =  request.responseText;
				comments3=JSON.parse(comments3);
				 for(var temp=0;temp<comments3.length;++temp) {
							 list += ('<li>' + comments3[temp]);
							  commentsop3.innerHTML = list.toString();
							  commentsip3.value="";
							}
							} 
							}
						};
						request.open('GET','http://'+ipPort+'/submit-comment3?commentinput3='+commentsipvalue3,true);
            request.send(null);
	}
 };


//test DB 
	var dbButtun= document.getElementById("dbButton");
	
dbButtun.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var dbVar =  request.responseText;
            var dbSpan=document.getElementById('dbSpan');
            dbSpan.innerHTML = dbVar.toString();
           
        } 
        }
    };
	request.open('GET','http://'+ipPort+'/test-db',true);
        request.send(null);
};
	
	
	
	



	function myStatus() {
		
		var status = document.getElementById("statusid").value;
			if( status == "Available" )
				{
					window.alert("Available");
				}
	}
	
};
