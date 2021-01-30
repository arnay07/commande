import Task from './Task'
import classnames from 'classnames'


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return tasks.every((task) => task.reminder === true) ? (
        <>
            <div className={classnames('task', 'confirmation')}><h3>Préparation commande terminée</h3></div>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    ) : (
        <>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    );
}


export default Tasks
