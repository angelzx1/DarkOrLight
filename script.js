function changeColor(color) {
    document.body.style.background = color;
}
function DarkMode() {
    var texto = document.getElementById("TextThemes");
    changeColor('#1a1a1a');
    texto.textContent = "Dark Mode";
    texto.style.color = "#fff";
}         
function LightMode() {
    var texto = document.getElementById("TextThemes");
   changeColor('#fff');
    texto.textContent = "Light Mode";
    texto.style.color = "#1a1a1a";
}