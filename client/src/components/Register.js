const Register = () => {
    return (
        <div>
            <form action="">
                <h1>Register Account</h1>
                <label htmlFor="">Email: </label>
                <input type="email" name="email" id=""/>

                <label htmlFor="">Password: </label>
                 <input type="password" name="password" id=""/>

                <label htmlFor="">Re-Enter Password</label>
                <input type="password" name="password-repeat" id=""/>                              

            </form>
        </div>
    )
}

export default Register
