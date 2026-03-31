document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero__video");
  if (!video) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    video.pause();
    return;
  }

  const playPromise = video.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {
      document.documentElement.classList.add("video-fallback");
    });
  }

  video.addEventListener("error", () => {
    document.documentElement.classList.add("video-fallback");
  });
});