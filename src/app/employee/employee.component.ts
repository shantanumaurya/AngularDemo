import {Component} from "@angular/core"
@Component({
    selector: "employee",
    templateUrl: "./employee.component.html",
    styles: ["table,tr,td {border:1px solid #000}"]
})
export class EmployeeComponent {
    empname: string = 'Shantanu';
    empdob: string = '01/07/1993';
    empgender: string = 'MALE';
    empage: string = '24';
    colspan: number = 2;
    applyClass = "danger";
    applyBold = false;
}

