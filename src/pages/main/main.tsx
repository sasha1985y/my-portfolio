import { Link } from 'react-router-dom';
import styles from './main.module.css';

function Main(): JSX.Element {
  return (
    <div className={styles.main_body_container}>
      <h1>Главная страница всех портфолио</h1>
      <Link to="/cars">Cars</Link>;
    </div>
  );
}

export default Main;
