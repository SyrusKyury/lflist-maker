function initialize_banlists()
{

    if (localStorage.getItem("banlists") == null)
    {
        fetch("data/banlists.json").then(response => response.json()).then(data => {
            localStorage.setItem("banlists", JSON.stringify(data));
            setup_html();
        }).catch(error => {
            console.error("Error fetching banlists.json: " + error);
        });
    }
    else
    {
        setup_html();
    }
}

function setup_html()
{
    let banlists = JSON.parse(localStorage.getItem("banlists"));
    let select = document.getElementById("banlist");
    let options = "";
    for (let banlist of banlists)
    {
        options += "<option value='" + banlist["date"] + " " + banlist["type"] + "'>" + banlist["date"] + " " + banlist["type"] + "</option>";
    }

    options = options.split("</option>").sort().join("</option>");

    select.innerHTML = options;
    
}

initialize_banlists();