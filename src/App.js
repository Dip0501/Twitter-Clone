import './App.css';
import Feed from './pages/Feed';
import Sidebar from './pages/Sidebar';
import Widgets from './pages/Widgets';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets/>
    </div>
  );
}

export default App;
