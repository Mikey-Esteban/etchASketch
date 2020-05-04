console.log("script is running")
// let num = prompt('how many squares per row would you like?')
let num = 100;
let rowHeight = 100/num   //creates correct height dimesions for squares
rowHeight += 'vh'
console.log(rowHeight)
let body = document.querySelector("body");
let mainContainer = document.createElement('div')
let classes = mainContainer.classList
classes.toggle('main-container')
body.appendChild(mainContainer);

for (i=0; i<num; i++){
  console.log('inside row loop')
  let rows = document.createElement('div');
  rows.style.height = rowHeight;
  classes = rows.classList;
  classes.toggle('rows');
  mainContainer.appendChild(rows)
}

rows = document.querySelectorAll('.rows');
rows.forEach(function(row){
  for (j=0; j<num; j++) {
    console.log('inside cols loop')
    let cols = document.createElement('div');
    // cols.textContent = j;
    classes = cols.classList;
    classes.toggle('cols');
    cols.addEventListener('mouseover', function(){
      console.log('you entered a node!')
      console.log(this.classList)
      active = this.classList
      active.toggle('active')
    })
    row.appendChild(cols)
  }
})

// cols = document.querySelectorAll('.cols')
// cols.addEventListener('mouseover', function(){
//   console.log('you entered a node!')
// })
