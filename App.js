import { s } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import hotBackground from "./assets/hot.png";

export default function App() {
  return (
    <ImageBackground style = {s.backgroundimage}source={hotBackground}>
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.workspace}>
          <Text>Temperature</Text>
          <Text>Input</Text>
          <Text>Button</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    </ImageBackground>
  );
}


