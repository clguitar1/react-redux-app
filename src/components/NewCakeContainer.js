import React, { useState } from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cakeReducer.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: (number) => dispatch(buyCake(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
