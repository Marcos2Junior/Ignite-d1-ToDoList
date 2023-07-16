import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import styles from './App.module.css';

import './global.css';
import { Tasks } from './components/Tasks';
import { ITask } from './interfaces/ITask';
import { useState } from 'react';

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
