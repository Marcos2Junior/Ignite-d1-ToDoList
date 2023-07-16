import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';

import './global.css';
import { Tasks } from './components/Tasks';

export function App() {
  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <NewTask />
        <Tasks />
      </main>
    </div>
  );
}
