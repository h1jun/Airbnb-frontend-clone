const globe = document.querySelector('.language-select');
const langModal = document.querySelector('.lang-modal');

globe.addEventListener('click', () => {
  langModal.classList.toggle('show');
})

function render() {
  let template = `
    <div class="lang-overlay"></div>
    <div class="lang-content">
        <div class="lang-exit">
            <button>X</button>
        </div>
        <div class="lang-tap">
            <button>언어와 지역</button>
            <button>통화</button>
        </div>
        <hr>
        <div class="reco-lang">
            <h2>추천 언어 및 지역</h2>
            <div>
                <ul class="reco-lang-items">
                    <li>
                        <a href="">
                            <div>English</div>
                            <div>United States</div>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div>English</div>
                            <div>United Kingdom</div>
                        </a>
                    </li>
                </ul>    
            </div>                                
        </div>

        <div class="select-lang">
            <h2>언어와 지역을 선택하세요</h2>
            <ul>
                {{__lang_item__}}
            </ul>
        </div>
    </div>
`;
  const selectLanguage = [['한국어', '대한민국'], ['Azərbaycan dili', 'Azərbaycan'], ['Bahasa Indonesia', 'Indonesia'], ['Bosanski', 'Bosna i Hercegovina'], ['Català', 'Espanya'], ['Čeština', 'Česká republika'], ['Crnogorski', 'Crna Gora'], ['Dansk', 'Danmark'], ['Deutsch', 'Deutschland'], ['Deutsch', 'Österreich'], ['Deutsch', 'Schweiz'], ['Eesti', 'Eesti'], ['English', 'Australia'], ['English', 'Canada'], ['English', 'Guyana'], ['English', 'India'], ['English', 'Ireland'], ['English', 'New Zealand'], ['English', 'Singapore'], ['English', 'United Arab Emirates'], ['Español', 'Argentina'], ['Español', 'Belice'], ['Español', 'Bolivia'], ['Español', 'Chile'], ['Español', 'Colombia'], ['Español', 'Costa Rica'], ['Español', 'Ecuador'], ['Español', 'El Salvador'], ['Español', 'España'], ['Español', 'Estados Unidos'], ['Español', 'Guatemala'], ['Español', 'Honduras'], ['Español', 'Latinoamérica'], ['Español', 'México'], ['Español', 'Nicaragua'], ['Español', 'Panamá'], ['Español', 'Paraguay'], ['Español', 'Perú'], ['Español', 'Venezuela'], ['Français ', 'Belgique'], ['Français ', 'Canada'], ['Français ', 'France'], ['Français ', 'Suisse'], ['Gaeilge ', 'Éire'], ['Hrvatski', 'Hrvatska'], ['isiXhosa', 'eMzantsi Afrika'], ['isiZulu', 'iNingizimu Afrika'], ['Íslenska', 'Ísland'], ['Italiano', 'Italia'], ['Italiano', 'Svizzera'], ['Kiswahili', 'Āfrika'], ['Latviešu', 'Latvija'], ['Lietuvių', 'Lietuva'], ['Magyar', 'Magyarország'], ['Malti', 'Malta'], ['Melayu', 'Malaysia'], ['Nederlands', 'België'], ['Nederlands', 'Nederland'], ['Norsk', 'Norge'], ['Polski', 'Polska'], ['Português', 'Brasil'], ['Português', 'Portugal'], ['Română', 'România'], ['Shqip', 'Shqipëri'], ['Slovenčina', 'Slovensko'], ['Slovenščina', 'Slovenija'], ['Srpski', 'Srbija'], ['Suomi', 'Suomi'], ['Svenska', 'Sverige'], ['Tagalog', 'Pilipinas'], ['Tiếng', 'Việt Việt Nam'], ['Türkçe', 'Türkiye'], ['Ελληνικά', 'Ελλάδα'], ['Български', 'България'], ['Македонски', 'Северна Македонија'], ['Русский', 'Россия'], ['Українська', 'Україна'], ['ქართული', 'საქართველო'], ['Հայերեն', 'Հայաստան'], ['עברית ', 'ישראל'], ['العربية', 'العالم'], ['हिन्दी', 'भारत'], ['ไทย', 'ประเทศไทย'], ['日本語', '日本'], ['简体中文', '美国'], ['繁體中文', '美國'], ['简体中文', '中国'], ['繁體中文', '香港'], ['繁體中文', '台灣']]
  const langList = []

  for (let i = 0; i < selectLanguage.length; i++) {
    langList.push(`
    <li class="lang-item">
        <a href="#">
            <div>${selectLanguage[i][0]}</div>
            <div>${selectLanguage[i][1]}</div>
        </a>  
    </li>
    `);
  }

  template = template.replace('{{__lang_item__}}', langList.join(''))

  langModal.innerHTML = template;
}

render();

const overlay = langModal.querySelector('.lang-overlay');
const closeBtn = langModal.querySelector('.lang-exit button');

const closeModal = () => {
  langModal.classList.add('show');
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
