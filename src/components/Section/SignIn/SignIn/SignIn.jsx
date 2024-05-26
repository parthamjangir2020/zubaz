import Link from "next/link";

const SignInForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Welcome Back</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form>
            <div className="zubuz-account-field">
              <label>Enter email address</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="zubuz-account-field">
              <label>Enter Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="zubuz-account-checkbox-wrap">
              <div className="zubuz-account-checkbox">
                <input type="checkbox" id="check" />
                <label for="check">Remember me</label>
              </div>
              <Link className="forgot-password" href="reset-password">
                Forgot password?
              </Link>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>Sign in</span>
            </button>
            <div className="zubuz-or">
              <p>or</p>
            </div>
            <Link href="#" className="zubuz-connect-login">
              <img src="/images/icon/google.svg" alt="" />
              Sign up with Google
            </Link>
            <Link href="#" className="zubuz-connect-login">
              <img src="/images/icon/facebook.svg" alt="" />
              Sign up with Facebook
            </Link>

            <div className="zubuz-account-bottom">
              <p>
                Not a member yet? <Link href="sign-up">Sign up here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
