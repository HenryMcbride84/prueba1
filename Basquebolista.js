
import { Jugador } from "./Jugador.js";

export class Basquebolista extends Jugador{ 

    jugar(){
        console.log("Eres el lider de tiros libres en esta temporada");
    }

    meterGol(){
        console.log("El jugador metio un gol");
    }

    cambio(){
        console.log("Se cambia jugador a la banca")
        
    }

}