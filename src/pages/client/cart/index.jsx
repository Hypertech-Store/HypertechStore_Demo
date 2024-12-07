import products2 from '../../../assets/img/products/2.png';
import products1 from '../../../assets/img/products/1.png';
import products3 from '../../../assets/img/products/3.png';
const Cart = () => {
    document.title = "Hypertech Store - Giỏ hàng";
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
                    <h2 className="mb-6">Cart</h2>
                    <div className="row g-5">
                        <div className="col-12 col-lg-8">
                            <div id="cartTable" data-list="{&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:10}">
                                <div className="table-responsive scrollbar mx-n1 px-1">
                                    <table className="table fs-9 mb-0 border-top border-translucent">
                                        <thead>
                                            <tr>
                                                <th className="sort white-space-nowrap align-middle fs-10" scope="col" />
                                                <th className="sort white-space-nowrap align-middle" scope="col" style={{ minWidth: 250 }}>PRODUCTS</th>
                                                <th className="sort align-middle" scope="col" style={{ width: 80 }}>COLOR</th>
                                                <th className="sort align-middle" scope="col" style={{ width: 150 }}>SIZE</th>
                                                <th className="sort align-middle text-end" scope="col" style={{ width: 300 }}>PRICE</th>
                                                <th className="sort align-middle ps-5" scope="col" style={{ width: 200 }}>QUANTITY</th>
                                                <th className="sort align-middle text-end" scope="col" style={{ width: 250 }}>TOTAL</th>
                                                <th className="sort text-end align-middle pe-0" scope="col" />
                                            </tr>
                                        </thead>
                                        <tbody className="list" id="cart-table-body">
                                            <tr className="cart-table-row btn-reveal-trigger">
                                                <td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="product-details.html"><img src={products1} alt width={53} /></a></td>
                                                <td className="products align-middle"><a className="fw-semibold mb-0 line-clamp-2" href="product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                                <td className="color align-middle white-space-nowrap fs-9 text-body">Glossy black</td>
                                                <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">XL</td>
                                                <td className="price align-middle text-body fs-9 fw-semibold text-end">$199</td>
                                                <td className="quantity align-middle fs-8 ps-5">
                                                    <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button className="btn btn-sm px-2" data-type="minus">-</button><input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min={1} defaultValue={2} aria-label="Amount (to the nearest dollar)" /><button className="btn btn-sm px-2" data-type="plus">+</button></div>
                                                </td>
                                                <td className="total align-middle fw-bold text-body-highlight text-end">$398</td>
                                                <td className="align-middle white-space-nowrap text-end pe-0 ps-3"><button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2"><span className="fas fa-trash" /></button></td>
                                            </tr>
                                            <tr className="cart-table-row btn-reveal-trigger">
                                                <td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="product-details.html"><img src={products2} alt width={53} /></a></td>
                                                <td className="products align-middle"><a className="fw-semibold mb-0 line-clamp-2" href="product-details.html">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
                                                <td className="color align-middle white-space-nowrap fs-9 text-body">Glossy black</td>
                                                <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">XL</td>
                                                <td className="price align-middle text-body fs-9 fw-semibold text-end">$150</td>
                                                <td className="quantity align-middle fs-8 ps-5">
                                                    <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button className="btn btn-sm px-2" data-type="minus">-</button><input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min={1} defaultValue={2} aria-label="Amount (to the nearest dollar)" /><button className="btn btn-sm px-2" data-type="plus">+</button></div>
                                                </td>
                                                <td className="total align-middle fw-bold text-body-highlight text-end">$300</td>
                                                <td className="align-middle white-space-nowrap text-end pe-0 ps-3"><button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2"><span className="fas fa-trash" /></button></td>
                                            </tr>
                                            <tr className="cart-table-row btn-reveal-trigger">
                                                <td className="align-middle white-space-nowrap py-0"><a className="d-block border border-translucent rounded-2" href="product-details.html"><img src={products3} alt width={53} /></a></td>
                                                <td className="products align-middle"><a className="fw-semibold mb-0 line-clamp-2" href="product-details.html">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                                                <td className="color align-middle white-space-nowrap fs-9 text-body">Glossy Golden</td>
                                                <td className="size align-middle white-space-nowrap text-body-tertiary fs-9 fw-semibold">34mm</td>
                                                <td className="price align-middle text-body fs-9 fw-semibold text-end">$65</td>
                                                <td className="quantity align-middle fs-8 ps-5">
                                                    <div className="input-group input-group-sm flex-nowrap" data-quantity="data-quantity"><button className="btn btn-sm px-2" data-type="minus">-</button><input className="form-control text-center input-spin-none bg-transparent border-0 px-0" type="number" min={1} defaultValue={2} aria-label="Amount (to the nearest dollar)" /><button className="btn btn-sm px-2" data-type="plus">+</button></div>
                                                </td>
                                                <td className="total align-middle fw-bold text-body-highlight text-end">$130</td>
                                                <td className="align-middle white-space-nowrap text-end pe-0 ps-3"><button className="btn btn-sm text-body-tertiary text-opacity-85 text-body-tertiary-hover me-2"><span className="fas fa-trash" /></button></td>
                                            </tr>
                                            <tr className="cart-table-row btn-reveal-trigger">
                                                <td className="text-body-emphasis fw-semibold ps-0 fs-8" colSpan={6}>Items subtotal :</td>
                                                <td className="text-body-emphasis fw-bold text-end fs-8">$691</td>
                                                <td />
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-between-center mb-3">
                                        <h3 className="card-title mb-0">Summary</h3><a className="btn btn-link p-0" href="#!">Edit cart </a>
                                    </div><select className="form-select mb-3" aria-label="delivery type">
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="card">Card</option>
                                        <option value="paypal">Paypal</option>
                                    </select>
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-body fw-semibold">Items subtotal :</p>
                                            <p className="text-body-emphasis fw-semibold">$691</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-body fw-semibold">Discount :</p>
                                            <p className="text-danger fw-semibold">-$59</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-body fw-semibold">Tax :</p>
                                            <p className="text-body-emphasis fw-semibold">$126.20</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-body fw-semibold">Subtotal :</p>
                                            <p className="text-body-emphasis fw-semibold">$665</p>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <p className="text-body fw-semibold">Shipping Cost :</p>
                                            <p className="text-body-emphasis fw-semibold">$30</p>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3"><input className="form-control" type="text" placeholder="Voucher" /><button className="btn btn-phoenix-primary px-5">Apply</button></div>
                                    <div className="d-flex justify-content-between border-y border-dashed py-3 mb-4">
                                        <h4 className="mb-0">Total :</h4>
                                        <h4 className="mb-">$695.20</h4>
                                    </div><button className="btn btn-primary w-100">Proceed to check out<span className="fas fa-chevron-right ms-1 fs-10" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/* end of .container*/}
            </section>

        </>
    );
};
export default Cart;