1. All users whose gender is male
Query : db.sahilDB('student').find({ gender: 'Male'});

<!-- END -->

2. all users whose ID is even
Query: db.student.find({"id" : {$mod : [2,0]}})

<!-- END -->

3. Users who currently live in Japan
Query: db.student.find({city:"Japan})

<!-- END -->

4. Users who are female and live in India
Query: db.student.find({$and : [{native : "India"}, {gender : "Female"}]})

<!-- END -->

5. Users who are more than 25 years old
Query: db.student.find({age:{$gt:25}})

<!-- END -->

6. Users who are less than 50 years old and live in United State
Query: db.student.find({$and :[{age:{$lt:50}},{native:"United States"}]})


<!-- END -->

7. Total number of users who want to relocate to France (count only)
Query: db.student.find({relocate_to:"France"}).count()
Results: 9

<!-- END -->

8. Total number of users who are from USA and want to relocate to Russia, sort them by age in ascending order
Query: db.student.find({$and :[{relocate_to:"Russia"},{native:"United States"}]}).sort({"age:1})

<!-- END -->

9. get all users, sort them by total number of family member ASC and age DESC order
Query: db.student.find().sort({"age":-1},{"family_members":1})

<!-- END -->