import 'react-native-gesture-handler';
import { RootNavigation } from './src/Screens';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Extra-Light': require('./assets/fonts/InterDisplay-ExtraLight.otf'),
    'Inter-Light' : require('./assets/fonts/InterDisplay-Light.otf'),
    'Inter-Regular': require('./assets/fonts/InterDisplay-Regular.otf'),
    'Inter-Medium': require('./assets/fonts/InterDisplay-Medium.otf')
  });
  
  return (
    <RootNavigation></RootNavigation>
  );
}
