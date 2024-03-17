from model.article import Article

def parse_news_data_to_articles(data):
    """
    Parses raw news data into a list of News objects.

    Args:
        data (list): List of dictionaries containing news data.

    Returns:
        list: List of News objects.
    """
    news_articles = []
    for article_data in data:
        if isinstance(article_data, dict):
            article_img = Article(
                headline=article_data.get("title"),
                desc=article_data.get("description", ""),
                img_url=article_data.get("urlToImage"),
                url=article_data.get("url"),
                published_at=article_data.get("publishedAt"),
                source=article_data.get("source", {}).get("name", "")
            )
            news_articles.append(article_img)

    return news_articles
