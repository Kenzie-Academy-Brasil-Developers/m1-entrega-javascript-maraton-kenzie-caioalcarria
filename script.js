function changePosition(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
    return array;
};



let podio = ['Rafael', 'Manoel', 'Daniel']


function positions(podio) {

    if(podio.indexOf('Daniel')==0){
        console.log('Daniel é o vencedor')
        return 'Daniel é o vencedor'
    }
    else{
        podio= changePosition(podio, podio.indexOf('Daniel'), podio.indexOf('Daniel')-1)
        console.log('Este é o pódio:',podio.join(', ').toString())
        return 'Este é o pódio: '+ podio.join(', ').toString()
    }

        
   
}
console.log(positions(podio))