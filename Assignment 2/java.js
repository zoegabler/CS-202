window.addEventListener("DOMContentLoaded", () => {
    const audioEl = document.getElementById("audio");
    const audioSourceEl = document.getElementById("audioSource");

    const identities = {
      greek: {
        title: "Athens: a Moment in Time",
        image: "images/athens.jpg",
        description: "The scent of olive oil and cigarette smoke fills the air. The Parthenon stands proud in the background. Music and local chatter fill the street markets below. Sitting on a rooftop terrace, sipping something citrusy and planning your next island-hopping adventure. Kythira? Syros? Or maybe you'd spend a few more days enjoying the vibrant culture and delicious cuisine that Athens has to offer.",
        background: "#c8f3ff",
        color: "#333",
        flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
        audio: "audio/athens.mp3"
      },
      american: {
        title: "NYC: a Moment in Time",
        image: "images/nyc.jpg",
        description: "The buzz of Times Square is electric and invigorating. Neon lights and honking horns define the rhythm of the city that never sleeps. Museums, theaters, shops, and street vendors create a vibrant tapestry of culture and cuisine. People are constantly moving, talking, laughing, and huffing as their lives momentarily interwine on the Subway or walking across the street. The concrete jungle is alive!",
        background: "#f5e3ff",
        color: "#111",
        flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        audio: "audio/nyc.mp3"
      }
    };

    let current = "greek";
  
    const contentEl = document.getElementById("content");
    const titleEl = document.getElementById("title");
    const imageEl = document.getElementById("image");
    const descEl = document.getElementById("description");
    const flagEl = document.getElementById("flag");

    function switchIdentity(to) {
      if (!identities[to] || current === to) return;
  
      const data = identities[to];
      contentEl.classList.add("fade-out");
  
      setTimeout(() => {
        current = to;
        titleEl.textContent = data.title;
        imageEl.src = data.image;
        descEl.textContent = data.description;
        flagEl.src = data.flag;
        document.body.style.background = data.background;
        titleEl.style.color = data.color;
        descEl.style.color = data.color;
        audioSourceEl.src = data.audio;
        audioEl.load();
        audioEl.play();
  
        contentEl.classList.remove("fade-out");
      }, 600);
    }
  
    imageEl.addEventListener("click", () => {
      const next = current === "greek" ? "american" : "greek";
      switchIdentity(next);
    });
  
    window.addEventListener("keydown", (e) => {
      const key = e.key.toLowerCase();
      if (key === "g") switchIdentity("greek");
      else if (key === "a") switchIdentity("american");
    });
  });

