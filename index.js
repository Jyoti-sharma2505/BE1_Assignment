const {initilizationDatabase}=require("./db/db.connect");

// const fs=require("fs");
const Cars = require("./models/car.models");
initilizationDatabase()

// const jsonData = fs.readFileSync("cars.json","utf-8");
// const carData = JSON.parse(jsonData);

const carData = {
  brand: "Honda",
  model: "Civic",
  year: 2018,
  bodyStyle: "Coupe",
  fuelType: "Gasoline",
  transmission: "Manual",
  engine: "1.5L Turbocharged Inline-4",
  mileage: 40000,
  color: "Black",
  price: 1800000,
  condition: "Used",
  description: "Sporty Civic coupe with low mileage and manual transmission.",
  photos: [
    "https://example.com/civic-photo1.jpg",
    "https://example.com/civic-photo2.jpg",
    "https://example.com/civic-photo3.jpg"
  ]
};
//Question 1,2:
async function readAllData(carData){
    try{
    const car =  new Cars(carData);
    const saveCar = await car.save();
    console.log("Add data",saveCar) 
    }catch(error){
        throw error
    }
}
// readAllData(carData);
//Question 3:
async function readAllData(){
    try{
   const readAll = await Cars.find();
   console.log(readAll);
    }catch(error){
        throw error;
    }
}
// readAllData()
//Question 4:

async function readAllData(carBrand){
    try{
   const readAllDetails=await Cars.findOne({brand:carBrand});
   console.log(readAllDetails)
    }catch(error){
        throw error;
    }
}
// readAllData("Ford");
//Question 5:
async function readColor(carColor){
    try{
   const readColor = await Cars.findOne({color:carColor});
   console.log(readColor);
    }catch(error){
        throw error;
    }
}
// readColor("Black");
//Question 6:
async function updatePrice(carModel,updatePrice){
    try{
 const update = await Cars.findOneAndUpdate({model:carModel},updatePrice,{new:true});
 console.log(update);
    }catch(error){
        throw error;
    }
}
// updatePrice("Corolla",{price:2300000});
//Question :7
async function updateCondition(carModel,updateCon){
    try{
   const update=await Cars.findOneAndUpdate({model:carModel},updateCon,{new:true});
   console.log(update);
    }catch(error){
        throw error;
    }
}
// updateCondition("Model S",{condition:"Used"});
//Question 8:
async function deleteCar(carId){
    try{
  const deleteId = await Cars.findByIdAndDelete(carId);
    }catch(error){
        throw error;
    }
}
// deleteCar("689dce5851e356b6f2cfa7ba")
//Question 9:
async function updateStyle(deletstyle){
    try{
   const deleteSty = await Cars.findOneAndDelete({bodyStyle:deletstyle});
   console.log(deleteSty);
    }catch(error){
        throw error;
    }
}
updateStyle("Coupe");

async function seedData(){
    try{
        for(const car of carData){
        const newCar= new Cars({
            brand:car.brand,
            model:car.model,
            year:car.year,
            bodyStyle:car.bodyStyle,
            fuelType:car.fuelType,
            transmission:car.transmission,
            engine:car.engine,
            mileage:car.mileage,
            color:car.color,
            price:car.price,
            condition:car.condition,
            description:car.description,
            photos:car.photos,
            inMarket:car.inMarket
        })
       await newCar.save()
    }
    
   } catch(error){
    console.log("Error seeding connect in  database")
   }
}

// seedData()

