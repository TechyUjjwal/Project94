function addUser() {
    username = document.getElementById("user-inp").value;
    password = document.getElementById("pass-inp").value;
    
    localStorage.setItem("username", username)
    localStorage.setItem("password", password)

    window.alert("Saved Credentials !")
    window.location.replace("page.html")
}