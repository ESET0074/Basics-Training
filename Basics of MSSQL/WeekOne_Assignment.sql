create database smart_meter_data
use smart_meter_data

create table Customers(CustomerId int primary key,
Name varchar(30), Address varchar(40), Region varchar(10))


create table SmartMeterReadings(MeterId int primary key, CustomerId int, Location varchar(20),
InstalledDate date, ReadingDateTime dateTime,
EnergyConsumed float, foreign key(CustomerId) references Customers(CustomerId))

insert into Customers values
(1,'Aniket','Siliguri','East'),
(2,'Rishav','Kolkata','North'),
(3,'Virat','Punjab','West'),
(4,'Chirag','Patna','North'),
(5,'Justin','Chennai','South');

select * from SmartMeterReadings

delete from SmartMeterReadings

insert into SmartMeterReadings values(101,1,'rooftop','2024-07-12','2024-08-10 10:00:00',5.5),
(102,2,'basement','2024-06-13','2024-08-10 09:52:00',11.2),
(103,3,'rooftop','2025-01-12','2025-08-10 07:00:00',25.0),
(104,4,'basement','2024-04-10','2024-08-10 08:00:00',32.0),
(105,5,'rooftop','2025-05-03','2025-08-10 11:00:00',51.0)

/*Task One*/

select MeterId, ReadingDateTime, EnergyConsumed from SmartMeterReadings
where EnergyConsumed>=10.0 and EnergyConsumed<=50.0 and InstalledDate<= '2024-06-30'

/*Task Two*/
select CustomerId, avg(EnergyConsumed) as AvgEnergyConsumed, max(EnergyConsumed) as MaxEnergyConsumed
from SmartMeterReadings where ReadingDateTime<='2025-12-31 23:59:59'
and ReadingDateTime>='2025-01-01 00:00:00' group by CustomerId

