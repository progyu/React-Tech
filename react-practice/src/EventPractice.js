import React, { useState } from 'react';

const EventPractice = () => {
  const [ form, setForm ] = useState({ username: '', message: ''});
  const { username, message } = form;

  const onChange = e => {
    const nextForm = { ...form, [e.target.name] : e.target.value };
    setForm(nextForm); 
  };

  // const [ username, setUsername ] = useState('');
  // const [ message, setMessage ] = useState('');
  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  const onClick = () => {
    alert(username +'  ' + message);
    setForm({
      username: '',
      message: '' 
    });
    // setUsername('');
    // setMessage('');
  };

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해보세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// import React, { Component } from 'react';

// class EventPractice extends Component {
//   state = {
//     username: '',
//     message: ''
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   handleClick = () => {
//     alert(this.state.username +'   '+ this.state.message);
//     this.setState({
//       username:'',
//       message: ''
//     });
//   }

//   handleKeyPress = (e) => {
//     if(e.key === 'Enter') {
//       this.handleClick();
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="이름"
//           value={this.state.username}
//           onChange={this.handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="아무거나 입력해보세요"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         />
//         <button onClick={ this.handleClick }>확인</button>
//       </div>
//     );
//   }
// }

export default EventPractice;