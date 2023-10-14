import {NavLink} from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index';


// console.log(harvardArt)


function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records} />
  );
}

export default App;
