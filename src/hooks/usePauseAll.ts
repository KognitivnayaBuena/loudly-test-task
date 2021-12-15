export const usePauseAll = () => {
  return function pauseAll(target: HTMLAudioElement) {
    const audios = Array.from(document.querySelectorAll("audio")).filter(
      (el) => el !== target
    );

    audios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
  };
};
