-- Identify event values appearing at least
-- three times in consecutive records.

SELECT DISTINCT
    first_log.num AS ConsecutiveNums

FROM Logs AS first_log

JOIN Logs AS second_log
    ON second_log.id = first_log.id + 1

JOIN Logs AS third_log
    ON third_log.id = first_log.id + 2

WHERE first_log.num = second_log.num
  AND second_log.num = third_log.num;
