import { Link } from 'react-router-dom';
import styles from './main.module.css';

function Main(): JSX.Element {
  return (
    <>
      <main className={styles.main_container}>
        <aside>
          <h1>Главная страница всех портфолио</h1>
          <Link to="/cars">Cars</Link>;
        </aside>
        <img src="../public/img/обложка.png" alt="обложка" style={{height: '100vh', display: 'block', margin: '0 auto', opacity: '1'}}></img>
      </main>
    </>
  );
}

export default Main;
