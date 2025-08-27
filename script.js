function incressCount() {
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
  const heartIcons = document.querySelectorAll(".heart-icon");

  for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
      heartCount++;
      document.getElementById('heart-count').innerText = heartCount;
    });
  }
}
incressCount();

