const BASEURL = " https://api.aivoiceform.com/api/";
const DONE = 4;
const SESSIONKEY = "alphaOneSessionKey";
const TOKEN = "token";
// Language ID
const SINHALA = 1;
const TAMIL = 2;
const ENGLISH = 3;
const HINDI = 4;
const ARABIC = 5;
const GERMAN = 6;
const SPANISH = 7;
const FRENCH = 8;
// HTTP Codes
const OK = 200;
// Error code
const BADREQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const METHODNOTALLOWED = 404;
const REQUESTTIMEOUT = 408;
const INTERNALSERVERERROR = 500;
// Error message
const MSG_BADREQUEST = "Invalid request, please check the request parameter";
const MSG_UNAUTHORIZED = "Unauthorized request";
const MSG_FORBIDDEN = "You are not authorized to access this area";
const MSG_METHODNOTALLOWED = "Method not allowed";
const MSG_REQUESTTIMEOUT = "Your request time out";
const MSG_INTERNALSERVERERROR =
  "The server can not be accessed, please try again later";
const MSG_KEYBOARDNOTFOUND = "The keyboard you were requesting was not found";
const MSG_PLACEHOLDERNOTFOUNT =
  "The place holder for keyboard key to printed was not found";
const MSG_KEYNOTFOUND = "The key was not found";
// Keyboards
const KB_SINHALA = 1;
const KB_TAMIL = 2;
const KB_ENGLISH = 3;
const KB_ENGLISHNIC = 4;
const KB_NUMBERPAD = 5;
const KB_ENGLISHTITLE = 6;
const KB_ENGLISHQUESTION = 7;
const KB_SINHALATITLE = 8;
const KB_SINHALAPROFESSION = 9;
const KB_ENGLISHPROFESSION = 10;
const KB_TAMILTITLE = 11;
const KB_TAMILPROFESSION = 12;
const KB_SINHALANIC = 13;
const KB_TAMILNIC = 14;
const KB_SINHALANUMBERPAD = 15;
const KB_TAMILNUMBERPAD = 16;
const KB_SINHALAHOUSENUMBER = 17;
const KB_TAMILHOUSENUMBER = 18;
const KB_ENGLISHHOUSENUMBER = 19;
const KB_SINHALAEMAIL = 20;
const KB_TAMILEMAIL = 21;
const KB_ENGLISHEMAIL = 22;

// Language
const LANGUAGE = [
  ["2", "Tamil"],
  ["3", "English"],
  ["4", "Hindi"],
  ["5", "Arabic"],
  ["6", "German"],
  ["7", "Spanish"],
  ["8", "French"],
];

// Address fields
const COUNTRY = 1;
const PROVINCE = 2;
const DISTRICT = 3;
const DS = 4;
const CITY = 5;
const GND = 6;
const STREET = 8;
const HOUSE = 9;
const HOUSENAME = 10;
const POSTALCODE = 11;
const HOUSENUMBER = 12;

// Form Field for Form Filling
const FORM_FIELD_NIC = 1;
const FORM_FIELD_TITLE = 2;
const FORM_FIELD_FIRSTNAME = 3;
const FORM_FIELD_LASTNAME = 4;
const FORM_FIELD_OTHERNAME = 5;
const FORM_FIELD_CITY = 6;
const FORM_FIELD_STREET_NAME = 7;
const FORM_FIELD_HOUSE_NAME = 8;
const FORM_FIELD_HOUSE_NUMBER = 9;
const FORM_FIELD_MOBILE = 10;
const FORM_FIELD_EMAIL = 11;
const FORM_FIELD_PROFESSION = 12;

