const link = document.getElementById("origamid");

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace("http://", "https://");
}
