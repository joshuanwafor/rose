import Head from 'next/head';
import Script from 'next/script';
import { ProductCard } from '../ui/organisms/ProductCard';
import { RenderProductsMin } from '../ui/sections/RenderProductsMin';
import { SiteCover } from '../ui/sections/SiteCover';
import { AppTemplate } from '../ui/templates/AppTemplate';
import { GetServerSidePropsContext } from 'next';
import { getPageData } from '../lib';
import { pageDataManager } from '../src/store/pageData';

export default function Home() {
  return (
    <AppTemplate>
      <div className='container my-5'>
        <div className="d-flex justify-content-between">
          <h3>Products</h3>

        </div>
        <div className="d-flex justify-content-between my-2">
          <div>
            <span>Filter: </span>

            <span className="dropdown mx-3">
              <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Availability
              </span>
              <ul className="dropdown-menu">

                <li><a className="dropdown-item" href="#">In-stock</a></li>
                <li><a className="dropdown-item" href="#">Out of stock</a></li>
              </ul>
            </span>

            <span className="dropdown mx-3">
              <span className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Price
              </span>
              <ul className="dropdown-menu">

                <li><a className="dropdown-item" href="#">In-stock</a></li>
                <li><a className="dropdown-item" href="#">Out of stock</a></li>
              </ul>
            </span>
          </div>
          <span>35 Products </span>
        </div>
        <div className="row my-3">
          {pageDataManager.products.map(e => {
            return <div className="col-6 col-md-3 mb-2">
              <ProductCard  product={e}/>
            </div>
          })}
        </div>
      </div>
    </AppTemplate>
  )
}



export async function getServerSideProps({ req, res, resolvedUrl, params }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  const origin = req.headers.host;
  return {
    props: getPageData(origin)// will be passed to the page component as props
  }
}