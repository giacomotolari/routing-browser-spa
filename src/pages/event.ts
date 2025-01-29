import { events } from "../data/events";

function EventPage() {
  const pathname = window.location.pathname;
  const pathnameToArr = pathname.split("/");
  const eventID = Number(pathnameToArr[pathnameToArr.length - 1]);
  const event = events.find((event) => event.id === eventID);

  if (!event) {
    return `<div class="event" style="border: 1px solid black; padding: 10px; margin: 10px;">
                        <h2>Event not found</h2>
                    </div>`;
  }

  return `<div class="event" style="border: 1px solid black; padding: 10px; margin: 10px;">
                    <h2>${event.title}</h2>
                    <p>Date: ${event.date}</p>
                    <p>${event.description}</p>
                    <p>Price: $${event.price}</p>
                    more details....
                </div>`;
}

export default EventPage;
