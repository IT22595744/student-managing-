const router=require("express").Router();

let Student=require("../modules/student");



router.route("/add").post((req,res)=>{

    const name=req.body.name;
    const age=Number(req.body.age);
    const gender=req.body.gender;

    const newStudent=new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("student Added")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req,res)=>{
    let userID=req.params.id;
    
    const{name,age,gender}=req.body;

    const updatestudent={
        name,
        age,
        gender
    }
    const update=await Student.findByIdAndUpdate(userID,updatestudent).then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userID=req.params.id;

    await Student.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status:"user deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userID=req.params.id;
    const user=await Student.findById(userID).then((student)=>{
        res.status(200).send({status:"user fetched",student})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user",error:err.message});
    })
})
module.exports=router;
