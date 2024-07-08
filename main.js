// 1) Convierta la siguiente función nombrada en una función de flecha :

//            función printMessage( mensaje ) {

//                     console.log( mensaje )

//            }


const printMessage = (mensaje) => console.log(mensaje);

printMessage("primer funcion flecha");




// 2). Convierta la siguiente función nombrada en una función de flecha :

//             función createMultplication (número1, número2) {

//                       sea ​​resultado = numero1 * numero2

//                       devolver resultado

//              }

const createMultiplication = (numero1,numero2) =>{
    let resultado = numero1 * numero2;
        return resultado;
}

console.log(createMultiplication(2,2))
console.log(createMultiplication(10,10))


//otra forma:

// let createMultiplication = (numero1,numero2) =>  numero1 * numero2;


//3). Partiendo de un array: const array = [ 1,2,3,4,5,6,7,8,9 ], 
//aplicar un map a ese array y pasar como argumento la función nombrada mostrada en el ejercicio anterior.
// Mostrar por consola el nuevo array obtenido.

const array = [ 1,2,3,4,5,6,7,8,9 ];


 //si hay 9 elementos de un array el map lo que va a hacer es devolver el resultado de la funcion por cada uno de los elementos de ese array (osea 9 veces) 
const multiplicar = array.map(numero =>{

    let resultado = createMultiplication(numero,2)


    return resultado

});
    
    // console.log(multiplicar);

//no forma parte del ejrcicio , sirve para entender como funciona el metodo map
// const resultado = array.map(createMultiplication => {


//     return createMultiplication + 1

// });

// console.log(resultado)

//esto tampoco forma parte del ejercicio.

// const map = array.map((nombre) => { //es lo mismo que hacer esto const map = array.map(function(nombre){})

//     return nombre.toString()
// })

// console.log(map);


//4. Generar una función que reciba un array de cervezas como parámetro
// y devuelva un nuevo array con las 10 cervezas con mayor contenido de alcohol.


const funcionCervezas = (arrayCervezas) =>{
    
    // let beer = arrayCervezas.push(cervezas);

    let beers = arrayCervezas.sort((a,b) => b.abv - a.abv)  //para ordenar un array se usa un sort()
    let tenBeers = beers.slice(0,10);

    console.log(tenBeers);


};


funcionCervezas(beers);//la funcion siempre se llama , nunca se va a llamar sola .



//5). Generar una función que reciba un array de cervezas como parámetro 
//y devuelva un nuevo array con las 10 cervezas menos amargas.


const cervezasAmargas = (amarga) =>{

    // let amargor = amarga.sort((a,b) => {

    //     if(a.ibu === null) return 0;
    //     if(b.ibu === null) return 0;

    //     return a.ibu - b.ibu
    // });
let filtradas = amarga.filter(cerveza => cerveza.ibu !== null);//estoy filtrando las que tienen ibu.

let amargas = filtradas.sort((a,b) => a.ibu - b.ibu)
let tenAmargas = amargas.slice(0,10)
console.log(tenAmargas);
}


// cervezasAmargas(beers);


// cervezas.sort((a, b) => {
//     if (a.ibu=== null) return 1;
//     if (b.ibu === null) return -1;
//     return b.alcohol - a.alcohol;
// });


//6. Generar una función que reciba como parámetros un array de cervezas y el nombre de una cerveza. 
//La función debe devolver el objeto completo que coincida con el nombre ingresado.


function serchBeer(arrayCervezas,nombreCerveza){


    let cervezaFiltrada =  arrayCervezas.filter(i => i.name === nombreCerveza);//solamente si se cumple la condicion se va cumplir el filter

    return cervezaFiltrada;
}


// console.log(serchBeer(beers,"Bad Pixie"));


//7. Generar una función que reciba como parámetro un array de cervezas,
 //un valor y que retorne el primer objeto cuya propiedad ibu sea igual al valor ingresado, 
 //en caso de que no exista una cerveza con ese ibu,
 // que muestre un mensaje en la consola que diga 
 //“No existe ninguna cerveza con un ibu de (valor ingresado)”.


