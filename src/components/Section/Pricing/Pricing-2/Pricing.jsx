import Link from "next/link";

const PricingSectionTwo = () => {
  return (
    <>
      <div className="zubuz-divider"></div>

      <div className="section zubuz-section-padding3">
        <div className="container">
          <div className="zubuz-section-title zubuz-two-column-title">
            <div className="row">
              <div className="col-lg-7">
                <h2>Wide range of SaaS solutions</h2>
              </div>
              <div className="col-lg-5 d-flex align-items-center">
                <p>
                  Discovered our all customized services and you can double,
                  triple, or quadruple your income & beat your competition with
                  professional services!
                </p>
              </div>
            </div>
          </div>

          <div className="zubuz-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Feature Name:</th>
                  <th>Starter</th>
                  <th>Business</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Users</td>
                  <td>Up to 15 users</td>
                  <td>Up to 20 users</td>
                  <td>Up to 100 users</td>
                </tr>
                <tr>
                  <td>File storage</td>
                  <td>2 GB</td>
                  <td>5 GB</td>
                  <td>10 GB</td>
                </tr>
                <tr>
                  <td>Premium supports</td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Secure transfer</td>
                  <td>
                    <img src="/images/icon/minus.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/minus.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Statistics and tracking</td>
                  <td>
                    <img src="/images/icon/minus.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <td>File size limit</td>
                  <td>100 MB</td>
                  <td>1 GB</td>
                  <td>1 GB</td>
                </tr>
                <tr>
                  <td>Mobile app</td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                  <td>
                    <img src="/images/icon/check.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Get Started Now</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Get Started Now</span>
                    </Link>
                  </td>
                  <td>
                    <Link className="zubuz-default-btn" href="contact-us">
                      <span>Get Started Now</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSectionTwo;
