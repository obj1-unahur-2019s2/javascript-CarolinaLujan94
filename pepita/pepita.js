class Golondrina {
    constructor() {
        this._energia = 0;
    }

    energia() {
        return this._energia;
    }

    comer(cosa, gramos) {
        this._energia += cosa.energiaPorGramo() * gramos;
    }

    volar(kms) {
        this._energia -= kms + 10;
    }
}

const alpiste = { energiaPorGramo: () => 4 }
const mondongo = { energiaPorGramo: () => 100 }



function darleComidaAPepita() {
    pepita.comer(alpiste, 20);
    const label = document.getElementById("energia");
    label.innerText = pepita.energia();
}

function hacerVolarAPepita() {
    pepita.volar(kms)
    const label = document.getElementById("energia");
    label.innetText = pepita.energia();
}

const pepita = new Golondrina();

module.exports = { Golondrina, alpiste, mondongo }