import FeatureCardTwo from "~/components/Ui/Cards/FeatureTwo";

const FeatureSection = () => {
  return (
    <div className="section zubuz-section-padding3">
      <div className="container">
        <div className="zubuz-section-title center">
          <h2>Features to improve your financial life</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <FeatureCardTwo
              icon="/images/v2/icon-v2-1.png"
              title="Sales pipeline management:"
              description="Visualize your sales process, track opportunities, and forecast revenue with pipeline management tools."
              image="/images/v2/card-v2-1.png"
            />
            <FeatureCardTwo
              icon="/images/v2/icon-v2-3.png"
              title="Sales pipeline management:"
              description="Visualize your sales process, track opportunities, and forecast revenue with pipeline management tools."
              image="/images/v2/card-v2-3.png"
            />
          </div>
          <div className="col-lg-6">
            <FeatureCardTwo
              icon="/images/v2/icon-v2-2.png"
              title="Sales pipeline management:"
              description="Visualize your sales process, track opportunities, and forecast revenue with pipeline management tools."
              image="/images/v2/card-v2-2.png"
            />
            <FeatureCardTwo
              icon="/images/v2/icon-v2-4.png"
              title="Sales pipeline management:"
              description="Visualize your sales process, track opportunities, and forecast revenue with pipeline management tools."
              image="/images/v2/card-v2-4.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
