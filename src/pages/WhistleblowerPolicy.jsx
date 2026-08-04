import "./WhistleblowerPolicy.css";
function WhistleblowerPolicy() {
  return (
    <div className="wp-page">
      <div className="wp-hero">
        <h1>Whistleblower Policy</h1>
        <p className="wp-breadcrumb">Home &gt; Whistleblower &gt; Policy</p>
      </div>
      <div className="wp-container">
        <div className="wp-toolbar">
          <a href="/whistleblower-policy.pdf" download className="wp-download-btn">
            Download Policy PDF
          </a>
        </div>
        <div className="wp-pdf-frame">
          <iframe src="/whistleblower-policy.pdf" title="Whistleblower Policy" width="100%" height="800px"></iframe>
        </div>
      </div>
    </div>
  );
}

export default WhistleblowerPolicy;