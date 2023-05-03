import { Header } from './components/Header/Header';
import { Home } from './routes/Home';

import './global.css';
import { SlideButton } from './components/SlideButton/SlideButton';

export function App(){
  return(
    <div className='app'>
      <Header />
      <Home />
      {/* <SlideButton /> */}
    </div>
  );
};