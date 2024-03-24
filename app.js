function changeLanguage(lang) {
    fetch(`locales/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            i18next.init({
                lng: lang,
                resources: {
                    [lang]: {
                        translation: data
                    }
                }
            });
            document.getElementById('greeting').textContent = i18next.t('greeting');
        })
        .catch(error => console.error('Error loading translation file:', error));
}

// Initialisierung für die Standard-Sprache
changeLanguage('en');
