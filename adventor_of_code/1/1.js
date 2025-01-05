const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'puzzle.txt'), 'utf8', (err, content) => {
  if (err) throw err;
  
  const lines = content.trim().split('\n');
  const data = lines.map(line => line.trim().split(/\s+/));
  
  const column1 = data.map(row => Number(row[0]));
  const column2 = data.map(row => Number(row[1]));

  column1.sort((a,b) => a - b)
  column2.sort((a,b) => a - b)

  let sum = 0

  for (let i = 0; i < column1.length; i++) {
    sum+= Math.abs(column1[i] - column2[i])
  }

  console.log(sum)

});
