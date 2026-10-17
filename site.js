document.querySelectorAll('[data-copy]').forEach(function (button) {
  var label = button.textContent;
  button.addEventListener('click', function () {
    var source = document.getElementById(button.dataset.copy);
    var reset = function () { setTimeout(function () { button.textContent = label; }, 2000); };
    navigator.clipboard.writeText(source.textContent.trim()).then(function () {
      button.textContent = button.dataset.done;
      reset();
    }, function () {
      var range = document.createRange();
      range.selectNodeContents(source);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = button.dataset.fallback;
      reset();
    });
  });
});
