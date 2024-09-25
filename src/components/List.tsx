import { HeaderList } from "./HeaderList";
import styles from "./List.module.css";

interface Props {
    children: React.ReactNode;
    createdTasks: number;
    doneTasks: number;
}

export function List({ children, createdTasks, doneTasks }: Props) {
    return (
        <div className={styles.container}>
            <HeaderList
                createdTasks={createdTasks}
                doneTasks={doneTasks}
            />
            <div className={styles.wrap}>
                {children}
            </div>
        </div>
    )
}