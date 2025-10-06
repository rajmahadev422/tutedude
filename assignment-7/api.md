# Assignment 7: Identifying API for To-Do List App

## For making server
- use express
```
const express = require('express);

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

### 2. `/login` for login the user
```
app.post('/login', (req, res) => )
```
- `post`-method
- sending email and password
- we check it and send user-id

### 3. `/get-item/{user-id}` for sending user todo-item list
```
app.get('/get-item/{user-id}', (req, res) => )
```
- `get`-method
- sending all the todo list item

### 4. `/add-item` for adding item in todo list
```
app.post('/add-item', (req, res) => )
```
- `post`-method
- sending todo title, date, time etc. and the **user-id**
- add the todo item in the given user todo list
- generate unique id for every todo item
- set default status as pending
- item -> `todo_2025_4digit`

### 5. `/delete-item` for deleting item from todo list
```
app.delete('/delete-item', (req, res) => )
```
- `delete`-method
- sending item-id and user-id

### 6. `/update-item` for updating any field of todo item
```
app.put('/update-item', (req, res) => )
```
- `put`-method
- sending user-id , item-id, field which want to change and their value

### 7. `/update-status`
```
app.put('update-status', (req, res) => )
```
- `put`-method
- sending user-id and item-id
- change the status from pending **complete**

## How APIs work
User first register himself and then login, we sent user-id.\
User request for todo item there is any item in the list, we sent empty array of list.\
Then user add any todo item in the todo list by `/add-item`.\
After completing the work , user update the status to complete by `/update-status`.

