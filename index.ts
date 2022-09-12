class Auto{
    public encendidoAapagado: boolean;
    public marcaAuto: string;
    public modeloAuto: string;
    public tipoVehiculo: string;
    public cantPuertas: number;
    public cilindradaMotor: number;
    public litrosBaul: number;

    constructor(paramMarca: string, paramModelo: string, paramTipoV: string, paramCantP: number, paramCilindrada: number, paramLitrosB: number){
        this.marcaAuto = paramMarca;
        this.modeloAuto = paramModelo;
        this.tipoVehiculo = paramTipoV;
        this.cantPuertas = paramCantP;
        this.cilindradaMotor = paramCilindrada;
        this.litrosBaul = paramLitrosB;
    }

    encenderApagar(): void{
        if(this.encendidoAapagado === true){
            this.encendidoAapagado = false;
    }else{
        this.encendidoAapagado = true;
         }
    }

    obtenerMarca(): string{
        return this.marcaAuto;
    }

    obtenerModelo(): string{
        return this.modeloAuto;
    }

    obtenerTipo(): string{
        return this.tipoVehiculo;
    }

    obtenerNumpuertas(): number{
        return this.cantPuertas;
    }

    obtenerCilindrada(): number{
        return this.cilindradaMotor;
    }

    obtenerLitrosBaul(): number{
        return this.litrosBaul;
    }
}

let auto1 = new Auto("VolksWagen", "Taos", "SUV", 4, 4, 498);
let auto2 = new Auto("Chevrolet", "Onix Plus", "Sedan", 4, 3, 469);
let auto3 = new Auto("Toyota", "GR-86", "Depotrivo", 2, 4, 290);
let auto4 = new Auto("Ford", "Mustang", "Deportivo", 2, 8, 382);

let marcaPrimerAuto: string = auto1.obtenerMarca();

console.log("Marca: " + marcaPrimerAuto);