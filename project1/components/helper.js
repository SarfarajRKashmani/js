const value=(id)=>{
    return document.getElementById(id).value
}
export default value

const createtag=(tagname,value)=>{
    let tag=document.createElement(tagname)
    tagname=="img" ? tag.src=value :tag.innerHTML=value
    return tag
}
export {createtag}