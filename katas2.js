// comece a criar a sua função add na linha abaixo

function add(x, y){
    console.log(x)
    return x+y
    

}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply(z, w){
    let result=0
    for(let num=1; num<=z; num++ ){
        result = add(result, w)
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(c, n){
    result=1
    for(let num=1; num<=n; num++){
        result=multiply(result, c)
    }
   return result
    
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(f){
    result=1
    for(let num=1; num<=f; num++){
        result=multiply(result, num)
    }
    return result
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(n){
    first = 1
    second = 1
    termo = 0

    if (n==1 || n==2) {
        return 1
    }
    else{
        for(let num=2; num<n; num++){
            termo= add(first, second)
            second = first
            first = termo
            
        }
        return termo
    }
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
