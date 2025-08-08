function showContainerById(id) {
  const containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    if (container.id === id) {
      container.style.display = "";
    } else {
      container.style.display = "none";
    }
  });
}
// Select değiştikçe ilgili container'ı göster
document.addEventListener("DOMContentLoaded", function () {
  const selector = document.getElementById("stepSelector");
  if (selector) {
    selector.addEventListener("change", function () {
      showContainerById(this.value);
    });
    showContainerById(selector.value);
  }
});

// Örnek kullanım:
// showContainerById('container2');
