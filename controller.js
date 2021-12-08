function openNav() {
    document.getElementById("mySidenav").style.width = "30vw";
    document.getElementById("firstSection").style.background = "rgba(0,0,0,0.5)";
    document.getElementById("highlights").style.opacity = ".5"
    document.getElementById("headline").style.opacity = ".5"
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("firstSection").style.background = "rgba(0,0,0,0)";
    document.getElementById("highlights").style.opacity = "1"
    document.getElementById("headline").style.opacity = "1"
}