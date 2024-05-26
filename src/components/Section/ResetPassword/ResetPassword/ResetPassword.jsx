const ResetPasswordForm = () => {
  return (
    <div className="section zubuz-extra-section">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Reset Password</h2>
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
            <button id="zubuz-account-btn" type="submit">
              <span>Change password</span>
            </button>
            <div className="zubuz-account-bottom m-0">
              <p>
                If you didn’t request a password recovery link, please ignore
                this.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
