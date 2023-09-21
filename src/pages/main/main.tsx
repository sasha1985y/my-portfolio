import { Link } from 'react-router-dom';

function Main(): JSX.Element {
  return (
    <>
      <h1>Главная страница всех портфолио</h1>
      <Link to="/cars">Cars</Link>;
    </>
  );
}

export default Main;
