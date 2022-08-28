import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';
import { TasksComponent } from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
