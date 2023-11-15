let p1 = document.getElementById("p1");
let name = p1.textContent;
p1.addEventListener('mouseover', (e)=>(
    console.log("Bonjour "+name)
))

let p2 = document.getElementById("p2");
name = p2.textContent;
p2.addEventListener('mouseover', (e)=>(
    console.log("Bonjour " + name)
))

let p3 = document.getElementById("p3");
name = p3.textContent;
p3.addEventListener('mouseover', (e)=>(
    console.log("Bonjour" + name)
))

let p4 = document.getElementById("p4");
name = p4.textContent;
p4.addEventListener('mouseover', (e)=>(
    console.log("Bonjour " + name)
))