import React from "react";
import "./App.css";
import UserItem from './components/UserItem';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:"",
      phone:"",
      email:"",
      location:"",
      amount:"",
      interest:"",
      repayment:"",
      users: [],
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLoationChange = this.handleLoationChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleInterestChange = this.handleInterestChange.bind(this);
    this.handleRepaymentChange = this.handleRepaymentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
      this.setState({ name: e.target.value});
  }

  handlePhoneChange(e) {
     this.setState({ phone: e.target.value});
  }

  handleEmailChange(e) {
     this.setState({ email: e.target.value});
  }

  handleLoationChange(e) {
     this.setState({ location: e.target.value});
  }

  handleAmountChange(e) {
     this.setState({ amount: e.target.value});
  }

  handleInterestChange(e) {
     this.setState({ interest: e.target.value});
  }

  handleRepaymentChange(e) {
    this.setState({ repayment: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
   let newUser = { name: this.state.name, phone: this.state.phone, email: this.state.email,
  location: this.state.location, amount: this.state.amount, interest: this.state.interest, repayment: this.state.repayment };
  this.setState({ users: [...this.state.users, newUser] });
  }

  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div style={{width:'400px', height:'500px', backgroundColor:'#db7093', borderRight:'2px solid green', marginTop:'50px', paddingTop:'10px',borderRadius:'5px', boxShadow:'10px 10px 5px'}}>
        <h3 style={{textAlign:'center', color:'white'}}>Customer Loan Data Form</h3>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Name" value={this.state.name} 
            onChange={this.handleNameChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br />
            <input type="num" placeholder="Phone Number" value={this.state.phone} 
            onChange={this.handlePhoneChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br/>
            <input type="email" placeholder="Email" value={this.state.email} 
            onChange={this.handleEmailChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br />
            <input type="text" placeholder="Location" value={this.state.location} 
            onChange={this.handleLoationChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br/>
            <input type="num" placeholder="Loan Amount in GH¢" value={this.state.amount} 
            onChange={this.handleAmountChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br/>
            <input type="percentage" placeholder="Interest Rate" value={this.state.interest} 
            onChange={this.handleInterestChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px',borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br/>
            <input type="num" placeholder="Repayment Amount" value={this.state.repayment} 
            onChange={this.handleRepaymentChange} style={{marginLeft:'30px', height:'30px', borderRadius:'5px', width:'300px', marginTop:'15px', borderColor:'turquoise', backgroundColor:'lightgray'}} />
            <br/><br/>
            <input type="submit" style={{marginLeft:'130px', width:'100px', height:'30px', borderRadius:'10px', backgroundColor:'blue', fontSize:'18px', color:'red', color:'white', borderColor:'blue'}} />
          </form>
        </div>

        {/* List of users */}
        <div style={{width:'800px', height:'100vh', backgroundColor:'lightgray', borderRight:'2px solid green', marginTop:'50px', paddingTop:'10px',borderRadius:'5px', boxShadow:'10px 10px 5px', paddingLeft:'10px'}}>
          <h3 style={{textAlign:'left', textDecoration:'underline', color:'blue'}}>List of Customers</h3>
          {this.state.users.map(( user) =>(
           <UserItem name={user.name} phone={user.phone} email={user.email} location={user.location} amount={user.amount} interest={user.interest} repayment={user.repayment}/> )) }
        </div>
      </div>
    );
  }
}

export default App;
