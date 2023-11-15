window.onload = function ()
{
    const p1 = document.getElementById("p1");
    if(p1 != null)
    {
        console.log("A");
        p1.addEventListener("mouseover", function (e) {
            console.log("Bonjour " + p1.innerText);
        });
    }

    let p2 = document.getElementById('p2');
    if(p2 != null)
    {
        p2.addEventListener('mouseover', function (e) {
            console.log("Bonjour " + p2.innerText);
        });
    }

    let p3 = document.getElementById('p3');
    if(p3 != null)
    {
        p3.addEventListener('mouseover', function (e) {
            console.log("Bonjour " + p3.innerText);
        });
    }

    let p4 = document.getElementById('p4');
    if(p4 != null)
    {
        p4.addEventListener('mouseover', function (e) {
            console.log("Bonjour " + p4.innerText);
        });
    }

    let p5 = document.getElementById('p5');
    if(p5 != null)
    {
        p5.addEventListener('mouseover', function (e) {
            console.log("Bonjour " + p5.innerText);
        });
    }
}