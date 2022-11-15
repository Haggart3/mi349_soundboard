
var buttonElement1 = document.getElementById('b1')
var buttonElement2 = document.getElementById('b2')
var buttonElement3 = document.getElementById('b3')
var buttonElement4 = document.getElementById('b4')

buttonElement1.onclick = () => {
    document.getElementById('bad_disk_x').play()
}
//Dont need to include the file name in .play 

buttonElement2.onclick = () => {
    document.getElementById('applause3').play()
}

buttonElement3.onclick = () => {
    document.getElementById('burp2_x').play()
}

buttonElement4.onclick = () => {
    document.getElementById('bloop_x').play()
}

/*
buttonElement1.addEventListener('click', function() {
    console.log('I was clicked!')
})
*/




/*
Graveyard
buttonElement2.addEventListener('click', function() {
    //console.log('I was clicked!')
    
})


buttonElement3.addEventListener('click', function() {
    //console.log('I was clicked!')
    
})



buttonElement4.addEventListener('click', function() {
    //console.log('I was clicked!')
    
})
*/