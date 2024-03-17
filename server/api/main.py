from fastapi import FastAPI, HTTPException
import requests
from constants import *
from articler_parser import parse_news_data_to_articles
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
    try:
        # Make a request to the News API
        topic = "business"
        response = requests.get(f"{base_url}{topic}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = parse_news_data_to_articles(news_articles)
        return news_articles
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get("/news/finance/india")
async def get_indian_news():
    try:
        # Make a request to the News API
        topic = "india%20stock%20market"
        response = requests.get(f"{base_url}{topic}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = parse_news_data_to_articles(news_articles)
        return news_articles
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get("/news/finance/usa")
async def get_usa_news():
    try:
        # Make a request to the News API
        topic = "usa%20stock%20market"
        response = requests.get(f"{base_url}{topic}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = parse_news_data_to_articles(news_articles)
        return news_articles
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@app.get("/news/finance/crypto")
async def get_usa_news():
    try:
        # Make a request to the News API
        topic = "cryptocurrency"
        response = requests.get(f"{base_url}{topic}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = parse_news_data_to_articles(news_articles)
        return news_articles
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.get("/news/search/")
async def search(news_input:str):
    try:
        # Make a request to the News API
        response = requests.get(f"{base_url}{news_input}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = sort(news_articles)
        return news_articles
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))