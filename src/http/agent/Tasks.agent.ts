import { BasicAgent } from './Basic.agent';
import {
  GetAllTasksResponse,
  GetAllTasksQuery,
  GetTaskResponse,
  ChangeTaskResponse,
  ChangeTaskRequest,
  CreateTaskResponse,
  CreateTaskRequest,
} from 'http/model/index';

class TaskAgent extends BasicAgent {
  constructor() {
    super(process.env.APP_API as string);
  }

  async getAllTasks(params?: GetAllTasksQuery): Promise<GetAllTasksResponse> {
    const { data } = await this._http.get<GetAllTasksResponse>(`/tasks`, {
      params,
    });
    return data;
  }

  async getTask(taskId: string | null): Promise<GetTaskResponse> {
    const { data } = await this._http.get<GetTaskResponse>(`/tasks/${taskId}`);

    return data;
  }

  async updateTask(taskId: string, changedData: ChangeTaskRequest): Promise<ChangeTaskResponse> {
    const { data } = await this._http.patch<ChangeTaskResponse>(`/tasks/${taskId}`, changedData);

    return data;
  }

  async createTask(newData: CreateTaskRequest): Promise<CreateTaskResponse> {
    const { data } = await this._http.post<CreateTaskResponse>(`/tasфывks`, newData);
    return data;
  }

  async deleteTask(taskId: string): Promise<void> {
    await this._http.delete(`/tasks/${taskId}`);
  }
}

export const TaskAgentInstance = new TaskAgent();
