import express from "express"
import path from "path"
// import student from "./routes/student.js"
// import teacher from "./routes/teacher.js"
// import users from "./routes/users.js"
// import products from "./products.js"
import route from "./routes/route.js"


const app = express();

// HTTP MODULES
// GET = RETRIVE DATA
// POST = CREATE INSERT DATA
// PUT = COMPLETELY UPDATE DATA
// PATCH = PARTIALLY UPDATE DATA
// DELETE = DELETE DATA
// ALL = ANY HTTP REQUEST METHOD

// app.get("/",(req,res)=>{
//     res.send("<h1>Welcome to Home Page</h1>")
// })

// app.get("/about",(req,res)=>{
//     res.send("<h1>Welcome to About Page</h1>")
// })

// app.get("/contact",(req,res)=>{
//     res.send("<h1>Welcome to Contact Page</h1>")
// })


// 1.String pattern path
// app.get("/ab?cd",(req,res)=>{
//     res.send("This will run if user hit acd or abcd")
// })

// 2.Regex
// app.get(/x/,(req,res)=>{
//     res.send(`This will run if the url has" x "in it`)
// })
// users/1243 
// app.get(/^\/users\/[0-9]{4}$/,(req,res)=>{
//     res.send(`This will run if the url has" x "in it`)
// })


// 3.Advance REQ RES 
// A.NEXT
// app.get("/first-cb", (req, res,next) => {
//     console.log("First Callback")
//     next();
// }, (req, res) => {
//     res.send("Second Callback")
// })

// const cb1 = (req,res,next)=>{
//     console.log("First Callback");
//     next();
// }

// const cb2 = (req,res,next)=>{
//     console.log("Second Callback");
//     next();
// }

// const cb3 = (req,res)=>{
//     console.log("Third Callback");
//     res.send("Third Callback")
// }

// app.get("/",[cb1,cb2,cb3])

// 4.Postman 
// app.get("/student",(req,res)=>{
//     res.send("Get Student")
// })
// app.post("/student",(req,res)=>{
//     res.send("Add New Student")
// })
// app.put("/student",(req,res)=>{
//     res.send("Update Student")
// })
// app.delete("/student",(req,res)=>{
//     res.send("Delete Student")
// })

// The above four major lines in 5 lines through route
// Refractor
// app
// .route("/student")
// .get((req,res)=>res.send("Get Student"))
// .post((req,res)=>res.send("Add new Student"))
// .put((req,res)=>res.send("Update Student"))
// .delete((req,res)=>res.send("Delete Student"))


// 5.Routing :-
// 5.1 Create router folder and many router files in it
// 5.2 Create instance of express.router()
// 5.3 Instead of app.method use router.method
// 5.4 Export Router
// 5.5 Import Router
// 5.6 Use app.use built in middleware and provide your routes

// app.use("/students",student)
// app.use("/teachers",teacher)


// 6.Route Params
// app.get("/ecom/products/iphone/:id",(req,res)=>{
//     const {id} = req.params;
//     res.send("Your Iphone is : "+id +" Pro Max");
// })
// app.get("/ecom/:categories/:id",(req,res)=>{
//     const {categories,id} = req.params;
//     res.send(`Your Category is (${categories}) and product id is (${id})`)
// })

// 7.App Params
// app.param("id", (req, res, next, id) => {
//     console.log(`id : ${id}`)
//     next()
// })
// app.get("/ecom/:id", (req, res) => {
//     res.send("Response Ok")
// })

// 8.Controllers
// app.use("/users", users)

// 9.Query Strings in Depth
// app.get("/products",(req,res)=>{
//     const {category,id} = req.query;
//     res.send(`Your Product Category : ${category} and Product Id : ${id}`);
// })

// 10.Parsing data from Json
// app.get("/products",(req,res)=>{
//     res.json(products);
// })

// 11.Middleware
//user request
//middleware authenticate request 
//response 

// function middleware(req,res,next){
//     console.log("Username :- Alex")
//     console.log("Password :- Alex1703")
//     next();
// }
// app.use(middleware) //if we use this line then it is applicable for all gets
// app.get("/",middleware,(req,res)=>{
//     res.send("Hello Admin")
// })
// app.get("/about",middleware,(req,res)=>{
//     res.send("Hello Admin")
// })
// app.get("/contact",middleware,(req,res)=>{
//     res.send("Hello Admin")
// })

// 12.Serving Static files
// app.use(express.static("./public"));
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(process.cwd(),"./public/index.html"))
// })

// 13.Template Engine
//EJS
app.set("view engine","ejs")
app.use("/",route)

app.listen(8000, () => {
    console.log("Server Created...")
})
