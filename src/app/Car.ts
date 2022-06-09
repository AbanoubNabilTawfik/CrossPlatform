class Engine
{
    engineType:any;
    constructor(engineType:any)
    {
      this.engineType=engineType;
    }
}

class Tiers
{
    numberOfTiers:any
    constructor(numberOfTiers:any)
    {
     this.numberOfTiers=numberOfTiers;
    }
}
class Car
{
    engine:Engine;
    tiers:Tiers;

    constructor(engine:Engine,tiers:Tiers)
    {
        // this.engine= new Engine();
        // this.tiers= new Tiers();
        this.engine=engine;
        this.tiers=tiers;
    }
}