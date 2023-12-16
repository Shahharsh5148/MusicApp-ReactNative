import {
  addEventListener,
  play,
  pause,
  destroy,
  skipToNext,
  skipToPrevious,
  seekTo,
  getPosition,
} from 'react-native-track-player';

async function handleRemotePlay() {
  try {
    await play();
  } catch (error) {
    console.error('Error handling remote-play:', error);
  }
}

async function handleRemotePause() {
  try {
    await pause();
  } catch (error) {
    console.error('Error handling remote-pause:', error);
  }
}

async function handleRemoteStop() {
  try {
    await destroy();
  } catch (error) {
    console.error('Error handling remote-stop:', error);
  }
}

async function handleRemoteNext() {
  try {
    await skipToNext();
  } catch (error) {
    console.error('Error handling remote-next:', error);
  }
}

async function handleRemotePrevious() {
  try {
    const position = await getPosition();
    if (position > 3) {
      await seekTo(0);
    } else {
      await skipToPrevious();
    }
  } catch (error) {
    console.error('Error handling remote-previous:', error);
  }
}

async function handleRemoteSeek(position) {
  try {
    await seekTo(position);
  } catch (error) {
    console.error('Error handling remote-seek:', error);
  }
}

module.exports = function () {
  addEventListener('remote-play', handleRemotePlay);
  addEventListener('remote-pause', handleRemotePause);
  addEventListener('remote-stop', handleRemoteStop);
  addEventListener('remote-next', handleRemoteNext);
  addEventListener('remote-previous', handleRemotePrevious);
  addEventListener('remote-seek', ({ position }) => handleRemoteSeek(position));
};
