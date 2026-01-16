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

## Run the Website
From the repo root:API (Optional)
Run the API from the repo root:

php -S localhost:8000 -t backend
Endpoints:

appointments.php (optional ?limit=100)
appointments.php?id=1
appointments.php
appointments.php?id=1
appointments.php?id=1
Example create:

curl -X POST http://localhost:8000/api/appointments.php \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Jane Doe\",\"date\":\"2024-10-01\",\"time\":\"10:30\",\"reason\":\"Checkup\",\"type\":\"Offline\",\"doctor\":\"Cardiology\"}"
Tests
Run the basic API/data test script:

php backend/tests/appointments_test.php
php: include or php: ignore
license: MIT 
Author: ENIOLA ABDUL

```bash
php -S localhost:8000 -t frontend/views
