import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Head from "next/head";
import "./assets/css/main.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Designer & Developer - Portfolio| Karthikeya Varanasi",
  description: "Looking for the best web developer near you? With over 3 years of professional experience, I create exceptional websites, optimize navigation flows, and deliver industrial-standard designs. From e-commerce sites to customer support portals and charity platforms, my work is recognized for innovation, efficiency, and smooth user experiences. Trusted by businesses in Hyderabad and beyond for top-notch web development and creative branding solutions.",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Karthikeya Varanasi" />

        <link rel="icon" type="image/png"  href="../../public/img/faviicon.png" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@Karthikeya Varanasi" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:app:name:iphone" content="Personal Portfolio" />
        <meta name="twitter:app:id:iphone" content="NA" />
        <meta name="twitter:app:name:ipad" content="Personal Portfolio" />
        <meta name="twitter:app:id:ipad" content="NA" />
        <meta name="twitter:app:name:googleplay" content="Personal Portfolio" />
        <meta name="twitter:app:id:googleplay" content="NA" />
        <meta name="twitter:app:country" content="India" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
        {children}

        <Footer/>
        
      <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous" 
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous" // Fix: changed from 'crossorigin' to 'crossOrigin'
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous" // Fix: changed from 'crossorigin' to 'crossOrigin'
        ></script>
         <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-G0W7H2Y504"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0W7H2Y504');
          `}
        </Script>
      </body>
    </html>
  );
}
