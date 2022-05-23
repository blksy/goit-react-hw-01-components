import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const randomColor = () => {
  const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  return randomColor;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{
              backgroundColor: randomColor(),
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

Statistics.defaultProps = {
  title: '',
};

export default Statistics;
