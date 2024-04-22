from bs4 import BeautifulSoup
from fastapi import HTTPException
import requests


def get_economic_events():
    url = "https://www.moneycontrol.com/pagination/todaysDataUpdate"
    params = {
        'duration': 'T',
        'startDate': '',
        'endDate': '',
        'impact': '3',
        'country': '',
        'deviceType': 'web',
        'page': '3',
        'classic': 'true',
        'appVersion': '115'
    }

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Referer': 'https://www.moneycontrol.com/economic-calendar',
    }

    response = requests.get(url, params=params, headers=headers)

    if response.status_code == 200:
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find all table rows
        rows = soup.find_all('tr', class_='tableData')

        # Initialize a list to store extracted data
        extracted_data = []

        # Iterate over each row
        for row in rows:
            # Extract data from each row
            event_time = row.find('td', class_='time').text.strip()
            country = row.find('td', class_='ctry').text.strip()
            event_name = row.find('td', class_='eventName').text.strip()
            released_data = row.find('div', class_='actualLoader').text.strip()

            # Append extracted data to the list
            extracted_data.append({
                'event_time': event_time,
                'country': country,
                'event_name': event_name,
                'released_data': released_data,
            })

        return extracted_data

    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to retrieve data")
    
def get_med_economic_events():
    url = "https://www.moneycontrol.com/pagination/todaysDataUpdate"
    params = {
        'duration': 'T',
        'startDate': '',
        'endDate': '',
        'impact': '2',
        'country': '',
        'deviceType': 'web',
        'page': '3',
        'classic': 'true',
        'appVersion': '115'
    }

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Referer': 'https://www.moneycontrol.com/economic-calendar',
    }

    response = requests.get(url, params=params, headers=headers)

    if response.status_code == 200:
        html_content = response.text
        soup = BeautifulSoup(html_content, 'html.parser')

        # Find all table rows
        rows = soup.find_all('tr', class_='tableData')

        # Initialize a list to store extracted data
        extracted_data = []

        # Iterate over each row
        for row in rows:
            # Extract data from each row
            event_time = row.find('td', class_='time').text.strip()
            country = row.find('td', class_='ctry').text.strip()
            event_name = row.find('td', class_='eventName').text.strip()
            released_data = row.find('div', class_='actualLoader').text.strip()

            # Append extracted data to the list
            extracted_data.append({
                'event_time': event_time,
                'country': country,
                'event_name': event_name,
                'released_data': released_data,
            })

        return extracted_data

    else:
        raise HTTPException(status_code=response.status_code, detail="Failed to retrieve data")
    