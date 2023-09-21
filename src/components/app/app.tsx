import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const.ts';
import Main from '../../pages/main/main.tsx';
import Cars from '../../pages/cars/cars.tsx';

type AppProps = {
  cars: string[];
}

function App({cars}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <Main />
            }
          />
          <Route
            path={AppRoute.Cars}
            element={
              <Cars
                cars={cars}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
