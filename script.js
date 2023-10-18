const menuIcon = document.querySelector("#menuIcon");

menuIcon.onclick = function() {
    let menu = document.querySelector("nav");
    if (menu.style.transform == "translateY(9vh)") {
        menuIcon.style.transform = "rotateZ(0deg)";
        menu.style.display = "flex";
        menu.style.transform = "translateY(-23vh)";
    }
    else {
        menuIcon.style.transform = "rotateZ(90deg)";
        menu.style.display = "flex";
        menu.style.transform = "translateY(9vh)";
    }
}
