const books = [
    {
        image: 'image-00.jpg',
        title: 'Последнее желание. Меч предназначения',
        author: 'Анджей Сапковский',
        year: '2012',
        publisher: 'Neoclassic',
        language: 'Русский',
        rating: '4,6',
        description: [
            `Новеллы о ведьмаке Геральте из Ривии, его друзьях и недругах, о смертельно опасной его "работе" по истреблению кровожадной нечисти, о мире, в котором среди обычных людей живут эльфы, гномы, оборотни и драконы, давно стали классикой... Сага Анджея Сапковского занимает одно из первых мест в отечественных и зарубежных списках лучшего фэнтези, а Геральт, культовый персонаж литературы и компьютерных игр, уже во второй раз появляется на телеэкранах. Смотрите экранизацию великолепной саги и сравнивайте приключения любимого героя в кинематографическом и литературном мирах!`
        ]
    },
    {
        image: 'image-01.jpg',
        title: 'Унесенные ветром (комплект из 2-х книг)',
        author: 'Маргарет Митчелл',
        year: '2020',
        publisher: 'ООО "Издательство "Эксмо"',
        language: 'Русский',
        rating: '4,7',
        description: [
            `«Унесенные ветром» — история красавицы южанки, женщины с твердым характером, которая борется за личное счастье и благополучие, пока привычный мир вокруг гибнет.`,
            `Беззаботную юность Скарлетт О'Хары унесли могучие ветры Гражданской войны. В один миг девушке пришлось повзрослеть: шум балов сменился грохотом канонад, мать умерла, отец сошел с ума, родное поместье опустело. Однако Скарлетт, капризную и своенравную, но, вместе с тем, сильную и отчаянную, не сломить ни любовным неудачам, ни сложностям жизни, ни грузу ответственности за близких. Ее пленительное обаяние и невероятная целеустремленность помогут пережить все испытания и обрести веру в себя.`,
            `Роман о том, что любовь к жизни бывает важнее любви; о том, что заставляет нас жить — что бы ни творилось вокруг.`
        ]
    },
    {
        image: 'image-02.jpg',
        title: 'Прислуга',
        author: 'Кэтрин Стокетт',
        year: '2011',
        publisher: 'Эксмо',
        language: 'Русский',
        rating: '4,7',
        description: [
            `Американский Юг, на дворе 1960-е годы. Скитер только-только закончила университет и возвращается домой, в сонный городок Джексон, где никогда ничего не происходит. Она мечтает стать писательницей, вырваться в большой мир. Но приличной девушке с Юга не пристало тешиться столь глупыми иллюзиями, приличной девушке следует выйти замуж и хлопотать по дому. Мудрая Эйбилин на тридцать лет старше Скитер, она прислуживает в домах белых всю свою жизнь, вынянчила семнадцать детей и давно уже ничего не ждет от жизни, ибо сердце ее разбито после смерти единственного сына.`,
            `Минни — самая лучшая стряпуха во всем Джексоне, а еще она самая дерзкая служанка в городе. И острый язык не раз уже сослужил ей плохую службу. На одном месте Минни никогда подолгу не задерживается. Но с Минни лучше не связываться даже самым высокомерным белым дамочкам. Двух черных служанок и белую неопытную девушку объединяет одно — обостренное чувство справедливости и желание хоть как-то изменить порядок вещей. Смогут ли эти трое противостоять целому миру? Сумеют ли они выжить в этой борьбе?`,
            `Экранизация романа "Прислуга" выйдет в российский прокат зимой 2012 года. Авторами сценария стали Кэтрин Стокетт и известный режиссер и сценарист Тэйт Тэйлор.`
        ]
    },
    {
        image: 'image-03.jpg',
        title: 'Граф Монте-Кристо',
        author: 'Александр Дюма',
        year: '2017',
        publisher: 'Азбука-Аттикус',
        language: 'Русский',
        rating: '4.5',
        description: [
            `Как и сто шестьдесят пять лет назад, "Граф Монте-Кристо" Александра Дюма остается одним из самых популярных романов в мировой литературе. К нему писали продолжения, его ставили на сцене, создавали мюзиклы, экранизировали, но и по сей день бесчисленные издания этой книги доставляют удовольствие новым и новым поколениям читателей. История молодого парижанина, которого приятели в шутку засадили в тюрьму, почерпнута автором в архивах парижской полиции. А из-под пера мастера выходит моряк Эдмон Дантес, мученик замка Иф. Не дождавшись правосудия, он решает сам вершить суд и жестоко мстит врагам, разрушившим его счастье. `,
            `В настоящем издании роман сопровождается полным комплектом иллюстраций французских художников XIX века к первым публикациям «Графа Монте-Кристо». В издание также включена история сапожника Франсуа Пико, взятая из криминальной хроники, послужившая прообразом сюжетных перипетий романа.`,
        ]
    },
    {
        image: 'image-04.jpg',
        title: 'Игра престолов',
        author: 'Джордж Мартин',
        year: '2019',
        publisher: 'АСТ',
        language: 'Русский',
        rating: '4.6',
        description: [
            `Лорды и герои, воины и чернокнижники совершают великие деяния и предательства, плетут политические интриги, борются за власть, любят и погибают - все ради того, чтобы исполнилось древнее пророчество о мире Семи Королевств- мире суровых земель вечного холода и цветущих земель вечного лета.
            Первая часть саги Джорджа Мартина с уникальными иллюстрациями канадского художника Теда Нэсмита.`
        ]
    },
    {
        image: 'image-05.jpg',
        title: 'Пустая могила',
        author: 'Джонатан Страуд',
        year: '2018',
        publisher: 'Эксмо',
        language: 'Русский',
        rating: '4.7',
        description: [
            `Узнав, что Марисса Фиттис, основательница крупнейшего в Лондоне агентства по борьбе с призраками, вовсе не умерла много лет назад, мы решили пробраться в ее усыпальницу и вскрыть гроб. Действительно, вместо покойницы в гробу лежала восковая кукла. Но кто же тогда руководит агентством? И как Мариссе удалось прожить так долго и выглядеть столь молодо? Но похоже, получить ответы на эти вопросы нам не суждено, потому что мы стали получать угрозы, а затем агентство Фиттис и вовсе прислало к нашему дому головорезов. Чтобы спастись от верной смерти, мне и моим друзьям нужно пройти по Другой Стороне, миру призраков. Отважившись на такое опасное предприятие, мы сильно рискуем, но что если нам все-таки удастся разгадать тайну Мариссы? Ведь как известно, ее агентство уже многие годы ведет эксперименты, путешествуя на Другую Сторону. Но мы и не предполагали, какая страшная правда нам откроется. Кажется, мы вплотную приблизились к разгадке Проблемы и скоро узнаем ответ на вопрос - почему призраки наводнили Англию...`,
        ]
    },
    {
        image: 'image-06.jpg',
        title: 'Король Воронов',
        author: 'Король Воронов',
        year: '2020',
        publisher: 'Popcorn Books',
        language: 'Русский',
        rating: '4.7',
        description: [
            `«Король Воронов» — продолжение бестселлера Норы Сакавич «Лисья нора» и вторая часть сенсационной трилогии «Все ради игры».`,
            `Смерть товарища, потрясшая «Лисов» вскоре после начала игрового сезона, помогает команде наконец сплотиться. Проблема лишь в том, что Эндрю по-прежнему ни во что не ставит старшекурсников, а без этого победа над главным соперником «Лисов» — «Воронами» — невозможна. Единственным, кто может достучаться до Эндрю, становится Нил, только вот Эндрю никогда не делает ничего бесплатно, а Нил не доверяет никому, кроме себя. Едва контакт между ними налаживается, как на горизонте вновь появляется Рико, намеренный уничтожить новую жизнь Нила, а заодно и всю его команду.`
        ]
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // get element from the page
    const sidebar = document.querySelector('.sidebar');
    const pageContainer = document.querySelector('.page__container');

    // create buttons on the page
    createButton(books);

    // create first book on the page
    if (pageContainer.querySelector('.book')) {
        removeBook();
        createBook(books[0]);
    } else {
        createBook(books[0]);
    }

    // create content on the page after clicking on the button
    sidebar.addEventListener('click', function (e) {
        const target = e.target;

        if (target && target.closest('.sidebar-list-item__button')) {
            e.preventDefault();

            // delete content
            removeBook();

            // create content
            books.find(book => book.title === target.textContent ? createBook(book) : null);
        }
    });

    function removeBook() {
        pageContainer.querySelector('.book').remove();
    }

    function createButton(arr) {
        const element = document.createElement('ul');
        element.classList.add('sidebar__list');

        let listItems = '';

        arr.forEach(item => {
            const { title } = item;

            listItems += `<li class="sidebar-list__item">
                            <button class="sidebar-list-item__button">${title}</button>
                        </li>`;
        });

        element.innerHTML = listItems;

        sidebar.appendChild(element);
    }

    function createBook(book) {
        const { image, title, author, year, publisher, language, rating, description } = book;
        const element = document.createElement('section');

        element.classList.add('book', 'page__book');

        element.innerHTML = `
            <div class="book__image">
                <img src="./image/${image}" alt="обложка книги ${title}" title="" />
            </div>
            <div class="book__description">
                <h2 class="book-description__title">${title}</h2>

                <table class="book-description__table">
                    <tbody>
                        <tr>
                            <td>Автор:</td>
                            <td>${author}</td>
                        </tr>
                        <tr>
                            <td>Год издания:</td>
                            <td>${year}</td>
                        </tr>
                        <tr>
                            <td>Издательство:</td>
                            <td>${publisher}</td>
                        </tr>
                        <tr>
                            <td>Язык:</td>
                            <td>${language}</td>
                        </tr>
                        <tr>
                            <td>Рейтинг:</td>
                            <td>${rating}</td>
                        </tr>
                    </tbody>
                </table>

                <div class="book-description__text">
                    ${description};
                </div>
            </div>`

        pageContainer.appendChild(element);
    };

});
