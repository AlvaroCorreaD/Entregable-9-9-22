var Auto = /** @class */ (function () {
    function Auto(paramMarca, paramModelo, paramTipoV, paramCantP, paramCilindrada, paramLitrosB) {
        this.marcaAuto = paramMarca;
        this.modeloAuto = paramModelo;
        this.tipoVehiculo = paramTipoV;
        this.cantPuertas = paramCantP;
        this.cilindradaMotor = paramCilindrada;
        this.litrosBaul = paramLitrosB;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.encendidoAapagado === true) {
            this.encendidoAapagado = false;
        }
        else {
            this.encendidoAapagado = true;
        }
    };
    Auto.prototype.obtenerMarca = function () {
        return this.marcaAuto;
    };
    Auto.prototype.obtenerModelo = function () {
        return this.modeloAuto;
    };
    Auto.prototype.obtenerTipo = function () {
        return this.tipoVehiculo;
    };
    Auto.prototype.obtenerNumpuertas = function () {
        return this.cantPuertas;
    };
    Auto.prototype.obtenerCilindrada = function () {
        return this.cilindradaMotor;
    };
    Auto.prototype.obtenerLitrosBaul = function () {
        return this.litrosBaul;
    };
    return Auto;
}());
var auto1 = new Auto("VolksWagen", "Taos", "SUV", 4, 4, 498);
var auto2 = new Auto("Chevrolet", "Onix Plus", "Sedan", 4, 3, 469);
var auto3 = new Auto("Toyota", "GR-86", "Depotrivo", 2, 4, 290);
var auto4 = new Auto("Ford", "Mustang", "Deportivo", 2, 8, 382);
var marcaPrimerAuto = auto1.obtenerMarca();
console.log("Marca: " + marcaPrimerAuto);
