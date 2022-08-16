import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
    poop: state.poop
  }
}

export default connect(mapStateToProps)(Home);