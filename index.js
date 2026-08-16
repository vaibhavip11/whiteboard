const canvas = document.getElementById('paintCanvas')
const ctx = canvas.getContext('2d')
const clearBtn =document.getElementById('clearBtn')

//Drawing state
let isDrawing = false
let brushColor = "#cfd0d3"
let brushWidth = 5

//mousedown & mouseup
//User click & bold the board ->draw hoga
canvas.addEventListener('mousedown',(event)=>{
    isDrawing=true
    ctx.beginPath()
    ctx.moveTo(event.offsetX, event.offsetY)
})

//Drawing band kro
canvas.addEventListener('mouseup',()=>{
    isDrawing = false
    ctx.closePath()

})

//mouse move event 
canvas.addEventListener('mousemove',(event)=>{
    if(!isDrawing) return  //if mouse is not hold

    ctx.lineWidth = brushWidth
    ctx.lineCap = 'round' //smooth corners
    ctx.strokeStyle = brushColor

    ctx.lineTo(event.offsetX,event.offsetY)  //line draw
    ctx.stroke();  // line visible to screen
});

canvas.addEventListener('mouseleave',()=>{
    isDrawing = false;
})

canvas,addEventListener('mouseenter',()=>{
    console.log("You can draw")
})

//clearboard
clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
})

//double click
canvas.addEventListener('dblclick',()=>{
    const randomBg = 'hsl(${Math.random()*360},80%,90%)'
    canvas.style.backgroundColor = randomBg
})

canvas.addEventListener('contextmenu',(event)=>{
    event.preventDefault()

    const colors=['red','blue','black','green','purple','yellow']
    const randomColor=colors[Math.floor(Math.random()*colors.length)]
    brushColor = randomColor;
    alert('Brush color changed to: ${brushColor}')
})