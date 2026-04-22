# 🔗 Skracacz linków

Aplikacja do skracania linków zbudowana w React, Node.js i MySQL.

## Funkcje
- Skracanie długich URLi do krótkich kodów
- Przekierowanie po kliknięciu w krótki link
- Licznik kliknięć dla każdego linku
- Historia wszystkich skróconych linków

## Tech stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Baza danych: MySQL

## Uruchomienie

### Backend
```bash
cd backend
npm install
node index.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Baza danych
Utwórz bazę `urlshortener` w MySQL i wykonaj:

```sql
CREATE TABLE links (
  id INT AUTO_INCREMENT PRIMARY KEY,
  original_url TEXT NOT NULL,
  short_code VARCHAR(10) NOT NULL UNIQUE,
  clicks INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Użycie
1. Wklej długi URL w pole tekstowe
2. Kliknij **Skróć!**
3. Skopiuj krótki link i udostępnij go
