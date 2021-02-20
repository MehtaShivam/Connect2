# Connect

A simple preview of the app

# Running the app on an iOS simulator on a Mac

First, make sure you [install Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12) in order to run the iOS Simulator. You need at least 40+ GB of free space on your Mac in order to install Xcode, or it won't let you install (ugh, _I know_).

After that, run:
```bash
yarn
expo client:install:ios
yarn ios
```

That'll open the app in the iOS simulator for easier local development than installing on your phone.
