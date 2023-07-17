import { YMaps, Map, Clusterer, Placemark } from 'react-yandex-maps';
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

const getPointData = (index) => {
  return {
    balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
    clusterCaption: "placemark <strong>" + index + "</strong>"
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
          <Map width = '100%'height = '100vh'state={mapState}>
            <Clusterer
              options={{
                preset: "islands#invertedVioletClusterIcons",
                groupByCoordinates: false
              }}
            >
              {bikeParkings.map((items) => (
                <Placemark
                  key={items.id}
                  geometry={items.coords}
                  properties={getPointData(items.id)}
                  options={getPointOptions()}
                />
              ))}
              {rentalPoint.map((items) => (
                <Placemark
                  key={items.id}
                  geometry={items.coords}
                  properties={getPointData(items.id)}
                  options={{preset: "islands#darkGreenDotIcon"}}
                />
              ))}
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  );
}


export default App;

