import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import { NativeModules } from 'react-native';

//adb reverse tcp:9090 tcp:9090
const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron.configure({
    name: "SHOPS",
    host: host,
    port: 9090,
})
    .use(reactotronRedux())
    .useReactNative()
    .connect();

export default reactotron;
