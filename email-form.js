window.addEventListener("load", function() {
  document.getElementById("mailtolink").addEventListener("click", function(e) {
    e.preventDefault() // remove after testing
    let url = new URL("mailto:contact@sport-dev.ch");
    let params = new URLSearchParams(url.search);
    const name = document.querySelector("[name=name]").value.trim();
    const email = document.querySelector("[name=email]").value.trim();
    const subject = document.querySelector("[name=subject]").value.trim();
    const body = document.querySelector("[name=body]").value.trim();
    params.set("from", email);
    params.set("subject", subject);
    params.set("body", name + " said " + body);
    this.href=url;
    console.log(url)
  })
});