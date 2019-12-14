import React, {Component} from 'react';
import styles from './Form.module.scss';



class Form extends Component {
    state = { 
        fields:{},
        errors:{},
        response:"",
        
     }

   


    

    handleChange(field, e){    		
      let fields = this.state.fields;
      fields[field] = e.target.value; 
      console.log(e.target.value)      
      this.setState({fields});
      console.log(fields)
    }
      

 

 

      handleSubmit=(e)=>{
        e.preventDefault();
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
 
        //name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Pole nie może być puste";
        }
 
        if(typeof fields["name"] !== "undefined" && !fields["name"] === false){
           if(!fields["name"].match(/^[\D]{3,}\s+[\D]{3,}$/)){
              formIsValid = false;
              errors["name"] = "Proszę użyć jedynie liter we właściwym formacie";
           }
        }
 
        //email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Pole nie może być puste";
        }
 
        if(typeof fields["email"] !== "undefined" && !fields["email"] === false){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
 
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Proszę wpisać email we właściwym formacie";
            }
       }
 
     //telephone
     if(!fields["telephone"]){
      formIsValid = false;
      errors["telephone"] = "Pole nie może być puste";
   }

   if(typeof fields["telephone"] !== "undefined" && !fields["telephone"] === false){
      if(!fields["telephone"].match(/^[0-9]{9}$/)){
         formIsValid = false;
         errors["telephone"] = "Proszę wpisać numer telefonu w formacie 9 cyfr";
      }
   }

     //post
     if(!fields["post"]){
      formIsValid = false;
      errors["post"] = "Pole nie może być puste";
   }

   if(typeof fields["post"] !== "undefined" && !fields["post"] === false){
      if(!fields["post"].match(/^[0-9]{2}-[0-9]{3}$/)){
         formIsValid = false;
         errors["post"] = "Proszę wpisać kod pocztowy we właściwym formacie";
      }
   }

     //place
     if(!fields["place"]){
      formIsValid = false;
      errors["place"] = "Pole nie może być puste";
   }

   if(typeof fields["place"] !== "undefined" && !fields["place"] === false){
      if(!fields["place"].match(/^[\D]{3,}$/)){
         formIsValid = false;
         errors["place"] = "Proszę wpisać miejscowość używając samych liter";
      }
   }

     //street
     if(!fields["street"]){
      formIsValid = false;
      errors["street"] = "Pole nie może być puste";
   }

   if(typeof fields["street"] !== "undefined" && !fields["street"] === false){
      if(!fields["street"].match(/^[\D]{3,}$/)){
         formIsValid = false;
         errors["street"] = "Proszę wpisać nazwę ulicy używając samych liter";
      }
   }

     //houseNumber
     if(!fields["houseNumber"]){
      formIsValid = false;
      errors["houseNumber"] = "Pole nie może być puste";
   }

   if(typeof fields["houseNumber"] !== "undefined" && !fields["houseNumber"] === false){
      if(!fields["houseNumber"].match(/^[0-9]{1,}$/)){
         formIsValid = false;
         errors["houseNumber"] = "Proszę wpisać właściwy numer domu";
      }
   }

     //houseNumber2
       //houseNumber
     if(!fields["houseNumber2"]){
      formIsValid = false;
      errors["houseNumber2"] = "Pole nie może być puste";
   }

   if(typeof fields["houseNumber2"] !== "undefined" && !fields["houseNumber2"] === false){
      if(!fields["houseNumber2"].match(/^[0-9]{1,}$/)){
         formIsValid = false;
         errors["houseNumber2"] = "Proszę wpisać właściwy numer lokalu";
      }
   }



 
       this.setState({errors: errors});

       if(formIsValid){
         this.setState({
                  response:"FORMULARZ ZOSTAŁ WYSŁANY!",
                });
               
       }

       
       return formIsValid;
       
   }




    render() { 
        return ( 
            <div className={styles.divFormWrapper}>
            <p>wypełnij formularz</p>
            <form className={styles.formWrapper} onSubmit={this.handleSubmit}>
                <div className={styles.formDiv1}>
                <input type="text" ref="name" size="40" placeholder="* Imię i nazwisko" value={this.state.fields.name} onChange={this.handleChange.bind(this, "name")}/>
                <span className={styles.errorMessage}>{this.state.errors["name"]}</span>
                <input type="email" name="email"  placeholder="* E-mail" value={this.state.fields["email"]} onChange={this.handleChange.bind(this, "email")}/>
                <span className={styles.errorMessage}>{this.state.errors["email"]}</span>
                <input type="telephone" name="telephone"   placeholder="* Nr telefonu" value={this.state.fields["telephone"]} onChange={this.handleChange.bind(this, "telephone")}/>
                <span className={styles.errorMessage}>{this.state.errors["telephone"]}</span>
                <input type="text"  name="post"  placeholder="* Kod pocztowy" value={this.state.fields["post"]} onChange={this.handleChange.bind(this, "post")}/>
                <span className={styles.errorMessage}>{this.state.errors["post"]}</span>
                </div>
                <div className={styles.formDiv2}>
                <input type="text"  name="place"  placeholder="* Miejscowość" value={this.state.fields["place"]} onChange={this.handleChange.bind(this, "place")}/>
                <span className={styles.errorMessage}>{this.state.errors["place"]}</span>
                <input type="text" name="street"   placeholder="* Ulica" value={this.state.fields["street"]} onChange={this.handleChange.bind(this, "street")}/>
                <span className={styles.errorMessage}>{this.state.errors["street"]}</span>
                <input type="text" name="houseNumber"   placeholder="* Nr domu" value={this.state.fields["houseNumber"]} onChange={this.handleChange.bind(this, "houseNumber")}/>
                <span className={styles.errorMessage}>{this.state.errors["houseNumber"]}</span>
                <input type="text" name="houseNumber2"   placeholder=" Nr lokalu" value={this.state.fields["houseNumber2"]} onChange={this.handleChange.bind(this, "houseNumber2")}/>
                <span className={styles.errorMessage}>{this.state.errors["houseNumber2"]}</span>
                </div>
                <div className={styles.checkboxes}>
                <p>* pola wymagane</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent magna ante, pretium eget aliquam quis, ultricies in risus. Phasellus et lorem sem. Nullam at lorem sit amet purus consectetur vestibulum non pellentesque ligula. Curabitur dictum libero vitae nulla lobortis efficitur id vitae enim. </p>

               

                </div>
               <div className={styles.buttonForm}> <button type="submit" >Wyślij formularz</button></div>


            </form>
            <p className={styles.formResponse}>{this.state.response}</p>
            

            </div>
         );
    }
}
 
export default Form;