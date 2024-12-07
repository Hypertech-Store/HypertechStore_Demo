const Order = () => {
    document.title = "Hypertech Store - Đặt hàng";
    return (
        <>
            <section className="pt-5 pb-9">
                <div className="container-small cart">
                    <nav className="mb-3" aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#!">Page 1</a></li>
                            <li className="breadcrumb-item"><a href="#!">Page 2</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Default</li>
                        </ol>
                    </nav>
                    <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
                        <div>
                            <h2>Order #234 Status</h2>
                            <p className="text-body-secondary mb-0">Payment Via <a className="fw-bold" href="#!">Cash on delivery</a>,<br className="d-sm-none" /><span className="ms-sm-1">Nov 12, 2021, 8:54AM.</span></p>
                        </div><button className="btn btn-outline-primary mt-3"><span className="fa-solid fa-phone me-2" />Call Support</button>
                    </div>
                    <div className="row gy-9 gx-5">
                        <div className="col-12 col-lg-6">
                            <div className="border rounded-3 overflow-hidden h-100">
                                <div className="googlemap h-100 min-vh-50" data-googlemap data-latlng="40.7228022,-74.0020158" data-scrollwheel="false" data-zoom={15}>
                                    <div className="marker-content py-2">
                                        <h5>Google map </h5>
                                        <p className="mb-0">A nice template for your site.<br />Customize it as you want.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="timeline-vertical">
                                <div className="timeline-item">
                                    <div className="row g-md-3 align-items-center mb-8 mb-lg-10">
                                        <div className="col-12 col-md-auto d-flex">
                                            <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                                                <p className="fs-10 fw-semibold text-body-tertiary mb-0">23 August, 2023<br className="d-none d-md-block" /> 10:30 AM</p>
                                            </div>
                                            <div className="timeline-item-bar position-relative me-3 me-md-0">
                                                <div className="icon-item icon-item-sm bg-success" data-bs-theme="light"><span className="fa-solid fa-check text-white fs-10" /></div><span className="timeline-bar border-end border-success" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-item-content ps-6 ps-md-3">
                                                <h4>Order is processing</h4>
                                                <p className="fs-9 text-body-secondary mb-0">Your package is ready for the seller to prepare.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row g-md-3 align-items-center mb-8 mb-lg-10">
                                        <div className="col-12 col-md-auto d-flex">
                                            <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                                                <p className="fs-10 fw-semibold text-body-tertiary mb-0">25 August, 2023<br className="d-none d-md-block" /> 11:30 AM</p>
                                            </div>
                                            <div className="timeline-item-bar position-relative me-3 me-md-0">
                                                <div className="icon-item icon-item-sm bg-success" data-bs-theme="light"><span className="fa-solid fa-check text-white fs-10" /></div><span className="timeline-bar border-end border-warning" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-item-content ps-6 ps-md-3">
                                                <h4>Picked Up</h4>
                                                <p className="fs-9 text-body-secondary mb-0">Your package has been picked up from the seller.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row g-md-3 align-items-center mb-8 mb-lg-10">
                                        <div className="col-12 col-md-auto d-flex">
                                            <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                                                <p className="fs-10 fw-semibold text-body-tertiary mb-0">27 August, 2023<br className="d-none d-md-block" /> 6:30 AM</p>
                                            </div>
                                            <div className="timeline-item-bar position-relative me-3 me-md-0">
                                                <div className="icon-item icon-item-sm bg-warning" data-bs-theme="light"><span className="fa-solid fa-truck-ramp-box text-white fs-10" /></div><span className="timeline-bar border-end border-dashed" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-item-content ps-6 ps-md-3">
                                                <h4>Ready to Ship</h4>
                                                <p className="fs-9 text-body-secondary mb-0">Your package is now ready to be shipped.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row g-md-3 align-items-center mb-8 mb-lg-10">
                                        <div className="col-12 col-md-auto d-flex">
                                            <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                                                <p className="fs-10 fw-semibold text-body-tertiary mb-0">Estimated time<br className="d-none d-md-block" /> 29 August, 2023</p>
                                            </div>
                                            <div className="timeline-item-bar position-relative me-3 me-md-0">
                                                <div className="icon-item icon-item-sm bg-body-quaternary" data-bs-theme="light"><span className="fa-solid fa-truck text-white fs-10" /></div><span className="timeline-bar border-end border-dashed" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-item-content ps-6 ps-md-3">
                                                <h4>Shipped</h4>
                                                <p className="fs-9 text-body-secondary mb-0">Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="row g-md-3 align-items-center">
                                        <div className="col-12 col-md-auto d-flex">
                                            <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                                                <p className="fs-10 fw-semibold text-body-tertiary mb-0">Estimated time<br className="d-none d-md-block" /> 30 August, 2023</p>
                                            </div>
                                            <div className="timeline-item-bar position-relative me-3 me-md-0">
                                                <div className="icon-item icon-item-sm bg-body-quaternary" data-bs-theme="light"><span className="fa-solid fa-truck-fast text-white fs-10" /></div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="timeline-item-content ps-6 ps-md-3">
                                                <h4>Delivered</h4>
                                                <p className="fs-9 text-body-secondary mb-0">Pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* end of .container*/}
            </section>

        </>
    );
};
export default Order;