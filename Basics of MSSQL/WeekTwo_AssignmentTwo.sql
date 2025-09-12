use DAYONE

/*Top 2 most expensive books purchased by each user*/

with ttable as(select names,title, row_number() over (partition by names order by price desc) as Row_No,
rank() over (partition by names order by price desc) as rank_no,
dense_rank() over (partition by names order by price desc) as dense_rank_no,
price  from orders o
inner join books b on o.product_id=b.product_id
inner join users u on o.user_id=u.user_id) select * from ttable where Row_No <2

/*Ranking user by total spending*/
with usertotals as (
    select
        u.names,
        sum(b.price) as total_price
    from orders o
    inner join books b on o.product_id = b.product_id
    inner join users u on o.user_id = u.user_id
    group by u.names
)
select
    names,
    total_price,
    row_number() over (order by total_price desc) as row_no,
    rank() over (order by total_price desc) as rank_no,
    dense_rank() over (order by total_price desc) as dense_rank_no
from usertotals
order by total_price desc;
 