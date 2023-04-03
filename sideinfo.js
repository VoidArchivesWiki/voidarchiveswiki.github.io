fetch("Void-Archives-Honkai-Wiki/sideinfo.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sideBarHI").innerHTML = data;
  });