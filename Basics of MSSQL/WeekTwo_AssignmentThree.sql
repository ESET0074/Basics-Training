

select ID, Name from Contacts union select EmpID, Name from Employees

select getdate() as Today_Date

select upper(Name) as Names from Contacts
select len(Name) as Name_len from Employees

select substring('Aniket',2,3) as Aniket
select reverse(substring(Name,2,len(Name))) as rev from Employees
select * from Employees
select replace(EmpID, 1,10) from Employees



select concat(Name,' ',Department) from Employees

select cast(EmpID as float) from Employees

select convert(varchar(10), getdate(),103) as Date_DDMMYYYY

select ID, Name from Students2025 Union select ID,Name from Students2024
select ID, Name from Students2025 Union all select ID,Name from Students2024
select upper(Name) from Employees 
select lower(Name) from Employees
select EmpID, len(Name) as NameLength from Employees
select substring(Name,0,3) from Employees
select * from Employees
select Name, replace(Department, 'Finance', 'Accounts') from Employees
select concat(Name,'-',Department) as Info from Employees
select getdate()
select convert(varchar(10), getdate(),103) as Date_DDMMYYYY
select cast(123.456 as int) as Integer_value