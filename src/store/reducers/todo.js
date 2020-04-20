import { NEW_TASK, DELETE_TASK, DONE_TASK } from '../../constants';
import { load } from 'redux-localstorage-simple';

let Todo = load({ namespace: 'task-list' });

if (!Todo || !Todo.tasks || !Todo.tasks.length) {
  Todo = {
    tasks: [],
  }
}

const todo = (state = Todo.tasks, { id, text, isCompleted, type }) => {
  switch (type) {
    case NEW_TASK :
      console.log(text)
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];
    case DELETE_TASK:
        return [...state].filter(task => task.id !== id);
      case DONE_TASK:
          return [...state].map(task => {
            if(task.id === id) {
              task.isCompleted = !task.isCompleted;
            }
            return task;
          });
    default:
      return state;
  }
}

export default todo;
