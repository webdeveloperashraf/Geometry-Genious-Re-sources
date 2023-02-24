let serial = 0;
       // First Card Triangle Area Operations
document.getElementById("first-button").addEventListener("click", function () {
    serial += 1;
    const firstName = document.getElementById("first-title").innerText;
    const triangleAreas= document.getElementById("triangle-areas").innerText;
    const triangleBase = document.getElementById("first-input").value;
    const triangleHeight = document.getElementById("second-input").value;

    if (
      triangleBase == "" ||
      triangleHeight == "" ||
      triangleBase <= 0 ||
      triangleHeight <= 0
    ) {
      return alert("please enter any valid number");
    }
    const totalTriangleArea = triangleAreas*triangleBase *triangleHeight;

const totalTriangleAreaCm = totalTriangleArea + " cm²";
const container1=document.getElementById('table-container');
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${1}</td>
<td>${firstName}</td>
 <td>${totalTriangleAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container1.appendChild(tr);

  });


      // Second Card Rectangle Area Operations
document.getElementById("second-button").addEventListener("click", function () {
    serial += 1;
    const secondName = document.getElementById("second-title").innerText;
    const rectangleWeight = document.getElementById("rectangle-input").value;
    const rectangleLength = document.getElementById("rectangle-second-input").value;

    if (
      rectangleWeight == "" ||
      rectangleLength == "" ||
      rectangleWeight <= 0 ||
      rectangleLength <= 0
    ) {
      return alert("please enter any valid number");
    }
    const totalRectangleArea = rectangleWeight*rectangleLength;
const totalRectangleAreaCm = totalRectangleArea + " cm²";

const container2=document.getElementById('table-container');
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${2}</td>
<td>${secondName}</td>
 <td>${totalRectangleAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container2.appendChild(tr);

  });

// Third Card Parallalogram Area Operations
document.getElementById('third-button') 
.addEventListener("click", function () {
const thirdName=document.getElementById("third-title").innerText;
const parallalogramBase= document.getElementById("p-base").innerText;
const parallalogramHeight= document.getElementById("p-height").innerText;
console.log(thirdName, parallalogramBase, parallalogramHeight)

const totalParallalogramArea= parallalogramBase*parallalogramHeight;
const totalParallalogramAreaCm = totalParallalogramArea + " cm²";

const container3=document.getElementsByClassName('getTableData')[0];
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${3}</td>
<td>${thirdName}</td>
 <td>${totalParallalogramAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container3.appendChild(tr);
});

// Fourth Card Rhombus Area Operations
document.getElementById('fourth-button') 
.addEventListener("click", function () {
const fourthName=document.getElementById("fourth-title").innerText;
const rhombusAreas= document.getElementById("r-areas").innerText;
const rhombusDiagonal1= document.getElementById("r-diagonal1").innerText;
const rhombusDiagonal2= document.getElementById("r-diagonal2").innerText;
console.log(fourthName, rhombusAreas, rhombusDiagonal1, rhombusDiagonal2)

const totalRhombusArea= rhombusAreas*rhombusDiagonal1*rhombusDiagonal2;
const totalRhombusAreaCm = totalRhombusArea + " cm²";

const container4=document.getElementsByClassName('table-body')[0];
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${4}</td>
<td>${fourthName}</td>
 <td>${totalRhombusAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container4.appendChild(tr);
});

// Fifth Card Pentagon Area Operations
document.getElementById('fifth-button') 
.addEventListener("click", function () {
const fifthName=document.getElementById("fifth-title").innerText;
const pentagonAreas= document.getElementById("pentagon-areas").innerText;
const pentagonPerimeter= document.getElementById("pentagon-perimeter").innerText;
const pentagonBaseApothem= document.getElementById("pentagon-base-apothem").innerText;
console.log(fifthName,pentagonAreas, pentagonPerimeter, pentagonBaseApothem);

const totalPentagonArea= pentagonAreas*pentagonPerimeter*pentagonBaseApothem;
const totalPentagonAreaCm = totalPentagonArea + " cm²";

const container5=document.getElementsByClassName('t-body')[0];
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${5}</td>
<td>${fifthName}</td>
 <td>${totalPentagonAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container5.appendChild(tr);
});

// Last Card Ellips Area Operations
document.getElementById('sixth-button') 
.addEventListener("click", function () {
const sixthName=document.getElementById("sixth-title").innerText;
const ellipsAreas= document.getElementById("ellips-areas").innerText;
const ellipsAxisA= document.getElementById("ellips-axis-a").innerText;
const ellipsAxisB= document.getElementById("ellips-axis-b").innerText;
console.log(sixthName,ellipsAreas, ellipsAxisA, ellipsAxisB)

const totalEllipsArea= ellipsAreas*ellipsAxisA*ellipsAxisB;
const totalEllipsAreaCm = totalEllipsArea + " cm²";

const container6=document.getElementsByClassName('table-data')[0];
const tr =document.createElement("tr");
tr.innerHTML=`
<td>${6}</td>
<td>${sixthName}</td>
 <td>${totalEllipsAreaCm}</td>
 <td><button class="btn btn-accent btn-sm lowercase">convert m²
 </button></td>

`;
container6.appendChild(tr);
});