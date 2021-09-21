import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const Form = (props) => {
  const [userinput, setUserInput] = useState({
    textfield: "",
    phone: "",
    name: "",
    email: "",
    rd1: "",
    rd2: "",
    rd3: "",
    rd4: ""
  });
  const [success, setSuccess] = useState('')
  

  const add = (e) => {
   e.preventDefault();
    setSuccess("Thank you for your valuable feedback!!")
    props.addDataHandler(userinput);
   
    
};
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
 

  return (
    <form id="myform" onSubmit={add}>
      <div class="row">
      <h5 className="success mt-3" style={{color:'green'}}>{success}</h5>
        <div class="col">
          <div class="mb-3 mt-3">
            <label for="text" class="form-label">
              Text Field
            </label>
            <input
            
              type="text"
              name="textfield"
              class="form-control"
              id="text"
              placeholder="Hello"
              onChange={handleChange}
              value={userinput.textfield}
              required
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone Field
            </label>

            <input
              name="phone"
              type="tel"
              class="form-control"
              id="phone"
              placeholder="1267893423"
              onChange={handleChange}
              value={userinput.phone}
              required
            />
          </div>
          <div class="mb-3 ">
            <label class="form-label" for="name">
              Name*
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              id="name"
              placeholder="Please Enter Name"
              onChange={handleChange}
              value={userinput.name}
              required
            />
          </div>
        </div>
        <div class="col">
          <div class="mb-3 mt-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="email"
              onChange={handleChange}
              value={userinput.email}
              required
            />

            <div class="row mb-3 mt-3">
              <label for="rb1" class="form-label">
                Please rate the quality of the service you received from your
                host
              </label>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd1"
                    id="excellent"
                    value="excellent"
                  
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="excellent">
                    Excellent
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd1"
                    id="good"
                    value="good"
                  
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="good">
                    Good
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd1"
                    id="fair"
                    value="fair"
                  
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="fair">
                    Fair
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd1"
                    id="bad"
                    value="bad"
                 
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="bad">
                    Bad
                  </label>
                </div>
              </div>
            </div>
            <div class="row mb-3 mt-3">
              <label for="rb1" class="form-label">
                Please rate the quality of your beverage.
              </label>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd2"
                    id="excellent"
                    value="excellent"
                 
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="excellent">
                    Excellent
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd2"
                    id="good"
                    value="good"
                  
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="good">
                    Good
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd2"
                    id="fair"
                    value="fair"
                   
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="fair">
                    Fair
                  </label>
                </div>
              </div>
              <div class="col">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="rd2"
                    id="bad"
                    value="bad"
                
                    onChange={handleChange}
                  />
                  <label class="form-check-label" for="bad">
                    Bad
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <label for="rb1" class="form-label">
              Was our restaurnat Clean?
            </label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd3"
                  id="excellent"
                  value="excellent"
                 
                  onChange={handleChange}
                />
                <label class="form-check-label" for="excellent">
                  Excellent
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd3"
                  id="good"
                  value="good"
              
                  onChange={handleChange}
                />
                <label class="form-check-label" for="good">
                  Good
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd3"
                  id="fair"
                  value="fair"
            
                  onChange={handleChange}
                />
                <label class="form-check-label" for="fair">
                  Fair
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd3"
                  id="bad"
                  value="bad"
                 
                  onChange={handleChange}
                />
                <label class="form-check-label" for="bad">
                  Bad
                </label>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <label for="rb1" class="form-label">
              Please rate your overall dining experience
            </label>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd4"
                  id="excellent"
                  value="excellent"
               
                  onChange={handleChange}
                />
                <label class="form-check-label" for="excellent">
                  Excellent
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd4"
                  id="good"
                  value="good"
              
                  onChange={handleChange}
                />
                <label class="form-check-label" for="good">
                  Good
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="rd4"
                  id="fair"
                  value="fair"
                 
                  onChange={handleChange}
                />
                <label class="form-check-label" for="fair">
                  Fair
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  class="form-check-input check"
                  type="radio"
                  name="rd4"
                  value="bad"
                
                  onChange={handleChange}
                  
                />
                <label class="form-check-label" for="bad">
                  Bad
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-success "
        style={{ float: "right", marginTop: "30px" }}
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
