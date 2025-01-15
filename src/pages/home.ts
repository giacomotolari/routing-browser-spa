async function homePage() {
  // Eine asynchrone Funktion, die eine HTML-Datei von einem bestimmten Pfad abruft
  const response = await fetch("/src/pages/html/home.html");
  // Die Antwort wird in Text umgewandelt
  const html = await response.text();
  return html;
}

export default homePage;