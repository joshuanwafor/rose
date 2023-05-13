import { pageDataManager } from "../../src/store/pageData";

export const SiteCover = () => {
  return (
    <div
      className="px-4 py-5 mb-5 text-center"
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: "url(https://wallpapercave.com/wp/wp9143643.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="display-5 fw-bold text-body-emphasis">
       {pageDataManager.site_meta.meta_title}
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Atypical leather goods</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};
