const markers = document.querySelectorAll(".marker");
const glowFrame = document.getElementById("mapGlowFrame");

function updateGlowLevel() {
  const discoveredCount = document.querySelectorAll(".marker.discovered").length;
  let glowLevel = 0;

  if (discoveredCount >= 1 && discoveredCount <= 2) {
    glowLevel = 1;
  } else if (discoveredCount >= 3 && discoveredCount <= 4) {
    glowLevel = 2;
  } else if (discoveredCount >= 5 && discoveredCount <= 6) {
    glowLevel = 3;
  } else if (discoveredCount >= 7) {
    glowLevel = 4;
  }

  glowFrame.className = `map-glow-frame glow-level-${glowLevel}`;
}

markers.forEach((marker) => {
  const discover = () => {
    if (!marker.classList.contains("discovered")) {
      marker.classList.add("discovered");
      updateGlowLevel();
    }
  };

  marker.addEventListener("mouseenter", discover);
  marker.addEventListener("focus", discover);
});

updateGlowLevel();