
import { Jugador } from "./Jugador.js";
import {Portero} from "./Portero.js";
import {Basquebolista} from "./Basquebolista.js"
import {Beisbolista} from "./Beisbolista.js"


//CReacion de objetos
const  jugador1= new Jugador("Luis","Paraguayo",15);
const  portero =new Portero("Jorge Campos","Mexicana",30);
const  basquetbol= new Basquebolista("Michael Jordan","Estado Unidense",25);
const  beisbol= new Beisbolista("Baby Rud","Canadiense",28);

const jugadores=[jugador1,portero,basquetbol,beisbol];

//CIclo para obtener la informacion de cada tipo de jugador
jugadores.forEach(jugador =>{
    console.log(jugador.getNombre());
    console.log(jugador.getNacionalidad());
    console.log(jugador.getEdad());
    console.log(jugador.jugar())
});

