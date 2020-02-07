const Employee =  require('../models/employee');
const employeeCtrl = {};



employeeCtrl.getEmployees = async ( req , res ) =>{
    const employees = await Employee.find();//aqui conecta la base de datos con el esquema ya creado
    res.json(employees);
}
employeeCtrl.createEmployee = async (req , res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    console.log(employee);
    res.json({
        'status':'Empleado guardado'

    });

}
employeeCtrl.getEmployee = async (req , res) => {
    const  employee = await Employee.findById(req.params.id);
    res.json(employee);
}
employeeCtrl.editEmployee = async (req,res) => {
    const {id} =req.param;
    const employee = {
        name:req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpadte(_id,{$set:employee},{new:true});
    res.json({status:'Employee Updated'});
}
employeeCtrl.deleteEmployee = async (req,res) => {
    await  Employee.findByIdAndRemove(req.param.id);
    res.json({status:'Employee Deleted'});

};
module.exports = employeeCtrl;
