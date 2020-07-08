import React from "react";

class UserItem extends React.Component {
  // You can also do - "class UserList extends Component",
  // just that you'd have to import React this way -
  // import React, {Component} from "react".
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.phone}</h3>
        <h3>{this.props.email}</h3>
        <h3>{this.props.location}</h3>
        <h3>{this.props.amount}</h3>
        <h3>{this.props.interest}</h3>
        <h3>{this.props.repayment}</h3>
      </div>
    );
  }
}

export default UserItem;
