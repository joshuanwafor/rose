

export const SiteCover = () => {
    return <div className="px-4 py-5 mb-5 text-center"
        style={{
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: "url(https://editorialist.com/wp-content/uploads/2022/01/EYXFashion_NikeSneakers_Hero.jpeg)",

        }}>
        <h1 className="display-5 fw-bold text-body-emphasis">Industrial design meets fashion.</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Atypical leather goods</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Shop now</button>
            </div>
        </div>
    </div>
}