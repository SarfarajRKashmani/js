let students=[]
const uimaker=()=>{
    document.getElementById("studentslist").innerHTML=""

    for (let i=0;i<students.length;i++){
        let p=document.createElement("p")
        p.innerHTML=students[i].name
        let c=document.createElement("p")
        c.innerHTML=students[i].course
        let d=document.createElement("p")
        d.innerHTML=students[i].grid
        documents.getElementById("studentslist").append9(p,c,d)
    }
}
const handledata=(e)=>{
    e.preventdefault();
    let data={
        name:document.getElementById("name").value,
        course:document.getElementById("course").value,
        grid:document.getElementById("grid").value
    }
    students.push(data)
    uimaker()
}
document.getElementById("studentData").addEventListener("submit",handledata)