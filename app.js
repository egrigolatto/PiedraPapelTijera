const PIEDRA = 'piedra'
const PAPEL = 'papel'
const TIJERA = 'tijera'

const empate = 0
const ganador = 1
const perdedor = 2

const piedraBtn = document.getElementById('piedra')
const papelBtn = document.getElementById('papel')
const tijeraBtn = document.getElementById('tijera')

const resultText = document.getElementById('textoBtn')

const imgUsuario = document.getElementById('imgUsuario')
const imgAleatoria = document.getElementById('imgAleatoria')

const mostrarResult = document.getElementById('resultados')
const contenedorBtn = document.getElementById('contenedorBotones')

piedraBtn.addEventListener('click', ()=>{
    mostrarResult.classList.add('mostrar')
    // console.log('piedra')
    jugar(PIEDRA)
})
papelBtn.addEventListener('click', ()=>{
    mostrarResult.classList.add('mostrar')
    // console.log('papel')
    jugar(PAPEL)
})
tijeraBtn.addEventListener('click', ()=>{
    mostrarResult.classList.add('mostrar')
    // console.log('tijera')
    jugar(TIJERA)
})

const jugar = (opcionUsuario) => {

    imgUsuario.src = 'img/'+opcionUsuario+'.jpg'

    resultText.innerHTML = '...'

    const intervalo = setInterval(()=>{
        const opcionAleatoria = calculoAleatorio()
        imgAleatoria.src = 'img/'+opcionAleatoria+'.jpg'
    },200)

    setTimeout(() => {

    clearInterval(intervalo)

    const opcionAleatoria = calculoAleatorio()

    const resultado = analisisResultados(opcionUsuario,opcionAleatoria)

    
    imgAleatoria.src = 'img/'+opcionAleatoria+'.jpg'

    switch(resultado){
        case empate:
            resultText.innerHTML = 'Empate!'
            break
        case ganador:
            resultText.innerHTML = 'Ganaste!'
            break
        case perdedor:
            resultText.innerHTML = 'Perdiste!'
            break        
    }
    },3000)

}

const calculoAleatorio = () => {
    const numero = Math.floor(Math.random()*3)
    switch (numero) {
        case 0:
            return PIEDRA
        case 1:
            return PAPEL
        case 2: 
            return TIJERA        
    }
}

const analisisResultados = (opcionUsuario,opcionAleatoria) => {
    if(opcionUsuario === opcionAleatoria){
        return empate
    }else if(opcionUsuario === PIEDRA){
        if(opcionAleatoria === PAPEL) return perdedor
        if(opcionAleatoria === TIJERA) return ganador
    }else if(opcionUsuario === PAPEL){
        if(opcionAleatoria === TIJERA) return perdedor
        if(opcionAleatoria === PIEDRA) return ganador
    }else if(opcionUsuario === TIJERA){
        if(opcionAleatoria === PIEDRA) return perdedor
        if(opcionAleatoria === PAPEL) return ganador
    }
}

