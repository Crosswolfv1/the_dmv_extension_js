var assert = require('chai').assert;
var { createVehicle, isAntique, isElectricVehicle} = require('../exercises/vehicle');


const cruz_param = {vin: '123456789abcdefgh', year: 2012, make: 'Chevrolet', model: 'Cruz', engine: "ice"};
const bolt_param = {vin: '987654321abcdefgh', year: 2019, make: 'Chevrolet', model: 'Bolt', engine: "ev"};
const camaro_param = {vin: '1a2b3c4d5e6f', year: 1969, make: 'Chevrolet', model: 'Camaro', engine: "ice"};

describe('Vehicle', function() {

  it('should be able to create a car with a VIN, year, make, model, and engine type', function() {
    var cruz = createVehicle(cruz_param);

    assert.equal(cruz.vin, '123456789abcdefgh');
    assert.equal(cruz.year, 2012);
    assert.equal(cruz.make, 'Chevrolet');
    assert.equal(cruz.model, 'Cruz');
    assert.equal(cruz.engine, "ice");
  });
  
  it('should be able to create a different car', function() {
    var cruz = createVehicle(cruz_param);
    var bolt = createVehicle(bolt_param);

    assert.equal(bolt.vin, '987654321abcdefgh');
    assert.equal(bolt.year, 2019);
    assert.equal(bolt.make, 'Chevrolet');
    assert.equal(bolt.model, 'Bolt');
    assert.equal(bolt.engine, "ev");
  });

  it('be able to determine if the vehicle is an antique', function() {
    var cruz = createVehicle(cruz_param);
    var bolt = createVehicle(bolt_param);
    var camaro = createVehicle(camaro_param);
    
    assert.equal(isAntique(cruz), false)
    assert.equal(isAntique(bolt), false)
    assert.equal(isAntique(camaro), true)    
  })

  it('be able to determine if the vehicle is electric', function() {
    var cruz = createVehicle(cruz_param);
    var bolt = createVehicle(bolt_param);
    var camaro = createVehicle(camaro_param);

    assert.equal(isElectricVehicle(cruz), false);
    assert.equal(isElectricVehicle(bolt), true);
    assert.equal(isElectricVehicle(camaro), false);
  })

})