const handledata = (e) => {
    e.preventDefault();
    let user = {
        name: document.getElementById("username").value,
        num: document.getElementById("number").value,
        id: document.getElementById("email").value,
        pass: document.getElementById("password").value
    }
    if(user.name.length>1){
        document.getElementById("username").style.backgroundColor="green"
    }
    else document.getElementById("username").style.backgroundColor="red"
}
document.getElementById("data").addEventListener("submit", handledata)