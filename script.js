const shareBtn = document.querySelector(".share-icon");
const sharePopup = document.querySelector("#sharePopup");

if (shareBtn && sharePopup) {
  shareBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    const isActive = sharePopup.classList.contains("show");

    if (isActive) {
      sharePopup.classList.remove("show");
      shareBtn.classList.remove("active");
    } else {
      sharePopup.classList.add("show");
      shareBtn.classList.add("active");
    }
  });

  document.addEventListener("click", (e) => {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
      sharePopup.classList.remove("show");
      shareBtn.classList.remove("active");
    }
  });
}
