/*===CUADRADO===*/
const cuadrado=(lado)=>{
    const perimetro = lado*4
    const area = lado*lado
    return(
        console.log(`El perimetro es: ${perimetro}, el área es: ${area}`)
    )
}


/*===TRIANGULO===*/

const triangulo=(l1,l2,base,altura)=>{
    const perimetro=l1+l2+base;
    const area=(base * altura) / 2;
    return(
        console.log(`El perimetro es ${perimetro}, el área es ${area}`)
    )
}


/*===CIRCULO===*/

const circulo =(radio)=>{
    const pi = Math.PI
    const diametro = radio^2 ;
    const perimetro = 2 * pi * radio;
    const area = pi * radio ^ 2;
    return(
        console.log(`El diametro es: ${diametro}, el perimetro es: ${perimetro}, el área es: ${area}`)
    )
}




cuadrado(2);
triangulo(4,6,4,8);
circulo(8);