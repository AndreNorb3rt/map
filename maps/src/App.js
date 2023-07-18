import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './App.css';

const mapState = { center: [51.53, 46.02], zoom: 13, controls: [] };
const bikeParkings = [
  {
    //картинка объекта???
    id: 1,
    cost: 0,
    capacity: 6,
    coords: [51.522907, 46.020221]
  },
  {
    id: 2,
    cost: 0,
    capacity: 5,
    coords: [51.523968, 46.01835]
  },
  {
    id: 3,
    cost: 0,
    capacity: 13,
    coords: [51.520355, 46.023311]
  }
];

const rentalPoint = [
  {
    //картинка объекта???
    id: 1,
    cost: 300,
    capacity: 6,
    coords: [51.524552, 46.047326]
  },
  {
    id: 2,
    cost: 300,
    capacity: 6,
    coords: [51.523071, 46.039681]
  },
];

const getPointData = (index, name) => {
  return {
    clusterCaption: "placemark <strong>" + index + "</strong>",
    balloonContentHeader: "<h3>"+name+"</h3>",
    balloonContentBody: "<div class='baloon'><br><p>Цена:</p></div>",
    balloonContentFooter: "Подвал",
    hintContent: "<p>"+name+"</p>"
  };
};

const getPointOptions = () => {
  return {
    preset: "islands#violetIcon"
  };
};


function App() {
  return (
    <div id="main">
      
        <YMaps>
          <div id="map">
            <div class="dropdown-checkbox form-group">
              <label class="label-title">Категории</label>
              <ul>
                <li><label><input type="checkbox" name="type[]"/>Велопарковки</label></li>
                <li><label><input type="checkbox" name="type[]"/>Пункты проката</label></li>
                <li><label><input type="checkbox" name="type[]"/>Пункты обслуживания</label></li>
                <li><label><input type="checkbox" name="type[]"/>Спортивные кружки</label></li>
                <li><label><input type="checkbox" name="type[]"/>Веломаршруты</label></li>
                <li><label><input type="checkbox" name="type[]"/>Магазины</label></li>
                <li><label><input type="checkbox" name="type[]"/>Опасные участки</label></li>
              </ul>
            </div>
            <Map width = '100%'height = '100vh'state={mapState}>
                {bikeParkings.map((items) => (
                  <Placemark
                    key={items.id}
                    geometry={items.coords}
                    modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                    properties={getPointData(items.id, 'Велопарковка')}
                    options={getPointOptions()}
                  />
                ))}
                {rentalPoint.map((items) => (
                  <Placemark
                    key={items.id}
                    geometry={items.coords}
                    properties={getPointData(items.id, 'Место аренды')}
                    options={{preset: "islands#darkGreenDotIcon"}}
                  />
                ))}
            </Map>
          </div>
      </YMaps>
      
    </div>
  );
}


export default App;

