import { NEW_TASK, DELETE_TASK, DONE_TASK, SHOW_FILTER } from '../../constants';

export const newTask = (id, text, isCompleted) => ({
  type: NEW_TASK,
  id,
  text,
  isCompleted
});

export const removeTask = id => ({
  type: DELETE_TASK,
  id
});

export const completeTask = id => ({
  type: DONE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: SHOW_FILTER,
  activeFilter,
})
