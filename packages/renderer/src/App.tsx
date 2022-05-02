import './App.css';
import useAppRoutes from './router';

function App() {
  const AppRoutes = useAppRoutes();

  return <div className="App">{AppRoutes}</div>;
}

export default App;
