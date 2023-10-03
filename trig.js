//variables
const an = document.getElementById("ankatete");
const ge = document.getElementById("gegenkatete");
const hy = document.getElementById("hypotenuse");
const wi = document.getElementById("wi");
const wi2 = document.getElementById("wi2");
const calc = document.getElementById("calc");

calc.addEventListener("click", function(){
  if (wi.value === '' && hy.value === '') {
    let res1, res2;
    res1 = Math.atan(ge.value / an.value);
    res2 = (res1 * (180 / Math.PI)).toFixed(2); // Round to 2 decimal places
    wi.value = res2;
    hy.value = (Math.sqrt(ge.value * ge.value + an.value * an.value)).toFixed(2); // Round to 2 decimal places
    wi2.value = (90 - res2).toFixed(2); // Round to 2 decimal places
  } else if (an.value === '' && hy.value === '') {
      let sin1, sin2;
      sin1 = Math.sin(wi.value  * (Math.PI / 180));
      sin2 = (ge.value / sin1).toFixed(2); // Round to 2 decimal places
      hy.value = sin2;
      an.value = (Math.sqrt(hy.value * hy.value - ge.value * ge.value)).toFixed(2); // Round to 2 decimal places
      wi2.value = (Math.round(90 - wi.value / 1000) * 1000).toFixed(2); // Round to 2 decimal places
  } else if (ge.value === '' && an.value === '') {
      let sin3, sin4;
      sin3 = Math.sin(wi.value * (180 / Math.PI));
      sin4 = (hy.value / sin3).toFixed(2); // Round to 2 decimal places
      ge.value = sin4;
      an.value = (Math.sqrt((hy.value * hy.value) - (ge.value * ge.value))).toFixed(2); // Round to 2 decimal places
      wi2.value = (Math.round(90 - wi.value / 1000) * 1000).toFixed(2); // Round to 2 decimal places
  } else if (an.value === '' && wi.value === '') {
      let sin5, sin6;
      sin5 = Math.asin(ge.value / hy.value);
      sin6 = (sin5 * (180 / Math.PI)).toFixed(2); // Round to 2 decimal places
      wi.value = sin6;
      an.value = (Math.round(Math.sqrt(hy.value * hy.value - ge.value * ge.value) * 1000) / 1000).toFixed(2); // Round to 2 decimal places
      wi2.value = (Math.round(s)).toFixed(2); // Round to 2 decimal places
  } else if (ge.value === '' && wi.value === '') {
      let cos1, cos2;
      cos1 = Math.acos(an.value / ge.value);
      cos2 = (cos1 * (180 / Math.PI)).toFixed(2); // Round to 2 decimal places
      wi.value = cos2;
  }

  const parent = document.getElementById("history");
  const newHistoryDiv = document.createElement("div");
  const iTag = document.createElement("i");

  iTag.className = "fa-brands fa-xing"; // Set the class for the <i> tag
  iTag.id ="delet"
  newHistoryDiv.className = "historyDiv";
  newHistoryDiv.innerHTML =
    "Ankate:   " +
    an.value +
    "<br>" +
    "Gegenkate: " +
    ge.value +
    "<br>" +
    "Hypotenuse: " +
    hy.value +
    "<br>" +
    "Winkel Alpha: " +
    wi.value +
    "°" +
    "<br>" +
    "90 - Alpha: " +
    wi2.value +
    "°";

  newHistoryDiv.appendChild(iTag);
  parent.appendChild(newHistoryDiv);
});