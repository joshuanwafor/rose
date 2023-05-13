import Link from "next/link";
import { pageDataManager } from "../../src/store/pageData";

export const SiteCover = () => {
  let display_name = `welcome to ${pageDataManager.site_meta.display_name}`;
  let meta_title = pageDataManager.site_meta?.site_meta?.meta_title;
  let meta_description = pageDataManager.site_meta?.site_meta?.meta_description;
  let met_cover =
    pageDataManager.site_meta?.site_meta?.cover_photo ??
    "https://wallpapercave.com/wp/wp9143643.jpg";
    
  return (
    <div
      className="px-4 py-5 mb-5 text-center"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${met_cover})`,
      }}
    >
      <h1 className="display-5 fw-bold text-body-emphasis">
        {pageDataManager.site_meta.meta_title}
      </h1>
      <div className="col-lg-6 mx-auto">
        <h3 className="mb-4">{meta_title ?? display_name}</h3>
        <p>{meta_description}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Link href={"/catalog"}>
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
