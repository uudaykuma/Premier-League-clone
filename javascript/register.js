function register() {
    location.assign('register_2.html')
}

var registered_users = JSON.parse(localStorage.getItem('userArr'))
    //console.log(registered_users)






function siginIN() {

    var sigin_mail = document.getElementById('mail').value;
    var signin_pass = document.getElementById('pass').value;




    if (sigin_mail == '' || signin_pass == '') {
        alert(`Please provide the email and password`)
    }

    registered_users.forEach(el => {
        var { email, password } = el
        console.log(email, password)
        if (sigin_mail == email && signin_pass == password) {
            alert(`logged in`)
        }
    });











}