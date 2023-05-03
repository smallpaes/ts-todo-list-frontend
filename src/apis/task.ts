import { buildRequest } from './helpers/apiRequest';
import ICreateTask from '../components/taskArea/interfaces/ICreateTask';
import ITaskResponse from '../components/taskArea/interfaces/ITaskResponse';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default {
  postNewTask(newTodo: ICreateTask) {
    return buildRequest<ITaskResponse>(`${BASE_URL}/tasks`, 'POST', newTodo);
  },
  getTasks() {
    return buildRequest<ITaskResponse[]>(`${BASE_URL}/tasks`, 'GET');
  },
};
