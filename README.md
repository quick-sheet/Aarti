# Aarti

Diwali aartis to sing together, with words, meaning and casting.

Live at **https://quick-sheet.github.io/Aarti/**

An evening experience rather than an app. It opens on a dark scene from the diya photo; touch it and the light spreads out from the wick (a soft temple bell rings), the flames sway and flicker, the water ripples under them and the mandala glows. The flames also feel the phone, as Daily Drift's stars do: tilt it and they stay upright like real flames, move it suddenly and they lean, flutter and settle, each in its own time (iPhone asks for motion on the first tap). Then you move through three rooms in the order the aartis are sung: Jai Ganesh Deva, Om Jai Lakshmi Mata and Om Jai Jagdish Hare. Each room has its own painting and colours. The painting softens behind the words as you scroll, the verse in the middle of the screen glows, and a floating dock holds play, the Hindi · Roman · English switch and casting. There's also a printable A4 sheet of all three. The app opens with a PIN (1008).

The prayer hands (top left on the opening and closing screens) open Daily Drift itself, on a verse from the Bhagavad Gita: its stars and light, the sound as you touch and draw, the stars gliding as you tilt the phone, pull down for another verse, the arrows to look back, share. Aarti loads Daily Drift's own page live from its site (`quick-sheet.github.io/DailyDrift/`) and runs it untouched in a layer, with a few lines that only:
- keep its storage apart under Aarti's own name (`aar.dd.*`), so your Daily Drift settings, sets and verses are never touched;
- switch its Faith on with Hinduism only, start it on its dark themes, skip its install welcome and hide the Settings rows that mean nothing here;
- show its **Pull down for another verse** each time a verse opens, once the sound is on, until they pull;
- send its round arrow, and the phone's Back, home to Aarti.

Aarti relies on a few names in Daily Drift's page: `function openFaith(`, the back button's `data-act="back"`, `id="verseBlk"` and the storage prefix `const P = 'ddr.'`. Keep those when changing Daily Drift; if they change, the hands simply hide. After its first open, Aarti keeps a copy of Daily Drift's page so the verses open offline too.

### Welcome
The first time Aarti opens on a phone (after the PIN or the share link), a card rises: Happy Diwali, what Aarti is for, three steps (the diya, the words, the song or casting) and how to keep Aarti as an app: an Install app button when Chrome offers it, Chrome's menu when it doesn't, Share → Add to Home Screen on iPhone, nothing if it's already installed. At its foot, set apart and greyed: "All artwork and content by g.s". Settings → How to use Aarti shows it again. The install banner on the opening screen stays as a second chance.

### Reflections
A small glowing tilak sits at the top centre of the opening screen and of each aarti. Tap it for a short reflection: on Diwali itself on the opening screen, and on Ganesh, Lakshmi and Jagdish on their pages, each quoting lines from its own aarti. The card takes the colours of the page, follows the text size setting, and closes with the ✕, a tap outside, Escape or a drag down. The three page dots now sit small, just above the music and words bar.

### Lakshmi Puja times
Under the title on the opening screen: the Lakshmi Puja muhurat for your place on Sunday 8 November 2026, in that place's own time. It starts on a best guess from the phone's time zone (nothing is looked up and no location is asked for); tap the place to choose from 45 places in 20 countries, or change it in Settings. Through the evening it reads "today", "now, until…", then "Pradosh Kaal continues until…". Once the person starts to move about the page (scrolls, swipes or lights the diya), but not before it has shown for 6 seconds, and after a minute at most, the time glides up into a small chip beside Settings. Tapping it shows the chosen place with a pencil; the pencil opens the list of places; coming back from an aarti it's already there, and each fresh open shows the full line again for a minute. The **i** explains Lakshmi Puja, Muhurat, Pradosh Kaal, Vrishabha and Amavasya in plain English, with the times for your place.

The times are in `puja-times.js`, worked out with Drik Panchang's rules (Pradosh Kaal is the first fifth of the night; the muhurat is while Vrishabha is rising, on Amavasya) on this year's clocks, including B.C. and Alberta no longer turning their clocks back. Wherever Drik Panchang publishes its own minute (London, Leicester, Birmingham, Manchester, Delhi, New York, Chicago, Houston, Bay Area, Los Angeles, Toronto), that is used. For Diwali 2027 (29 October) the file needs a new set of times.

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
| `diya.jpg`, `diya-dark.jpg` | The opening photo: lit (with the flames taken out, as they're drawn on top so they can move) and before lighting. |
| `flame-c.png`, `flame-l.png`, `flame-r.png` | The three flames, cut from the photo, which sway and flicker. |
| `water.png` | Marks where the water is, so only the reflections ripple, not the bowl, lotuses or petals. |
| `puja-times.js` | The Lakshmi Puja muhurat and Pradosh Kaal for 45 places, for Diwali 2026. |
| `bell.js` | The soft temple bell, made on the phone (no sound file): it's prepared quietly a moment after Aarti opens, then simply played, so it rings cleanly while the screen animates. Settings can switch it off. |
| `core.js` | Logic with no screen parts: Spotify links, PIN, byte ranges, word checks. |
| `sw.js` | Service worker: works offline, updates arrive whole, saves recordings. |
| `aarti-words.pdf` | The printable A4 sheet, one aarti per page. |
| `test-bell.mp3` | A 36-second temple bell for **Test casting** in Settings. |
| `manifest.webmanifest`, `icon*.png`, `icon.svg`, `apple-touch-icon.png` | Install to home screen. |

## Good to know
- The PIN is a gentle gate, not a lock. The repo is public, so anyone who finds the files can read them.
- The screen stays on while an aarti is open.
- With less motion turned on in the phone's settings, the photo and paintings hold still (no flicker, ripples, sparks or petals); everything else works the same.
- The diya layers were cut from one photo, with the flames and the water outline placed by hand. A different photo needs a new set of layers, not just a swap of `diya.jpg`.
- On iPhone, the bell follows the silent switch.
- Casting on Android loads one script from Google (gstatic.com). If it can't load, the browser's own casting is used instead.
- Words follow the Anuradha Paudwal recordings on Spotify. The English is a plain guide to the meaning, not a word-for-word translation.
- **Cast ping:** while casting, Chrome refreshes its casting notification whenever playback starts, pauses or ends, and some phones play a sound each time. Long-press that notification and set it to silent.
- **Android quirk:** on some phones, every time the installed app opens it plays a sound and shows a Chrome notification saying "Tap to copy the URL for this app". That's Chrome's **Full screen site controls** notification. Long-press the notification and turn that category off.
