//window.alert("Hello Js")
function clock(){
    let date= new Date();
    console.log(date);
    let i=date.toLocaleTimeString('en-US',{
        timeZone:'Asia/Kolkata',
    })

    let c=date.toLocaleTimeString('en-US',{
        timeZone:'Asia/Shanghai',
    })
    let a=date.toLocaleTimeString('en-US',{
        timeZone:'America/Los_Angeles',
    })
    console.log(i);
    console.log(c);
    console.log(a);
    document.getElementById('ind').innerHTML=i;
    document.getElementById('chi').innerHTML=c;
    document.getElementById('ame').innerHTML=a;
}
clock();
setInterval(clock,1000);