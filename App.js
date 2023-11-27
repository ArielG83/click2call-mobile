import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {

  return <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{uri: "https://shop.multi-travel.com/helpcenter-support-request"}}
        mediaPlaybackRequiresUserAction={false}
        style={styles.container}
      />
    </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cfcfcf",
    alignItems: "center",
    justifyContent: "center",
  },
});
