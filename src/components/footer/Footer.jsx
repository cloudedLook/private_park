import "./footer.css";
import Carousel from "./Carousel.jsx";
import img01Src from "../../assets/img/01.png";
import img02Src from "../../assets/img/02.png";
import img03Src from "../../assets/img/03.png";
import img04Src from "../../assets/img/04.png";
import prevSrc from "../../assets/img/arrow-left.svg";
import nextSrc from "../../assets/img/arrow-right.svg";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__top">
          <div className="footer__title">
            <h2 className="footer__title-h2">особенности работы</h2>
            <p className="footer__title-small-h2">компании Saffari Estate</p>
          </div>
          <div className="carousel__buttons">
            <button className="carousel__button carousel__button-prev">
              <img className="carousel__button-svg" src={prevSrc} alt="" />
            </button>
            <button className="carousel__button carousel__button-next">
              <img className="carousel__button-svg" src={nextSrc} alt="" />
            </button>
          </div>
        </div>

        <Carousel>
          <CarouselElement
            imgSrc={img01Src}
            carouselItemTitle={"Большая база"}
            carouselItemText={
              <>
                У нас самая большая база актуальных <br />и эксклюзивных
                объектов элитной <br />
                недвижимости
              </>
            }
            carouselItemLink={"Посмотреть"}
          />
          <CarouselElement
            imgSrc={img02Src}
            carouselItemTitle={"надежность"}
            carouselItemText={
              <>
                <>
                  Мы гарантируем абсолютную <br />
                  безопасность и конфиденциальность <br />
                  по сделкам
                </>
              </>
            }
            carouselItemLink={"Узнать"}
          />
          <CarouselElement
            imgSrc={img03Src}
            carouselItemTitle={"опыт"}
            carouselItemText={
              <>
                Наша команда имеет огромный опыт <br />
                продаж недвижимости в элитном <br />
                сегменте
              </>
            }
            carouselItemLink={"Изучить"}
          />
          <CarouselElement
            imgSrc={img04Src}
            carouselItemTitle={"Закрытые предложения"}
            carouselItemText={
              <>
                Есть объекты, которые предлагаем <br />
                только мы
              </>
            }
            carouselItemLink={"Получить"}
          />
        </Carousel>

        {/* <img src={img01Src} alt="" />
        <img src={img02Src} alt="" />
        <img src={img03Src} alt="" />
        <img src={img04Src} alt="" /> */}
      </section>
    </>
  );
}

function CarouselElement({
  imgSrc,
  carouselItemTitle,
  carouselItemText,
  carouselItemLink,
}) {
  return (
    <>
      <article className="carousel__item">
        <img className="carousel__item-img" src={imgSrc} alt="" />
        <h3 className="carousel__item-title">{carouselItemTitle}</h3>
        <p className="carousel__item-text"> {carouselItemText}</p>
        <p className="carousel__item-link">{carouselItemLink}</p>
      </article>
    </>
  );
}
