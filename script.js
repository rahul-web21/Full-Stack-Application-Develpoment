function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginMsg").innerText = "Login Successful!";
    } else {
        document.getElementById("loginMsg").innerText = "Invalid Credentials";
    }
}

function submitExam() {
    let score = 0;

    if (document.getElementById("q1").value === "Programming") score++;
    if (document.getElementById("q2").value === "Java Virtual Machine") score++;

    document.getElementById("result").innerText =
        "Your Score: " + score + "/2";
}

function generateCertificate() {
    let name = document.getElementById("candidateName").value;
    document.getElementById("certName").innerText = name;
    document.getElementById("certificate").classList.remove("hidden");
}
