let fileContents = ""; 


const fName = document.querySelector('#first-name');
const lName = document.querySelector('#last-name');
const email = document.querySelector('#e-mail');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

const submit = document.querySelector('#submit');
submit.addEventListener("click", addData);

var arr = new Array();



function addData() {
    var validate = ""
    console.log(email.value)
    
    if (fName.value == "") {
        validate += "\nyou have not entered your first name"
    }
    if (lName.value == "") {
        validate += "\nyou have not entered your lirst name"
    }
    const emailVal = email.value;
    if (!emailVal.includes("@") || /[^a-zA-Z0-9_\-.@]/.test(email.value)) {
        validate += "\nyou did not enter a vlid e-mail"
    }
    if (/[^0-9+]/.test(phone.value) || phone.value.length != 10) {
        validate += "\nyou did not enter a vlid Phone number"
    }

    if (validate != "") {
        alert(validate);
    } else {
        alert("Your information and message have been recorded");
        DeleteData();
        getData();
        arr.push({
            first_name: fName.value,
            last_name: lName.value,
            email: lName.value,
            phone: lName.value,
            message: lName.value,
        });
        fName.value = "";
        lName.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        localStorage.setItem("localData", JSON.stringify(arr));
    }
    
}
function getData(){
    var str = localStorage.getItem("localData");
    if (str!= null)
    arr = JSON.parse(str);
}

function DeleteData(){
    localStorage.clear();
}
