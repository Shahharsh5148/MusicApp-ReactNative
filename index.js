import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { App } from './src';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';

async function registerPlaybackService() {
  try {
    await TrackPlayer.registerPlaybackService(() => require('./service.js'));
    console.log('Playback service registered successfully');
  } catch (error) {
    console.error('Failed to register playback service:', error);
  }
}

AppRegistry.registerComponent(appName, () => App);

registerPlaybackService();
