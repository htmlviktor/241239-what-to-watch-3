import React, {PureComponent} from 'react';
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import SignInForm from "../../containers/sign-in-form";


class SignInPage extends PureComponent {

  componentDidMount() {
    document.body.classList.add(`user-page`);
  }

  componentWillUnmount() {
    document.body.classList.remove(`user-page`);
  }

  render() {

    return (
      <React.Fragment>
        <Header />
        <SignInForm />
        <Footer />
      </React.Fragment>
    );
  }
};


export default SignInPage;
