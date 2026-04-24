# Ship The Lewis Team to the App Store + Google Play

The web app is already installable as a PWA — no store needed.
When you're ready for a **native app in the App Store and Google Play**, use Capacitor to wrap this exact codebase.

## What you'll need first

- **Apple Developer Account** — $99/yr ([developer.apple.com](https://developer.apple.com)) — required for App Store
- **Google Play Developer Account** — $25 one-time ([play.google.com/console](https://play.google.com/console)) — required for Play Store
- **Xcode** (for iOS builds) — only runs on Mac. If you don't have a Mac, rent one via [macincloud.com](https://macincloud.com) or hire a developer for the submit.
- **Android Studio** (for Android builds) — runs on Windows, Mac, or Linux. Free.

## One-time setup

From the project folder:

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android
npm install @capacitor/status-bar @capacitor/splash-screen @capacitor/haptics

# 2. Build the web app
npm run build

# 3. Initialize native projects (capacitor.config.json is already set up)
npx cap add ios         # creates /ios folder — run on Mac
npx cap add android     # creates /android folder — run anywhere
```

## Iterative build loop

Every time you want to test native changes:

```bash
npm run build       # build the web app into /dist
npx cap sync        # copy /dist into native projects
npx cap open ios    # opens Xcode (Mac only)
npx cap open android # opens Android Studio
```

Then in Xcode or Android Studio, hit the Run button to launch on simulator or connected device.

## What you get with native

- True App Store + Play Store listing
- Native push notifications (via OneSignal, Firebase, etc.)
- Native share sheet, contacts, camera access
- Lock-screen app icon
- App Store reviews, searchability

## What you already have with PWA (no stores needed)

- "Install to home screen" from Safari/Chrome
- Works offline
- Fullscreen, native status bar
- Auto-updates when you push new code
- No 30% Apple tax on in-app purchases
- No 1-3 day review cycle

## Recommended path

1. **Today:** Deploy the PWA at lewisteamrealestate.com. Show clients how to "Add to Home Screen."
2. **Next quarter:** When the app is battle-tested, add Capacitor and ship to stores for brand credibility.

The same codebase runs all three places (web, PWA, native). You never throw work away.
