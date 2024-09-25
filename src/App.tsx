import { useState } from 'react'
import { PlusCircle } from '@phosphor-icons/react'

import styles from './App.module.css';

import { Input } from './components/Input'
import { Button } from './components/Button'
import Task from './components/Task'
import { List } from './components/List';

import logotipo from './assets/logo.svg';

export interface ITask {
  id: number,
  text: string,
  isChecked: boolean
}

function App() {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [task, setTask] = useState('');


  function handleAddTask() {
    if (!task) {
      return;
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: task,
      isChecked: false
    }

    setTasks((prevState) => [...prevState, newTask]);
    setTask('');

  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleStatus({ id, value }: { id: number, value: boolean }): void {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    })

    setTasks(updatedTask);
  }

  const completedTasks = tasks.filter(task => task.isChecked).length;


  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <img src={logotipo} />

        <div className={styles.insertTask}>
          <Input
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>

        </div>
        <div className={styles.tasks}>
          <List
            createdTasks={tasks.length}
            doneTasks={completedTasks}
          >
            {
              tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleStatus}
                />
              ))
            }
          </List>
        </div>
      </div>
    </div >
  )
}

export default App
