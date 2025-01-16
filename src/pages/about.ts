async function aboutPage() {
    const response = await fetch("/src/pages/html/about.html");
    const html = await response.text();
    return html;
  }
  
  export default aboutPage;
  