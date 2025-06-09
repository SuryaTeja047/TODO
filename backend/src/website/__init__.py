from fastapi import FastAPI
from .config import engine, Base
from routes.routes import router

def create_app():
    app = FastAPI()
    app.include_router(router)
    Base.metadata.create_all(bind=engine)
    return app 