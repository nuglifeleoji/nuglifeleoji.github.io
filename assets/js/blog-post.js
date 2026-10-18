(function () {
  var contents = document.querySelector(".blog-post .toc");
  if (contents) {
    var desktop = window.matchMedia("(min-width: 768px)");
    function updateContents() {
      contents.open = desktop.matches;
    }
    updateContents();
    desktop.addEventListener("change", updateContents);
    contents.addEventListener("click", function (event) {
      if (desktop.matches && event.target.closest("summary")) {
        event.preventDefault();
      }
      if (!desktop.matches && event.target.closest('a[href^="#"]')) {
        contents.open = false;
      }
    });
  }

  var copyBtn = document.getElementById("copy-bib");
  var bib = document.getElementById("bib");
  var status = document.querySelector(".research-copy-status");
  if (!copyBtn || !bib) return;
  copyBtn.addEventListener("click", function () {
    var text = bib.textContent;
    function selectFallback() {
      var r = document.createRange();
      r.selectNodeContents(bib);
      var s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      copyBtn.textContent = "Selected";
      if (status) status.textContent = "Citation selected. Use your browser's Copy command to copy it.";
      setTimeout(function () {
        copyBtn.textContent = "Copy";
      }, 1600);
    }
    try {
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = "Copied";
        if (status) status.textContent = "BibTeX citation copied.";
        setTimeout(function () {
          copyBtn.textContent = "Copy";
        }, 1600);
      }, selectFallback);
    } catch (e) {
      selectFallback();
    }
  });
})();
