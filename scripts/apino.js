function scroll() {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  if (
    scrollTop >
    document.getElementById("main").offsetTop -
      document.getElementById("top-line").offsetTop
  ) {
    document.getElementById("apino").style.display = "block"
  } else if (scrollTop > document.getElementById("apino-title").offsetTop) {
  } else {
    document.getElementById("apino").style.display = "none"
  }
}

function support() {
  document.getElementById("support").classList.add("support-open")
  document.getElementById("email").classList.add("email-open")
}
