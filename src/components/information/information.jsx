import "./information.css";
import zaglushkaSrc from "../../assets/img/zaglushka.svg";
import presentationSrc from "../../assets/img/presentation.svg";
import layoutSrc from "../../assets/img/layout.svg";

export default function Information() {
  return (
    <>
      <section className="info">
        <article className="factoids">
          <Factoid
            info={"156 - 636"}
            desc={"Площадь квартир"}
            measure={" м²"}
          />
          <Factoid info={"475"} desc={"Парковочных мест"} measure={""} />
          <Factoid info={"10"} desc={"До метро Фрунзенская"} measure={" мин"} />
          <Factoid
            info={"2"}
            desc={"Площадь собственного парка"}
            measure={" га"}
            isHiddenOnSmallScreen={true}
          />
        </article>
        <p className="info__details">
          Жилой комплекс из четырех клубных домов класса де-люкс в английском
          стиле, расположенный в собственном парке площадью 3 га в районе
          Хамовники. Авторы интерьеров жилого комплекса,и дизайна частного парка
          – дизайнеры мировой величины. Так, общественные зоны оформляет Дэвид
          Линли, племянник королевы Великобритании и глава компании LINLEY, а
          настоящий английский парк для жителей
        </p>
        <button onClick={buttonMore} className="info__more">
          Узнать подробнее
        </button>
        <section className="info__images">
          <img
            className="info__images-item info__zaglushka"
            src={zaglushkaSrc}
            alt="zaglushka"
          />
          <div className="info__images-item info__images-small">
            <img
              className="info__images-item info__images-small-item presentation"
              src={presentationSrc}
              alt="presentation"
            />
            <img
              className="info__images-item info__images-small-item layout"
              src={layoutSrc}
              alt="layout"
            />
          </div>
        </section>
      </section>
    </>
  );
}

function Factoid({ info, desc, measure, isHiddenOnSmallScreen = false }) {
  const newClass = isHiddenOnSmallScreen ? "hidden-on-small-screen" : "";
  return (
    <>
      <div className={`factoids__container ${newClass}`}>
        <span className="factoids__item-info">{info}</span>
        <span className="factoids__item-measure">{measure}</span>
        <br />
        <p className="factoids__item-desc">{desc}</p>
      </div>
    </>
  );
}

function buttonMore() {
  const elements = document.querySelectorAll(".hidden-on-small-screen");
  elements.forEach((element) => {
    if (element.style.display === "none" || element.style.display === "") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}
