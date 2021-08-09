import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../interfaces/department';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments:Department[] = [];
  public selectedDepartmentId = 0;
  public selectedDepartmentName = "";

  constructor(private _departmentService: DepartmentService, 
    private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this._departmentService.getDepartments()
    .subscribe(data => this.departments = data);

    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedDepartmentId = id;
    });

    
    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let name = params.get('deptname')!;
      this.selectedDepartmentName = name;
    });

  }

  onSelect(dept: Department)
  {
    this._router.navigate(['/departments', dept.id]);
  }

  onSelected(dept: Department)
  {
    return this.selectedDepartmentId === dept.id;
    //return true;
  }

  onSelectedITHardware(dept: Department)
  {
    return dept.name === "IT-Hardware" && this.selectedDepartmentId === dept.id;
    //return true;
  }

}
