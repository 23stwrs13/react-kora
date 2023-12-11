import './../css/style.css'



const Community = () => {
    return ( 
        <section className="section">
            <hr className="line-foot"/>
            <br/>
            <div className="name-zad">
                <div className="zag-text-name"> ТОП Сообщества</div>
            </div>
            <div className="cards--community">
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Обсуждения<br/>новинок<br/>дорам</div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Лучшая<br/>женская роль<br/>в дорамах
                    </div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Лучшая<br/>мужская роль<br/>в дорамах
                    </div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Что все таки<br/>выбирать<br/>дорамы или<br/>новеллы/манхва
                    </div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Какие манхвы<br/>скоро<br/>экранизируют?
                    </div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
                <div className="card-comunity">
                    <div className="card-comunity-text">
                        Самые<br/>провальные<br/>дорамы 2023
                    </div>
                    <div className="community-btn">
                        <div className="btns-com-read"><ins>Читать</ins></div>
                        <div className="btns-com-join"><ins>Вступить</ins></div>
                    </div>
                </div>
            </div>
            <div className="btn__join">
                <button className="button__join">Создать своё сообщество</button>
            </div>
        </section>
     );
}
 
export default Community;