import { buildRequest } from './helpers/apiRequest';
import ICreateTask from '../components/taskArea/interfaces/ICreateTask';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
  postNewTask(newTodo: ICreateTask) {
    return buildRequest<ICreateTask>(`${BASE_URL}/tasks`, 'POST', newTodo);
  },
};
