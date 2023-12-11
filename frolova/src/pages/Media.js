import './../css/style.css'

const Media = () => {
    return ( 
        <section className="section">
            <hr className="line-foot"/>
            <div className="name-zad">
                <div className="zag-text-name">Статьи</div>
                <div className="link-left-strel"></div>
            </div>
            <div className="cards__grups">
                <div className="card__grup">
                    <div className="card-grup-text">
                        65 ключевых<br/>особенностей корейских<br/>дорам
                    </div>
                    <div className="card-grup__link"><ins>читать</ins></div>
                </div>
                <div className="card__grup">
                    <div className="card-grup-text">
                        Что такое дорамы, и<br/>почему они свели с ума<br/>половину планеты?
                    </div>
                    <div className="card-grup__link"><ins>читать</ins></div>
                </div>
                <div className="card__grup">
                    <div className="card-grup-text">
                        Что такое дорамы и почему<br/>все их смотрят. Объясняем<br/>феномен корейских<br/>сериалов
                    </div>
                    <div className="card-grup__link"><ins>читать</ins></div>
                </div>
            </div>
            <div className="name-zad">
                <div className="zag-text-name">Видеообзоры и интервью</div>
                <div className="link-left-strel"></div>
            </div>
            <div className="obzor-videos">
                <div className="obzor-video video1"></div>
                <div className="obzor-vidtos-text">
                    <div className="obzor-vid-text"><br/>Новые Дорамы июль 2023<br/>Самые Ожидаемые<br/>сериалы года</div>
                    <div className="obzor-vid-link leftt"><ins>Смотреть</ins></div>
                </div>
            </div>
            <div className="obzor-videos">
                <div className="obzor-vidtos-text">
                    <div className="obzor-vid-text">Интервью актёров дорамы<br/>“Подснежник Джису и Чон Хэ Ин”</div>
                    <div className="obzor-vid-link"><ins>Смотреть</ins></div>
                </div>
                <div className="obzor-video video2"></div>
            </div>
            <div className="obzor-videos">
                <div className="obzor-video video3"></div>
                <div className="obzor-vidtos-text">
                    <div className="obzor-vid-text">11 ЛУЧШИХ<br/>ПЕРСОНАЖЕЙ ЧОН ХЭ<br/>ИНА</div>
                    <div className="obzor-vid-link leftt"><ins>Смотреть</ins></div>
                </div>
            </div>
            <div className="zag-text-zag">Фотогалерея</div>
            <div className="fotogalari"></div>
        </section>
     );
}
 
export default Media;