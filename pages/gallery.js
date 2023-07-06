
import Layout from "../components/layout/Layout";
import Link from "next/link";
 
function Gallery() {

    return (
      <>
        <Layout headerStyle={"header-style-5"}>
            <section className="section-box">
                        <div className="banner-hero banner-faqs-1">
                            <div className="container">
                                <div className="row">
                                <div className="col-lg-12 text-center">
                                        <h1 className="text-display-3 color-white mb-30">We are here to help you</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box pb-150">
                    <div className="banner-hero bg-about-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2 color-gray-900">Gallery</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <div className="images-lists pb-150">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-6 pl-0"><img className="img-responsive img-full img-1" src="assets/imgs/page/signup/img-1.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-2" src="assets/imgs/page/signup/img-2.png" alt="Agon" /></div>
                    <div className="col-lg-4 col-md-4 col-sm-12"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-3.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-4.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6 pr-0"><img className="img-responsive img-full img-5" src="assets/imgs/page/signup/img-5.png" alt="Agon" /></div>
                </div>
                <div className="row  ">
                    <div className="col-lg-4 col-md-4 col-sm-12 pl-0 pt-4"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-3.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-2" src="assets/imgs/page/signup/img-4.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6 pr-0"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-5.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6 pt-4"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-1.png" alt="Agon" /></div>
                    <div className="col-lg-2 col-md-2 col-sm-6"><img className="img-responsive img-full img-3" src="assets/imgs/page/signup/img-2.png" alt="Agon" /></div>
                </div>
            </div>
            <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-7">
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                            We are currently accepting applications for 2023-24 batch
                                            </h4>
                                            {/* <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p> */}
                                             <div className="">
                                            <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><button className="btn btn-black icon-arrow-right-white mr-40 mb-20" type="submit">Contact us</button></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            {/* <div className="block-chart shape-1">
                                                <img src="/assets/imgs/template/chart.png" alt="Agon" />
                                            </div> */}
                                            <img className="img-responsive img-newsletter" src="assets/cta.jpg" alt="Agon" height='420px'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </Layout>
  
      </>
    )
  }
  
  export default Gallery;