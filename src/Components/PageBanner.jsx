import defaultHeroImg from "../assets/hero2.png";

function PageBanner({ title, image }) {
  const bannerImage = image || defaultHeroImg;

  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="page-banner-overlay">
        <h1>{title}</h1>
        <p className="breadcrumb">HOME &gt; / {title.toUpperCase()}</p>
      </div>
    </section>
  );
}

export default PageBanner;