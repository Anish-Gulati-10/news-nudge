from datetime import datetime
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

class Article:
    def __init__(self,headline,desc,img_url,url,published_at,source):
        self.headline = headline
        self.desc = desc
        self.img_url = img_url
        self.url = url
        self.published_at = self.convert_date(published_at)
        self.source = source
        self.score = self.sentiment_score()

    def convert_date(self, date_string):
        try:
            parsed_date = datetime.strptime(date_string, "%Y-%m-%dT%H:%M:%SZ")
            return parsed_date.strftime("%B %d, %Y %I:%M %p")
        except ValueError:
            return None
    
    def sentiment_score(self):
        sentiment = SentimentIntensityAnalyzer()
        score = sentiment.polarity_scores(self.headline)
        score = score.get("compound")
        if (score == 0):
            if self.desc is not None:
                score = sentiment.polarity_scores(self.desc)
                score = score.get("compound")
                return score
        return score
