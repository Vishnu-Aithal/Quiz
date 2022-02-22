const SUI_navBarToggle = document.querySelector(".nav-bar__toggle");

SUI_navBarToggle.onclick = (e) => {
    const toggleBtn = e.target;
    const toggleTarget = document.querySelector(toggleBtn.dataset.toggle);
    toggleBtn.classList.toggle("active");
    toggleTarget.classList.toggle("show");
};