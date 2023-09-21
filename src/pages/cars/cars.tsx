import { useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './cars.module.css';

type CarsProps = {
  cars: string[];
}

function Cars({ cars }: CarsProps): JSX.Element {
  const [activeCarIndex, setActiveCarIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveCarIndex(index);
  };

  return (
    <div className={styles.cars_container}>
      {cars.map((car, index) => (
        <div className={classNames("slide" , car.toLowerCase(), { active: index === activeCarIndex })} key={car} onClick={() => handleClick(index)}>
          <h3>{car}</h3>
        </div>
      ))}
      <ul>
        <li className={styles.cars_links}><Link to="/my-portfolio">домой</Link></li>
        <li className={styles.cars_links}><Link to="/">далее</Link></li>
      </ul>
    </div>
  );
}

export default Cars;
