// document.body.onmousemove = function(e) {

//     const element = document.getElementById("cursor")

//     const xCoordinate = e.clientX+window.scrollX + "px"
//     const yCoordinate = e.clientY+window.scrollY + "px"

    
//     element.style.left = xCoordinate
//     element.style.top = yCoordinate

//     console.log(element, element.left)
    
//   }

const obj = document.getElementById("cursor")

document.addEventListener('mousemove', (event) => {
    obj.style.left = event.clientX - 20 + 'px'; 
    obj.style.top = event.clientY  - 20 + 'px'; 
    console.log(`${event.clientX}, ${event.clientY}`)
  });


  const main = document.getElementById("main")

  
  
  main.onmouseover = function(e) {


    const hoveredElementId = e.target.id
    if(hoveredElementId.includes("zone")){
        console.log(hoveredElementId)

    }

  
    
  }
  
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }