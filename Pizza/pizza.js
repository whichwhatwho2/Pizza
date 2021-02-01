

document.getElementById("pizzaform").onsubmit = validate;

function validate()
{
    // create a flag variable
    let isValid = true;

    //clear all error messages
    let errors = document.getElementsByClassName("err"); // called a NODE LIST, collection of elements
    for(let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }

    // check first name field
    let first = document.getElementById("fname").value;
    if(first ===""){
        //alert("check first name is empty");
        let errFirst = document.getElementById("err-fname");
        errFirst.style.display = "inline";
        isValid = false;
    }

    // check last name
    let last = document.getElementById("lname").value;
    if(last =="") {
        //alert("check first name is empty");
        let errLast = document.getElementById("err-lname");
        errLast.style.display = "inline";
        isValid = false;
    }

    // check pizza size
    let size = document.getElementById("size").value;
    if(size === "none" ){
        let errSize = document.getElementById("err-size");
        errSize.style.display = "inline";
        isValid = false;
    }

    // check pickup or delivery selection   <span class="err" id="err-method"> Please select retrieval method </span>
    let method = document.getElementsByName("method");
    let isSelected = false;
    for (let i=0; i<method.length; i++) {
        if (method[i].checked) {
            isSelected = true;
            break;
        }
    }
    if (!isSelected) {
        let errMethod = document.getElementById("err-method");
        errMethod.style.display = "inline";
        isValid = false;
    }

    //alert(size);
    return isValid;
}
