
import './App.css';
import './app.scss'
import styles from './Test.module.css'

function App() {
  return (
    <div className={styles.appContent}>
      <section className={styles.textColor}>
        world
        <article>purgecss</article>
      </section>
    </div>
  );
}

export default App;
