import React, { Component } from 'react';
import { connect } from 'react-redux';
import { counterCreator } from '../actions';

class Counter extends Component {

    inc = () => {
        this.props.inc()
    }

    dec = () => {
        this.props.dec()
    }

    backHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button onClick={this.backHome}>back home</button>
                <div>count: {this.props.count}</div>
                <button onClick={this.inc}>增加</button>
                <br/>
                <button onClick={this.dec}>减少</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => ({
    inc: () => dispatch(counterCreator.increment()),
    dec: () => dispatch(counterCreator.decrement())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)