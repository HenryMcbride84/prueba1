import { Jugador } from "./Jugador.js";

export class Portero extends Jugador
{ 
    jugar(){
        console.log("LLevas un record de 7 partidos sin recibir gol");
    }
}