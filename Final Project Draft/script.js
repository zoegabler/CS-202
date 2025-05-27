// script.js
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
      <h2>Marketing Campaign Dashboard</h2>
      <p>This project showcases a responsive dashboard built with Chart.js and Bootstrap for real-time marketing metrics.</p>
      <a href="documents/project1.pdf" download>Download Case Study (PDF)</a>
    `;
  } else if (projectId === 'proj2') {
    modalBody.innerHTML = `
      <h2>Personalized E-Commerce Site</h2>
      <p>A dynamic website with recommendation algorithms and A/B tested UX layouts. Built with React and Firebase.</p>
      <a href="documents/project2.pdf" download>Download Whitepaper (PDF)</a>
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
