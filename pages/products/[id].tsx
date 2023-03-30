import Head from 'next/head';
import Script from 'next/script';
import { RenderProductsMin } from '../../ui/sections/RenderProductsMin';
import { AppTemplate } from '../../ui/templates/AppTemplate';

export default function ViewProduct() {
    return (
        <AppTemplate>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c090c62f-a2d1-4ae6-8e84-f454d6e93b46/air-zoom-gt-cut-2-basketball-shoes-tmfmFl.png'
                            className='img-fluid' />
                    </div>
                    <div className='col-md-6'>
                        <h1>Product name goes here</h1>
                        <div className='my-2'>
                            <span>$100,000</span>
                            <span className='badge'>Sale</span>

                        </div>
                        <div className='my-2'>
                            <button className='btn btn-primary btn-lg w-100'>Add to cart</button>
                            <button className='btn btn-lg w-100'>Buy now</button>
                        </div>
                        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum dolores eaque voluptates exercitationem aperiam, voluptatem aliquam modi magnam iste quod velit, tempora eligendi repellat excepturi, qui ea porro eius.</p>
                    </div>
                </div>
            </div>

            <RenderProductsMin />
        </AppTemplate>
    )
}
