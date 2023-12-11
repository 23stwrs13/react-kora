import './../css/style.css'

const Account = () => {
    return ( 
        <section className="section">
            <hr className="line-foot"/>
            <div className="name-zad">
                <div className="zag-text-name">Регистрация</div>
            </div>
            <div className="registration">
                <form className="formas">
                    <div className="form-string">
                        <label for="form-name">Имя пользователя</label>
                        <input type="text" name="name" placeholder="Ваше имя" id="form-name"/>
                    </div>
                    <div className="form-string">
                        <label for="form-log">Логин</label>
                        <input type="text" name="log" placeholder="Придумайте логин" id="form-log"/>
                    </div>
                    <div className="form-string">
                        <label for="form-password">Пароль</label>
                        <input type="text" name="password" placeholder="Придумайте пароль" id="form-password"/> 
                    </div>
                    <div className="form-reg">
                        <button >Регистрироваться</button>
                    </div>
                </form>
                <div className="big__logo"></div>
            </div>
            <hr className="line-foot"/>
            <div className="name-zad person-cab">
                <div className="zag-text-name cab">Личный кабинет</div>
            </div>
            <div className="cab-iformation">
                <div className="cab-infor">
                    <div className="cab-inf-string">
                        <div className="cab-inf-shablon">Имя</div>
                        <div className="inform-cab-inf">Жан</div>
                    </div>
                    <div className="cab-inf-string">
                        <div className="cab-inf-shablon">Фамилия</div>
                        <div className="inform-cab-inf">Моро</div>
                    </div>
                    <div className="cab-inf-string">
                        <div className="cab-inf-shablon">Дата<br/>рождения</div>
                        <div className="inform-cab-inf">07.01.1986</div>
                    </div>
                </div>
                <div className="cab-icon">
                    <div className="cab-img"></div>
                    <div className="cab-btm">
                        <button className="caddin">Редактировать профиль</button>
                    </div>
                </div>
            </div>
            <div className="ned">
                <hr className="nedavnie"/>
            </div>
            <div className="block-text">
                <div className="zagglav">Недавние просмотренные</div>
            </div>  
            <div className="dorammas">
                <div className="doram oni"></div>
                <div className="doram twi"></div>
                <div className="doram tri"></div>
                <div className="doram foi"></div>
            </div>          
            <div className="btn__dor">
                <div className="dor__button">Оценить дораму</div>
                <div className="dor__button">Написать отзыв</div>
            </div>
        </section>
     );
}
 
export default Account;