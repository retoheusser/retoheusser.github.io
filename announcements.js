const data = [
  {
    start: "2024-12-20T00:00:00.000Z",
    end: "2025-01-06T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir haben vom</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Sonntag 22. Dezember 2024</span> <span
              style="font-weight: bold;">bis Sonntag 05. Januar 2025 Weihnachtsferien</span>.</p>
          <p class="smallspottext" style="text-align: center;">Wir freuen uns, euch ab Montag 06.01.2025 wieder
            in Lachen begrüssen zu dürfen!</p>
        </div>
      `
  },
  {
    start: "2025-04-16T00:00:00.000Z",
    end: "2025-04-22T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir haben vom</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Freitag 18. April</span> <span
              style="font-weight: bold;">bis Montag 21. April 2025 wegen Ostern geschlossen</span>.</p>
          <p class="smallspottext" style="text-align: center;">Wir freuen uns, euch ab Dienstag 22.04.2025 wieder
            in Lachen begrüssen zu dürfen!</p>
        </div>
      `
  },
  {
    start: "2025-04-22T00:00:00.000Z",
    end: "2025-04-28T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir sind vom</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Freitag 25. April </span> <span
              style="font-weight: bold;">bis Sonntag 27. April 2025 am Jonafest</span>.</p>
        </div>
      `
  },
  {
    start: "2025-04-29T00:00:00.000Z",
    end: "2025-05-02T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir haben am</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Donnerstag 1. Mai 2025</span> <span
              style="font-weight: bold;">wegen Tag der Arbeit geschlossen</span>.</p>
          <p class="smallspottext" style="text-align: center;">Wir freuen uns, euch ab Freitag 02.02.2025 wieder
            in Lachen begrüssen zu dürfen!</p>
        </div>
      `
  },
  {
    start: "2025-05-02T00:00:00.000Z",
    end: "2025-05-03T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir sind am</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Samstag 3. Mai</span> <span
              style="font-weight: bold;">am Lachen Markt</span>.</p>
        </div>
      `
  },
]

const now = new Date()
const currentAnnouncement = data.find(({ start, end }) => now > new Date(start) && now < new Date(end))

if (currentAnnouncement) {
  document.querySelector("#r4274").style.display = "block";
  document.querySelector("#announcement").innerHTML = currentAnnouncement.text
}
