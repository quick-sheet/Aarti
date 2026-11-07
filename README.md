# Aarti

Diwali aartis to sing together, with words, meaning and casting.

Live at **https://quick-sheet.github.io/Aarti/**

An evening experience rather than an app: you light the diya (a soft temple bell rings), then move through three rooms in the order the aartis are sung: Jai Ganesh Deva, Om Jai Lakshmi Mata and Om Jai Jagdish Hare. Each room has its own painting and colours. The painting softens behind the words as you scroll, the verse in the middle of the screen glows, and a floating dock holds play, the Hindi · Roman · English switch and casting. There's also a printable A4 sheet of all three. The app opens with a PIN (1008).

## Host
GitHub Pages, from the `main` branch, root folder. No server, no build step.

## Install
- **Android (Chrome):** open the live link and tap **Install** on the banner, or use Chrome ⋮ → **Install app**.
- **iPhone (Safari):** open the live link, tap **Share** (on iOS 26 it's under the ⋯ beside the address bar), then **Add to Home Screen**. Keep **Open as Web App** on. Always open Aarti from its icon.

## Share
In the app, open Settings and tap **Share Aarti**. The link it sends opens Aarti without the PIN:
`https://quick-sheet.github.io/Aarti/#pin=1008`
On iPhone, the home-screen app has its own storage, so it may ask for the PIN once more.

## Music
- **For now:** each aarti's **Play in Spotify** button opens the song in the Spotify app. You can cast from there with Spotify's own Connect button.
- **Your own version:** anyone can paste a Spotify link to a different recording of any aarti (on the aarti, tap **Use your own version**, or go to Settings). It's saved on their phone only.
- **Adding your recordings:** upload the MP3 files to the repo's main folder, next to `index.html`. Then, in `aartis.js`, set each aarti's `audio:` line, for example `audio: 'ganesh.mp3?v=1'`, and update its `artist`. The app then plays the recording itself, with a cast button and lock-screen controls. On Android, casting uses Google's Cast library: the TV shows the aarti's name and the diya, and play, pause and the position stay in step with your phone. iPhone uses AirPlay. Each recording is saved on the phone after its first play, so it works offline too. If you replace a recording later, change `?v=1` to `?v=2`.
- If the words in your recordings differ (more verses, different repeats), the words in `aartis.js` and the PDF need updating to match.

## Update
1. On GitHub, go to **Add file → Upload files**, choose the changed files (files with the same name replace the old ones) and tap **Commit changes**.
2. Wait about a minute.
3. Fully close the app and open it again. If it still looks the same, close and reopen it once more.

Every release bumps two markers together: `?v=N` on the scripts in `index.html`, and `REL = N` in `sw.js`.

## Files
| File | What it is |
| --- | --- |
| `index.html` | The whole app: screens, styles and script. The PIN is at the top of the script. |
| `aartis.js` | The three aartis: words, meanings, notes, paintings, Spotify songs and recordings. |
| `ganesh.jpg`, `lakshmi.jpg`, `jagdish.jpg` | The paintings: each room's background, the TV picture when casting, the lock-screen picture. To change one, upload a new picture with the same name (portrait, about 1024 × 1536). |
| `bell.js` | The soft temple bell, made live on the phone (no sound file). Settings can switch it off. |
| `core.js` | Logic with no screen parts: Spotify links, PIN, byte ranges, word checks. |
| `sw.js` | Service worker: works offline, updates arrive whole, saves recordings. |
| `aarti-words.pdf` | The printable A4 sheet, one aarti per page. |
| `test-bell.mp3` | A 36-second temple bell for **Test casting** in Settings. |
| `manifest.webmanifest`, `icon*.png`, `icon.svg`, `apple-touch-icon.png` | Install to home screen. |

## Good to know
- The PIN is a gentle gate, not a lock. The repo is public, so anyone who finds the files can read them.
- The screen stays on while an aarti is open.
- With less motion turned on in the phone's settings, the paintings hold still and there are no sparks or petals; everything else works the same.
- On iPhone, the bell follows the silent switch.
- Casting on Android loads one script from Google (gstatic.com). If it can't load, the browser's own casting is used instead.
- Words follow the Anuradha Paudwal recordings on Spotify. The English is a plain guide to the meaning, not a word-for-word translation.
- **Cast ping:** while casting, Chrome refreshes its casting notification whenever playback starts, pauses or ends, and some phones play a sound each time. Long-press that notification and set it to silent.
- **Android quirk:** on some phones, every time the installed app opens it plays a sound and shows a Chrome notification saying "Tap to copy the URL for this app". That's Chrome's **Full screen site controls** notification. Long-press the notification and turn that category off.
