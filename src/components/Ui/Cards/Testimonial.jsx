/* eslint-disable react/no-unescaped-entities */

const TestimonialCard = ({ title, description, avatar, name, role }) => {
  return (
    <div className="col-lg-6">
      <div className="zubuz-testimonial-wrap">
        <div className="zubuz-testimonial-rating">
          <ul>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
            <li>
              <img src="/images/icon/star-green.svg" alt="" />
            </li>
          </ul>
        </div>
        <div className="zubuz-testimonial-data">
          <h3>{title}</h3>
          <p>"{description}"</p>
        </div>
        <div className="zubuz-testimonial-author">
          <div className="zubuz-testimonial-author-thumb">
            <img src={avatar} alt="" />
          </div>
          <div className="zubuz-testimonial-author-data">
            <span>{name}</span>
            <p>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
