function myFunction() {
    var x = document.getElementById('links')
    if (x.style.display === "none") {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      };

    if (x.style.flexDirection === "row") {
        x.style.flexDirection = "column";
      } else {
        x.style.flexDirection = "row";
      };

    if (x.style.position === "static") {
        x.style.position = "absolute";
      } else {
        x.style.position = "static";
      };

    if (x.style.top === "auto") {
        x.style.top = "100%";
      } else {
        x.style.top = "auto";
      };

    if (x.style.left === "auto") {
        x.style.left = "15px";
      } else {
        x.style.left = "auto";
      };
    if (x.style.backgroundColor === "transparent") {
        x.style.backgroundColor = "rgb(0 0 0 / 50%)";
      } else {
        x.style.backgroundColor = "transparent";
      };
}