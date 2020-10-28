if (!localStorage.getItem("isLoggedIn")) {
    localStorage.setItem("isLoggedIn", "false")
}

export var isLoggedIn = localStorage.getItem("isLoggedIn");

export function setIsloggedIn(state) {
    localStorage.setItem("isLoggedIn", state)
}