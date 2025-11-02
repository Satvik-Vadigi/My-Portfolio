document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".card");

  wrappers.forEach(wrapper => {
    const img = wrapper.querySelector("img");
    const span = wrapper.querySelector(".img-alt-text");

    // Set alt text dynamically
    span.textContent = img.alt;

    wrapper.addEventListener("mouseenter", () => {
      span.style.opacity = 1;
    });

    wrapper.addEventListener("mouseleave", () => {
      span.style.opacity = 0;
    });
  });
});
