import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello',(req,res)=> {
    res.write("hello response from express server");
    res.end();
    
});

// app.get('/users',(req,res)=> {
//     res.write("get users from server");
//     res.end();
    
// });

app.get('/courses',(req,res)=> {
    let courses = ['React','node','angular'];
    //res.write(courses);
    res.send(courses);
    
});

app.get('/prod',(req,res)=> {
    let products = {
        'id':"1",
        'name':"sandeep"
    };
    //res.write(courses);
    res.send(products);
    
});

app.get('/users/:id',(req,res)=>{
    res.send('Good Evening !! '+ req.params.id)
})

app.get('/courses/byid',(req,res)=>{
    const query = req.query.id;
    res.send('Good Evening User, you are enrolled in Angular with courseid as  - '+ query);
})

app.post('/loginuser',(req,res)=>{
    const query = req;
    res.send('successfully created'+ req.body.user);
    res.json(req.body.user);
})


const port = '3400';

app.listen(port,()=>{console.log(`server is running on port number ${port}`)});