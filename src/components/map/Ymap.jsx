import React, { useEffect, useState } from "react";
import pharmacySrc from "../../assets/img/pharmacy-pin.png";
import storeSrc from "../../assets/img/shop-pin.png";

const YandexMap = () => {
  const [placemarks, setPlacemarks] = useState([]);
  const [showPharmacies, setShowPharmacies] = useState(true);
  const [showStores, setShowStores] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=0c288d56-c460-401e-a998-6d980df3f837&lang=ru_RU";
    script.async = true;
    document.body.appendChild(script);

    const init = () => {
      if (window.myMap) {
        window.myMap.destroy();
      }

      window.myMap = new window.ymaps.Map("map", {
        center: [54.333211, 48.390582],
        zoom: 17,
      });

      const pharmacyPlacemarks = [
        {
          coordinates: [54.333479, 48.393807],
          hintContent: "Аптека 1",
          balloonContent: "Здесь находится аптека 1",
        },
        {
          coordinates: [54.33194, 48.386729],
          hintContent: "Аптека 2",
          balloonContent: "Здесь находится аптека 2",
        },
      ];

      const storePlacemarks = [
        {
          coordinates: [54.332371, 48.390061],
          hintContent: "Магазин 1",
          balloonContent: "Здесь находится магазин 1",
        },
        {
          coordinates: [54.332906, 48.389972],
          hintContent: "Магазин 2",
          balloonContent: "Здесь находится магазин 2",
        },
      ];

      const allPlacemarks = [...pharmacyPlacemarks, ...storePlacemarks].map(
        (data) => {
          const placemark = new window.ymaps.Placemark(
            data.coordinates,
            {
              hintContent: data.hintContent,
              balloonContent: data.balloonContent,
            },
            {
              iconLayout: data.hintContent.startsWith("Аптека")
                ? "default#image"
                : "default#image",
              iconImageHref: data.hintContent.startsWith("Аптека")
                ? pharmacySrc
                : storeSrc,
              iconImageSize: [80, 80],
            }
          );
          return placemark;
        }
      );

      allPlacemarks.forEach((placemark) => {
        window.myMap.geoObjects.add(placemark);
      });

      setPlacemarks(allPlacemarks);
    };

    script.onload = () => {
      window.ymaps.ready(init);
    };

    return () => {
      document.body.removeChild(script);

      if (window.myMap) {
        window.myMap.destroy();
        delete window.myMap;
      }
    };
  }, []);

  const togglePharmacies = () => {
    placemarks.forEach((placemark) => {
      if (placemark.properties.get("hintContent").startsWith("Аптека")) {
        if (showPharmacies) {
          window.myMap.geoObjects.remove(placemark);
        } else {
          window.myMap.geoObjects.add(placemark);
        }
      }
    });
    setShowPharmacies(!showPharmacies);
  };

  const toggleStores = () => {
    placemarks.forEach((placemark) => {
      if (placemark.properties.get("hintContent").startsWith("Магазин")) {
        if (showStores) {
          window.myMap.geoObjects.remove(placemark);
        } else {
          window.myMap.geoObjects.add(placemark);
        }
      }
    });
    setShowStores(!showStores);
  };

  return (
    <>
      <section className="map-block">
        <div className="">
          <h2 className="map-block__title">на карте</h2>
          <div className="map-block__controls">
            <button
              className="map-block__controls-button"
              onClick={togglePharmacies}
            >
              КРАСОТА И ЗДОРОВЬЕ
            </button>
            <button
              className="map-block__controls-button"
              onClick={toggleStores}
            >
              МАГАЗИНЫ
            </button>
          </div>
        </div>
        <div className="map-container">
          <div id="map"></div>
        </div>
      </section>
    </>
  );
};

export default YandexMap;
