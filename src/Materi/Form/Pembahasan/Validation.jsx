import React from 'react';
const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>{label} :</label><br />
            <input type={type} name={name} onChange={e=>onChange(e.target.value)}/><br />
        </div>
    )
};

const TampilkanError = ({errors}) => {
    return (
        <ul style={{color:'red'}}>
            {
                errors.map((error, i) => <li key="">{error}</li>)
            }
            
        </ul>
    )
}

export default class Validation extends React.Component{
    state = {
        email:'',
        password:'',
        errors: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;

        let message = [];

        if (email.length===0){
            message = [...message, 'Email tidak boleh kosong']
        }

        if (password.length===0){
            message = [...message, 'Password tidak boleh kosong']
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }

        if(password.length<8){
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length>0){
            this.setState({errors:message}, () => console.log(this.state.errors))
        }else {
            alert(`
            email: ${this.state.email}
            password: ${this.state.password}
            `);
            this.setState({
                errors: []
            })
        }
    }
    render(){
        const tampilan = {
                width: '400px',
                margin: '20px auto 0',
                border: '1px solid blue',
                background: 'lightblue',
                padding:'10px',
                textAlign: 'left'
        }

        return(
            <div style={tampilan}>
                {
                    this.state.errors && <TampilkanError errors={this.state.errors} />
                }
               <form onSubmit={this.handleSubmit}>
                    <Input type="email" name='email' label='Email' placeholder='Masukkan Email Anda' onChange={value=>this.setState({email: value})}/>
                    <Input type="password" name='password' label='Password' placeholder='Masukkan Password Anda' onChange={value=>this.setState({password: value})}/>
                    <br />
                    <button type="submit">Log In</button>
               </form>
               
            </div>
        )
    }
}