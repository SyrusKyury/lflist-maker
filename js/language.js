const content = {
    'it': {
        title: "LFList-Maker per EDOPro",
        subtitle: "Crea la tua LFList",
        description: "Benvenuto! Questo strumento ti permette di creare una LFList per EDOPro basata sulle banlist ufficiali di Yu-Gi-Oh! e la data di rilascio delle carte. Seleziona la banlist che desideri e la data entro la quale le carte devono essere state rilasciate.",
        banlistNameLabel: "Inserisci un nome per la tua lista (quella che verrà mostrata su EDOPro):",
        banlistLabel: "Seleziona la Banlist:",
        dateLabel: "Includi le carte stampate fino a questa data (inclusa):",
        buttonText: "Genera LFList",
        donateText: "Supporta il progetto con una donazione:",
        thanks: "I dati sono stati raccolti grazie a <strong>Format Library</strong> e <strong>YGOProDeck</strong>."
    },
    'en': {
        title: "LFList-Maker for EDOPro",
        subtitle: "Create Your LFList",
        description: "Welcome! This tool lets you create an LFList for EDOPro, based on official Yu-Gi-Oh! banlists and card release dates. Choose the banlist you'd like to use and set the cutoff date for card releases.",
        banlistNameLabel: "Enter a name for your banlist (as it will appear in EDOPro):",
        banlistLabel: "Select a Banlist:",
        dateLabel: "Include cards released up to this date:",
        buttonText: "Generate LFList",
        donateText: "Support the project with a donation:",
        thanks: "Data has been sourced from <strong>Format Library</strong> and <strong>YGOProDeck</strong>."
    },
    'pt-BR': {
        title: "LFList-Maker para EDOPro",
        subtitle: "Crie sua LFList",
        description: "Bem-vindo! Esta ferramenta permite que você crie uma LFList para o EDOPro com base nas banlists oficiais de Yu-Gi-Oh! e na data de lançamento das cartas. Escolha a banlist desejada e defina a data limite para o lançamento das cartas.",
        banlistNameLabel: "Insira um nome para sua lista (como será exibido no EDOPro):",
        banlistLabel: "Selecione uma Banlist:",
        dateLabel: "Inclua cartas lançadas até esta data:",
        buttonText: "Gerar LFList",
        donateText: "Apoie o projeto com uma doação:",
        thanks: "Os dados foram obtidos de <strong>Format Library</strong> e <strong>YGOProDeck</strong>."
    },
    'es': {
        title: "LFList-Maker para EDOPro",
        subtitle: "Crea tu LFList",
        description: "¡Bienvenido! Esta herramienta te permite crear una LFList para EDOPro, basada en las banlists oficiales de Yu-Gi-Oh! y la fecha de lanzamiento de las cartas. Selecciona la banlist que desees y establece la fecha límite para el lanzamiento de las cartas.",
        banlistNameLabel: "Ingresa un nombre para tu banlist (como aparecerá en EDOPro):",
        banlistLabel: "Selecciona una Banlist:",
        dateLabel: "Incluye las cartas lanzadas hasta esta fecha:",
        buttonText: "Generar LFList",
        donateText: "Apoya el proyecto con una donación:",
        thanks: "Los datos han sido recopilados gracias a <strong>Format Library</strong> y <strong>YGOProDeck</strong>."
    },
    'fr': {
        title: "LFList-Maker pour EDOPro",
        subtitle: "Créez votre LFList",
        description: "Bienvenue ! Cet outil vous permet de créer une LFList pour EDOPro, basée sur les banlists officielles de Yu-Gi-Oh! et les dates de sortie des cartes. Choisissez la banlist que vous souhaitez utiliser et définissez la date limite de sortie des cartes.",
        banlistNameLabel: "Entrez un nom pour votre banlist (tel qu'il apparaîtra dans EDOPro) :",
        banlistLabel: "Sélectionnez une Banlist :",
        dateLabel: "Inclure les cartes sorties jusqu'à cette date :",
        buttonText: "Générer la LFList",
        donateText: "Soutenez le projet avec un don :",
        thanks: "Les données ont été fournies par <strong>Format Library</strong> et <strong>YGOProDeck</strong>."
    },
    'de': {
        title: "LFList-Maker für EDOPro",
        subtitle: "Erstellen Sie Ihre LFList",
        description: "Willkommen! Dieses Tool ermöglicht es Ihnen, eine LFList für EDOPro zu erstellen, basierend auf den offiziellen Yu-Gi-Oh!-Banlisten und dem Veröffentlichungsdatum der Karten. Wählen Sie die gewünschte Banlist und legen Sie das Stichtag für die Kartenausgabe fest.",
        banlistNameLabel: "Geben Sie einen Namen für Ihre Banlist ein (wie sie in EDOPro angezeigt wird):",
        banlistLabel: "Wählen Sie eine Banlist:",
        dateLabel: "Einschließlich Karten, die bis zu diesem Datum veröffentlicht wurden:",
        buttonText: "LFList erstellen",
        donateText: "Unterstützen Sie das Projekt mit einer Spende:",
        thanks: "Die Daten stammen von <strong>Format Library</strong> und <strong>YGOProDeck</strong>."
    }
  };

function setLanguage(lang) {
    document.querySelector('header h1').textContent = content[lang].title;
    document.querySelector('#content h2').textContent = content[lang].subtitle;
    document.querySelector('#content p').textContent = content[lang].description;
    document.querySelector('label[for="banlist-name"]').textContent = content[lang].banlistNameLabel;
    document.querySelector('label[for="banlist"]').textContent = content[lang].banlistLabel;
    document.querySelector('label[for="release-date"]').textContent = content[lang].dateLabel;
    document.querySelector('button').textContent = content[lang].buttonText;
    document.querySelector('.paypal-donate p').textContent = content[lang].donateText;
    document.querySelector('footer p').innerHTML = content[lang].thanks;
}

// Getting the language from the browser
let lang = navigator.language || navigator.userLanguage;
lang = lang.split('-')[0];
if (lang in content) {
    setLanguage(lang);
} else {
    setLanguage('en');
}