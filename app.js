class Carro {
    constructor(marca, modelo, color, gasolina, encendido, dañado) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.gasolina = 100;
        this.encendido = false;
        this.dañado = false;

    }

    encenderCarro(carro) {
        if (!carro.encendido) {
            carro.encendido = true;
            console.log('El Carro está encendido');
        } else {
            carro.dañado = true;
            console.error('El Carro ya estaba encendido, se daño el motor.')
        };
    };

    realizarViaje() {
        if (carro.encendido && !carro.dañado && carro.gasolina > 0) {
            for (let i = carro.gasolina; i > 0; i--) {
                carro.gasolina--;
                console.log(`El Carro tiene ${i} gasolina restante.`);
            }
        } else if (!carro.encendido) {
            console.log('Debe encender el Carro para realizar un viaje.')
        } else if (!carro.dañado) { console.error('El Carro ya no tiene Gasolina.') };

    };

}

let carro = new Carro('Tesla', 'Modelo X', 'Blanca');