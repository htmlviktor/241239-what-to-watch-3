import React from 'react';
import PropTypes from 'prop-types';

const LoadIndicator = () => (
  <div className={`load-indicator`}>Загрузка...</div>
);

const withLoadIndicator = (Component) => {
  class WithLoadIndicator extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };
    }

    componentDidUpdate(prevProps) {
      if (this.props.item) {
        if (prevProps.item !== this.props.item) {
          this.setState({isLoading: false});
        }
      }
    }

    componentDidMount() {
      if (this.props.item) {
        this.setState({isLoading: false});
      }
    }


    render() {
      if (this.state.isLoading) {
        return <LoadIndicator/>;
      }
      return (
        <Component {...this.props}/>
      );
    }
  }

  WithLoadIndicator.propTypes = {
    item: PropTypes.object
  };


  return WithLoadIndicator;

};

export default withLoadIndicator;
