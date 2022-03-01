import { Component } from "react";

class WrappedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { donationColor: 'black' };
    }
    componentDidMount() {
        const donationAmount = this.props.donationAmount;
        const donationColor = donationAmount > 50 ? 'blue': 'red';
        this.setState({ donationColor });
    }
    render() {
        return this.props.render({
            donationColor: this.state.donationColor
        });
    }
};

export default WrappedComponent;