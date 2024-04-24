const nameage = () => {
    let name = document.getElementById("nam").value
    let age = document.getElementById ("umar").value

    document.getElementById("result-1").innerHTML = "Name: " + name + "<br>Type: " + typeof name + "<br>"
    document.getElementById("result-2").innerHTML = "Age:"  + age + "<br>Type: " + typeof parseInt(age) + "<br>"
}
