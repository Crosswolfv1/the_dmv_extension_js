module.exports = {
    createVehicle,
    isAntique,
    isElectricVehicle
  }

const currentYear = new Date().getFullYear();

class Vehicle {
    constructor({vin, year, make, model, engine}) {
        this._vin = vin;
        this._year = year;
        this._make = make;
        this._model = model;
        this._engine = engine;
        this._registrationDate = null;
        this._plateType = null;
    }
    get vin() {
        return this._vin;
    }
    get year() {
        return this._year;
    }
    get make() {
        return this._make;
    }
    get model() {
        return this._model;
    }
    get engine() {
        return this._engine;
    }
}

function createVehicle(vehicle) {
    return new Vehicle({
        vin: vehicle.vin, 
        year: vehicle.year, 
        make: vehicle.make, 
        model: vehicle.model, 
        engine: vehicle.engine});
}

function isAntique(vehicle) {
    if (currentYear - vehicle.year >= 25) {
        return true;
    }
    else
    {
        return false;
    }
}

function isElectricVehicle(vehicle) {
    if (vehicle.engine === "ev") {
        return true;
    }
    else 
    {
        return false;
    }
}
