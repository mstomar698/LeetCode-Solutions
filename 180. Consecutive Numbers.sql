# Write your MySQL query statement below
with CTE as(
select num,
lead(num) over (order by id) as post,
lag(num) over (order by id) as pre
from Logs
)

select distinct(num) as ConsecutiveNums from CTE
where post = num and pre = num
;