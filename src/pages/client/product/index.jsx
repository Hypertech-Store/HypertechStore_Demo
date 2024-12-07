import product1 from '../../../assets/img/products/1.png';
import product2 from '../../../assets/img/products/2.png';
import product3 from '../../../assets/img/products/3.png';
import product4 from '../../../assets/img/products/4.png';
import product5 from '../../../assets/img/products/5.png';
import product6 from '../../../assets/img/products/6.png';
import product7 from '../../../assets/img/products/7.png';
import product10 from '../../../assets/img/products/10.png';
import product18 from '../../../assets/img/products/18.png';
import product12 from '../../../assets/img/products/12.png';
import product16 from '../../../assets/img/products/16.png';
import product17 from '../../../assets/img/products/17.png';
import product20 from '../../../assets/img/products/20.png';
import product24 from '../../../assets/img/products/24.png';
import product25 from '../../../assets/img/products/25.png';
import product26 from '../../../assets/img/products/26.png';
import product27 from '../../../assets/img/products/27.png';
const Shop = () => {
    document.title = "Hypertech Store - Cửa hàng";
    return (
        <>
            <section className="pt-5 pb-9">
                <div className="product-filter-container"><button className="btn btn-sm btn-phoenix-secondary text-body-tertiary mb-5 d-lg-none" data-phoenix-toggle="offcanvas" data-phoenix-target="#productFilterColumn"><span className="fa-solid fa-filter me-2" />Filter</button>
                    <div className="row">
                        <div className="col-lg-3 col-xxl-2 ps-2 ps-xxl-3">
                            <div className="phoenix-offcanvas-filter bg-body scrollbar phoenix-offcanvas phoenix-offcanvas-fixed" id="productFilterColumn" style={{ top: 92 }}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h3 className="mb-0">Filters</h3><button className="btn d-lg-none p-0" data-phoenix-dismiss="offcanvas"><span className="uil uil-times fs-8" /></button>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseAvailability" role="button" aria-expanded="true" aria-controls="collapseAvailability">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Availability</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseAvailability">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="inStockInput" type="checkbox" name="color" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="inStockInput">In stock</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="preBookInput" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="preBookInput">Pre-book</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="outOfStockInput" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="outOfStockInput">Out of stock</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseColorFamily" role="button" aria-expanded="true" aria-controls="collapseColorFamily">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Color family</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseColorFamily">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlack" type="checkbox" name="color" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlack">Black</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlue" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlue">Blue</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckRed" type="checkbox" name="color" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckRed">Red</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseBrands" role="button" aria-expanded="true" aria-controls="collapseBrands">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Brands</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseBrands">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckBlackberry" type="checkbox" name="brands" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckBlackberry">Blackberry
                                        </label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckApple" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckApple">Apple
                                        </label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckNokia" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckNokia">Nokia
                                        </label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckSony" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flexCheckSony">Sony
                                        </label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flexCheckLG" type="checkbox" name="brands" /><label className="form-check-label d-block lh-sm fs-8 text-body mb-0 fw-normal" htmlFor="flexCheckLG">LG
                                        </label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapsePriceRange" role="button" aria-expanded="true" aria-controls="collapsePriceRange">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Price range</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapsePriceRange">
                                    <div className="d-flex justify-content-between mb-3">
                                        <div className="input-group me-2"><input className="form-control" type="text" aria-label="First name" placeholder="Min" /><input className="form-control" type="text" aria-label="Last name" placeholder="Max" /></div><button className="btn btn-phoenix-primary px-3" type="button">Go</button>
                                    </div>
                                </div><a className="btn px-0 y-4 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseRating" role="button" aria-expanded="true" aria-controls="collapseRating">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Rating</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseRating">
                                    <div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio1" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /></div>
                                    <div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio2" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" />
                                        <p className="ms-1 mb-0">&amp; above</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio3" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" />
                                        <p className="ms-1 mb-0">&amp; above </p>
                                    </div>
                                    <div className="d-flex align-items-center mb-1"><input className="form-check-input me-3" id="flexRadio4" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" />
                                        <p className="ms-1 mb-0">&amp; above</p>
                                    </div>
                                    <div className="d-flex align-items-center mb-3"><input className="form-check-input me-3" id="flexRadio5" type="radio" name="flexRadio" /><span className="fa fa-star text-warning fs-9 me-1" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light fs-9 me-1" data-bs-theme="light" />
                                        <p className="ms-1 mb-0">&amp; above </p>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDisplayType" role="button" aria-expanded="true" aria-controls="collapseDisplayType">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Display type</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseDisplayType">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="lcdInput" type="checkbox" name="displayType" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="lcdInput">LCD</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="ipsInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="ipsInput">IPS</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="oledInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oledInput">OLED</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="amoledInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="amoledInput">AMOLED</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="retinaInput" type="checkbox" name="displayType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="retinaInput">Retina</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCondition" role="button" aria-expanded="true" aria-controls="collapseCondition">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Condition</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseCondition">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="newInput" type="checkbox" name="condition" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="newInput">New</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="usedInput" type="checkbox" name="condition" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="usedInput">Used</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="refurbrishedInput" type="checkbox" name="condition" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="refurbrishedInput">Refurbrished</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseDelivery" role="button" aria-expanded="true" aria-controls="collapseDelivery">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Delivery</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseDelivery">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="freeShippingInput" type="checkbox" name="delivery" defaultChecked /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="freeShippingInput">Free Shipping</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="oneDayShippingInput" type="checkbox" name="delivery" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oneDayShippingInput">One-day Shipping</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="codInput" type="checkbox" name="delivery" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="codInput">Cash on Delivery</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCampaign" role="button" aria-expanded="true" aria-controls="collapseCampaign">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Campaign</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseCampaign">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="summerSaleInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="summerSaleInput">Summer Sale</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="marchMadnessInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="marchMadnessInput">March Madness</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="flashSaleInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="flashSaleInput">Flash Sale</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="bogoBlastInput" type="checkbox" name="campaign" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="bogoBlastInput">BOGO Blast</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarranty" role="button" aria-expanded="true" aria-controls="collapseWarranty">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Warranty</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseWarranty">
                                    <div className="mb-2">
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="threeMonthInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="threeMonthInput">3 months</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="sixMonthInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="sixMonthInput">6 months</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="oneYearInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="oneYearInput">1 year</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="twoYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="twoYearsInput">2 years</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="threeYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="threeYearsInput">3 years</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="fiveYearsInput" type="checkbox" name="warranty" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="fiveYearsInput">5 years</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseWarrantyType" role="button" aria-expanded="true" aria-controls="collapseWarrantyType">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Warranty Type</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseWarrantyType">
                                    <div className="mb-2">
                                        <div className="form-check mb-0x"><input className="form-check-input mt-0" id="replacementInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="replacementInput">Replacement</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="serviceInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="serviceInput">Service</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="partialCoveregeInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="partialCoveregeInput">Partial Coverage</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="appleCareInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="appleCareInput">Apple Care</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="moneyBackInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="moneyBackInput">Money back</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="extendableInput" type="checkbox" name="warrantyType" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="extendableInput">Extendable</label></div>
                                    </div>
                                </div><a className="btn px-0 d-block collapse-indicator" data-bs-toggle="collapse" href="#collapseCertification" role="button" aria-expanded="true" aria-controls="collapseCertification">
                                    <div className="d-flex align-items-center justify-content-between w-100">
                                        <div className="fs-8 text-body-highlight">Certification</div><span className="fa-solid fa-angle-down toggle-icon text-body-quaternary" />
                                    </div>
                                </a>
                                <div className="collapse show" id="collapseCertification">
                                    <div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="rohsInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="rohsInput">RoHS</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="fccInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="fccInput">FCC</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="conflictInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="conflictInput">Conflict Free</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="isoOneInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoOneInput">ISO 9001:2015</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="isoTwoInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoTwoInput">ISO 27001:2013</label></div>
                                        <div className="form-check mb-0"><input className="form-check-input mt-0" id="isoThreeInput" type="checkbox" name="certification" /><label className="form-check-label d-block lh-sm fs-8 text-body fw-normal mb-0" htmlFor="isoThreeInput">IEC 61000-4-2</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="phoenix-offcanvas-backdrop d-lg-none" data-phoenix-backdrop style={{ top: 92 }} />
                        </div>
                        <div className="col-lg-9 col-xxl-10">
                            <div className="row gx-3 gy-6 mb-8">
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product6} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">PlayStation 5 DualSense Wireless Controller</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(67 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <p className="fs-9 text-body-tertiary mb-2">dbrand skin available</p>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="me-2 text-body text-decoration-line-through mb-0">$125.00</p>
                                                        <h3 className="text-body-emphasis mb-0">$89.00</h3>
                                                    </div>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product1} alt /><span className="badge text-bg-success fs-10 product-verified-badge">Verified<span className="fas fa-check ms-1" /></span></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature ...</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(74 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="me-2 text-body text-decoration-line-through mb-0">$49.99</p>
                                                        <h3 className="text-body-emphasis mb-0">$34.99</h3>
                                                    </div>
                                                    <p className="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in days</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product2} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">iPhone 13 pro max-Pacific Blue, 128GB storage</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(33 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <p className="fs-9 text-body-highlight fw-bold mb-2">Stock limited</p>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="me-2 text-body text-decoration-line-through mb-0">$899.99</p>
                                                        <h3 className="text-body-emphasis mb-0">$850.99</h3>
                                                    </div>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">5 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product3} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple MacBook Pro 13 inch-M1-8/256GB-Space Gray</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(97 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <p className="fs-9 text-body-highlight fw-bold mb-2">Apple care included</p>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="me-2 text-body text-decoration-line-through mb-0">$12.00</p>
                                                        <h3 className="text-body-emphasis mb-0">$11.00</h3>
                                                    </div>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product4} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(134 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <p className="fs-9 text-body-highlight fw-bold mb-2">Exchange with kidney</p>
                                                    <div className="d-flex align-items-center mb-1">
                                                        <p className="me-2 text-body text-decoration-line-through mb-0">$1499.00</p>
                                                        <h3 className="text-body-emphasis mb-0">$1399.00</h3>
                                                    </div>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">7 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product5} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(59 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$59.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product7} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(13 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$799.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product12} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">HORI Racing Wheel Apex for PlayStation 4/3, and PC</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(64 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$299.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">1 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container active" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove from wishlist"><span className="fas fa-heart" data-fa-transform="down-1" /></button><img className="img-fluid" src={product1} alt /><span className="badge text-bg-success fs-10 product-verified-badge">Verified<span className="fas fa-check ms-1" /></span></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Amazfit T-Rex Pro Smart Watch with GPS, Outdoor Fitness Watch for Men, Military Standard Certified</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(32 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$20.00</h3>
                                                    <p className="text-success fw-bold fs-9 lh-1 mb-0">Deal time ends in 24 hours</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product16} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple AirPods Pro</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(39 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$59.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product10} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Apple Magic Mouse (Wireless, Rechargable) - Silver</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$89.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product25} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">RESPAWN 200 Racing Style Gaming Chair, in Gray RSP 200 GRY</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$499.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product27} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">LEVOIT Humidifiers for Bedroom Large Room 6L Warm and Cool Mist for...</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$299.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product26} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">NETGEAR Nighthawk Pro Gaming XR500 Wi-Fi Router with 4 Ethernet Ports...</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$49.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">4 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product18} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Rachael Ray Cucina Bakeware Set Includes Nonstick Bread Baking Cookie Sheet...</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(1 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$29.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">3 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product17} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">Xbox Series S</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(6 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$19.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product24} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">FURINNO Computer Writing Desk, Walnut</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="text-body-quaternary fw-semibold ms-1">(8 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$199.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-xxl-2">
                                    <div className="product-card-container h-100">
                                        <div className="position-relative text-decoration-none product-card h-100">
                                            <div className="d-flex flex-column justify-content-between h-100">
                                                <div>
                                                    <div className="border border-1 border-translucent rounded-3 position-relative mb-3"><button className="btn btn-wish btn-wish-primary z-2 d-toggle-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"><span className="fas fa-heart d-block-hover" data-fa-transform="down-1" /><span className="far fa-heart d-none-hover" data-fa-transform="down-1" /></button><img className="img-fluid" src={product20} alt /></div><a className="stretched-link" href="chi-tiet-san-pham">
                                                        <h6 className="mb-2 lh-sm line-clamp-3 product-name">ASUS TUF Gaming F15 Gaming Laptop</h6>
                                                    </a>
                                                    <p className="fs-9"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /><span className="text-body-quaternary fw-semibold ms-1">(3 people rated)</span></p>
                                                </div>
                                                <div>
                                                    <h3 className="text-body-emphasis">$150.00</h3>
                                                    <p className="text-body-tertiary fw-semibold fs-9 lh-1 mb-0">2 colors</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination mb-0">
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <span className="fas fa-chevron-left"> </span>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">1</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">3</a>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">4</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">5</a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#"> <span className="fas fa-chevron-right" /></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>{/* end of .container*/}
            </section>

        </>
    );
};
export default Shop;
