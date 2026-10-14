(function () {
  var contents = document.querySelector("#sentry-post .toc");
  if (contents) {
    var desktop = window.matchMedia("(min-width: 992px)");
    function updateContents() {
      contents.open = desktop.matches;
    }
    updateContents();
    desktop.addEventListener("change", updateContents);
    contents.addEventListener("click", function (event) {
      if (!desktop.matches && event.target.closest('a[href^="#"]')) {
        contents.open = false;
      }
    });
  }

  var copyBtn = document.getElementById("copy-bib");
  var bib = document.getElementById("bib");
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
      setTimeout(function () {
        copyBtn.textContent = "Copy";
      }, 1600);
    }
    try {
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.textContent = "Copied";
        setTimeout(function () {
          copyBtn.textContent = "Copy";
        }, 1600);
      }, selectFallback);
    } catch (e) {
      selectFallback();
    }
  });
})();
