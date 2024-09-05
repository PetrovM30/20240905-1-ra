const allatok = ['cica' , 'kutya' , 'malac' , 'csacsi', 'ló' , 'szamár']
function init() {
    document.getElementById("body").innerHTML = allatok.map(v =>
        <div onclick="f('$( v )')">$( v )</div>
    ).join("")
    
}
const f = a =>{
    console.log(a)
}