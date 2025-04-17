let inputName = prompt ("What is your name?");
document.getElementById("inputName").innerHTML = inputName;

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm() function (e) { 
    e.preventDefault();
    const name = document.getElementById["name"].value;
    const date = document.getElementById["birth-date"].value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const messages = document.getElementById["messages"].value;
    const timeNow = new Date().toString();

    document.getElementById("result-name").innerText = name;
    document.getElementById("result-date").innerText = date;
    document.getElementById("result-gender").innerText = gender;
    document.getElementById("result-messages").innerText = messages;
    document.getElementById("result-time").innerText = timeNow;
};