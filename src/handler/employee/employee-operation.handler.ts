import { EmployeeDto } from "../../dto/employee.dto";
import { IEmployee } from "../../model/employee.model";
import EmployeeAddRepo from "../../repo/employee/employee-add.repo";

class EmployeeOperationHandler {
    private static EmployeeOperationHandler: EmployeeOperationHandler;
    private EmployeeAddRepo:EmployeeAddRepo = EmployeeAddRepo.getRepoInstance();

    private constructor() {
    }
    public static getHandlerInstance() {
        if (!this.EmployeeOperationHandler) {
            this.EmployeeOperationHandler = new EmployeeOperationHandler();
            return this.EmployeeOperationHandler;
        }
        return this.EmployeeOperationHandler;
    }
    public async add(employeeDto:EmployeeDto){
        var employee: IEmployee = {name: employeeDto.name,age: employeeDto.age,address: employeeDto.address,    };
        return await this.EmployeeAddRepo.Add(employee);
    }
}

export default EmployeeOperationHandler;
