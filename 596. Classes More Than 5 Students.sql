# Write your MySQL query statement below
WITH cte AS (SELECT class, COUNT(class) AS num FROM Courses GROUP BY class)
SELECT class 
FROM cte
WHERE num>=5; 