const personList = JSON.parse(localStorage.getItem("personList"));


const collectData=()=>{

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let gender = document.getElementsByName('gender');
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let hobby = document.getElementsByName('hobby');
    let genderValue = '';
    let hobbies = [];
    
    
    for(i in gender){
        if(gender[i].checked){
            genderValue = gender[i].value;
        }
    }
    
    for(i in hobby){
        if(hobby[i].checked){
            hobbies.push(hobby[i].value);
        }
    }

    const person = {
        firstName:firstName,
        lastName:lastName,
        address:address,
        gender:genderValue,
        email:email,
        password:password,
        hobby:hobbies
    }
    return person;
}

const submitData=()=>{
    let emptyerror = validateData();
    if(emptyerror==true){
        errorshow();
    }
    else{
        let person = collectData();
        personList.push(person);
        localStorage.setItem("personList", JSON.stringify(personList));
        createRow();
        resetData();
    }

};

const createRow=()=>{
    
    let row = '';
    for(i in personList){
        row +='<tr>'+'<th scope="row">'+(Number(i)+1)+'</th>'+
        '<td>'+personList[i].firstName+'</td>'+
        '<td>'+personList[i].lastName+'</td>'+
        '<td>'+personList[i].address+'</td>'+
        '<td>'+personList[i].gender+'</td>'+
        '<td>'+personList[i].email+'</td>'+
        '<td>'+personList[i].password+'</td>'+
        '<td>'+personList[i].hobby+'</td>'+
        '<td>'+'<button onclick="editData('+i+')">Edit</button><button onclick="deleteData('+i+')">Delete</button>'+'</td>'+'</tr>' ;
        
    }
    document.getElementById('table').innerHTML=row;
}

const resetData=()=>{
    errorhidden();
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('male').checked=false;
    document.getElementById('female').checked=false;
    document.getElementById('other').checked=false;
    document.getElementById('reading').checked=false;
    document.getElementById('playing').checked=false;
    document.getElementById('drawing').checked=false;
    document.getElementById('gaming').checked=false;
  
};

const deleteData=(i)=>{
    resetData();
    var storedpersonList = JSON.parse(localStorage.getItem("personList"));
    storedpersonList.splice(i,1);
    personList.splice(i,1);
    localStorage.setItem("personList", JSON.stringify(storedpersonList));
    createRow();
    document.getElementById('updatesumbitdiv').innerHTML = `<button type="submit" onclick="submitData()" id="submitbtn">Submit</button>`;
};

const editData=(i)=>{
    document.getElementById('firstName').value = personList[i].firstName;
    document.getElementById('lastName').value = personList[i].lastName;
    document.getElementById('address').value = personList[i].address;
    document.getElementById('email').value = personList[i].email;
    document.getElementById('password').value = personList[i].password;
    let gender = personList[i].gender;
    if(gender=='male'){
        document.getElementById('male').checked=true;
    }
    else if(gender=='female'){
        document.getElementById('female').checked=true;
    }
    else if(gender=='other'){
        document.getElementById('other').checked=true;
    }
    
    for(j in personList[i].hobby){
        if(personList[i].hobby[j]=='reading'){
            document.getElementById('reading').checked=true;
        }
        else if(personList[i].hobby[j]=='playing'){
            document.getElementById('playing').checked=true;
        }
        else if(personList[i].hobby[j]=='drawing'){
            document.getElementById('drawing').checked=true;
        }
        else if(personList[i].hobby[j]=='gaming'){
            document.getElementById('gaming').checked=true;
        }
    }

    
    document.getElementById('updatesumbitdiv').innerHTML = '<button type="submit" onclick="updateData('+i+')" id="updatebtn">Update</button>';

}

const updateData=(i)=>{
    let emptyerror = validateData();
    if(emptyerror==true){
        errorshow();
    }
    else{
        let person = collectData();
        var storedpersonList = JSON.parse(localStorage.getItem("personList"));
        storedpersonList.splice(i,1,person);
        personList.splice(i,1,person);
        localStorage.setItem("personList", JSON.stringify(storedpersonList));
        createRow();
        resetData();
        document.getElementById('updatesumbitdiv').innerHTML = `<button type="submit" onclick="submitData()" id="submitbtn">Submit</button>`;
        
    }

}

const validateData=()=>{
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let reading = document.getElementById('reading').checked;
    let playing = document.getElementById('playing').checked;
    let drawing = document.getElementById('drawing').checked;
    let gaming = document.getElementById('gaming').checked;
    let emptyerror = false;
    if(firstName == '' || lastName == '' || address == '' || !(male==true || female==true || other==true) || email == '' || password == '' || !(reading==true || playing==true || drawing==true || gaming==true)){
        emptyerror = true;
        
    }
    else{
        emptyerror = false;
    }
    return emptyerror    
    

}

const errorshow=()=>{
    errorhidden();
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let male = document.getElementById('male').checked;
    let female = document.getElementById('female').checked;
    let other = document.getElementById('other').checked;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let reading = document.getElementById('reading').checked;
    let playing = document.getElementById('playing').checked;
    let drawing = document.getElementById('drawing').checked;
    let gaming = document.getElementById('gaming').checked;
    ;
        if(firstName == ''){
            document.getElementById('emptyfname').classList.remove('hidden');
        }
        if(lastName == ''){
            document.getElementById('emptylname').classList.remove('hidden');
        }
        if(address == ''){
            document.getElementById('emptyaddress').classList.remove('hidden');
        }
        if(!(male==true || female==true || other==true)){
            document.getElementById('emptygender').classList.remove('hidden');
        }
        if(email == ''){
            document.getElementById('emptyemail').classList.remove('hidden');
        }
        if(password == ''){
            document.getElementById('emptypassword').classList.remove('hidden');
        }
        if(!(reading==true || playing==true || drawing==true || gaming==true)){
            document.getElementById('emptyhobby').classList.remove('hidden');
        }
}

const errorhidden=()=>{
    document.getElementById('emptyfname').classList.add('hidden');
    document.getElementById('emptylname').classList.add('hidden');
    document.getElementById('emptyaddress').classList.add('hidden');
    document.getElementById('emptygender').classList.add('hidden');
    document.getElementById('emptyemail').classList.add('hidden');
    document.getElementById('emptypassword').classList.add('hidden');
    document.getElementById('emptyhobby').classList.add('hidden');
}

window.onload = createRow;