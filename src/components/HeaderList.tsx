import styles from './HeaderList.module.css';

interface Props {
    createdTasks: number;
    doneTasks: number;
}

export function HeaderList({ createdTasks, doneTasks }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.createdTasks}>
                <p>Tarefas criadas</p>
                <span>{createdTasks}</span>
            </div>
            <div className={styles.doneTasks}>
                <p>Concluídas</p>
                <span>{`${doneTasks} de ${createdTasks}`}</span>
            </div>
        </div>
    )
}