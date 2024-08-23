fetch("data.json")
.then((response) =>response.json())
.then((data) =>{
  console.log(data,selection);

  console.log(data.selection[0].h2);
  document.getElementById('title').innerHTML = data.section[0].h2;
  console.log(data.selection[0].p);
  document.getElementById('projec').innerHTML = data.section[0].p;
  console.log(data.selection[1].h2);
  document.getElementById('title1').innerHTML = data.section[1].h2;
  console.log(data.selection[1].p);
  document.getElementById('tech-proj').innerHTML = data.section[1].p;
  console.log(data.selection[2].h2);
  document.getElementById('thread').innerHTML = data.section[2].h2;
  console.log(data.selection[2].p);
  document.getElementById('threadbuild').innerHTML = data.section[2].p;

  fetch("data.json")
  .then((response) => response.json)
  .then((data) =>{
    console.log(data.selection[0].h2);
    document.querySelector(".title").innerHTML = data.selection[0].h2;
    console.log(data.selection[0].p);
    document.querySelector(".projec").innerHTML = data.selection[0].p;
    console.log(data.selection[1].h2);
    document.querySelector(".title1").innerHTML = data.selection[1].h2;
    console.log(data.selection[1].p);
    document.querySelector(".tech.proj").innerHTML = data.selection[1].p;
    console.log(data.selection[2].h2);
    document.querySelector(".thread").innerHTML = data.selection[2].h2;
    console.log(data.selection[2].p);
    document.querySelector(".threadbuild").innerHTML = data.selection[2].p;
    console.log(data.selection[3].h2);
    document.querySelector(".struct").innerHTML = data.selection[3].h2;
    console.log(data.selection[3].p);
    document.querySelector(".struct-descp").innerHTML = data.selection[3].p;
    console.log(data.selection[4].h2);
    document.querySelector(".4sa-method").innerHTML = data.selection[4].h2;
    console.log(data.selection[4].p);
    document.querySelector(".4sa-descp").innerHTML = data.selection[4].p;
    const iframe =(document.getElementById('vedio').src =
    data.selection[1].ylink);
    console.log(data.section[4].a);
    document.querySelector(".intro").innerHTML = data.selection[4].a;
  });

  const contentdiv = document.getElementById("content");
});
const contentdiv = document.getElementById("content");