// Keyboard related constants
const symbolArray = [
  "!",
  "@",
  "?",
  ".",
  ",",
  "-",
  "_",
  "&#47;",
  "&ldquo;",
  "&lsquo;",
  "%",
  "&",
  "*",
  "(",
  ")",
  "&#92",
  ":",
  ";",
  "&lsaquo;",
  "&rsaquo;",
  "#",
  "$",
  "^",
];
const alphabetArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A","B","C","D","E","F","G","-","/"];
const compoundLetterArrayListSinhala = [
  "ක",
  "ක්",
  "කා",
  "කැ",
  "කෑ",
  "කි",
  "කී",
  "කු",
  "කූ",
  "කෙ",
  "කේ",
  "කො",
  "කෝ",
  "කෘ",
  "කෲ",
  "කෟ",
  "කෞ",
  "කෛ",
  "ක්‍ර",
  "ක්‍ර්",
  "ක්‍රා",
  "ක්‍රැ",
  "ක්‍රෑ",
  "ක්‍රි",
  "ක්‍රී",
  "ක්‍රෙ",
  "ක්‍රේ"
];
const compoundLetterArrayListTamil = [
  "க",
  "க்",
  "கா",
  "கி",
  "கீ",
  "கு",
  "கூ",
  "கெ",
  "கே",
  "கை",
  "கொ",
  "கோ",
  "கௌ",
];
const sinhalaArray = [
  "අ",
  "ඊ",
  "ඉ",
  "උ",
  "එ",
  "ඔ",
  "ඤ",
  "ඥ",
  "ං",
  "්‍",
  "ක",
  "ඛ",
  "ග",
  "ඝ",
  "ඞ",
  "ඟ",
  "ච",
  "ඡ",
  "ජ",
  "ඣ",
  "ට",
  "ඨ",
  "ඩ",
  "ඪ",
  "ණ",
  "ඬ",
  "ත",
  "ථ",
  "ද",
  "ධ",
  "න",
  "ඳ",
  "ප",
  "ඵ",
  "බ",
  "භ",
  "ම",
  "ඹ",
  "ය",
  "ර",
  "ල",
  "ව",
  "ශ",
  "ෂ",
  "ස",
  "හ",
  "ළ",
  "ෆ",
];
const tamilArray = [
  "ஃ",
  "அ",
  "ஆ",
  "இ",
  "ஈ",
  "உ",
  "எ",
  "ஐ",
  "ஒ",
  "ஸ்ரீ",
  "க",
  "ங",
  "ச",
  "ஞ",
  "ட",
  "ண",
  "த",
  "ந",
  "ப",
  "ம",
  "ய",
  "ர",
  "ல",
  "வ",
  "ழ",
  "ள",
  "ற",
  "ன",
  "ஶ",
  "ஜ",
  "ஷ",
  "ஸ",
  "ஹ",
  "க்ஷ",
];

const profession_sinhala = [
  "ඉංජිනේරු", "ඩොක්ටර්", "වෙළෙන්දා", "කොන්ත්‍රාත්කරු", "ගුරු"
];

const profession_tamil = [
  "பொறியாளர்", "டாக்டர்", "வணிகர்", "ஒப்பந்தக்காரர்", "ஆசிரியர்"
];

const profession_english = [
  "Engineer", "Doctor", "Mercahnt", "Contractor", "Teacher"
];

const field_sinhala = [
  "හැඳුනුම්පත් අංකය", "ආමන්ත්‍රණය", "පළමු නම", "අවසන් නම", "වෙනත් නම්", "නගරය", "වීදියේ නම", "නිවසේ නම", "නිවෙස් අංකය", "ජංගම දූරකථන අංකය", "විද්යුත් තැපෑල", "වෘත්තිය"
];

const field_english = [
  "NIC Number", "Title", "First Name", "Last Name", "Other Name", "City", "Street Name", "House Name", "House Number", "Mobile Phone Number", "Email", "Profession"
];

const field_tamil = [
  "அடையாள அட்டை இலக்கம் ", "தலைப்பு", "முதல் பெயர்", "கடைசி பெயர்", "வேறு பெயர்", "நகரம்", "தெருவின் பெயர்", "வீட்டின் பெயர்", "வீட்டு எண்", "தொலைபேசி எண்", "மின்னஞ்சல்", "தொழில்"
]
