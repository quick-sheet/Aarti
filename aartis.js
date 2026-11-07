/* Aarti: the three aartis, in the order they are sung on each recording.
   Each line: d = Devanagari, r = Roman letters, e = English meaning, x = times sung (if more than once),
   echo = the short answering line (no meaning of its own).
   Parts: { refrain: n } = the full refrain, sung n times; { lines: [...], cue: true } = a verse that ends with the cue line.
   To use your own recording later: put the MP3 in the repo's main folder and set audio: '<name>.mp3?v=1'.
   If you replace a recording, change ?v=1 to ?v=2 so phones fetch the new one. */
(function (root) {
  'use strict';
  const l = (d, r, e, x) => (x ? { d, r, e, x } : { d, r, e });
  const echo = (d, r, e) => (e ? { d, r, e, echo: true } : { d, r, echo: true });

  const AARTIS = [
    {
      id: 'ganesh',
      title: 'Jai Ganesh Deva',
      titleD: 'जय गणेश देवा',
      deity: 'Ganesh',
      tagline: 'Ganesh, remover of obstacles',
      about: 'Ganesh is the lord of beginnings and the remover of obstacles, so he is worshipped first at every puja. This aarti praises his single tusk, his four arms and the mouse he rides, and asks him to bless everyone gathered.',
      doing: 'Light the diya, ring the bell softly and slowly circle the aarti plate clockwise in front of Ganesh while everyone sings.',
      summary: 'Sung first, to Ganesh, lord of beginnings and remover of obstacles. It praises his single tusk, four arms and the mouse he rides, and asks him to bless the home.',
      spotify: '670010LTT4haWIeJhsK9JG',
      artist: 'Anuradha Paudwal',
      audio: '',
      refrain: [
        l('जय गणेश, जय गणेश, जय गणेश देवा', 'Jai Ganesh, jai Ganesh, jai Ganesh deva', 'Glory to Ganesh, glory to Lord Ganesh,'),
        l('माता जाकी पार्वती, पिता महादेवा', 'Mata jaki Parvati, pita Mahadeva', 'whose mother is Parvati and whose father is Shiva, the great god.'),
      ],
      cue: null,
      parts: [
        { refrain: 2 },
        { lines: [
          l('एकदन्त दयावन्त, चार भुजा धारी', 'Ekadant dayavant, chaar bhuja dhaari', 'One-tusked and kind, with four arms,', 4),
          l('माथे सिन्दूर सोहे, मूसे की सवारी', 'Maathe sindoor sohe, mooshe ki savaari', 'vermilion glows on his forehead and he rides a mouse.', 2),
        ] },
        { lines: [
          l('पान चढ़े, फूल चढ़े, और चढ़े मेवा', 'Paan chadhe, phool chadhe, aur chadhe meva', 'Betel leaves, flowers and dried fruit are offered to him,', 2),
          l('लड्डुअन का भोग लगे, सन्त करें सेवा', 'Ladduan ka bhog lage, sant karen seva', 'laddoos are set before him, and the saints serve him.', 2),
        ] },
        { refrain: 2 },
        { lines: [
          l('अन्धन को आँख देत, कोढ़िन को काया', 'Andhan ko aankh det, kodhin ko kaaya', 'He gives sight to the blind and health to the sick,', 4),
          l('बाँझन को पुत्र देत, निर्धन को माया', 'Baanjhan ko putra det, nirdhan ko maaya', 'a child to the childless and wealth to the poor.', 2),
        ] },
        { lines: [
          l('सूर श्याम शरण आए, सफल कीजे सेवा', 'Soor Shyam sharan aaye, safal kije seva', 'The poet Sur Shyam comes to you for shelter: let this worship bear fruit,', 2),
          l('माता जाकी पार्वती, पिता महादेवा', 'Mata jaki Parvati, pita Mahadeva', 'O son of Parvati and of Shiva, the great god.'),
        ] },
        { refrain: 2 },
      ],
    },
    {
      id: 'lakshmi',
      title: 'Om Jai Lakshmi Mata',
      titleD: 'ॐ जय लक्ष्मी माता',
      deity: 'Lakshmi',
      tagline: 'Lakshmi, goddess of good fortune',
      about: 'Diwali night belongs to Lakshmi, goddess of wealth, wellbeing and good fortune. Homes are cleaned and lit with diyas so she feels welcome. This aarti names her many forms and asks her to bring joy and plenty to the home.',
      doing: 'Keep the lamps by the door lit. Circle the aarti plate in front of Lakshmi, and offer flowers or sweets if you have them.',
      summary: 'Sung to Lakshmi, goddess of wealth, wellbeing and good fortune, whose night Diwali is. It names her many forms and asks her to bring joy and plenty to the home.',
      spotify: '0ZkIWsbj1psnuSoJ22riCR',
      artist: 'Anuradha Paudwal, Arun Paudwal',
      audio: '',
      refrain: [
        l('ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता', 'Om jai Lakshmi mata, maiya jai Lakshmi mata', 'Om, glory to you, Mother Lakshmi, glory to Mother Lakshmi.'),
        l('तुमको निशदिन सेवत, मैया जी को निशदिन सेवत', 'Tumko nishadin sevat, maiya ji ko nishadin sevat', 'Day and night you are worshipped,'),
        l('हर विष्णु विधाता', 'Har Vishnu vidhata', 'by Shiva, Vishnu and Brahma.'),
        l('ॐ जय लक्ष्मी माता', 'Om jai Lakshmi mata', 'Om, glory to Mother Lakshmi.'),
      ],
      cue: l('ॐ जय लक्ष्मी माता', 'Om jai Lakshmi mata', 'Om, glory to Mother Lakshmi.'),
      parts: [
        { refrain: 2 },
        { cue: true, lines: [
          l('उमा, रमा, ब्रह्माणी, तुम ही जग-माता', 'Uma, Rama, Brahmani, tum hi jag-mata', 'You are Uma, Rama and Brahmani, mother of the world.'),
          echo('मैया, तुम ही जग-माता', 'Maiya, tum hi jag-mata'),
          l('सूर्य-चन्द्रमा ध्यावत', 'Surya Chandrama dhyavat', 'The sun and the moon meditate on you,', 2),
          l('नारद ऋषि गाता', 'Narad rishi gaata', 'and the sage Narad sings your praise.'),
        ] },
        { cue: true, lines: [
          l('दुर्गा रूप निरंजनी, सुख-सम्पत्ति दाता', 'Durga roop niranjani, sukh sampati daata', 'As Durga you are pure, the giver of joy and plenty.'),
          echo('मैया, सुख-सम्पत्ति दाता', 'Maiya, sukh sampati daata'),
          l('जो कोई तुमको ध्यावत', 'Jo koi tumko dhyavat', 'Whoever meditates on you', 2),
          l('ऋद्धि-सिद्धि धन पाता', 'Riddhi siddhi dhan paata', 'gains prosperity, success and wealth.'),
        ] },
        { cue: true, lines: [
          l('तुम पाताल-निवासिनी, तुम ही शुभदाता', 'Tum pataal nivasini, tum hi shubh daata', 'You dwell in the deepest worlds, and every blessing comes from you.'),
          echo('मैया, तुम ही शुभदाता', 'Maiya, tum hi shubh daata'),
          l('कर्म-प्रभाव-प्रकाशिनी', 'Karam prabhav prakashini', 'You bring the fruits of our deeds to light', 2),
          l('भवनिधि की त्राता', 'Bhav nidhi ki traata', 'and carry us across the ocean of this life.'),
        ] },
        { cue: true, lines: [
          l('जिस घर में तुम रहतीं, सब सद्गुण आता', 'Jis ghar mein tum rahati, sab sadgun aata', 'Every virtue comes to the home where you live.'),
          echo('मैया, सब सद्गुण आता', 'Maiya, sab sadgun aata'),
          l('सब सम्भव हो जाता', 'Sab sambhav ho jaata', 'Everything becomes possible', 2),
          l('मन नहीं घबराता', 'Man nahi ghabraata', 'and the mind knows no fear.'),
        ] },
        { cue: true, lines: [
          l('तुम बिन यज्ञ न होते, वस्त्र न हो पाता', 'Tum bin yagya na hote, vastra na ho paata', 'Without you no offering could be made, and no one would be clothed.'),
          echo('मैया, वस्त्र न हो पाता', 'Maiya, vastra na ho paata'),
          l('खान-पान का वैभव', 'Khaan-paan ka vaibhav', 'The riches of food and drink', 2),
          l('सब तुमसे आता', 'Sab tumse aata', 'all come from you.'),
        ] },
        { cue: true, lines: [
          l('शुभ-गुण मन्दिर सुन्दर, क्षीरोदधि-जाता', 'Shubh gun mandir sundar, kshirodadhi jaata', 'Beautiful temple of goodness, born from the ocean of milk.'),
          echo('मैया, क्षीरोदधि-जाता', 'Maiya, kshirodadhi jaata'),
          l('रत्न चतुर्दश तुम बिन', 'Ratna chaturdash tum bin', 'Without you, the fourteen treasures', 2),
          l('कोई नहीं पाता', 'Koi nahi paata', 'no one could ever find.'),
        ] },
        { cue: true, lines: [
          l('महालक्ष्मी जी की आरती, जो कोई नर गाता', 'Mahalakshmi ji ki aarti, jo koi nar gaata', 'Whoever sings this aarti to Mahalakshmi'),
          echo('मैया, जो कोई नर गाता', 'Maiya, jo koi nar gaata'),
          l('उर आनन्द समाता', 'Ur anand samaata', 'is filled with joy,', 2),
          l('पाप उतर जाता', 'Paap utar jaata', 'and their wrongs fall away.'),
        ] },
        { refrain: 2 },
      ],
    },
    {
      id: 'jagdish',
      title: 'Om Jai Jagdish Hare',
      titleD: 'ॐ जय जगदीश हरे',
      deity: 'Vishnu',
      tagline: 'Vishnu, lord of the universe',
      about: 'Om Jai Jagdish Hare is sung to Vishnu, lord of the universe, and closes almost every Hindu puja. Written in the 1870s by Pandit Shardha Ram Phillauri, it is a prayer of surrender: you are my mother and father, take away our troubles.',
      doing: 'Everyone sings together for this one. When it ends, pass the aarti plate round so each person can take the flame’s blessing.',
      summary: 'Sung last, to Vishnu, lord of the universe; it closes almost every Hindu puja. A prayer of surrender: you are my mother and father, take away our troubles.',
      spotify: '4rvn5djkLdm5AT6b58pVS5',
      artist: 'Anuradha Paudwal',
      audio: '',
      refrain: [
        l('ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे', 'Om jai Jagdish hare, swami jai Jagdish hare', 'Om, glory to you, Lord of the universe, glory to the Lord of the universe.'),
        l('भक्त जनों के संकट', 'Bhakt janon ke sankat', 'The troubles of your devotees,'),
        l('दास जनों के संकट, क्षण में दूर करे', 'Daas janon ke sankat, kshan mein door kare', 'the troubles of all who serve you, you clear away in a moment.'),
        l('ॐ जय जगदीश हरे', 'Om jai Jagdish hare', 'Om, glory to the Lord of the universe.'),
      ],
      cue: l('ॐ जय जगदीश हरे', 'Om jai Jagdish hare', 'Om, glory to the Lord of the universe.'),
      parts: [
        { refrain: 2 },
        { cue: true, lines: [
          l('जो ध्यावे फल पावे, दुःख बिनसे मन का', 'Jo dhyave phal paave, dukh binse man ka', 'Whoever meditates on you is rewarded, and sorrow leaves the mind.'),
          echo('स्वामी, दुःख बिनसे मन का', 'Swami, dukh binse man ka'),
          l('सुख-सम्पत्ति घर आवे', 'Sukh sampati ghar aave', 'Happiness and plenty come home,', 2),
          l('कष्ट मिटे तन का', 'Kasht mite tan ka', 'and the body’s pain is eased.'),
        ] },
        { cue: true, lines: [
          l('मात-पिता तुम मेरे, शरण गहूँ किसकी', 'Maat pita tum mere, sharan gahun kiski', 'You are my mother and father: whose shelter would I seek but yours?'),
          echo('स्वामी, शरण गहूँ किसकी', 'Swami, sharan gahun kiski'),
          l('तुम बिन और न दूजा', 'Tum bin aur na dooja', 'There is no one but you,', 2),
          l('आस करूँ जिसकी', 'Aas karun jiski', 'no one else I can hope in.'),
        ] },
        { cue: true, lines: [
          l('तुम पूरण परमात्मा, तुम अन्तर्यामी', 'Tum pooran Paramatma, tum antaryami', 'You are the whole, supreme soul, who knows every heart.'),
          echo('स्वामी, तुम अन्तर्यामी', 'Swami, tum antaryami'),
          l('पारब्रह्म परमेश्वर', 'Paar Brahm Parameshwar', 'The highest Brahman, the supreme Lord,', 2),
          l('तुम सबके स्वामी', 'Tum sabke swami', 'you are the master of all.'),
        ] },
        { cue: true, lines: [
          l('तुम करुणा के सागर, तुम पालनकर्ता', 'Tum karuna ke saagar, tum paalan karta', 'You are an ocean of compassion, the one who cares for us all.'),
          echo('स्वामी, तुम पालनकर्ता', 'Swami, tum paalan karta'),
          l('मैं मूरख खलकामी, मैं सेवक तुम स्वामी', 'Main moorakh khalkami, main sevak tum swami', 'I am foolish and full of wants; I am your servant and you are my master.'),
          l('कृपा करो भर्ता', 'Kripa karo bharta', 'Be kind to me, Lord.'),
        ] },
        { cue: true, lines: [
          l('तुम हो एक अगोचर, सबके प्राणपति', 'Tum ho ek agochar, sabke praan pati', 'You are the One beyond sight, the master of every life.'),
          echo('स्वामी, सबके प्राणपति', 'Swami, sabke praan pati'),
          l('किस विध मिलूँ दयामय', 'Kis vidh miloon dayamay', 'How, merciful one, can I reach you,', 2),
          l('तुमको मैं कुमति', 'Tumko main kumati', 'foolish as I am?'),
        ] },
        { cue: true, lines: [
          l('दीनबन्धु दुःखहर्ता, ठाकुर तुम मेरे', 'Deen bandhu dukh harta, thakur tum mere', 'Friend of the humble, taker of sorrow, you are my lord,'),
          echo('स्वामी, रक्षक तुम मेरे', 'Swami, rakshak tum mere', 'you are my protector.'),
          l('अपने हाथ उठाओ, अपनी शरण लगाओ', 'Apne haath uthao, apni sharan lagao', 'Raise your hand and take me into your shelter;'),
          l('द्वार पड़ा तेरे', 'Dwaar pada tere', 'I lie at your door.'),
        ] },
        { cue: true, lines: [
          l('विषय-विकार मिटाओ, पाप हरो देवा', 'Vishay vikaar mitao, paap haro deva', 'Wipe away worldly cravings and take away wrongdoing, Lord.'),
          echo('स्वामी, पाप हरो देवा', 'Swami, paap haro deva'),
          l('श्रद्धा-भक्ति बढ़ाओ', 'Shraddha bhakti badhao', 'Deepen our faith and devotion', 2),
          l('सन्तन की सेवा', 'Santan ki seva', 'and our service to the saintly.'),
        ] },
        { refrain: 2 },
      ],
    },
  ];

  const out = { AARTIS };
  if (typeof module !== 'undefined' && module.exports) module.exports = out;
  else root.AartiData = out;
})(typeof self !== 'undefined' ? self : this);
