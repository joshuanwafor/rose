

export const ProductCard = () => {
    return <div>
        <div style={{
                paddingTop: "100%",
          
            backgroundPosition:"center",
            backgroundSize:"contain",
        
            backgroundImage: "url(https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b0981ff-45f8-40c3-9372-32430a62aaea/dunk-high-womens-shoes-L3Tqlr.png)"
        }} />
        <p className="mt-2">Product name goes here</p>
        <p>$10,000</p>
    </div>
}