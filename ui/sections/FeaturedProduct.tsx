

export const FeaturedProduct = () => {
    return <div className="bg-light py-5">
        <div className="container my-5">
            <div className="row align-bottom align-items-center">
                <div className="col-md-7 order-md-2">
                    <h2 className="lh-1">Product title goes here</h2>
                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor perspiciatis facere saepe exercitationem optio suscipit impedit, molestias ex! Eum exercitationem ratione enim quaerat blanditiis nihil animi, rem dolorem sapiente quisquam?</p>
                    <p>10,000</p>
                    <button className="btn btn-primary btn-lg">View</button>
                </div>
                <div className="col-md-5 order-md-1">
                    <div style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        paddingTop: "100%",
                        backgroundImage: "url(https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/32a3afc2-44a9-48db-87ca-b31ceae6c29a/air-max-97-shoes-dLLc6f.png)"
                    }} />
                </div>
            </div>
        </div>
    </div>
}