const data = [
  {
    start: "2024-10-20T00:00:00.000Z",
    end: "2024-11-11T00:00:00.000Z",
    text: `
          <div class="module text">
            <p class="smallspottext" style="text-align: center;">Liebe Gäste, wir haben vom</p>
            <p class="smallspottext" style="text-align: center;"><span style="font-weight: bold;">Samstag 26. Oktober 2024</span> <span
                style="font-weight: bold;">bis Montag 11. November 2024 geschlossen und sind an der Basler Herbstmesse</span>.</p>
            <p class="smallspottext" style="text-align: center;">Wir freuen uns, euch ab Dienstag 12.11.2024 wieder
              in Lachen begrüssen zu dürfen!</p>
          </div>
        `
  },
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
  }
]

const now = new Date()
const currentAnnouncement = data.find(({ start, end }) => now > new Date(start) && now < new Date(end))

if (currentAnnouncement) {
  document.querySelector("#r4274").style.display = "block";
  document.querySelector("#announcement").innerHTML = currentAnnouncement.text
}
