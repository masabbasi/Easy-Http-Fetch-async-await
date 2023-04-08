let http = new EasyHTTP();

//Get All Users
http.get("https://jsonplaceholder.typicode.com/users")
.then(users=>console.log(users))
.catch(err=>console.log(err));

//Get Single User
http.get("https://jsonplaceholder.typicode.com/users/5")
.then(user=>console.log(user))
.catch(err=>console.log(err));

//Add User
let user = {name:"Masoud Abbasi",username:"My20",email:"masoud.abbasi.71@gmail.com"}
http.post("https://jsonplaceholder.typicode.com/users",user)
.then(user=>console.log(user))
.catch(err=>console.log(err));

//Update User
http.put("https://jsonplaceholder.typicode.com/users/5",user)
.then(user=>console.log(user))
.catch(err=>console.log(err));

//Delete User
http.delete("https://jsonplaceholder.typicode.com/users/5")
.then(response=>console.log(response))
.catch(err=>console.log(err));