function smoothScrollTo(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');

  // Dynamic content loading
  if (projectId === 'proj1') {
    modalBody.innerHTML = `
      <h3>A Strategic Marketing Analysis and Planning Report of a Local Nonprofit: the RE Store in Bellingham, WA</h3>
      <p>This project showcases an in-depth analysis of the RE Store, a local nonprofit organization that focuses on salvaging furniture and building materials to then sell at a discounted rate to the public and small contractors. Within my report, I detail several strategies to help boost brand awareness, access new market segments, and improve the RE Store's digital presence.</p>
      <a href="https://www.canva.com/design/DAGo8JRzidY/yuSQR7cQggU3rFVNQODDxg/edit?utm_content=DAGo8JRzidY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download class="cta">Click Here to View Report (PDF)</a>
    `;
  } else if (projectId === 'proj2') {
    modalBody.innerHTML = `
      <h3>Small Business Success: How Simple Web Design Strengthens Marketing Efficacy- an Info Sheet</h3>
      <p>This quick, yet substantial, information sheet serves as a reference for small businesses looking to expand into new, digital spaces in order to boost their SEO and brand image. Covering topics such as brand building, aesthetics, web creation, UI/UX, and more, this info sheet is a great place to start if you're thinking of entering the e-commerce realm.</p>
      <a href="documents/webdesign.pdf" download class="cta">Click Here to Download Info Sheet (PDF)</a>
    `;
  } else if (projectId === 'proj3') {
    modalBody.innerHTML = `
      <h3>ADIDAS Case Study and Brand Audit with Recommendations for Re-Positioning</h3>
      <p>I worked with a small group to configure this brand audit for ADIDAS, with the focus being on how the brand could re-position itself to reach new markets and expand on its brand image. Accompanying this report, we also created a presentation with different visualizations and examples of how ADIDAS could expand into the luxury market, which is available upon request.</p>
      <a href="https://www.canva.com/design/DAGW3pArnak/va-v-Uuyh9hcbo91BLshSQ/edit?utm_content=DAGW3pArnak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download class="cta">Click Here to View Report (PDF)</a>
    `;
  } else if (projectId === 'projWebsite') {
    modalBody.innerHTML = `
      <h3>Agrotourism and Food Culture in and around Florence, Italy: Project from my Study Abroad</h3>
      <p>Upon completing my study abroad in Florence, I created a simple website using Wix to record and personify my experience and learning while in the program. I spent many weeks taking and compiling photos, writing sections, doing research by talking to local restaurant and shop owners, and delving into agrotourism in the Tuscany region to prepare for the creation of this site.</p>
      <a href="https://zoegabler8.wixsite.com/florenceblog" target="_blank" class="cta">Click Here to Visit Live Site</a>
    `;
  } else if (projectId === 'proj5') {
    modalBody.innerHTML = `
      <h3>Bellingham Coding and Robotics Club Marketing Strategy and Recommendations</h3>
      <p>For this project, I worked with a local business to complete an industry analysis, conduct multi-stage survey research, consumer analysis, social media recommendations, and more. Me and my group presented this slideshow to the business owner, who was very pleased with our evidence-supported strategies and analysis.</p>
      <a href="https://www.canva.com/design/DAGBflDIaRw/WJl-RGF62WOodHDuFAS51w/edit?utm_content=DAGBflDIaRw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" download class="cta">Click Here to View Presentation (PDF)</a>
    `;
  } else if (projectId === 'projWebsite2') {
    modalBody.innerHTML = `
      <h3>Web Design 202 Class Portfolio of Projects and Websites created during the course</h3>
      <p>This site is a compilation of all of my projects and course work for my web design class, ranging from JS.P5 to hacking an ELIZA chatbot to integrating movement and interactivity. Feel free to explore the links in my Portfolio as well as the "Websites I think are cool" section.</p>
      <a href="https://zoegabler.github.io/CS-202/" target="_blank" class="cta">Click Here to Visit Live Site</a>
    `;
  }
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal on outside click
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    strings: [
      "Welcome to My Professional Portfolio",
      "I blend marketing insights with technical execution",
      "Check out my projects below ↓",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
  });
});

let slideIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  slideIndex = (slideIndex + direction + slides.length) % slides.length;
  track.style.transform = `translateX(-${slideIndex * 100}%)`;
}

window.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  window.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");

  // Set track width based on number of slides
  track.style.width = `${slides.length * 100}%`;

  // Make each slide occupy exactly 100% of the carousel width
  slides.forEach(slide => {
    slide.style.width = `${100 / slides.length}%`;
  });
});

});

function openImageModal(src) {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeImageModal() {
  const modal = document.getElementById("image-modal");
  modal.style.display = "none";
}
