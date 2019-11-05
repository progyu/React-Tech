import React, { useReducer, useEffect } from 'react';
import useInputs from './useInput';

const Info = () => {
  const [state, onChangeName] = useInputs({
    name: '',
    nickName: ''
  })

  useEffect(()=> {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('clean-up');
      console.log(name);
    };
  },[]);

  const { name, nickName } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChangeName} />
        <input name="nickName" value={nickName} onChange={onChangeName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>          
        <div>
          <b>닉네임:</b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;


// import React, { useState, useEffect } from 'react';

// const Info = () => {
//   const [name, setName] = useState('');
//   const [nickName, setnickName] = useState('');

//   useEffect(()=> {
//     console.log('effect');
//     console.log(name);
//     return () => {
//       console.log('clean-up');
//       console.log(name);
//     };
//   },[]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangenickName = (e) => {
//     setnickName(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input value={name} onChange={onChangeName} />
//         <input value={nickName} onChange={onChangenickName} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>          
//         <div>
//           <b>닉네임:</b> {nickName}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Info;