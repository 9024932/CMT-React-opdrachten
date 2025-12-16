# Movie App – Debug & Test Report

## 📌 Projectomschrijving
Deze applicatie is een React Movie App waarin gebruikers films kunnen toevoegen en verwijderen uit hun favorietenlijst.

---

## 👤 User Stories & Acceptatiecriteria

### User Story 1: Films toevoegen
**Als gebruiker wil ik een film kunnen toevoegen zodat ik mijn favorieten kan bijhouden.**

**Acceptatiecriteria:**
- De gebruiker kan een filmnaam invoeren
- De film wordt toegevoegd aan de lijst
- Het invoerveld wordt geleegd na toevoegen

---

### User Story 2: Geen dubbele films
**Als gebruiker wil ik geen dubbele films kunnen toevoegen zodat mijn lijst overzichtelijk blijft.**

**Acceptatiecriteria:**
- Een film kan maar één keer worden toegevoegd
- Bij een dubbele film wordt een waarschuwing getoond

---

### User Story 3: Films verwijderen
**Als gebruiker wil ik een film kunnen verwijderen zodat ik mijn lijst kan aanpassen.**

**Acceptatiecriteria:**
- Elke film heeft een verwijderknop
- De film verdwijnt direct uit de lijst

---

### User Story 4: Applicatie stabiliteit
**Als gebruiker wil ik dat de applicatie zonder fouten of waarschuwingen draait.**

**Acceptatiecriteria:**
- Geen runtime errors
- Geen React warnings in de console

---

## 🐞 Debug Report

### Bug 1: useState niet geïmporteerd in App.jsx
- **Probleem:**  
  De applicatie crashte met `useState is not defined`.

- **Oorzaak:**  
  De React hook `useState` werd gebruikt zonder import.

- **Oplossing:**  
  `useState` toegevoegd aan de React import.

---

### Bug 2: Foutieve initiële state
- **Probleem:**  
  State werd geïnitialiseerd met `[movies]`.

- **Oorzaak:**  
  De variabele `movies` bestond nog niet.

- **Oplossing:**  
  State geïnitialiseerd met een lege array.

---

### Bug 3: Verkeerde setter naam
- **Probleem:**  
  Films konden niet worden toegevoegd.

- **Oorzaak:**  
  `setMovie` werd gebruikt in plaats van `setMovies`.

- **Oplossing:**  
  Setter gecorrigeerd naar `setMovies`.

---

### Bug 4: Verkeerde logica voor dubbele films
- **Probleem:**  
  Waarschuwing verscheen bij unieke films.

- **Oorzaak:**  
  De `includes()` check was omgekeerd.

- **Oplossing:**  
  Logica aangepast zodat alleen dubbele films worden geblokkeerd.

---

### Bug 5: useState niet geïmporteerd in AddMovie.jsx
- **Probleem:**  
  AddMovie component crashte.

- **Oorzaak:**  
  `useState` ontbrak in de import.

- **Oplossing:**  
  `useState` toegevoegd aan de import.

---

### Bug 6: Ontbrekende key in MovieList
- **Probleem:**  
  React warning over ontbrekende `key` prop.

- **Oorzaak:**  
  Lijstitems hadden geen unieke key.

- **Oplossing:**  
  `key` attribuut toegevoegd aan elk `<li>` element.

---

## 🧪 Test Report

### User Story 1: Films toevoegen
- Film toevoegen aan lijst  
  ✅ PASSED
- Input veld wordt geleegd  
  ✅ PASSED

---

### User Story 2: Geen dubbele films
- Dubbele film wordt geblokkeerd  
  ✅ PASSED
- Waarschuwing wordt getoond  
  ✅ PASSED

---

### User Story 3: Films verwijderen
- Film kan worden verwijderd  
  ✅ PASSED
- Lijst wordt direct bijgewerkt  
  ✅ PASSED

---

### User Story 4: Applicatie stabiliteit
- Applicatie start zonder errors  
  ✅ PASSED
- Geen console warnings  
  ✅ PASSED

---

## 🧾 Git Commits

- `fix: import useState in App component`
- `fix: correct initial movies state`
- `fix: fix incorrect state setter name`
- `fix: prevent duplicate movies`
- `fix: import useState in AddMovie component`
- `fix: add unique key to MovieList items`
