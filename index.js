import data from './rawBooks.json' assert { type: 'json' };
console.log(data);

fetch('./rawBooks.json')
    .then((response) => response.json())
    // .then((json) => console.log(json));

console.log("Solution")


let count = 0
// for (let idx in data){
//   console.log(data[idx])
//   if (data[idx]["read?"] == "Yes"){
//     count += 1
//   }
// }

// data.forEach(x => {
//   if (x["read?"] == "Yes"){
//     count += 1
//   }
// })

// console.log(count)



data.forEach(x => {
  console.log(x["Date Read"])
  my_date = date.split()
})



