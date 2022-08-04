

function validate(){
    let firstNameInput = document.getElementById('valfirstName').value
    let lastNameInput = document.getElementById('vallastName').value
    let emailInput = document.getElementById('valuserName').value
    let cityInput = document.getElementById('valcity').value
    let stateInput = document.getElementById('valstate').value
    let zipInput = document.getElementById('valzip').value
    let tncInput = document.getElementById('valtnc').checked

    var onlyalphabet = /^[A-Za-z]+$/;
    if(firstNameInput.match(onlyalphabet)) {
        document.getElementById('firstname-valid').style.display = 'block'
        document.getElementById('firstname-invalid').style.display = 'none'
    } else {
        document.getElementById('firstname-valid').style.display = 'none'
        document.getElementById('firstname-invalid').style.display = 'block'
    }

    if(lastNameInput.match(onlyalphabet)) {
        document.getElementById('lastname-valid').style.display = 'block'
        document.getElementById('lastname-invalid').style.display = 'none'
    } else {
        document.getElementById('lastname-valid').style.display = 'none'
        document.getElementById('lastname-invalid').style.display = 'block'
    }
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailInput.match(mailformat)){
        document.getElementById("user-valid").style.display = "block";
        document.getElementById("user-invalid").style.display = "none";
      } else {
        document.getElementById("user-invalid").style.display = "block";
        document.getElementById("user-valid").style.display = "none";
      }

    if(cityInput.match(onlyalphabet)) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    } else {
        document.getElementById('city-valid').style.display = 'none'
        document.getElementById('city-invalid').style.display = 'block'
    }

    if(stateInput.length >= 1) {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    } else {
        document.getElementById('state-valid').style.display = 'none'
        document.getElementById('state-invalid').style.display = 'block'
    }

    var zipformat =  /^[0-9]+$/;
    if(zipInput.match(zipformat)){
        document.getElementById('zip-valid').style.display = 'block'
        document.getElementById('zip-invalid').style.display = 'none'
    } else {
        document.getElementById('zip-valid').style.display = 'none'
        document.getElementById('zip-invalid').style.display = 'block'
    }

    if(tncInput) {
        document.getElementById('tnc-valid').style.display = 'block'
        document.getElementById('tnc-invalid').style.display = 'none'
    } else {
        document.getElementById('tnc-valid').style.display = 'none'
        document.getElementById('tnc-invalid').style.display = 'block'
    }

}






