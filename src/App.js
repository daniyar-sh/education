import 'antd/dist/antd.css';
import Blogs from './containers/blog/index';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Artwork from './containers/artworks/artworks';
import ArtworkDetail from './containers/artwork-details/artworkDetails';
import Main from './containers/main/main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='blogs' element={<Blogs/>} />
        <Route path='' element={<Main/>}/>
        <Route path='artwork' element={<Artwork/>}/>
        <Route path='artwork/:id' element={<ArtworkDetail/>}/>
      </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
