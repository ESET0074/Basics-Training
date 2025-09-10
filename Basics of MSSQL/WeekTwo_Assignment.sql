use DAYONE
select * from books
select * from orders
select * from users

/*Task 1 displaying all book titles, users and orders*/

select title, names, order_no from orders o inner join books b on o.product_id = b.product_id
inner join users u on o.user_id=u.user_id

/*Task 2 displaying all orders*/

select title, count(order_no) as 'Number of Orders'  from orders o
inner join books b on o.product_id = b.product_id group by title

/*Task 3 Displaying who has ordered half-girlfriend and Black Magic Tutorial*/

select title, names from orders o inner join books b on o.product_id = b.product_id
inner join users u on o.user_id=u.user_id where title in('Half-Girlfriend','Black Magic Tutoral')

/*Task 4 Displaying who has ordered which book*/

select title, names from orders o inner join books b on o.product_id = b.product_id
inner join users u on o.user_id=u.user_id

/*Task 5 Displaying total price*/

select names, sum(price) as 'Total_Price' from orders o inner join books b on o.product_id = b.product_id
inner join users u on o.user_id=u.user_id group by names

/*Task 6 Displaying most valuable user*/

select top 1 names, sum(price) as 'Max_Price' from orders o inner join books b on o.product_id = b.product_id
inner join users u on o.user_id=u.user_id group by names order by Max_Price desc

/*Task 7 Displaying books from high to low*/

select title, price from books order by price desc

/*Task 8 Displaying most expensive book*/

select top 1 title, price from books order by price desc

/*Task 9 Displaying cheapest book*/

select top 1 title, price from books order by price asc

/*Task 10 Displaying books in from newest to oldest*/

select product_id, title from books order by product_id desc








