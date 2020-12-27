//variables
let ui = new UI(),
  data = new Data(),
  downloadBtn = document.querySelector("#btnDownload"),
  inputLink = document.querySelector("#link");

//eventListeners
eventListeners();
function eventListeners() {
  downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputLink.value.length !== 0)
      data.fetchData(inputLink.value.split("/")[3]);
    else ui.showError();
  });
}
