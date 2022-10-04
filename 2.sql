SELECT m.customerId customerid, c.cname name, group_concat(s.subjectName) as subjects
from subject_student_mapping m
join customers c on m.customerId = c.customerId
join subjects s on m.subjectId = s.subjectId
group by m.customerId, c.cname;
