# Assignment 7: Identifying API for To-Do List App

## For making server
- use express
```
const express = require('express');

const app = express();
```
## routes

### 1. `/register` for sign-up the users
``` 
app.post('/register', (req, res) => )
```
- method-`post`
- sending email, name, and password
- generate a unique user-id for every user
- for generating user-id use random number genrator of 10 digit and make user-id like `name_number`
- input format
```
{
  "user_id": "mahadev_1234567890",
  "name": "Mahadev",
  "email": "rajmahadev422@gmail.com",
  "password": "user#123"
}
```

### 2. `/login` for login the user
```
app.post('/login', (req, res) => )
```
- `post`-method
- sending email and password
- we check it and send user-id
- input format
```
{
  "email": "rajmahadev422@gmail.com",
  "password": "user#123"
}
```

### 3. `/add-item` for adding item in todo list
```
app.post('/add-item', (req, res) => )
```
- `post`-method
- sending todo title, date, time etc. and the **user-id**
- add the todo item in the given user todo list
- generate unique id for every todo item
- set default status as pending
- item -> `todo_date_4digit`
- input format
```
{
  "todo_id": "todo_06_10_2025_1234",
  "title": "making assignment-7",
  "date": "06-10-2025",
  "time": "19:20"
}
```

### 4. `/get-item/{user-id}` for sending user todo-item list
```
app.get('/get-items/{user-id}', (req, res) => )
```
- `get`-method
- sending all the todo list item
- output format
```
[
  {
  "todo_id": "todo_06_10_2025_1234",
  "title": "making assignment-7",
  "date": "06-10-2025",
  "time": "19:20"
}
]
```

### 5. `/delete-item` for deleting item from todo list
```
app.delete('/delete-item', (req, res) => )
```
- `delete`-method
- sending item-id and user-id
- input format
```
{
  "user_id": "mahadev_1234567890",
  "item_id": "todo_06_10_2025_1234"
}
```

### 6. `/update-item` for updating any field of todo item
```
app.put('/update-item', (req, res) => )
```
- `put`-method
- sending user-id , item-id, field which want to change and their value
- input format
```
{
  "user_id": "mahadev_1234567890"
  "item_id": "todo_06_10_1234",
  "field: "title",
  "value": "assignment-8"
}
```

### 7. `/update-status`
```
app.put('update-status', (req, res) => )
```
- `put`-method
- sending user-id and item-id
- change the status from pending **complete**
- input format
```
{
  "user_id": "mahadev_1234567890",
  "item_id": "todo_06_10_2025_1234"
}
```

## How APIs work
User first register himself and then login, we sent user-id.\
User request for todo item , but there is no any item in the list, so we sent an empty array of list.\
Then user add any todo item in the todo list by `/add-item`.\
After completing the work , user update the status to complete by `/update-status`.

