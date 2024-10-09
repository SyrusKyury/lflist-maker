function validateForm(event) {
    event.preventDefault();

    var banlistName = document.getElementById('banlist-name').value;
    var banlistType = document.getElementById('banlist').value;
    var releaseDate = document.getElementById('release-date').value;

    if (banlistName === '' || releaseDate === '') {
        alert('Please fill out all required fields.');
        return;
    }

    generate(banlistName, banlistType, releaseDate);
}


function initialize_cards() {
    if (localStorage.getItem("cards") == null) {
        fetch("data/cards.json").then(response => response.json()).then(data => {
            localStorage.setItem("cards", JSON.stringify(data));
        }).catch(error => {
            console.error("Error fetching cards.json: " + error);
        });
    }
}


function get_available_cards(releaseDate, banlistType) {
    let cards = JSON.parse(localStorage.getItem("cards"));
    let available_cards = {};
    let tcg = banlistType.toLowerCase().includes("tcg");
    
    for (let card_id in cards) {
        let card = cards[card_id];
        let card_release_date = tcg ? card['tcgDate'] : card['ocgDate'];
        if (!card_release_date) {
            continue;
        }

        if (new Date(card_release_date) <= new Date(releaseDate)) {
            available_cards[card_id] = card;
        }
    }

    return available_cards;
}

function get_banlist(banlistType) {
    let banlists = JSON.parse(localStorage.getItem("banlists"));
    for (let banlist of banlists) {
        let value = banlist["date"] + " " + banlist["type"]
        if (value === banlistType) {
            return banlist['list'];
        }
    }
    return null;
}

function generate(banlistName, banlistType, releaseDate) {
    let available_cards = get_available_cards(releaseDate, banlistType);
    let banlist =  get_banlist(banlistType);

    let forbidden = [];
    let limited = [];
    let semi_limited = [];
    let unlimited = [];

    for (let card_id in available_cards) {
        let status = banlist[card_id];
        if (status == 0)
        {
            forbidden.push(card_id);
        }
        else if (status == 1)
        {
            limited.push(card_id);
        }
        else if (status == 2)
        {
            semi_limited.push(card_id);
        }
        else
        {
            unlimited.push(card_id);
        }
    }

    let filename = banlistName + ".lflist.conf";
    let text = "#[" + banlistName + "]\n";
    text += "!" + banlistName + "\n";
    text += "$whitelist\n";
    text += "#Forbidden\n";

    for (let card_id of forbidden) {
        text += card_id + " 0 --" + available_cards[card_id]['name'] + "\n"; 
    }

    text += "#Limited\n";
    for (let card_id of limited) {
        text += card_id + " 1 --" + available_cards[card_id]['name'] + "\n"; 
    }

    text += "#Semi-Limited\n";
    for (let card_id of semi_limited) {
        text += card_id + " 2 --" + available_cards[card_id]['name'] + "\n"; 
    }

    text += "#Unlimited\n";
    for (let card_id of unlimited) {
        text += card_id + " 3 --" + available_cards[card_id]['name'] + "\n"; 
    }

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
}

initialize_cards();