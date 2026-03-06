export class Jugador{
 
 //atributos
 #nombre;
 #nacionalidad;
 #edad;

 constructor(nombre,nacionalidad,edad){
    this.#nombre=nombre;
    
    this.#nacionalidad=nacionalidad;

    this.#edad= edad;
 }

 
 /*metodos gets para obtener los atributos respectivamente*/ 
 getNombre(){
    return this.#nombre;
 }


 getNacionalidad(){
    return this.#nacionalidad;
 }


 getEdad(){
    return this.#edad;
 }

//Finaliza el bloque de metodos gets


 //metodo que servira para demostrar polimorfismo
 jugar(){
    console.log("Disfruta tu deporte Favorito");
 }


}

