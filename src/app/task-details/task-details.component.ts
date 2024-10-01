import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) { }

  task?: Task;

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    }

    this.task = this.taskService.getById(+id!);

    if (this.task === undefined) {
      this.navigateBack();
    }
  }

  save() {
    this.taskService.saveToLocalStorage();

    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/task-list'], { relativeTo: this.route });
  }

}
