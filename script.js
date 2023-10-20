const menuIcon = document.querySelector("#menuIcon");

menuIcon.onclick = function() {
    let menu = document.querySelector("nav");
    if (menu.style.transform == "translateY(85px)") {
        menuIcon.style.transform = "rotateZ(0deg)";
        menu.style.transform = "translateY(-23vh)";
    }
    else {
        menuIcon.style.transform = "rotateZ(90deg)";
        menu.style.transform = "translateY(85px)";
    }
}
