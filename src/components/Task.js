{/*import { FaTimes } from 'react-icons/fa'
add onDelete
 */}

const Task = ({ task, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text} {/*{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        /> */}
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task