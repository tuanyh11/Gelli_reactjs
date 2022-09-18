
import { Route, Routes } from 'react-router-dom';
import {routes} from './Routes'
import './App.css';
import { MainLayout } from './Components';

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, i) => {
          const Component = route.element
          const Layout = route.layout ?  route.layout : MainLayout
          const path = route.path
          return <Route key={i} path={path} element={<Layout><Component/></Layout>}/>
        })}
      </Routes>
    </div>
  );
}

export default App;
