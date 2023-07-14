import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './App.css';


function App() {
  return (
    <YMaps>
      <div id="map">
        <Map width = '100%'height = '100vh'state={{ center: [51.53, 46.02], zoom: 13 }}>
          <Placemark geometry={[51.53, 46.02]}/>
        </Map>
      </div>
    </YMaps>
  );
}


export default App;

