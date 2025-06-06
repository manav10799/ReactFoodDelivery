import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { name, bio, avatar } = this.props;
    return (
      <div className="rounded-lg shadow-xl w-[300px] m-4 p-4">
        <div className="flex justify-between">
          <div>
            Name: <span className="text-xl">{name}</span>
          </div>
          <img src={avatar} className="h-[32px] rounded-[50px]" />
        </div>
        <h3>Bio: {bio}</h3>
        <h4>Contact: manav@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
