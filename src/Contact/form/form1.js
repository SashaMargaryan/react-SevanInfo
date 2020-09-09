import React , { useEffect , useState } from 'react';
import s from './form.module.css';
// import * as emailjs from 'emailjs-com';


// Translation Higher Order Component
import {
	setTranslations,
	setDefaultLanguage,
	setLanguageCookie,
	setLanguage,
	translate,
  } from 'react-switch-lang';


  import en from '../../en.json';
  import am from '../../am.json';


  // Do this two lines only when setting up the application
setTranslations({ en, am });
setDefaultLanguage('en');
 
// If you want to remember selected language
setLanguageCookie();



const Form = (props) => {

    const {obj1 } = props;
    const {t} = props;
    const [values , setValues] = useState(
        {
        name: '',
        lastname: '',
        email: '',
        message: '',
        mobile: '',
        }
    );
    const [nameError , setNameError] = useState('');
    const [lastnameError , setLastnameError] = useState('');
    const [mobileError , setMobileError] = useState('');
    const [emailError , setEmailError] = useState('');
    const [sent , setSent] = useState(false);
    




    const handleChange = (e) => {
       
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setValues({
            ...values,
            [name]:value,
        })
       
    }



    const handleSubmit =  (e) => {
        e.preventDefault();
     
       
        // let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        // let mobileno = new RegExp(/^[0-9]{9}$/);
        // let nameLastnameReg = new RegExp(/^[a-zA-Z ]*$/);
        
        // if(!values.name.match(nameLastnameReg) || values.name.length == 0) {
        //     setNameError((`mapInfo.${obj1.id}.nameError`))
        // }else {
        //     setNameError("")
        // };
        
        // if(!values.lastname.match(nameLastnameReg) || values.lastname.length == 0) {
        //     setLastnameError((`mapInfo.${obj1.id}.lastnameError`))
        // }else {
        //     setLastnameError('')
        // }
        // if(!values.mobile.match(mobileno)) {
        //     setMobileError((`mapInfo.${obj1.id}.mobileError`))
        // }else {
        //     setMobileError("")
        // }
        // if(!values.email.match(pattern)) {
        //     setEmailError((`mapInfo.${obj1.id}.emailError`))
        // }else {
        //     setEmailError("")
        // }  

        // if(values.name.match(nameLastnameReg) && values.name.length > 0 && values.lastname.length > 0 && values.lastname.match(nameLastnameReg) && values.mobile.match(mobileno) && values.email.match(pattern)) {
        //     emailjs
        //     .sendForm(
        //         "mail_ru",
        //         "sendmessage",
        //         ".contact_form_class",
        //         "user_XNRgv3wQysDc5QzFXjDxj"
        //     ).then().catch();
        // }
        // resetForm();
    }




    const  resetForm = () => {

        setValues({
            name: '',
        lastname: '',
        email: '',
        message: '',
        mobile: '',
        });

        setTimeout(() => {
            setSent(false)
        }, 3000);
    }







    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className='contact_form_class' >
                <div className="sigle">
                    <label htmlFor="name" className={s.label}> {t(`mapInfo.${obj1.id}.name`)}</label>
                    <br />
                    <input 
                        type="text" 
                        name="name" 
                        className={s.name} 
                        placeholder={t(`mapInfo.${obj1.id}.name`)}
                        value={values.name}
                        onChange={handleChange} 
                    />
                    <br />
                    <span className={s.span}>
                        {t(nameError)}
                       
                    </span>
                    <span className={s.focusBord}></span>
                    
                </div>

                <div className="sigle">
                    <label htmlFor="lastname" className={s.label}>{t(`mapInfo.${obj1.id}.lastName`)}</label>
                    <br />
                   
                    <input 
                        type="text" 
                        name="lastname" 
                        className={s.name} 
                        placeholder={t(`mapInfo.${obj1.id}.lastName`)} 
                        value={values.lastname}
                        onChange={handleChange}
                    />
                      <br />
                    <span className={s.span}>
                        {t(lastnameError)}
                    </span>
                      <span className={s.focusBord}></span>
                    
                </div>

                <div className="sigle">
                    <label htmlFor="mobile" className={s.label}>{t(`mapInfo.${obj1.id}.mobile`)}</label>
                    <br />
                   
                    <input 
                        type="text" 
                        name="mobile" 
                        className={s.name} 
                        placeholder={t(`mapInfo.${obj1.id}.mobile`)}
                        value={values.mobile}
                        onChange={handleChange} 
                        required
                    />
                      <br />
                    <span className={s.span}>
                        {t(mobileError)}
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
                        placeholder="email"
                        value={values.email}
                        onChange={handleChange} 
                        
                    />
                      <br />
                    <span className={s.span}>
                        {t(emailError)}
                    </span>
                      <span className={s.focusBord}></span>
                    
                </div>

                <div className="sigle">
                    <label htmlFor="message" className={s.label}>{t(`mapInfo.${obj1.id}.message`)}</label>
                    <br />
                   
                    <textarea 
                    
                        name="message" 
                        cols="30" rows="5" 
                        placeholder={t(`mapInfo.${obj1.id}.message`)}
                        className={s.textMessage}
                        value={values.message}
                        onChange={handleChange}
                    />
                     <span className={s.focusBord}></span>
                </div>
                <div>
                    <button className='btn btn-danger'  type="submit">{t(`mapInfo.${obj1.id}.but`)}</button>
                </div>
            </form>
        </div>
    )

}
export default  translate(Form) ;