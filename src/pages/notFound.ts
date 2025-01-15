async function notFound() {
  const response = await fetch("/src/pages/html/notFound.html");
  const html = await response.text();
  return html;
}

export default notFound;
