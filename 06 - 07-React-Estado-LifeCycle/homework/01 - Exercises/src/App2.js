


// import React from "react";
// import Zoo from "./components/Zoo/Zoo.jsx";
// import Species from "./components/Species/Species.jsx";
// import Animals from "./components/Animals/Animals.jsx";

// export default function Zoo() {
//   const [ zoo, setZoo ] = React.useState({
//     zooName: "",
//     animals: [],
//     allAnimals:[],
//     species: []
//   })

  // React.useEffect(()=>{
  //   fetch('http://localhost:3001/zoo')
  //  .then((res) => res.json())
  //  .then((data) =>
  //     setZoo({
  //        ...zoo,
  //        animals: data.animals,
  //        species: data.species,
  //        allAnimals: data.animals,
  //     })
  //  )
  //  .catch((error) => console.log(error))
  // }, []);
 

//   const handleInputChange = (event) => {
//     console.log(event.target.value)
//     setZoo({
//       ...zoo,
//       zooName: event.target.value
//     })
//   }
//   return (
//     <div>
//       <label>Zoo Name:</label>
//       <input 
//         type="text"
//         value={zoo.zooName}
//         onChange={handleInputChange}
//       />
//       <h1> {zoo.zooName}</h1>
//       <Species 
//          species={zoo.species}
//          handleSpecies={handleSpecies}
//          handleAllSpecies={handleAllSpecies} 
//       />
//       <Animals 
//         animals = {zoo.animals}
//       />
//       <Zoo />
//     </div>
//   );
// }