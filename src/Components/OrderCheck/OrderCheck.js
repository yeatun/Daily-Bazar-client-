// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';

// const OrderCheck = () => {
//     const {checkId} = useParams();
//     const [checkings ,setCheckings] = useState([]);

//     useEffect(()=>{
//         fetch(`http://localhost:5000/checkOut/${checkId}`)
//         .then(res => res.json())
//         .then(data => setCheckings(data))
//     },[])
//     return (
//         <div>
//             {
//                 checkings.map(check => <li>{check.name}</li>)
//             }
//         </div>
//     );
// };

// export default OrderCheck;





// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router';

// const  OrderCheck = () => {
//     const {checkOutId} =useParams();
//     const [checkOut ,setCheckOut] = useState({});
//     const history = useHistory();
//     useEffect(()=>{
//         fetch(`http://localhost:5000/checkOut/${checkOutId}`)
//         .then(res =>res.json())
//         .then(data => setCheckOut(data));
//     },[])
//     return (
//         <div>
//             this is check{checkOut.name}
//         </div>
//     );
// };

// export default  OrderCheck;