import Link from "next/link";

const BrandLogo = ({ imageSrc }) => {
  const defaultImageSrc = "/images/logo/logo-dark.svg";
  const logoSrc = imageSrc || defaultImageSrc;

  return (
    <div className="brand-logo">
      <Link href="/">
        <img src={logoSrc} alt="" className="light-version-logo" />
      </Link>
    </div>
  );
};

export default BrandLogo;
