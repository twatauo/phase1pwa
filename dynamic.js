function getdata(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
			//console.log(xhr);
		}
	}
xhr.send(null);
}
getdata("dynamic.json",function(text){
	//console.log(xhr);
	var data=JSON.parse(text);
	console.log(data);
	personalinfo(data.profile);
	career(data.career);
	education(data.education);
})

var left=document.querySelector(".leftdiv");
 function personalinfo(pi){

var image=document.createElement("img");
    // image.src="picture.jpg";
    image.src=pi.img;
    left.appendChild(image);

     var name=document.createElement("h1");
     name.textContent=pi.name;
     left.appendChild(name);

     var rollno=document.createElement("h2");
     rollno.textContent=pi.rollno;
     left.appendChild(rollno);

     var hr=document.createElement("hr");
     left.append(hr);

     var place=document.createElement("p");
     place.textContent=pi.place;
     left.appendChild(place);

     var email=document.createElement("p");
     email.textContent=pi.email;
     left.appendChild(email);
}
// rightdiv
var right=document.querySelector('.rightdiv');
 // career objective
 function career(ca){
 	var heading=document.createElement("h1");
 	    heading.textContent="career objective";
 	    right.appendChild(heading);

    var hr=document.createElement("hr");
    right.appendChild(hr);

    var career=document.createElement("p");
    career.textContent=ca.info;
    right.appendChild(career);
 }
 // education details
 function education(edu){
 	var heading=document.createElement("h1");
 	heading.textContent="education details";
 	right.appendChild(heading);

 	var hr=document.createElement("hr");
 	 right.appendChild(hr);

 	 var table=document.createElement("table");
 	 table.border="2";
 	 var tr1="<tr><th>Degree</th><th>Institute</th><th>Per</th><th>Yop</th></tr>";
 	 var tr2="";
 	 for(var i=0;i<edu.length;i++){
 	 	tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].per+"</td><td>"+edu[i].yop+"</td><tr>"
 	 }
      table.innerHTML=tr1+tr2;
      right.appendChild(table);
 }
