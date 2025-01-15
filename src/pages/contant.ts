async function contantPage() {
    const response = await fetch("/src/pages/html/contact.html");
    const html = await response.text();
    return html;
  }
  
  export default contantPage;
  