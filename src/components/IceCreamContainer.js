import React from 'react';
import { buyIceCream } from '../redux';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Icecreams: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  numOfIceCreams: state.iceCreamReducer.numOfIceCreams,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
