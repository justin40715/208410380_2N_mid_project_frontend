import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';
import CardStaticPage_80 from './pages/CardStaticPage_80';
import CardLocalJsonPage_80 from './pages/CardLocalJsonPage_80';
import CardNodeServerPage_80 from './pages/CardNodeServerPage_80';
import CardSupabasePage_80 from './pages/CardSupabasePage_80';
import Navbar from './components/NavbarResp_80';

function App_80() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/card_80' element={<CardStaticPage_80 />} />
        <Route path='local_80' element={<CardLocalJsonPage_80/>}/>
        <Route path='/node_80' element={<CardNodeServerPage_80 />} />
        <Route path='/supabase_80' element={<CardSupabasePage_80 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_80;