import firebaseApp from '../../utils/firebase'
import 'firebase/auth'
const Register = ({ history }) => {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value
        const password = e.target.password.value
        firebaseApp.auth().createUserWithEmailAndPassword(username, password)
           
        .then(
            history.push('/')
        )
    }
    return (
         <section className="register">
        <form onSubmit={onRegisterSubmitHandler}>
             <fieldset>
                 <legend>Register</legend>
                 <p className="field">
                     <label for="username">Username</label>
                     <span className="input">
                         <input type="text" name="username" id="username" placeholder="Username" />
                         <span className="actions"></span>
                         <i className="fas fa-user"></i>
                     </span>
                 </p>
                 <p className="field">
                     <label for="password">Password</label>
                     <span className="input">
                         <input type="password" name="password" id="password" placeholder="Password" />
                         <span className="actions"></span>
                         <i className="fas fa-key"></i>
                     </span>
                 </p>
                 <input className="button" type="submit" className="submit" value="Register" />
             </fieldset>
         </form>
     </section>
    )
}
export default Register
