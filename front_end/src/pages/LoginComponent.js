function LogIn(){

return(
<div className="row justify-content-center">
  <div className="col-6">
    <div className="container mt-5 shadow border border-primary border-2 rounded pt-3">
      <h2 className="text-center text-primary">Login</h2>
      <form className="px-4 py-3">
        <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Email address</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
  <label for="floatingPassword">Password</label>
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

export default LogIn