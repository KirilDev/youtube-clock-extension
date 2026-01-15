function adddClock() {
    if (document.getElementById("yt-player-clock")) return;
    
    const player = document.querySelector(".html5-video-player");

    if (!player) return;

    const clock = document.createElement("div");
    clock.id = "yt-player-clock";
    clock.textContent = getCurrentTime();

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

const observer = new MutationObserver(adddClock);
observer.observe(document.body, {
    childList: true, 
    subtree: true
})

adddClock();