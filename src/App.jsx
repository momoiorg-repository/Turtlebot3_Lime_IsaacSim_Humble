import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ImportGuide from './pages/ImportGuide';
import Drive from './pages/SensorsControl/Drive';
import Camera from './pages/SensorsControl/Camera';
import Lidar from './pages/SensorsControl/Lidar';
import MoveIt2 from './pages/Integration/MoveIt2';
import Nav2 from './pages/Integration/Nav2';
import './index.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/import" element={<ImportGuide />} />
        <Route path="/sensors/drive" element={<Drive />} />
        <Route path="/sensors/camera" element={<Camera />} />
        <Route path="/sensors/lidar" element={<Lidar />} />
        <Route path="/integration/moveit2" element={<MoveIt2 />} />
        <Route path="/integration/nav2" element={<Nav2 />} />
      </Routes>
    </Layout>
  );
}

export default App;
