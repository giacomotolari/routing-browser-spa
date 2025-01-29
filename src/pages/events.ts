async function EventsPage() {
    const response = await fetch("/src/pages/html/events.html");
    const html = await response.text();
    return html;
  }
  
  export default EventsPage;
  