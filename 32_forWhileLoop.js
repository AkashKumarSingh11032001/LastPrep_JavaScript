for (let i = 0; i < 11; i++) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  for (let j = i; j < 3; j++) {
    console.log(i, j);
  }
}

let name = ["Akash", "Kumar", "Singh"];
for (let i = 0; i < name.length; i++) {
  console.log(`Element @ ${i} = ${name[i]}`);
}

/* +++++ WHILE LOOP +++++ */

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 0;
while (i < name.length) {
  console.log(`Element @ ${i} = ${name[i]}`);
  i++;
}

/* +++++ DO WHILE LOOP +++++ */

let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

j = 0;
do {
    console.log(`Element @ ${j} = ${name[j]}`);
  j++;
} while (j < name.length);

/*
1. 
*/
