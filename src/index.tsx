import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@vahesaroyan/react-native-bubble-select' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type ReactNativeBubbleSelectProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ReactNativeBubbleSelectView';

export const ReactNativeBubbleSelectView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<ReactNativeBubbleSelectProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
