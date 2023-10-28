import css from './Statistics.module.css';

function getRandomHexColor() {
    let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return bgColor;
  }

  export const Statistics = ({ title, stats }) => (
    
      <section className = {css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
  
        <ul  className={css.statList}>
          {stats.map(stat => (
            <li
            className={title ? css.statListItem : css.statListItemNoTitle }
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>

    
  );