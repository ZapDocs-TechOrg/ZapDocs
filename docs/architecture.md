# Architecture

The frontend and backend are independently installable applications. The frontend owns routing and presentation; HTTP access is centralized in `src/services`, and TanStack Query manages server state. Vite proxies `/api` to the local FastAPI server during development.

The backend separates versioned HTTP adapters (`app/api/v1`) from services and repositories. SQLAlchemy engine and session setup live in `app/db`; Alembic reads the same `DATABASE_URL` as application settings. Runtime configuration is environment-based, and CORS origins are explicitly configured with `CORS_ORIGINS`.

The initial migration establishes the Alembic revision table only. Product tables should be introduced with feature models and reviewed autogenerate migrations as those features are implemented.
