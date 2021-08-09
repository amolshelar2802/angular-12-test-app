import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { Department } from '../../interfaces/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  department : Department= {};

  public departmentId = 0;
  constructor(private _route : ActivatedRoute, private _departmentService: DepartmentService, private _router: Router) { }

  ngOnInit(): void {

    //1st option    
    // const deptID = this._route.snapshot.paramMap.get('id') || "0";
    // this.departmentId = deptID !== null ? parseInt(deptID) : 0;
    
    //2nd option
    // let id: number = parseFloat(this._route.snapshot.paramMap.get('id')!);
    // this.departmentId = id;

    this._route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
    });

    this._departmentService.getDepartments()
    .subscribe(data => this.department = data.find(m => m.id == this.departmentId)!);
    
  }

  
  goToPrevious()
  {
    let previousId = this.departmentId - 1;
    this._router.navigate(['/departments', previousId]);

  }

  goToNext()
  {
    let nextId = this.departmentId + 1;
    this._router.navigate(['/departments', nextId]);
  }

  goToBack()
  {
    this._router.navigate(['/departments', {id: this.departmentId, deptname: this.department.name}]);
  }

  goToOverview()
  {
    this._router.navigate(['overview'], { relativeTo: this._route });
  }

  goToContact()
  {
    this._router.navigate(['contact'], { relativeTo: this._route });
  }


}
