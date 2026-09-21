# MaVuti

MaVuti is a React Native prototype for the VUT community. The mobile app lives in the [`MaVuti`](MaVuti) directory and uses the React Native CLI (not Expo).

## Prerequisites

- Node.js and npm
- For Android: Android Studio, the Android SDK, a configured Android emulator or an Android device, and a JDK compatible with React Native 0.79
- For iOS: a Mac with Xcode and CocoaPods; use an iOS Simulator or a connected iPhone

Follow the [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment) to install the platform tools and configure environment variables such as `ANDROID_HOME`. iOS builds and simulators require macOS; they cannot be run from Windows.

## Install dependencies

Run these commands from the repository root:

```sh
cd MaVuti
npm ci
```

On macOS, install the iOS native dependencies before the first iOS build and whenever they change:

```sh
cd ios
pod install
cd ..
```

## Run on an Android emulator

1. In Android Studio, create an Android Virtual Device using **Device Manager**, then start it.
2. From `MaVuti`, start Metro in one terminal:

   ```sh
   npm start
   ```

3. In a second terminal, from `MaVuti`, build, install, and launch the app:

   ```sh
   npm run android
   ```

You can check that the emulator is visible with `adb devices` before running the app.

## Run on an Android phone

1. Enable **Developer options** and **USB debugging** on the phone, then connect it by USB and accept the debugging prompt.
2. Check that `adb devices` lists the phone as `device`.
3. From `MaVuti`, run `npm start` in one terminal and `npm run android` in another.
4. If the app cannot reach Metro over USB, run `adb reverse tcp:8081 tcp:8081` and reload the app.

If more than one Android device or emulator is connected, select the desired target with `npx react-native run-android --deviceId <device-id>`.

## Run on an iOS Simulator (macOS)

1. Install the dependencies above, including `pod install`, and open the desired simulator from Xcode.
2. From `MaVuti`, run `npm start` in one terminal.
3. In a second terminal, run:

   ```sh
   npm run ios
   ```

To choose a specific simulator, use `npx react-native run-ios --simulator "<simulator name>"`.

## Run on an iPhone (macOS)

1. Connect the iPhone to the Mac and trust the computer on the phone.
2. Open `MaVuti/ios/MaVuti.xcworkspace` in Xcode after running `pod install`.
3. Select the iPhone as the run destination. Configure a development team under **Signing & Capabilities** if Xcode asks for one.
4. Start Metro with `npm start` from `MaVuti`, then build and run the app using Xcode's **Run** button.

For a physical iPhone, keep the phone and Mac on the same network so the app can connect to Metro during development.

## Useful commands

Run these from `MaVuti`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Metro development server |
| `npm run android` | Build and launch on a connected Android target |
| `npm run ios` | Build and launch on an iOS Simulator on macOS |
