import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';
import { Tasks } from './components/Tasks';
import { ITask } from './interfaces/ITask';

const tasks : ITask[] = [
  {
    id:1,
    task: "my first task 🎯",
    created: new Date()
  }
]

export function App() {

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Tasks tasks={tasks} />
      </main>
    </div>
  );
}
