import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../Utils/UserContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manav10799");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  //   componentDidUpdate() {
  //     this.timer = setInterval(() => {
  //       console.log("helo");
  //     }, 1000);
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.timer);
  //   }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div>
        <div>
          Logged in user -
          <UserContext.Consumer>
            {(data) => data.loggedInUser}
          </UserContext.Consumer>
        </div>
        <UserClass name={name} bio={bio} avatar={avatar_url} />
      </div>
    );
  }
}

export default AboutClass;
