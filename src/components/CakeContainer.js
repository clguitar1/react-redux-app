import React from 'react';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfCakes: state.cakeReducer.numOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
