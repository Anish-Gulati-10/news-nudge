from fastapi import HTTPException
import requests
from constants import *
from utils.articler_parser import parse_news_data_to_articles


def fetch_news(topic: str) -> list:
    try:
        # Make a request to the News API
        response = requests.get(f"{base_url}{topic}{api_key}")
        response.raise_for_status()  # Raise an exception if request fails
        news_data = response.json()
        news_articles = news_data.get("articles","Error occured while procuring data")
        news_articles = parse_news_data_to_articles(news_articles)
        return news_articles
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))