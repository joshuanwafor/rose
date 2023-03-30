import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return <div>
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script> */}
        <Component {...pageProps} />
        {/* <script type="text/javascript" src="/scripts/tiny.slider.js"></script> */}
    </div>
}