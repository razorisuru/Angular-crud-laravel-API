import { Component } from '@angular/core';
import {
  StudentResponse,
  StudentService,
} from '../../Services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  constructor(private studentService: StudentService) {}

  students!: StudentResponse[];
  isLoading: boolean = false;

  ngOnInit() {
    this.getStudentLists();
  }

  getStudentLists() {
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res) => {
      console.log(res.student);
      this.students = res.student;
      this.isLoading = false;
    });
  }

  deleteStudent(event: any, studentId: Number) {
    if (confirm('Are you sure ?')) {
      event.target.innerText = 'Deleting...';

      this.studentService.destroyStudent(studentId).subscribe((res: any) => {
        this.getStudentLists();
        alert(res.message);
      });
    }
  }
}
