// Base Class
class Vehicle {
  private name: string;
  private model: string;

  constructor(name: string, model: string) {
    this.name = name;
    this.model = model;
  }

  getVehicleDetails() {
    console.log(`Vehicle is ${this.name} and model is ${this.model}`);
  }
}

// Single Inheritance
class TwoWheeler extends Vehicle {
  private engine: string;

  constructor(name: string, model: string, engine: string) {
    super(name, model);
    this.engine = engine;
  }
  getEngineCapacity() {
    this.getVehicleDetails();
    console.log(`Engine capacity: ${this.engine}`);
  }
}

// Multilevel Inheritance
class BikeServicing extends TwoWheeler {
  private price: number;
  constructor(name: string, model: string, engine: string, price: number) {
    super(name, model, engine);
    this.price = price;
  }

  getServicingCharge() {
    this.getEngineCapacity();
    console.log(`Servicing charge is ${this.price}`);
  }
}

// Hierarchial Inheritance
class FourWheeler extends Vehicle {
  private fuelTank: string;

  constructor(name: string, model: string, fuelTank: string) {
    super(name, model);
    this.fuelTank = fuelTank;
  }
  getFuelTankCapacity() {
    this.getVehicleDetails();
    console.log(`Fuel tank capacity: ${this.fuelTank}`);
  }
}

// creating base class obj
const vehicle = new Vehicle("Apache RTR 160", "2018");
vehicle.getVehicleDetails();

// creating derived class obj
const twoWheeler = new TwoWheeler("Pulsar 150", "2020", "150cc");
twoWheeler.getEngineCapacity();

const bikeServicing = new BikeServicing("Pulsar 150", "2020", "150cc", 2000);
bikeServicing.getServicingCharge();

const fourWheeler = new FourWheeler("Swift", "2016", "20L");
fourWheeler.getFuelTankCapacity();
