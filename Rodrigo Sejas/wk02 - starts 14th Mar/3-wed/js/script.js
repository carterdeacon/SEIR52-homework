const cat = document.getElementsByTagName("img")[0];

cat.style.position = "absolute";
cat.style.left = "0px";

const catWalk = function () {
  const oldPos = parseInt(cat.style.left);
  console.log(oldPos);
  const newPos = oldPos + 10;
  cat.style.left = newPos + "px";
};

setInterval(catWalk, 50);
