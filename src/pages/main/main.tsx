import { Link } from 'react-router-dom';
//mport styles from './main.module.css';

function Main(): JSX.Element {
  const styles = {
    background: "url('../public/img/обложка.png') no-repeat center, url('https://media.giphy.com/media/ZwMF9XIF7eo9i/giphy.gif') no-repeat center fixed",
    height: '100vh'
  };
  return (
    <div style={styles}>
      <h1>Главная страница всех портфолио</h1>
      <Link to="/cars">Cars</Link>;
    </div>
  );
}

export default Main;
