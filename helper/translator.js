import {useStoreon} from 'storeon/preact'
import html from './html.js'
import PrivacyPolicyLink from '../component/PrivacyPolicyLink.js'
import StartTime from '../component/summary/StartTime.js'

const messages = {
  hu: {
    "Are you sure you want to cancel this appointment?":
      "Biztosan megszakítja ezt az időpontot?",
    "All inputed data will be lost.": "Mindent megadott adat el fog veszni.",
    "No, continue editing appointment": "Nem, időpont foglalás folytatása",
    "Cancel appointment": "Időpont megszakítása",
    "Appointment booking failed": "Időpontfoglalás nem sikerült",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "Az időpontfoglalás közben nem várt hiba történt, kérjük kezdje újra a folyamatot",
    "None of our colleagues was available for the selected process":
      "Egy munkatársunk sem volt elérhető a választott protokollhoz",
    "First free": "Első szabad",
    "For finding the nearest free time slot.": "A lehető legkorábbi időpont választásához.",
    '@abbrSunday': 'V',
    '@abbrMonday': 'H',
    '@abbrTuesday': 'K',
    '@abbrWednesday': 'Sze',
    '@abbrThursday': 'Cs',
    '@abbrFriday': 'P',
    '@abbrSaturday': 'Szo',
    'January': 'Január',
    'February': 'Február',
    'March': 'Március',
    'April': 'Április',
    'May': 'Május',
    'June': 'Június',
    'July': 'Július',
    'August': 'Augusztus',
    'September': 'Szeptember',
    'October': 'Október',
    'November': 'November',
    'December': 'December',
    'There are no free appointment times for this day': 'Nincsenek szabad időpontok erre a napra',
    "The next free slot is available on %date%": "A következő szabad időpont dátuma: %date%",
    'Go to date': 'Ugrás dátumra',
    'Click here to search for the next free appointment':
      'Kattintson ide a következő szabad időpont kereséséhez',
    'Last name': 'Vezetéknév',
    'First name': 'Keresztnév',
    'Birth': 'Születési dátum',
    'Gender': 'Nem',
    'SSN': 'TAJ szám',
    'Country': 'Ország',
    'State': 'Állam',
    'Postal code': 'Irányítószám',
    'City': 'Város',
    'Street address': 'Utca',
    'Mobile': 'Mobil',
    'Select another process': 'Másik protokoll választása',
    '@abbrMinute': 'p.',
    'Not specified': 'Nincs megadva',
    'Male': 'Férfi',
    'Female': 'Nő',
    'Next': 'Tovább',
    'This field is required.': 'Ez a mező kötelező.',
    'Invalid email address.': 'Hibás email cím.',
    'Your information': 'A te adataid',
    'Name': 'Név',
    'Date of birth': 'Születési dátum',
    'Address': 'Cím',
    'Phone number': 'Telefonszám',
    'Your appointment details': 'Foglalás adatai',
    'Price': 'Ár',
    'Book appointment': 'Időpont foglalása',
    "%customer%'s examination": '%customer% vizsgálata',
    'We have recorded you appointment.': 'Időpontját rögzítettük.',
    'The examination will start at %start%, please arrive 5 minutes early.':
      'A vizsgálat kezdete: %start%, kérjük érkezzen 5 perccel korábban.',
    'If you have any further questions, please contuct us through our customer service.':
      'Ha további kérdése van, keresse fel ügyfélszolgálatunkat.',
    'Appointment booked!': 'Időpont lefoglalva!',
    'with: %examiner%': 'vele: %examiner%',
    'It takes up to %length% minutes': '%length% percet vesz igénybe',
    'I have accepeted the privacy policy': html`Elfogadom az <${PrivacyPolicyLink}>adatkezelési szabályzatban<//> foglaltakat`,
    'Privacy policy': 'Adatkezelési tájékoztató',
    'Close': 'Bezárás',
    'Your appointment starts at startTime': html`Az időpontja <${StartTime}//> időpontban kezdődik`
  },
  en: {
    '@abbrSunday': 'Sun',
    '@abbrMonday': 'Mon',
    '@abbrTuesday': 'Tue',
    '@abbrWednesday': 'Wed',
    '@abbrThursday': 'Thu',
    '@abbrFriday': 'Fri',
    '@abbrSaturday': 'Sat',
    'January': 'January',
    'February': 'February',
    'March': 'March',
    'April': 'April',
    'May': 'May',
    'June': 'June',
    'July': 'July',
    'August': 'August',
    'September': 'September',
    'October': 'October',
    'November': 'November',
    'December': 'December',
    '@abbrMinute': 'm.',
    'I have accepeted the privacy policy': html`I have accepeted the <${PrivacyPolicyLink}>privacy policy<//>`,
    'Your appointment starts at startTime': html`Your appointment starts at <${StartTime}//>`
  }
};

export default (message, params = {}, language) => {
  language = language || useStoreon('language').language;
  const languageSpecificMessages = messages[language] || messages[language.substring(0, 2)] || messages.en;
  message = languageSpecificMessages[message] || message;

  for (const key in params) {
    message = message.replace(new RegExp('%' + key + '%', 'g'), params[key]);
  }

  return message;
}
