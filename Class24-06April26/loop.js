for (let i= 1;i <= 4 ; i++) {
let row= "";

for (let j= 1;j <= 4 ; j++) {
row = row + "*";
}
console.log(row)
}



// 8=* 123

for (let i= 1;i <= 4 ; i++) {
let row= ""
let num= "";

for (let j= 1;j <= i ; j++) {
row = row + "*";
}
for (let n= Number(1);n <= i ; n++) {
num += n;
}
console.log(row)
}


// top part
for (let i = 1; i <= 2; i++) {
  let row = " ";

  // spaces
  for (let s = 1; s <= 2 - i; s++) {
    row += " ";
  }

  // stars
  for (let j = 1; j <= i; j++) {
    row += "*";
  }

  console.log(row.trim());
}

//bottom part
for (let i = 1; i >= 1; i--) {
  let row = "*";
  console.log(row);
}
