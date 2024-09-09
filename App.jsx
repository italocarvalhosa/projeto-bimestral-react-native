import 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Index } from './src/Screens/Initial/InitialStack';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);


  useEffect(() => {

    async function prepare() {
      try {

        await Font.loadAsync({
          'Inter-Extra-Light': require('./assets/fonts/InterDisplay-ExtraLight.otf'),
          'Inter-Light': require('./assets/fonts/InterDisplay-Light.otf'),
          'Inter-Regular': require('./assets/fonts/InterDisplay-Regular.otf'),
          'Inter-Medium': require('./assets/fonts/InterDisplay-Medium.otf')
        })

        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      catch (e) {
        console.warn(e);
      }
      finally {
        setAppIsReady(true);
      }
    }
    prepare()
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady){
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  onLayoutRootView();

  if(!appIsReady){
    return null;
  }

  return (
    <Index></Index>
  );
}
