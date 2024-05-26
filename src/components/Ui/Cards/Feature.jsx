const FeatureCard = ({ title, icon, description }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="zubuz-iconbox-wrap center">
        <div className="zubuz-iconbox-icon">
          <img src={icon} alt={title} />
        </div>
        <div className="zubuz-iconbox-data">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
