const data = [
  {
    start: "2025-07-31T00:00:00.000Z",
    end: "2025-08-04T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste,</p>
          <p class="smallspottext" style="text-align: center;">Die Schweiz hat Geburtstag!</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Deshalb bleiben wir vom 1. bis 3. August 2025 geschlossen</span> <span
              style="font-weight: bold;">Wir freuen uns, euch ab dem 4. August 2025 wieder in Lachen begrüssen zu dürfen.
            </span>.</p>
        </div>
      `
  },
  {
    start: "2025-01-06T00:00:00.000Z",
    end: "2025-01-31T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, ab 2025 sind unsere Preise leicht angepasst,</p>
          <p class="smallspottext" style="text-align: center;">um weiterhin die gewohnt hohe Qualität unserer Speisen und Dienstleistungen gewährleisten zu können.</p>
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
    start: "2025-06-08T00:00:00.000Z",
    end: "2025-06-10T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir haben am</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Montag 9. Juni 2025</span> <span
              style="font-weight: bold;">wegen Pfingstmontag geschlossen</span>.</p>
          <p class="smallspottext" style="text-align: center;">Wir freuen uns, euch ab Dienstag 10.06.2025 wieder
            in Lachen begrüssen zu dürfen!</p>
        </div>
      `
  },
  {
    start: "2025-07-04T00:00:00.000Z",
    end: "2025-07-06T00:00:00.000Z",
    text: `
        <div class="module text">
          <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir sind vom</p>
          <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Freitag 4. Juli bis Sonntag 6. Juli</span> <span
              style="font-weight: bold;">am Wettingerfest und haben deshalb geschlossen</span>.</p>
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
