function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function toggleFAQ(button) {
  const content = button.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

