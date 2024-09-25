import styles from './Task.module.css';
import { ITask } from '../App';

import { Check, Trash } from '@phosphor-icons/react';

interface Props {
    data: ITask;
    removeTask: (id: number) => void;
    toggleTaskStatus: ({ id, value }: { id: number, value: boolean }) => void;
}

export default function Task({ data, removeTask, toggleTaskStatus }: Props) {

    function handleTaskToggle() {
        toggleTaskStatus({ id: data.id, value: !data.isChecked });
    }

    function handleRemove() {
        removeTask(data.id);
    }

    const checkboxCheckedClassname = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked'];
    const paragraphCheckedClassname = data.isChecked ? styles['paragraph-checked'] : '';

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={true} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        <Check size={12} />
                    </span>

                </label>
            </div>

            <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                {data.text}
            </p>

            <button onClick={handleRemove}>
                <Trash size={24} color="#808080" />
            </button>
        </div>
    )
}