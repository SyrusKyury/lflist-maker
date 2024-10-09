import requests
import json

def status_number(status):
    status = status.lower()
    if status == 'forbidden':
        return 0
    elif status == 'limited':
        return 1
    else:
        return 2
    

banlists_list = requests.get("https://ygoprodeck.com/api/banlist/getBanListDates.php").json()
banlists_list = [ban_list for ban_list in banlists_list if ban_list['type'] == 'TCG' or ban_list['type'] == 'OCG']


for ban_list in banlists_list:
    print(f"Getting banlist {ban_list['date']} {ban_list['type']}")
    url = f"https://ygoprodeck.com/api/banlist/getBanList.php?list={ban_list['type']}&date={ban_list['date']}"
    ban_list['list'] = {card['id'] : status_number(card['status_text']) for card in requests.get(url).json()}


with open("banlists.json", "w") as f:
    json.dump(banlists_list, f, indent=4)
