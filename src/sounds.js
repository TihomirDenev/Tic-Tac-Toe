function playSoundById(soundId, volume = 1.0) {
  const soundElement = document.getElementById(soundId);

  if (soundElement) {
    soundElement.volume = volume;
    soundElement.play().catch((error) => {
      console.error(`Failed to play sound: ${error}`);
    });
  }
}

export function playWarningSound() {
  playSoundById('gameWarningSound', 0.5);
}

export function playWinSound() {
  playSoundById('gameWinSound', 0.5);
}

export function playRestartSound() {
  playSoundById('gameRestartSound', 0.5);
}
