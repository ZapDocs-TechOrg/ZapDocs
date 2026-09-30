# ZapDocs

ZapDocs is a document management and collaboration platform. This repository contains the application foundation; document workflows and other product features are intentionally not implemented.

## Requirements

- Node.js 20 or newer and npm
- Python 3.11 or newer
- PostgreSQL 14 or newer

## Configuration

Copy the root `.env.example` values into `backend/.env`, then set `DATABASE_URL` to a PostgreSQL database and credentials available to your environment. Keep `.env` files out of version control. The Vite development server proxies `/api` to `http://127.0.0.1:8000` by default; set `VITE_API_URL` only when the API is hosted elsewhere.

`CORS_ORIGINS` is a JSON array of allowed browser origins. Update it for the frontend origins used by each environment.

## Backend

```powershell
cd backend
py -3.11 -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements-dev.txt
Copy-Item .env.example .env
alembic upgrade head
uvicorn app.main:app --reload
```

The API is available at `http://127.0.0.1:8000`. Interactive API documentation is at `/docs`, and the liveness endpoint is `/api/v1/health`.

Run backend tests from `backend/` with `pytest`.

## Frontend

```powershell
cd frontend
npm ci
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`. Build the frontend with `npm run build`.

## Database migrations

Create a migration after adding SQLAlchemy models with `alembic revision --autogenerate -m "describe change"` from `backend/`, then apply it with `alembic upgrade head`. Alembic reads the same `DATABASE_URL` setting as the application.

## Architecture

- `frontend/src/routes` owns route registration; pages and layouts compose the user interface.
- `frontend/src/services` owns typed HTTP access; TanStack Query owns asynchronous server state.
- `backend/app/api/v1` contains versioned HTTP adapters, `services` contains application behavior, and `repositories` is reserved for persistence operations.
- `backend/app/db` owns SQLAlchemy engine, sessions, and model metadata; Alembic owns schema migrations.
- Runtime configuration is loaded from environment variables and local `.env` files.
