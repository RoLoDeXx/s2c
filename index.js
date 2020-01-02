let btns = document.getElementsByClassName("collapse-btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (btns[i].textContent === "＋") {
      // close all
      btns[0].textContent = "＋";
      btns[1].textContent = "＋";
      btns[2].textContent = "＋";

      btns[0].parentElement.style.color = "#000000";
      btns[1].parentElement.style.color = "#000000";
      btns[2].parentElement.style.color = "#000000";

      // action
      btns[i].textContent = "－";

      btns[i].parentElement.style.color = "#4BB6F5";
    } else if (btns[i].textContent === "－") {
      btns[i].textContent = "＋";
      btns[i].parentElement.style.color = "#000000";
    }
  });
}
