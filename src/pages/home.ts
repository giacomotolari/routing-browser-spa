async function homePage() {
  const response = await fetch("/src/pages/html/home.html");
  const html = await response.text();
  return html;
}

export default homePage;
