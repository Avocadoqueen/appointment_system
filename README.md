# Near East Hospital Appointment System

## About
A scheduling website for Near East Hospital. Patients can view available doctors and time slots, then book appointments. Staff can review booked appointments and manage schedule data through the backend.

## Features
- Patient appointment booking with date/time selection
- Doctor and appointment type selection
- Appointment list view for staff review
- Simple authentication flow for access pages

## Tech Stack
### Frontend
- PHP (server-rendered pages)
- HTML, CSS, JavaScript

### Backend
- PHP 8.x (PDO)

### Database
- SQLite (local database)

## Project Structure
```
appointment_system/
  backend/
  frontend/
  extras/
```

## Database Details
- SQLite file: `backend/data/appointments.sqlite`
- Table: `appointments`
  - `id` (INTEGER, primary key)
  - `name` (TEXT)
  - `date` (TEXT)
  - `time` (TEXT)
  - `reason` (TEXT)
  - `type` (TEXT)
  - `doctor` (TEXT)
  - `created_at` (TEXT)

You can override the database path with `APPOINTMENTS_DB_PATH`.

## Run Locally
### Backend API
From the repo root:

```bash
php -S localhost:8000 -t backend
```

### Frontend Website
In a new terminal, from the repo root:

```bash
php -S localhost:8080 -t frontend/views
```

Open the site:
- `http://localhost:8080/`

## API (Optional)
Endpoints:
- `GET /api/appointments.php` (optional `?limit=100`)
- `GET /api/appointments.php?id=1`
- `POST /api/appointments.php`
- `PUT /api/appointments.php?id=1`
- `DELETE /api/appointments.php?id=1`

Example create:

```bash
curl -X POST http://localhost:8000/api/appointments.php \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Jane Doe\",\"date\":\"2024-10-01\",\"time\":\"10:30\",\"reason\":\"Checkup\",\"type\":\"Offline\",\"doctor\":\"Cardiology\"}"
```

## Tests
Run the basic API/data test script:

```bash
php backend/tests/appointments_test.php
```

## Author
ENIOLA ABDUL

## License
MIT
