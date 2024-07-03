import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface StudentResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface StudentResponseType {
  status: Number;
  student: StudentResponse[];
}

export interface StudentEditResponse {
  status: number;
  student: StudentResponse;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpclient: HttpClient) {}

  getStudents() {
    return this.httpclient.get<StudentResponseType>(
      `http://127.0.0.1:8000/api/student`
    );
  }

  getStudent(studentId: number) {
    return this.httpclient.get<StudentEditResponse>(
      `http://127.0.0.1:8000/api/student/show/${studentId}`
    );
  }

  saveStudent(inputData: object) {
    return this.httpclient.post(`http://127.0.0.1:8000/api/student`, inputData);
  }

  updateStudent(inputData: object, studentId: number) {
    return this.httpclient.put(
      `http://127.0.0.1:8000/api/student/edit/${studentId}`,
      inputData
    );
  }

  destroyStudent(studentId: Number) {
    return this.httpclient.delete(
      `http://127.0.0.1:8000/api/student/del/${studentId}`
    );
  }
}
