function Registration(){
return(
<div className="row justify-content-center">
  <div className="col-6">
    <div className="container mt-5 shadow border border-primary border-2 rounded pt-3">
      <h2 className="text-center text-primary">Login</h2>
      <form className="px-4 py-3">
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="firstName" placeholder="First Name" />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="gender">Gender</label>
            <select className="form-control" id="gender">
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-3">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" placeholder="Age" />
          </div>
        </div>
        <div className="form-floating mb-3">
          <input type="tel" className="form-control" id="mobile" placeholder="Mobile" />
          <label htmlFor="mobile">Mobile</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-4">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

)
}

export default Registration