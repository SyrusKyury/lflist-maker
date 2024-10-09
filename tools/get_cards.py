import json
import requests


cards = requests.get("https://www.formatlibrary.com/api/cards?limit=100000&page=1&sort=name:asc&filter=tcgLegal:eq:true").json()
cards = {card['ypdId'] : {'name' : card['name'], 'tcgDate' : card['tcgDate'], 'ocgDate' : card['ocgDate']} for card in cards if card['tcgDate'] != "1" and card['ocgDate'] != "1"}

with open("cards.json", "w") as f:
    json.dump(cards, f, indent=4)