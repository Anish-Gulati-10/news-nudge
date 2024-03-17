from dotenv import load_dotenv
import os

# Load variables from the .env file into environment
load_dotenv()

base_url = os.environ.get("BASE_URL")
api_key = os.environ.get("NEWS_API_KEY")
