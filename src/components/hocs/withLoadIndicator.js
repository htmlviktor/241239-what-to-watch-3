import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withLoadIndicator = (Component) => {
  class WithLoadIndicator extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true
      };
    }

    componentDidUpdate(prevProps) {
      if (prevProps.item !== this.props.item) {
        this.setState({isLoading: false});
      }
    }


    render() {
      console.log(this.state.isLoading)
      if (this.state.isLoading) {
        return <div>Загрузка...</div>;
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
