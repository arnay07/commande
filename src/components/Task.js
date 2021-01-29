import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task