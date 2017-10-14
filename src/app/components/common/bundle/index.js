import React from 'react';

export default class Bundle extends React.Component {

    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    };
    
    constructor(props) {
       super(props); 
    }

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });
        props.load().then((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        if (!this.state.mod)
            return false;
        return this.props.children(this.state.mod)
    }
}
