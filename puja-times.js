/* Lakshmi Puja on Diwali, Sunday 8 November 2026: the muhurat and Pradosh Kaal for each place, in its own local time.
   Worked out with Drik Panchang's rules (Pradosh Kaal, the rising of Vrishabha, Amavasya) on this year's clocks,
   using Drik Panchang's own minute wherever it is published. t: [day starts, muhurat from, to, Pradosh from, to, day ends] in ms. */
(function (root) {
  'use strict';
  const PujaTimes = {
 "year": 2026,
 "day": "Sunday 8 November",
 "places": [
  {
   "id": "london",
   "city": "London",
   "country": "United Kingdom",
   "tz": "Europe/London",
   "muhurat": "4:35 – 6:12 PM",
   "from": "4:35 PM",
   "to": "6:12 PM",
   "pradosh": "4:22 – 7:19 PM",
   "pradoshTo": "7:19 PM",
   "amavasya": [
    "5:57 AM Sunday 8 November",
    "7:01 AM Monday 9 November"
   ],
   "off": 0,
   "t": [
    1794096000000,
    1794155700000,
    1794161520000,
    1794154920000,
    1794165540000,
    1794182400000
   ]
  },
  {
   "id": "birmingham",
   "city": "Birmingham",
   "country": "United Kingdom",
   "tz": "Europe/London",
   "muhurat": "4:38 – 6:14 PM",
   "from": "4:38 PM",
   "to": "6:14 PM",
   "pradosh": "4:25 – 7:24 PM",
   "pradoshTo": "7:24 PM",
   "amavasya": [
    "5:57 AM Sunday 8 November",
    "7:01 AM Monday 9 November"
   ],
   "off": 0,
   "t": [
    1794096000000,
    1794155880000,
    1794161640000,
    1794155100000,
    1794165840000,
    1794182400000
   ]
  },
  {
   "id": "leicester",
   "city": "Leicester",
   "country": "United Kingdom",
   "tz": "Europe/London",
   "muhurat": "4:34 – 6:10 PM",
   "from": "4:34 PM",
   "to": "6:10 PM",
   "pradosh": "4:22 – 7:21 PM",
   "pradoshTo": "7:21 PM",
   "amavasya": [
    "5:57 AM Sunday 8 November",
    "7:01 AM Monday 9 November"
   ],
   "off": 0,
   "t": [
    1794096000000,
    1794155640000,
    1794161400000,
    1794154920000,
    1794165660000,
    1794182400000
   ]
  },
  {
   "id": "manchester",
   "city": "Manchester",
   "country": "United Kingdom",
   "tz": "Europe/London",
   "muhurat": "4:35 – 6:09 PM",
   "from": "4:35 PM",
   "to": "6:09 PM",
   "pradosh": "4:23 – 7:23 PM",
   "pradoshTo": "7:23 PM",
   "amavasya": [
    "5:57 AM Sunday 8 November",
    "7:01 AM Monday 9 November"
   ],
   "off": 0,
   "t": [
    1794096000000,
    1794155700000,
    1794161340000,
    1794154980000,
    1794165780000,
    1794182400000
   ]
  },
  {
   "id": "dublin",
   "city": "Dublin",
   "country": "Ireland",
   "tz": "Europe/Dublin",
   "muhurat": "4:52 – 6:27 PM",
   "from": "4:52 PM",
   "to": "6:27 PM",
   "pradosh": "4:40 – 7:40 PM",
   "pradoshTo": "7:40 PM",
   "amavasya": [
    "5:57 AM Sunday 8 November",
    "7:01 AM Monday 9 November"
   ],
   "off": 0,
   "t": [
    1794096000000,
    1794156720000,
    1794162420000,
    1794156000000,
    1794166800000,
    1794182400000
   ]
  },
  {
   "id": "amsterdam",
   "city": "Amsterdam",
   "country": "Netherlands",
   "tz": "Europe/Amsterdam",
   "muhurat": "5:11 – 6:48 PM",
   "from": "5:11 PM",
   "to": "6:48 PM",
   "pradosh": "4:59 – 7:57 PM",
   "pradoshTo": "7:57 PM",
   "amavasya": [
    "6:57 AM Sunday 8 November",
    "8:01 AM Monday 9 November"
   ],
   "off": 60,
   "t": [
    1794092400000,
    1794154260000,
    1794160080000,
    1794153540000,
    1794164220000,
    1794178800000
   ]
  },
  {
   "id": "paris",
   "city": "Paris",
   "country": "France",
   "tz": "Europe/Paris",
   "muhurat": "5:35 – 7:15 PM",
   "from": "5:35 PM",
   "to": "7:15 PM",
   "pradosh": "5:20 – 8:14 PM",
   "pradoshTo": "8:14 PM",
   "amavasya": [
    "6:57 AM Sunday 8 November",
    "8:01 AM Monday 9 November"
   ],
   "off": 60,
   "t": [
    1794092400000,
    1794155700000,
    1794161700000,
    1794154800000,
    1794165240000,
    1794178800000
   ]
  },
  {
   "id": "frankfurt",
   "city": "Frankfurt",
   "country": "Germany",
   "tz": "Europe/Berlin",
   "muhurat": "5:05 – 6:44 PM",
   "from": "5:05 PM",
   "to": "6:44 PM",
   "pradosh": "4:51 – 7:46 PM",
   "pradoshTo": "7:46 PM",
   "amavasya": [
    "6:57 AM Sunday 8 November",
    "8:01 AM Monday 9 November"
   ],
   "off": 60,
   "t": [
    1794092400000,
    1794153900000,
    1794159840000,
    1794153060000,
    1794163560000,
    1794178800000
   ]
  },
  {
   "id": "delhi",
   "city": "Delhi",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "5:54 – 7:50 PM",
   "from": "5:54 PM",
   "to": "7:50 PM",
   "pradosh": "5:31 – 8:09 PM",
   "pradoshTo": "8:09 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794140640000,
    1794147600000,
    1794139260000,
    1794148740000,
    1794162600000
   ]
  },
  {
   "id": "mumbai",
   "city": "Mumbai",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:28 – 8:28 PM",
   "from": "6:28 PM",
   "to": "8:28 PM",
   "pradosh": "6:02 – 8:34 PM",
   "pradoshTo": "8:34 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794142680000,
    1794149880000,
    1794141120000,
    1794150240000,
    1794162600000
   ]
  },
  {
   "id": "kolkata",
   "city": "Kolkata",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "5:21 – 7:19 PM",
   "from": "5:21 PM",
   "to": "7:19 PM",
   "pradosh": "4:55 – 7:29 PM",
   "pradoshTo": "7:29 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794138660000,
    1794145740000,
    1794137100000,
    1794146340000,
    1794162600000
   ]
  },
  {
   "id": "chennai",
   "city": "Chennai",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:07 – 8:09 PM",
   "from": "6:07 PM",
   "to": "8:09 PM",
   "pradosh": "5:40 – 8:09 PM",
   "pradoshTo": "8:09 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794141420000,
    1794148740000,
    1794139800000,
    1794148740000,
    1794162600000
   ]
  },
  {
   "id": "bengaluru",
   "city": "Bengaluru",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:18 – 8:20 PM",
   "from": "6:18 PM",
   "to": "8:20 PM",
   "pradosh": "5:51 – 8:20 PM",
   "pradoshTo": "8:20 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794142080000,
    1794149400000,
    1794140460000,
    1794149400000,
    1794162600000
   ]
  },
  {
   "id": "hyderabad",
   "city": "Hyderabad",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:08 – 8:09 PM",
   "from": "6:08 PM",
   "to": "8:09 PM",
   "pradosh": "5:42 – 8:13 PM",
   "pradoshTo": "8:13 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794141480000,
    1794148740000,
    1794139920000,
    1794148980000,
    1794162600000
   ]
  },
  {
   "id": "ahmedabad",
   "city": "Ahmedabad",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:23 – 8:21 PM",
   "from": "6:23 PM",
   "to": "8:21 PM",
   "pradosh": "5:58 – 8:32 PM",
   "pradoshTo": "8:32 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794142380000,
    1794149460000,
    1794140880000,
    1794150120000,
    1794162600000
   ]
  },
  {
   "id": "pune",
   "city": "Pune",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:25 – 8:25 PM",
   "from": "6:25 PM",
   "to": "8:25 PM",
   "pradosh": "5:59 – 8:31 PM",
   "pradoshTo": "8:31 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794142500000,
    1794149700000,
    1794140940000,
    1794150060000,
    1794162600000
   ]
  },
  {
   "id": "jaipur",
   "city": "Jaipur",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "6:04 – 8:00 PM",
   "from": "6:04 PM",
   "to": "8:00 PM",
   "pradosh": "5:40 – 8:16 PM",
   "pradoshTo": "8:16 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794141240000,
    1794148200000,
    1794139800000,
    1794149160000,
    1794162600000
   ]
  },
  {
   "id": "lucknow",
   "city": "Lucknow",
   "country": "India",
   "tz": "Asia/Kolkata",
   "muhurat": "5:43 – 7:40 PM",
   "from": "5:43 PM",
   "to": "7:40 PM",
   "pradosh": "5:19 – 7:55 PM",
   "pradoshTo": "7:55 PM",
   "amavasya": [
    "11:27 AM Sunday 8 November",
    "12:31 PM Monday 9 November"
   ],
   "off": 330,
   "t": [
    1794076200000,
    1794139980000,
    1794147000000,
    1794138540000,
    1794147900000,
    1794162600000
   ]
  },
  {
   "id": "kathmandu",
   "city": "Kathmandu",
   "country": "Nepal",
   "tz": "Asia/Kathmandu",
   "muhurat": "5:39 – 7:35 PM",
   "from": "5:39 PM",
   "to": "7:35 PM",
   "pradosh": "5:15 – 7:52 PM",
   "pradoshTo": "7:52 PM",
   "amavasya": [
    "11:42 AM Sunday 8 November",
    "12:46 PM Monday 9 November"
   ],
   "off": 345,
   "t": [
    1794075300000,
    1794138840000,
    1794145800000,
    1794137400000,
    1794146820000,
    1794161700000
   ]
  },
  {
   "id": "dubai",
   "city": "Dubai",
   "country": "United Arab Emirates",
   "tz": "Asia/Dubai",
   "muhurat": "5:58 – 7:56 PM",
   "from": "5:58 PM",
   "to": "7:56 PM",
   "pradosh": "5:34 – 8:10 PM",
   "pradoshTo": "8:10 PM",
   "amavasya": [
    "9:57 AM Sunday 8 November",
    "11:01 AM Monday 9 November"
   ],
   "off": 240,
   "t": [
    1794081600000,
    1794146280000,
    1794153360000,
    1794144840000,
    1794154200000,
    1794168000000
   ]
  },
  {
   "id": "singapore",
   "city": "Singapore",
   "country": "Singapore",
   "tz": "Asia/Singapore",
   "muhurat": "7:20 – 9:14 PM",
   "from": "7:20 PM",
   "to": "9:14 PM",
   "pradosh": "6:50 – 9:14 PM",
   "pradoshTo": "9:14 PM",
   "amavasya": [
    "1:57 PM Sunday 8 November",
    "3:01 PM Monday 9 November"
   ],
   "off": 480,
   "t": [
    1794067200000,
    1794136800000,
    1794143640000,
    1794135000000,
    1794143640000,
    1794153600000
   ]
  },
  {
   "id": "kualalumpur",
   "city": "Kuala Lumpur",
   "country": "Malaysia",
   "tz": "Asia/Kuala_Lumpur",
   "muhurat": "7:26 – 9:21 PM",
   "from": "7:26 PM",
   "to": "9:21 PM",
   "pradosh": "6:57 – 9:21 PM",
   "pradoshTo": "9:21 PM",
   "amavasya": [
    "1:57 PM Sunday 8 November",
    "3:01 PM Monday 9 November"
   ],
   "off": 480,
   "t": [
    1794067200000,
    1794137160000,
    1794144060000,
    1794135420000,
    1794144060000,
    1794153600000
   ]
  },
  {
   "id": "nairobi",
   "city": "Nairobi",
   "country": "Kenya",
   "tz": "Africa/Nairobi",
   "muhurat": "6:51 – 8:43 PM",
   "from": "6:51 PM",
   "to": "8:43 PM",
   "pradosh": "6:21 – 8:43 PM",
   "pradoshTo": "8:43 PM",
   "amavasya": [
    "8:57 AM Sunday 8 November",
    "10:01 AM Monday 9 November"
   ],
   "off": 180,
   "t": [
    1794085200000,
    1794153060000,
    1794159780000,
    1794151260000,
    1794159780000,
    1794171600000
   ]
  },
  {
   "id": "durban",
   "city": "Durban",
   "country": "South Africa",
   "tz": "Africa/Johannesburg",
   "muhurat": "6:57 – 8:30 PM",
   "from": "6:57 PM",
   "to": "8:30 PM",
   "pradosh": "6:23 – 8:30 PM",
   "pradoshTo": "8:30 PM",
   "amavasya": [
    "7:57 AM Sunday 8 November",
    "9:01 AM Monday 9 November"
   ],
   "off": 120,
   "t": [
    1794088800000,
    1794157020000,
    1794162600000,
    1794154980000,
    1794162600000,
    1794175200000
   ]
  },
  {
   "id": "portlouis",
   "city": "Port Louis",
   "country": "Mauritius",
   "tz": "Indian/Mauritius",
   "muhurat": "6:55 – 8:35 PM",
   "from": "6:55 PM",
   "to": "8:35 PM",
   "pradosh": "6:23 – 8:35 PM",
   "pradoshTo": "8:35 PM",
   "amavasya": [
    "9:57 AM Sunday 8 November",
    "11:01 AM Monday 9 November"
   ],
   "off": 240,
   "t": [
    1794081600000,
    1794149700000,
    1794155700000,
    1794147780000,
    1794155700000,
    1794168000000
   ]
  },
  {
   "id": "newyork",
   "city": "New York",
   "country": "United States",
   "tz": "America/New_York",
   "muhurat": "5:04 – 6:52 PM",
   "from": "5:04 PM",
   "to": "6:52 PM",
   "pradosh": "4:44 – 7:31 PM",
   "pradoshTo": "7:31 PM",
   "amavasya": [
    "12:57 AM Sunday 8 November",
    "2:01 AM Monday 9 November"
   ],
   "off": -300,
   "t": [
    1794114000000,
    1794175440000,
    1794181920000,
    1794174240000,
    1794184260000,
    1794200400000
   ]
  },
  {
   "id": "atlanta",
   "city": "Atlanta",
   "country": "United States",
   "tz": "America/New_York",
   "muhurat": "6:00 – 7:53 PM",
   "from": "6:00 PM",
   "to": "7:53 PM",
   "pradosh": "5:39 – 8:20 PM",
   "pradoshTo": "8:20 PM",
   "amavasya": [
    "12:57 AM Sunday 8 November",
    "2:01 AM Monday 9 November"
   ],
   "off": -300,
   "t": [
    1794114000000,
    1794178800000,
    1794185580000,
    1794177540000,
    1794187200000,
    1794200400000
   ]
  },
  {
   "id": "chicago",
   "city": "Chicago",
   "country": "United States",
   "tz": "America/Chicago",
   "muhurat": "4:54 – 6:41 PM",
   "from": "4:54 PM",
   "to": "6:41 PM",
   "pradosh": "4:36 – 7:24 PM",
   "pradoshTo": "7:24 PM",
   "amavasya": [
    "11:57 PM Saturday 7 November",
    "1:01 AM Monday 9 November"
   ],
   "off": -360,
   "t": [
    1794117600000,
    1794178440000,
    1794184860000,
    1794177360000,
    1794187440000,
    1794204000000
   ]
  },
  {
   "id": "houston",
   "city": "Houston",
   "country": "United States",
   "tz": "America/Chicago",
   "muhurat": "5:51 – 7:46 PM",
   "from": "5:51 PM",
   "to": "7:46 PM",
   "pradosh": "5:29 – 8:07 PM",
   "pradoshTo": "8:07 PM",
   "amavasya": [
    "11:57 PM Saturday 7 November",
    "1:01 AM Monday 9 November"
   ],
   "off": -360,
   "t": [
    1794117600000,
    1794181860000,
    1794188760000,
    1794180540000,
    1794190020000,
    1794204000000
   ]
  },
  {
   "id": "dallas",
   "city": "Dallas",
   "country": "United States",
   "tz": "America/Chicago",
   "muhurat": "5:51 – 7:45 PM",
   "from": "5:51 PM",
   "to": "7:45 PM",
   "pradosh": "5:30 – 8:11 PM",
   "pradoshTo": "8:11 PM",
   "amavasya": [
    "11:57 PM Saturday 7 November",
    "1:01 AM Monday 9 November"
   ],
   "off": -360,
   "t": [
    1794117600000,
    1794181860000,
    1794188700000,
    1794180600000,
    1794190260000,
    1794204000000
   ]
  },
  {
   "id": "bayarea",
   "city": "Bay Area",
   "country": "United States",
   "tz": "America/Los_Angeles",
   "muhurat": "5:21 – 7:12 PM",
   "from": "5:21 PM",
   "to": "7:12 PM",
   "pradosh": "5:02 – 7:46 PM",
   "pradoshTo": "7:46 PM",
   "amavasya": [
    "9:57 PM Saturday 7 November",
    "11:01 PM Sunday 8 November"
   ],
   "off": -480,
   "t": [
    1794124800000,
    1794187260000,
    1794193920000,
    1794186120000,
    1794195960000,
    1794211200000
   ]
  },
  {
   "id": "losangeles",
   "city": "Los Angeles",
   "country": "United States",
   "tz": "America/Los_Angeles",
   "muhurat": "5:16 – 7:08 PM",
   "from": "5:16 PM",
   "to": "7:08 PM",
   "pradosh": "4:54 – 7:35 PM",
   "pradoshTo": "7:35 PM",
   "amavasya": [
    "9:57 PM Saturday 7 November",
    "11:01 PM Sunday 8 November"
   ],
   "off": -480,
   "t": [
    1794124800000,
    1794186960000,
    1794193680000,
    1794185640000,
    1794195300000,
    1794211200000
   ]
  },
  {
   "id": "seattle",
   "city": "Seattle",
   "country": "United States",
   "tz": "America/Los_Angeles",
   "muhurat": "4:56 – 6:38 PM",
   "from": "4:56 PM",
   "to": "6:38 PM",
   "pradosh": "4:41 – 7:34 PM",
   "pradoshTo": "7:34 PM",
   "amavasya": [
    "9:57 PM Saturday 7 November",
    "11:01 PM Sunday 8 November"
   ],
   "off": -480,
   "t": [
    1794124800000,
    1794185760000,
    1794191880000,
    1794184860000,
    1794195240000,
    1794211200000
   ]
  },
  {
   "id": "toronto",
   "city": "Toronto",
   "country": "Canada",
   "tz": "America/Toronto",
   "muhurat": "5:17 – 7:03 PM",
   "from": "5:17 PM",
   "to": "7:03 PM",
   "pradosh": "4:59 – 7:48 PM",
   "pradoshTo": "7:48 PM",
   "amavasya": [
    "12:57 AM Sunday 8 November",
    "2:01 AM Monday 9 November"
   ],
   "off": -300,
   "t": [
    1794114000000,
    1794176220000,
    1794182580000,
    1794175140000,
    1794185280000,
    1794200400000
   ]
  },
  {
   "id": "montreal",
   "city": "Montreal",
   "country": "Canada",
   "tz": "America/Toronto",
   "muhurat": "4:48 – 6:32 PM",
   "from": "4:48 PM",
   "to": "6:32 PM",
   "pradosh": "4:32 – 7:22 PM",
   "pradoshTo": "7:22 PM",
   "amavasya": [
    "12:57 AM Sunday 8 November",
    "2:01 AM Monday 9 November"
   ],
   "off": -300,
   "t": [
    1794114000000,
    1794174480000,
    1794180720000,
    1794173520000,
    1794183720000,
    1794200400000
   ]
  },
  {
   "id": "calgary",
   "city": "Calgary",
   "country": "Canada",
   "tz": "America/Edmonton",
   "muhurat": "6:11 – 7:49 PM",
   "from": "6:11 PM",
   "to": "7:49 PM",
   "pradosh": "5:58 – 8:55 PM",
   "pradoshTo": "8:55 PM",
   "amavasya": [
    "11:57 PM Saturday 7 November",
    "1:01 AM Monday 9 November"
   ],
   "off": -360,
   "t": [
    1794117600000,
    1794183060000,
    1794188940000,
    1794182280000,
    1794192900000,
    1794204000000
   ]
  },
  {
   "id": "vancouver",
   "city": "Vancouver",
   "country": "Canada",
   "tz": "America/Vancouver",
   "muhurat": "5:54 – 7:34 PM",
   "from": "5:54 PM",
   "to": "7:34 PM",
   "pradosh": "5:40 – 8:35 PM",
   "pradoshTo": "8:35 PM",
   "amavasya": [
    "10:57 PM Saturday 7 November",
    "12:01 AM Monday 9 November"
   ],
   "off": -420,
   "t": [
    1794121200000,
    1794185640000,
    1794191640000,
    1794184800000,
    1794195300000,
    1794207600000
   ]
  },
  {
   "id": "portofspain",
   "city": "Port of Spain",
   "country": "Trinidad and Tobago",
   "tz": "America/Port_of_Spain",
   "muhurat": "6:06 – 8:08 PM",
   "from": "6:06 PM",
   "to": "8:08 PM",
   "pradosh": "5:40 – 8:08 PM",
   "pradoshTo": "8:08 PM",
   "amavasya": [
    "1:57 AM Sunday 8 November",
    "3:01 AM Monday 9 November"
   ],
   "off": -240,
   "t": [
    1794110400000,
    1794175560000,
    1794182880000,
    1794174000000,
    1794182880000,
    1794196800000
   ]
  },
  {
   "id": "georgetown",
   "city": "Georgetown",
   "country": "Guyana",
   "tz": "America/Guyana",
   "muhurat": "5:58 – 7:58 PM",
   "from": "5:58 PM",
   "to": "7:58 PM",
   "pradosh": "5:32 – 7:58 PM",
   "pradoshTo": "7:58 PM",
   "amavasya": [
    "1:57 AM Sunday 8 November",
    "3:01 AM Monday 9 November"
   ],
   "off": -240,
   "t": [
    1794110400000,
    1794175080000,
    1794182280000,
    1794173520000,
    1794182280000,
    1794196800000
   ]
  },
  {
   "id": "sydney",
   "city": "Sydney",
   "country": "Australia",
   "tz": "Australia/Sydney",
   "muhurat": "8:05 – 9:33 PM",
   "from": "8:05 PM",
   "to": "9:33 PM",
   "pradosh": "7:29 – 9:33 PM",
   "pradoshTo": "9:33 PM",
   "amavasya": [
    "4:57 PM Sunday 8 November",
    "6:01 PM Monday 9 November"
   ],
   "off": 660,
   "t": [
    1794056400000,
    1794128700000,
    1794133980000,
    1794126540000,
    1794133980000,
    1794142800000
   ]
  },
  {
   "id": "melbourne",
   "city": "Melbourne",
   "country": "Australia",
   "tz": "Australia/Melbourne",
   "muhurat": "8:39 – 10:03 PM",
   "from": "8:39 PM",
   "to": "10:03 PM",
   "pradosh": "8:02 – 10:03 PM",
   "pradoshTo": "10:03 PM",
   "amavasya": [
    "4:57 PM Sunday 8 November",
    "6:01 PM Monday 9 November"
   ],
   "off": 660,
   "t": [
    1794056400000,
    1794130740000,
    1794135780000,
    1794128520000,
    1794135780000,
    1794142800000
   ]
  },
  {
   "id": "brisbane",
   "city": "Brisbane",
   "country": "Australia",
   "tz": "Australia/Brisbane",
   "muhurat": "6:46 – 8:19 PM",
   "from": "6:46 PM",
   "to": "8:19 PM",
   "pradosh": "6:11 – 8:19 PM",
   "pradoshTo": "8:19 PM",
   "amavasya": [
    "3:57 PM Sunday 8 November",
    "5:01 PM Monday 9 November"
   ],
   "off": 600,
   "t": [
    1794060000000,
    1794127560000,
    1794133140000,
    1794125460000,
    1794133140000,
    1794146400000
   ]
  },
  {
   "id": "perth",
   "city": "Perth",
   "country": "Australia",
   "tz": "Australia/Perth",
   "muhurat": "7:22 – 8:52 PM",
   "from": "7:22 PM",
   "to": "8:52 PM",
   "pradosh": "6:47 – 8:52 PM",
   "pradoshTo": "8:52 PM",
   "amavasya": [
    "1:57 PM Sunday 8 November",
    "3:01 PM Monday 9 November"
   ],
   "off": 480,
   "t": [
    1794067200000,
    1794136920000,
    1794142320000,
    1794134820000,
    1794142320000,
    1794153600000
   ]
  },
  {
   "id": "auckland",
   "city": "Auckland",
   "country": "New Zealand",
   "tz": "Pacific/Auckland",
   "muhurat": "8:38 – 10:02 PM",
   "from": "8:38 PM",
   "to": "10:02 PM",
   "pradosh": "8:01 – 10:02 PM",
   "pradoshTo": "10:02 PM",
   "amavasya": [
    "6:57 PM Sunday 8 November",
    "8:01 PM Monday 9 November"
   ],
   "off": 780,
   "t": [
    1794049200000,
    1794123480000,
    1794128520000,
    1794121260000,
    1794128520000,
    1794135600000
   ]
  },
  {
   "id": "suva",
   "city": "Suva",
   "country": "Fiji",
   "tz": "Pacific/Fiji",
   "muhurat": "6:49 – 8:29 PM",
   "from": "6:49 PM",
   "to": "8:29 PM",
   "pradosh": "6:16 – 8:29 PM",
   "pradoshTo": "8:29 PM",
   "amavasya": [
    "5:57 PM Sunday 8 November",
    "7:01 PM Monday 9 November"
   ],
   "off": 720,
   "t": [
    1794052800000,
    1794120540000,
    1794126540000,
    1794118560000,
    1794126540000,
    1794139200000
   ]
  }
 ],
 "guess": {
  "Europe/London": "london",
  "Europe/Belfast": "london",
  "Europe/Dublin": "dublin",
  "Europe/Amsterdam": "amsterdam",
  "Europe/Paris": "paris",
  "Europe/Berlin": "frankfurt",
  "Asia/Kolkata": "delhi",
  "Asia/Calcutta": "delhi",
  "Asia/Kathmandu": "kathmandu",
  "Asia/Katmandu": "kathmandu",
  "Asia/Dubai": "dubai",
  "Asia/Singapore": "singapore",
  "Asia/Kuala_Lumpur": "kualalumpur",
  "Africa/Nairobi": "nairobi",
  "Africa/Johannesburg": "durban",
  "Indian/Mauritius": "portlouis",
  "America/New_York": "newyork",
  "America/Detroit": "newyork",
  "America/Chicago": "chicago",
  "America/Los_Angeles": "losangeles",
  "America/Toronto": "toronto",
  "America/Montreal": "montreal",
  "America/Edmonton": "calgary",
  "America/Vancouver": "vancouver",
  "America/Port_of_Spain": "portofspain",
  "America/Guyana": "georgetown",
  "Australia/Sydney": "sydney",
  "Australia/Melbourne": "melbourne",
  "Australia/Brisbane": "brisbane",
  "Australia/Perth": "perth",
  "Pacific/Auckland": "auckland",
  "Pacific/Fiji": "suva"
 }
};
  if (typeof module !== 'undefined' && module.exports) module.exports = PujaTimes; else root.PujaTimes = PujaTimes;
})(typeof self !== 'undefined' ? self : this);
