function registrar(){
    console.log('ubicacion');
    var email = document.getElementById('').value;
    var contrasena = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        console.log(email)
        console.log(contrasena)
        // ...
    });
}

