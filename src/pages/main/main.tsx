import { Link } from 'react-router-dom';
//import styles from './main.module.css';

function Main(): JSX.Element {
  return (
    <>
      <h1>Главная страница всех портфолио</h1>
      <Link to="/cars">Cars</Link>;
    </>
  );
}

export default Main;
