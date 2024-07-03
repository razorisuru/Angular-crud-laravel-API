import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../Services/student.service';
import { fromReadableStreamLike } from 'rxjs/internal/observable/innerFrom';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css',
})
export class StudentEditComponent {
  student!: any;
  studentId: any;

  isLoading: boolean = false;
  loadingTitle: string = 'Loading';
  errors: any = [];

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.isLoading = true;
    this.studentService.getStudent(this.studentId).subscribe((res: any) => {
      console.log(res);
      this.student = res.student;
      this.isLoading = false;
    });
  }

  updateStudent() {
    var inputData = {
      name: this.student.name,
      email: this.student.email,
      phone: this.student.phone,
    };

    this.isLoading = true;

    this.studentService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);
        this.isLoading = false;
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.message;
        this.isLoading = false;
      },
    });
  }
}
