import { events } from "../data/events";

async function EventsPage() {
  const response = await fetch("/src/pages/html/events.html");
  let html = await response.text();

  const eventsHtml = events
    .map(
      (event) => `
        <a href="/events/${event.id}" style="text-decoration: none; color: black;">
            <div class="event" style="border: 1px solid black; padding: 10px; margin: 10px;">
                <h2>${event.title}</h2>
                <p>Date: ${event.date}</p>
                <p>${event.description}</p>
                <p>Price: $${event.price}</p>
            </div>
        </a>
    `
    )
    .join("");

  html += eventsHtml;

  return html;
}

export default EventsPage;
