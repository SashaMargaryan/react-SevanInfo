import React , { Component } from 'react';
import s from './form.module.css';

export default class Form extends Component {

    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        mobile: '',
        nameError: '',
        lastnameError: '',
        mobileError: '',
        emailError: '',
        sent: false
    };

    handleName = (e) => {
        this.setState({
            name: e.target.value
        });
    };
    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        });
    };
    handleMobile = (e) => {
        this.setState({
            mobile: e.target.value
        });
    };
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };
    handleMessage = (e) => {
        this.setState({
            message: e.target.value
        });
    };

    formSubmit = (e) => {
        e.preventDefault();
        // let data = {
        //     name: this.state.name,
        //     lastname: this.state.lastname,
        //     mobile: this.state.mobile,
        //     email: this.state.email,
        //     message: this.state.message
        // };
        
        //     axios.post('/api/forma', data)
        // .then(res => {
        //     this.setState({
        //         sent: true,
                
        //     },this.resetForm())
        // }).catch(() => {
        //     console.log("message not sent!!!");
        // })




        

       

    };

    resetForm = () => {
        this.setState({
            name: '',
            lastname: '',
            email: '',
            mobile: '',
            message: '',
            nameError: '',
            lastnameError: '',
            mobileError: '',
            emailError: ''
            
        });

        setTimeout(() => {
            this.setState({
                sent: false
            })
        }, 3000);
    }
   

    render() {
        const {nameError, lastnameError, mobileError, emailError} = this.state;
        return (
            <div className={s.container}>
                <form onSubmit={this.formSubmit} >
                    <div className="sigle">
                        <label htmlFor="name" className={s.label}> Name</label>
                        <br />
                        <input 
                            type="text" 
                            name="name" 
                            className={s.name} 
                            placeholder="your name..."
                            value={this.state.name}
                            onChange={this.handleName} 
                        />
                        <br />
                        <span className={s.span}>
                            {nameError}
                        </span>
                        <span className={s.focusBord}></span>
                        
                    </div>

                    <div className="sigle">
                        <label htmlFor="lastname" className={s.label}>Lastname</label>
                        <br />
                       
                        <input 
                            type="text" 
                            name="lastname" 
                            className={s.name} 
                            placeholder="your lastname..." 
                            value={this.state.lastname}
                            onChange={this.handleLastname}
                        />
                          <br />
                        <span className={s.span}>
                            {lastnameError}
                        </span>
                          <span className={s.focusBord}></span>
                        
                    </div>

                    <div className="sigle">
                        <label htmlFor="mobile" className={s.label}>Mobile</label>
                        <br />
                       
                        <input 
                            type="text" 
                            name="mobile" 
                            className={s.name} 
                            placeholder="your mobile..."
                            value={this.state.mobile}
                            onChange={this.handleMobile} 
                            required
                        />
                          <br />
                        <span className={s.span}>
                            {mobileError}
                        </span>
                          <span className={s.focusBord}></span>
                        
                    </div>

                    <div className="sigle">
                        <label htmlFor="email" className={s.label}>Email</label>
                        <br />
                      
                        <input 
                            type="text" 
                            name="email" 
                            className={s.name} 
                            placeholder="your email..."
                            value={this.state.email}
                            onChange={this.handleEmail} 
                            
                        />
                          <br />
                        <span className={s.span}>
                            {emailError}
                        </span>
                          <span className={s.focusBord}></span>
                        
                    </div>

                    <div className="sigle">
                        <label htmlFor="message" className={s.label}>Message</label>
                        <br />
                       
                        <textarea 
                        
                            name="message" 
                            cols="30" rows="5" 
                            placeholder="your message"
                            className={s.textMessage}
                            value={this.state.message}
                            onChange={this.handleMessage}
                        />
                         <span className={s.focusBord}></span>
                    </div>
                    <div>
                        <button className='btn btn-danger'  type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}