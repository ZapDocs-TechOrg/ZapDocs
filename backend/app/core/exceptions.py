import logging

from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse
from starlette.exceptions import HTTPException as StarletteHTTPException

logger = logging.getLogger(__name__)


async def handle_http_exception(
    request: Request,
    exception: StarletteHTTPException,
) -> JSONResponse:
    return JSONResponse(
        status_code=exception.status_code,
        content={"detail": exception.detail},
        headers=exception.headers,
    )


async def handle_validation_exception(
    request: Request,
    exception: RequestValidationError,
) -> JSONResponse:
    return JSONResponse(
        status_code=422,
        content={"detail": exception.errors()},
    )


async def handle_unexpected_exception(
    request: Request,
    exception: Exception,
) -> JSONResponse:
    logger.exception(
        "Unhandled request error for %s %s",
        request.method,
        request.url.path,
        exc_info=exception,
    )
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"},
    )


def register_exception_handlers(app: FastAPI) -> None:
    app.add_exception_handler(StarletteHTTPException, handle_http_exception)
    app.add_exception_handler(RequestValidationError, handle_validation_exception)
    app.add_exception_handler(Exception, handle_unexpected_exception)
