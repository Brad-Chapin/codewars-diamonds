function diamond (n) {
  let diam = "";
  let rows = Math.floor(n /2);

  if ((n % 2 == 0) || n < 1) {
    return null;
  };

  for (let i = rows; i > 0; i--){
    let spaces = i;
    for (let x = 0; x < spaces; x++) {
      diam += " ";
    };
    let stars = (n - (spaces * 2));
    spaces--;
    for (let y = 0; y < stars; y++) {
      diam += "*";
    };
    diam += "\n";
  };

  for (let j = 0; j <n; j++) {
    diam += "*";
  };
  diam += "\n";

  for (let k = 1; k <= rows; k++) {
    let spaces = k;
    for (let x = 0; x < spaces; x++) {
      diam += " ";
    };
    let stars = (n - (spaces * 2));
    spaces++;
    for (let y = 0; y < stars; y++) {
      diam += "*";
    };
    diam += "\n";
  };

  return diam;
}

console.log(diamond(5));
