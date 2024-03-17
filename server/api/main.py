from fastapi import FastAPI
from utils.fetch_news import fetch_news
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/news/finance")
async def get_news():
    return fetch_news("finance")
    

@app.get("/news/finance/india")
async def get_indian_news():
    return fetch_news("india%20stock%20market")
    

@app.get("/news/finance/usa")
async def get_usa_news():
    return fetch_news("usa%20stock%20market")

    

@app.get("/news/finance/crypto")
async def get_crypto_news():
    return fetch_news("cryptocurrency")

    
@app.get("/news/search/")
async def search(news_input:str):
    return fetch_news(news_input)
