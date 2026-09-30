from fastapi import APIRouter, Depends

from app.schemas.health import HealthResponse
from app.services.health import HealthService

router = APIRouter()


def get_health_service() -> HealthService:
    return HealthService()


@router.get("/health", response_model=HealthResponse)
def health_check(
    service: HealthService = Depends(get_health_service),
) -> HealthResponse:
    return service.get_status()
