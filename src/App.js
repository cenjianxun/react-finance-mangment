import { Routes, Route, Link } from 'react-router-dom';
import MainLayout from './view/main-layout/main-layout.comp';
import Authentication from './view/authentication/authentication.comp';
import './App.css';
import LayoutSider from './view/layout-sider/layout-sider.comp';
import Home from './view/item-home/item-home.comp';
import Accounting from './view/item-accounting/item-accounting.comp';
import Analysis from './view/item-analysis/item-analysis.comp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route path='/home' element={<Home />} />
        <Route path='/accounting' element={<Accounting />} />
        <Route path='/analysis' element={<Analysis />} />
      </Route>
      <Route path='/login' element={<Authentication />} />
    </Routes>
  );
}

export default App;
