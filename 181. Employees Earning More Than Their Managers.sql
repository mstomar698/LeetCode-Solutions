# Write your MySQL query statement below
select name as Employee from Employee
where Employee.salary > (select AA.salary from Employee AA where AA.id = Employee.managerId) and Employee.managerId is not null