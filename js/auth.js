function showLogin() {
    document.getElementById("loginBox").classList.remove("hidden");
    document.getElementById("registerBox").classList.add("hidden");
}

function showRegister() {
    document.getElementById("registerBox").classList.remove("hidden");
    document.getElementById("loginBox").classList.add("hidden");
}

function login() {
    window.location.href = "dashboard.html";
}

function register() {
    window.location.href = "dashboard.html";
}

function logout() {
    window.location.href = "index.html";
}
