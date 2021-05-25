import {useState} from 'react';
import SideBar  from './components/SideBar';
import Content  from './components/Content';

import './styles/global.scss';

export function App() {
 const [genreId, setGenreId] = useState(1)

  return (
    <div className="dashboard">
      <SideBar genreId={id => setGenreId(id)}/>
      <Content id={genreId}/>
      
    </div>
  )
}