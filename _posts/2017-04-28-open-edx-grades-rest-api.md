---
title: Open edX Grades REST API
author: ariestiyansyah
layout: post
comments: true
categories:
- edX
tags:
- Open edX
- REST API
- Grades
- OpenedX

description: Open edX Grades API and Open edX Grading Policy API
---

```
Disclaimer: Open edX Grades API is under development, it's available only on Ficus release.
```
User Grades API support the following resources, tasks, methods, and endpoints

## User Grades API Resource


| Task	| Method | Endpoint |
|------------|------------|--------------|
| Get user grade information | GET | /api/grades/v0/course_grade/{course_id}/users/?username={username} |

The endpoint to get the details for a course is 
```
api/grades/v0/course_grade/{course_id}/users/?username={username}
```

**Use Case**

- Get the current course grades for users in a course.
Currently, getting the grade for only an individual user is supported.

**Example Request**

```
GET /api/grades/v0/course_grade/{course_id}/users/?username={username}
```


**GET Parameters**

A GET request must include the following parameters.

- course_id: A string representation of a Course ID.
- username: A string representation of a user's username.


**GET Response Values**

If the request for information about the course grade is successful, an HTTP 200 "OK" response is returned.
The HTTP 200 response has the following values.

- username: A string representation of a user's username passed in the request.
- course_id: A string representation of a Course ID.
-  passed: Boolean representing whether the course has been passed according the course's grading policy.
- percent: A float representing the overall grade for the course
- letter_grade: A letter grade as defined in grading_policy (e.g. 'A' 'B' 'C' for 6.002x) or None

**Example GET Response**

```
[{
    "username": "bob",
    "course_key": "edX/DemoX/Demo_Course",
    "passed": false,
    "percent": 0.03,
    "letter_grade": None,
}]
```

## Grades Policy API Resource

| Task | Method | Endoint |
|-------|-------------|------------|
| Get course grading policy | GET | /api/grades/v0/policy/{course_id}/ |

**Use Case**

- Get the course grading policy.

**Example requests**:

```
GET /api/grades/v0/policy/{course_id}/
```

**Response Values**

- assignment_type: The type of the assignment, as configured by course
 staff. For example, course staff might make the assignment types Homework, Quiz, and Exam.
- count: The number of assignments of the type.
- dropped: Number of assignments of the type that are dropped.
- weight: The weight, or effect, of the assignment type on the learner's final grade.