function ibuCerveza(arrayCervezas,valorIbu){


    let ibuBeer = arrayCervezas.filter(i => i.ibu === valorIbu)
    console.log(ibuBeer);
    if(ibuBeer.length >= 1 ){// quiere decir que hay mas de una cerveza con ese ibu

        console.log(ibuBeer[0])//si hay uno o mas me devuelve el primer elemento .
    } else{
        console.log(`No existe ninguna cerveza con un ibu de ${valorIbu}`)
    }
}


// ibuCerveza(beers,40)

//8. Generar una función que reciba como parámetro el nombre de una cerveza y 
//devuelva la posición en el array de dicha cerveza. 
//Si no se encuentra la cerveza se debe imprimir un mensaje por consola que diga “(Nombre de la cerveza ingresada) no existe”.

function indiceCerveza(nombreCerveza){
    
    let indexBeer = beers.findIndex(i => i.name === nombreCerveza)//devuelve el indice del objeto que coincide con la condicion
    
    if(indexBeer !== -1   ){//va a devolver solamente un indice
        console.log(indexBeer);
    } else{
        console.log(`${nombreCerveza} no existe`);// solamente me devuelve un nombre.
    }

}

// indiceCerveza("Trashy Blonde");

//9. Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. 
//La función debe devolver un nuevo array con las cervezas que no superan el nivel de alcohol.
// Cada elemento del nuevo array debe ser un objeto que tenga las propiedades nombre, alcohol (abv) y "amargura" (ibu)


function cervezaAlcohol(arrayCervezas,gradoAlcohol){


    let cervezasMenosAlcohol = arrayCervezas.filter(i => i.abv < gradoAlcohol );//



    let arrayNuevo = cervezasMenosAlcohol.map(i => ({//el la linea 201 le aplico un  map para  crear un nuevo objeto con las propiedades que yo quiero.
    
        nombre: i.name,
        alcohol: i.abv,
        amargor: i.ibu,
    })); 

console.log(arrayNuevo);

}

// cervezaAlcohol(beers,5);


//10. Generar una función que reciba como parámetros un array de cervezas, 
//un nombre de propiedad y un valor booleano. 
//Deberá devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento,
// en orden ascendente si la tercera es verdadera o descendente si es falsa.


function beerBoolean(arrayCervezas,nombrePropiedad,valorBooleano){
    let newArray = arrayCervezas.sort((a,b) => {
    
    
        let  nameProperty = nombrePropiedad;

        if(valorBooleano === true){
            return b[nameProperty] - a[nameProperty]; 

        } else{
            return a[nameProperty] - b[nameProperty]; 
        }
    })

        let tenBeers = newArray.slice(0,10);

        return tenBeers
}

console.log(beerBoolean(beers,"ibu",false));


//11. Generar una función que reciba como parámetro un array de cervezas y 
//un id de un elemento HTML donde se imprimirá la tabla. 
//La función debe renderizar (renderizar, dibujar, pintar, rellenar, etc.) en un archivo html una tabla que contenga 
//las columnas “Nombre”, “ABV”, “IBU”, y una fila por cada elemento del array. 
//Cada fila debe tener los datos solicitados para cada una de las cervezas.

//renderizar = mostrar en pantalla.
//hardcodear = hacer un dato estatico .
function printTable(arrayCervezas,idElement){

    let elementoHtml = document.getElementById(idElement);
//aca creo la cabecera de la tabla 
let table = `
<tr>
    <th>nombre</th>
    <th>abv</th>
    <th>ibu</th>
</tr>


`


    arrayCervezas.map(indice => {//por cada indice se va a agregar cada fila con las propiedades indicadas 
    table += //le añado las filas a la tabla que cree arriba
`    <tr>
        <td>${indice.name}</td>
        <td>${indice.abv}</td>
        <td>${indice.ibu}</td>
    </tr>`
    ;
});
    


    elementoHtml.innerHTML = table;
}

printTable(beers,"div_table");