import 'antd/dist/antd.css';
import Blogs from './containers/blog/index';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Artwork from './containers/artworks/artworks';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='blogs' element={<Blogs/>} />
        <Route path='' element={<p>main</p>}/>
        <Route path='artwork' element={<Artwork/>}/>
      </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
