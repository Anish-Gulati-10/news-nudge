from fastapi import FastAPI
from api.main import app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
    uvicorn.run(app, host="192.168.1.2", port=8000)
