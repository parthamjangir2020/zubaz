const ContentSectionOne = () => {
  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="zubuz-thumb thumb-pr">
              <img src="/images/v1/mocup01.png" alt="" />
              <div className="zubuz-thumb-card">
                <img src="/images/v1/card1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-flex align-items-center">
            <div className="zubuz-default-content">
              <h2>Easily monitor all financial activitie</h2>
              <p>
                Users can input their income & expenses, categorize
                transactions, and view reports and summaries of their spending
                habits.
              </p>
              <div className="zubuz-extara-mt">
                <p>
                  <span className="font-semibold">Budgeting:</span> It enables
                  effective budgeting and expense tracking, helping you stay on
                  top of your financial goals.
                </p>
                <p>
                  <span className="font-semibold">Expense Tracking:</span> Users can
                  input their income & expenses, categorize transactions, and
                  view reports and summaries of their spending habits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
