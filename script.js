let casa, quebraLinha, pintura = 0
let tabuleiro = new Array (8)
for(let i = 0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(8)
}
for(let i = 0; i < tabuleiro.length; i++){
    quebraLinha = document.createElement('br')
    document.body.append(quebraLinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        console.log(`tab ${i} ${j}`)
        casa = document.createElement('button')
        casa.setAttribute('id', 'cs' + i + "" + j)
        document.body.append(casa)
        if(pintura % 2 == 0){
            casa.style.backgroundColor = "black"
            if(i < 3){

           
            casa.style.color = "white"
            casa.innerText = "X"
        }
        if(i > 4){

           
            casa.style.color = "yellow"
            casa.innerText = "O"
        }
        }
        pintura++
       
    } 
    pintura++
    
    
}