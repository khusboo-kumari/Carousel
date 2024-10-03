// import { useState } from "react";

// const Header = ({animals}) => {  // This animal is passed as props in the Header  
//   const [name, setName] = useState("Khusss");

//   return (
//     <div>
//       <h1> Hello kitty, {name}  from {animals}</h1>
//       <button onClick={()=>{
//         setName("Toronto") ; 
//       }}>
//         ChangeName
//       </button>
//     </div>
//   );
// };
// export default Header;


//   OR SIMPLY PASS AS PROPS 

import { useState } from "react";

const Header = (props) => {  // This animal is passed as props in the Header  
  const [name, setName] = useState("Khusss");

  return (
    <div>
      <h1> Hello kitty, {name}  from {props.animals}</h1>
      <button onClick={()=>{
        setName("Toronto") ; 
      }}>
        ChangeName
      </button>
    </div>
  );
};
export default Header;
