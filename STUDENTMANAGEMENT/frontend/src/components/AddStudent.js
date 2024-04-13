import React,{useState} from "react"
 import axios from "axios";

export default function AddStudent(){

    const [name,SetName]=useState("");
    const [age,SetAge]=useState("");
    const [gender,SetGender]=useState("");

    function sendData(e){
      e.preventDefault();
      // alert("insert");
      const newStudent={
        name,
        age,
        gender
      }
      //  console.log(newStudent);
      axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
        alert("student added")
        SetName("");
        SetAge("");
        SetGender("");
      }).catch(err=>{
        alert(err)
      })
    }
    return(
      <div className="container">
         <form onSubmit={sendData}>
              <div class="form-group">
                <label for="name">Student Name </label>
                <input type="text" className="form-control" id="name"  placeholder="Enter student name"
                onChange={(e)=>{SetName(e.target.value);
                }}/>
                
              </div>
              <div class="form-group">
                <label for="age">Age</label>
                <input type="text" className="form-control" id="age" placeholder="Enter student age"
                onChange={(e)=>{SetAge(e.target.value);
                }}/>
              </div>
              <div class="form-group">
              <label for="gender">Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Enter student gender"
                onChange={(e)=>{SetGender(e.target.value);
                }}/>
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
         </form>

      </div>

    )
}