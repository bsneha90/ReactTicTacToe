import { addSymbol, startAgain } from '../actions/actions';
import { connect } from 'react-redux';
import Board from '../components/Board'

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSymbol(rowIndex, position, symbol) {
            console.log(`symbol ${symbol} added at: ${rowIndex} - ${position} `)
            dispatch(addSymbol(rowIndex, position, symbol));
        },
        startAgain() {
            dispatch(startAgain());
        }

    }
}

let BoardContainer= connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default BoardContainer