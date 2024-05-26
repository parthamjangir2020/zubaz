import Link from "next/link";

const SignUpForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Create Account</h2>
        </div>
        <div className="zubuz-account-wrap">
          <form action="#">
            <div className="zubuz-account-field">
              <label>Enter your full name</label>
              <input type="text" placeholder="Adam Smith" />
            </div>
            <div className="zubuz-account-field">
              <label>Enter email address</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="zubuz-account-field">
              <label>Enter Password</label>
              <input type="password" placeholder="Enter Password" />
            </div>
            <div className="zubuz-account-checkbox">
              <input type="checkbox" id="check" />
              <label for="check">I have read and accept the </label>
            </div>
            <button id="zubuz-account-btn" type="submit">
              <span>Create account</span>
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
                Already have an account? <Link href="sign-in">Log in here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
