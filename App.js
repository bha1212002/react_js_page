import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
      <>
        <section classname="signup">
          <div classname="container mt-5">
            <div classname ="signup-content">

            

              <div classname="signup-form">
                <h2 classname="form-title">Sign-Up</h2>
                <form className="register-form" id="register=form">

                   <div classname="form-group">
                    <label htmlFor="name">
                      <i classname="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="text" name="name" id="name" autoComplete="off" placeholder="Your Name"/>
                   </div>

                   <div classname="form-group">
                    <label htmlFor="email">
                      <i classname="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="email" name="email" id="email" autoComplete="off" placeholder="Your email"/>
                   </div>

                   <div classname="form-group">
                    <label htmlFor="phone">
                      <i classname="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="number" name="number" id="number" autoComplete="off" placeholder="Your Phone No."/>
                   </div>

                   <div classname="form-group">
                    <label htmlFor="password">
                      <i classname="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Enter Password"/>
                   </div>

                   <div classname="form-group">
                    <label htmlFor="password">
                      <i classname="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input type="password" name="cpassword" id="cpassword" autoComplete="off" placeholder="Confirm Your Password"/>
                   </div>

                   <div classname="form-group">
                    <input type="submit" name="signup" className="form-submit" value="Register"/>
                   </div>
                </form>
              </div>
                  
            </div>
          </div>
        </section>
      </>
  )
}

export default App;
