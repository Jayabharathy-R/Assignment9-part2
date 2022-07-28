function submit() {
    var chbox=[];
    var fName = document.querySelector("#fname").value;
    var lName = document.querySelector("#lname").value;
    var address = document.querySelector("#address").value;
    var pin= document.querySelector("#pin").value;
    var state = document.querySelector("#state").value;
    var country = document.querySelector("#country").value;
    if (document.querySelector("#male").checked) {
        var gender = document.querySelector("#male").value;
    }
    else if (document.querySelector("#female").checked) {
        var gender = document.querySelector("#female").value;
    }
    else if (document.querySelector("#other").checked) {
        var gender = document.querySelector("#other").value;
    }
    if (document.querySelector("#sandwich").checked) {
        chbox.push(document.querySelector("#sandwich").value);
    }
    if (document.querySelector("#burger").checked) {
        chbox.push(document.querySelector("#burger").value);
        
    }
    if (document.querySelector("#pizza").checked) {
        chbox.push(document.querySelector("#pizza").value);
    }
    if (document.querySelector("#meal").checked) {
        chbox.push(document.querySelector("#meal").value);
    }
    if (document.querySelector("#salad").checked) {
        chbox.push(document.querySelector("#salad").value);
    }
    // var ol=document.createElement("ol");
    // ol.setAttribute("id","myol")
    // for(let i=0;i<chbox.length;i++){
    
              
    //            var li=document.createElement("li");
    //            var value=document.createTextNode(chbox[i].value);
    //            li.appendChild(value);
    //            document.querySelector("#myol").appendChild(li);


    // }

    var table=document.querySelector("#table");
    var row=table.insertRow();
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6=row.insertCell(5);
    var cell7=row.insertCell(6);
    var cell8=row.insertCell(7);
    cell1.innerHTML=fName;
    cell2.innerHTML=lName;
    cell3.innerHTML=address;
    cell4.innerHTML=pin;
    cell5.innerHTML=gender;
    cell6.innerHTML=chbox;
    cell7.innerHTML=state;
    cell8.innerHTML=country;

}
