import {Component, OnInit} from '@angular/core';
import {Student} from "../../common/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.listStudents();
  }

  listStudents() {
    this.studentService.getStudentList().subscribe(
      data => {
        this.students = data;
      }
    )
  }
}
