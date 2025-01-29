async function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Event 1",
      date: "2022-01-01",
      description: "Description of event 1",
      price: 10,
    },
    {
      id: 2,
      title: "Event 2",
      date: "2022-02-02",
      description: "Description of event 2",
      price: 20,
    },
    {
      id: 3,
      title: "Event 3",
      date: "2022-03-03",
      description: "Description of event 3",
      price: 30,
    },
    {
      id: 4,
      title: "Event 4",
      date: "2022-04-04",
      description: "Description of event 4",
      price: 40,
    },
    {
      id: 5,
      title: "Event 5",
      date: "2022-05-05",
      description: "Description of event 5",
      price: 50,
    },
  ];

  const response = await fetch("/src/pages/html/events.html");
  let html = await response.text();

  const eventsHtml = events
    .map(
      (event) => `
        <div class="event" style="border: 1px solid black; padding: 10px; margin: 10px;">
            <h2>${event.title}</h2>
            <p>Date: ${event.date}</p>
            <p>${event.description}</p>
            <p>Price: $${event.price}</p>
        </div>
    `
    )
    .join("");

  html += eventsHtml;

  return html;
}

export default EventsPage;
