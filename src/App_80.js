import { BrowserRouter, Routers, Route, Routes } from 'react-router-dom';
import CardStaticPage_80 from './pages/CardStaticPage_80';
import CardLocalJsonPage_80 from './pages/CardLocalJsonPage_80';
import CardNodeServerPage_80 from './pages/CardNodeServerPage_80';
import CardSupabasePage_80 from './pages/CardSupabasePage_80';
import Navbar from './components/NavbarResp_80';
import CardLocalContextPage_80 from './pages/CardLocalContextPage_80';
import CardNodeContextPage_80 from './pages/CardNodeContextPage_80';
import CardStaticContextPage_80 from './pages/CardStaticContextPage_80';
import CardSupabaseContextPage_80 from './pages/CardSupabaseContextPage_80';
function App_80() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/local_context_80' element={<CardLocalContextPage_80/>} />
        <Route path='/node_context_80' element={<CardNodeContextPage_80/>} />
        <Route path='/static_context_80' element={<CardStaticContextPage_80/>} />
        <Route path='/supabase_context_80' element={<CardSupabaseContextPage_80/>} />
        <Route path='/card_80' element={<CardStaticPage_80 />} />
        <Route path='local_80' element={<CardLocalJsonPage_80/>}/>
        <Route path='/node_80' element={<CardNodeServerPage_80 />} />
        <Route path='/supabase_80' element={<CardSupabasePage_80 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App_80;