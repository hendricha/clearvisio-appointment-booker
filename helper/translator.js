import {useStoreon} from 'storeon/preact'
import html from './html.js'
import PrivacyPolicyLink from '../component/PrivacyPolicyLink.js'
import StartTime from '../component/summary/StartTime.js'

const messages = {
  hu: {
    "Are you sure you want to cancel this appointment?":
      "Biztosan megszakítja a foglalást?",
    "All inputed data will be lost.": "Mindent megadott adat el fog veszni.",
    "No, continue editing appointment": "Nem, időpontfoglalás folytatása",
    "Cancel appointment": "Foglalás megszakítása",
    "Appointment booking failed": "Időpontfoglalás nem sikerült",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "Az időpontfoglalás közben nem várt hiba történt, kérjük kezdje újra a folyamatot",
    "None of our colleagues is available for the selected process":
      "Egy munkatársunk sem elérhető a választott protokollhoz",
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
    'Search in progress...': 'Keresés folyamatban...',
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
    'Your information': 'Az Ön adatai',
    'Name': 'Név',
    'Date of birth': 'Születési dátum',
    'Address': 'Cím',
    'Phone number': 'Telefonszám',
    'Appointment details verification': 'Foglalási adatok ellenőrzése',
    'Appointment summary': 'Foglalási összesítő',
    'Price': 'Ár',
    'Confirm appointment': 'Időpontfoglalás jóváhagyása',
    "%customer%'s examination": '%customer% vizsgálata',
    'Your appointment have been recorded.': 'Foglalását rögzítettük.',
    'The examination will start at %start%, please arrive 5 minutes early.':
      'A vizsgálat kezdete: %start%, kérjük érkezzen 5 perccel korábban.',
    'If you have any further questions, please contact us through our customer service.':
      'Ha kérdése van vagy szeretné módosítani a foglalását, kérjük keresse szaküzletünket.',
    'Appointment booked!': 'Időpont lefoglalva!',
    'examiner: %examiner%': 'végzi: %examiner%',
    'It takes up to %length% minutes': 'Időtartam: %length% perc',
    'I have accepted the privacy policy': html`Elfogadom az <${PrivacyPolicyLink}>adatkezelési tájékoztatóban<//> foglaltakat`,
    'I agree to the use of my medical records according to privacy policy': 'Hozzájárulok egészségügyi adataim adatkezelési tájékoztatóban foglaltak szerinti kezeléséhez',
    'Privacy policy': 'Adatkezelési tájékoztató',
    'Close': 'Bezárás',
    'Start Time': 'Időpont',
    'Subject': 'Tárgy',
    'Location': 'Helyszín',
    'Appointment booking': 'Időpontfoglalás',
    'Select eye examination type': 'Vizsgálattípus választása',
    'Select a vision expert': 'Látásszakértő választása',
    'Select your desired appointment time': 'Időpont választása',
    'Enter customer details': 'Ügyféladatok megadása',
    'Comment': 'Megjegyzés',
    'change date': 'időpont cseréje',
    'More...': 'Bővebben...',
    'Detailed description': 'Részletes leírás'
  },
  ro: {
    "Are you sure you want to cancel this appointment?":
      "Sunteți sigur că doriți să renunțați la programare?",
    "All inputed data will be lost.": "Datele întroduse se vor pierde.",
    "No, continue editing appointment": "Nu, continuare programare.",
    "Cancel appointment": "Întreruperea programării",
    "Appointment booking failed": "Programare nereușită.",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "A apărut o eroare. Vă rugăm, începeți din nou procesul.",
    "None of our colleagues is available for the selected process":
      "Nu avem angajați disponibili pentru protocolul selectat.",
    "First free": "Primul liber",
    "For finding the nearest free time slot.": "În cel mai scurt timp.",
    '@abbrSunday': 'D',
    '@abbrMonday': 'L',
    '@abbrTuesday': 'M',
    '@abbrWednesday': 'Mi',
    '@abbrThursday': 'J',
    '@abbrFriday': 'V',
    '@abbrSaturday': 'S',
    'January': 'Ianuarie',
    'February': 'Februarie',
    'March': 'Martie',
    'April': 'Aprilie',
    'May': 'Mai',
    'June': 'Junie',
    'July': 'Julie',
    'August': 'August',
    'September': 'Septembrie',
    'October': 'Octombrie',
    'November': 'Noiembrie',
    'December': 'Decembrie',
    'There are no free appointment times for this day': 'Nu sunt ore libere la data selectată.',
    "The next free slot is available on %date%": "Următorul timp liber este: %date%",
    'Go to date': 'Salt la dată',
    'Click here to search for the next free appointment':
      'Click aici pentru căutarea următorului timp liber',
    'Search in progress...': 'Căutare în curs...',
    'Last name': 'Nume',
    'First name': 'Prenume',
    'Birth': 'Data naștere',
    'Gender': 'Gen',
    'SSN': 'CNP',
    'Country': 'Țara',
    'State': 'Megye',
    'Postal code': 'Cod poștal',
    'City': 'Oraș',
    'Street address': 'Strada',
    'Mobile': 'Număr de tel mobil',
    'Select another process': 'Selectare protocol diferit',
    '@abbrMinute': 'min.',
    'Not specified': 'Nu e specificat',
    'Male': 'Bărbat',
    'Female': 'Femeie',
    'Next': 'Mai departe',
    'This field is required.': 'Acest cămp este necesar.',
    'Invalid email address.': 'Adresa da mail greșită.',
    'Your information': 'Datele personale',
    'Name': 'Nume',
    'Date of birth': 'Data naștere',
    'Address': 'Adresa',
    'Phone number': 'Număr de telefon',
    'Appointment details verification': 'Verificare datele rezervării',
    'Appointment summary': 'Sumar rezervare',
    'Price': 'Preț',
    'Confirm appointment': 'Rezervare',
    "%customer%'s examination": 'Consultație %customer%',
    'Your appointment have been recorded.': 'Rezervare salvată.',
    'The examination will start at %start%, please arrive 5 minutes early.':
      'Vă rugăm să vă prezentați cu 5 minute mai devreme. Ora inceperii rezervării: %start%.',
    'If you have any further questions, please contact us through our customer service.':
      'Dacă aveți alte întrebări, vă rugăm contactați serviciul clienți.',
    'Appointment booked!': 'Programare rezervată!',
    'examiner: %examiner%': 'examinator: %examiner%',
    'It takes up to %length% minutes': 'Durata: %length% minute',
    'I have accepted the privacy policy': html`Accept <${PrivacyPolicyLink}>Termenile și condițiile<//>`,
    'I agree to the use of my medical records according to privacy policy': 'Dau acordul pentru prelucrarea datelor medicale conform Termenilor și condițiilor generale.',
    'Privacy policy': 'Termeni și condiții',
    'Close': 'Închidere',
    'Start Time': 'Data',
    'Subject': 'Subiect',
    'Location': 'Locație',
    'Appointment booking': 'Programare',
    'Select eye examination type': 'Selectare tip de examinare',
    'Select a vision expert': 'Selectare specialist în vedere',
    'Select your desired appointment time': 'Selectare dată și oră',
    'Enter customer details': 'Datele clientului',
    'change date': 'modificare dată'
  },
  hr: {
    "Are you sure you want to cancel this appointment?": "Jeste li sigurni da želite otkazati ovaj termin?",
    "All inputed data will be lost.": "Svi uneseni podaci bit će izgubljeni.",
    "No, continue editing appointment": "Ne, nastavi s uređivanjem termina",
    "Cancel appointment": "Otkaži termin",
    "Appointment booking failed": "Rezervacija termina nije uspjela",
    "Due to an unexpected error appointment could not be booked, please restart the process":
      "Zbog neočekivane pogreške termin nije moguće rezervirati, molimo ponovno pokrenite proces",
    "None of our colleagues is available for the selected process":
      "Nitko od naših kolega nije dostupan za odabrani proces",
    "First free": "Prvo slobodno",
    "For finding the nearest free time slot.": "Da odaberete što raniji termin.",
    '@abbrSunday': 'N',
    '@abbrMonday': 'P',
    '@abbrTuesday': 'U',
    '@abbrWednesday': 'S',
    '@abbrThursday': 'Č',
    '@abbrFriday': 'P',
    '@abbrSaturday': 'S',
    'January': 'Siječnja',
    'February': 'Veljača',
    'March': 'Ožujak',
    'April': 'Travanj',
    'May': 'Svibanj',
    'June': 'Lipanj',
    'July': 'Srpanj',
    'August': 'Kolovoz',
    'September': 'Rujan',
    'October': 'Listopad',
    'November': 'Studeni',
    'December': 'Prosinac',
    'There are no free appointment times for this day': 'Za ovaj dan nema slobodnih termina',
    "The next free slot is available on %date%": "Datum sljedećeg slobodnog termina je %date%",
    'Go to date': 'Skoči na datum',
    'Click here to search for the next free appointment': 'Traženje sljedećeg slobodnog termina',
    'Search in progress...': 'Pretraživanje je u tijeku...',
    'Last name': 'Prezime',
    'First name': 'Ime',
    'Birth': 'Datum rođenja',
    'Gender': 'Spol',
    'SSN': 'MBO broj',
    'Country': 'Zemlja',
    'State': 'Država',
    'Postal code': 'Poštanski broj',
    'City': 'Grad',
    'Street address': 'Ulica',
    'Mobile': 'Mobilni',
    'Select another process': 'Odaberite drugi protokol',
    '@abbrMinute': 'm.',
    'Not specified': 'Nije specificirano',
    'Male': 'Muškarac',
    'Female': 'Žena',
    'Next': 'Sljedeći',
    'This field is required.': 'Ovo polje je obavezno.',
    'Invalid email address.': 'Pogrešna adresa e-maila.',
    'Your information': 'Vaši podaci',
    'Name': 'Ime',
    'Date of birth': 'Datum rođenja',
    'Address': 'Adresa',
    'Phone number': 'Broj telefona',
    'Appointment details verification': 'Provjerite detalje rezervacije',
    'Appointment summary': 'Sažetak rezervacije',
    'Price': 'Cjena',
    'Confirm appointment': 'Odobrenje rezervacije termina',
    "%customer%'s examination": '%customer% pregleda',
    'Your appointment have been recorded.': 'Vaša rezervacija je zabilježena.',
    'The examination will start at %start%, please arrive 5 minutes early.':
      'Početak pregleda: %start%, molimo dođite 5 minuta ranije.',
    'If you have any further questions, please contact us through our customer service.':
      'Ako imate dodatnih pitanja, obratite nam se putem naše korisničke službe.',
    'Appointment booked!': 'Termin rezerviran!',
    'examiner: %examiner%': 'ispitivač: %examiner%',
    'It takes up to %length% minutes': 'Trajanje: %length% minuta',
    'I have accepted the privacy policy': html`Prihvaćam <${PrivacyPolicyLink}>što je zapisano<//> u informativnom listu za upravljanje podacima`,
    'I agree to the use of my medical records according to privacy policy': 'Pristajem na obradu mojih zdravstvenih podataka u skladu s informacijama o upravljanju podacima',
    'Privacy policy': 'Informativni list za upravljanje podatke',
    'Close': 'Zatvaranje',
    'Start Time': 'Vrijeme početka',
    'Subject': 'Objekat',
    'Location': 'Mjesto',
    'Appointment booking': 'Zakažite termin',
    'Select eye examination type': 'Izbor vrste pregleda',
    'Select a vision expert': 'Odaberite stručnjaka za vid',
    'Select your desired appointment time': 'Odaberite željeno vrijeme termina',
    'Enter customer details': 'Unos podataka o klijentu',
    'change date': 'promijeni termin'
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
    'I have accepted the privacy policy': html`I accept the terms of <${PrivacyPolicyLink}>privacy policy<//>`,
    'Your appointment starts at startTime': html`Your appointment starts at <${StartTime}//>`,
    'change date': 'change date'
  }
};

export default (message, params = {}, storeContent) => {
  storeContent = storeContent || useStoreon('language', 'translationOverrides');
  let language = storeContent.language;

  const languageSpecificMessages = messages[language] || messages[language.substring(0, 2)] || messages.en;
  message = storeContent.translationOverrides[message] || languageSpecificMessages[message] || message;

  for (const key in params) {
    message = message.replace(new RegExp('%' + key + '%', 'g'), params[key]);
  }

  return message;
}
