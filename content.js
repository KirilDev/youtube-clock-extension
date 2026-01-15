function addClock() {
  console.log("YT Clock extension loaded");
  if (document.getElementById("yt-player-clock")) return;

  const player = document.querySelector(".html5-video-container");
  if (!player) return;

  const clock = document.createElement("div");
  clock.id = "yt-player-clock";
  clock.textContent = getCurrentTime();

  // basic visibility styling
  clock.style.position = "absolute";
  clock.style.top = "10px";
  clock.style.right = "10px";
  clock.style.color = "white";
  clock.style.fontSize = "14px";
  clock.style.zIndex = "9999";

  player.appendChild(clock);

  setInterval(() => {
    clock.textContent = getCurrentTime();
  }, 1000);
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

// Observe DOM changes (YouTube is SPA)
const observer = new MutationObserver(addClock);
observer.observe(document.body, {
  childList: true,
  subtree: true
});

addClock();
