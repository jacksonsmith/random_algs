const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'puzzle.txt'), 'utf8', (err, content) => {
  if (err) throw err;
  
  const lines = content.trim().split('\n');
  const data = lines.map(line => line.trim().split(/\s+/));

//   console.log(data)

  const set = new Set()
  const map2 = new Map()
  
  data.map(row => {
    const n = Number(row[0])

    set.add(n)

    return n
  });
  data.map(row => {
    const n = Number(row[1])

    if (!map2.has(n)) map2.set(n,0)

    map2.set(n, map2.get(n) + 1);

    return n
  });

  let sum = 0

//   console.log(set)
console.log(map2)

  set.forEach((item) => {
    sum += item * (map2.get(item) ?? 0)
  })

  console.log(sum)

});
