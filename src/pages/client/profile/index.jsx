import { useState } from 'react';
import avatar from "../../../assets/img/team/15.webp";
import product1 from '../../../assets/img/products/1.png';
import product3 from '../../../assets/img/products/3.png';
import product4 from '../../../assets/img/products/4.png';
import product6 from '../../../assets/img/products/6.png';
import product7 from '../../../assets/img/products/7.png';
import product8 from '../../../assets/img/products/8.png';
import product10 from '../../../assets/img/products/10.png';
import product12 from '../../../assets/img/products/12.png';
import product17 from '../../../assets/img/products/17.png';
function Profile() {
    document.title = "Hypertech Store - Sản phẩm yêu thích";
    const [viewAll, setViewAll] = useState(false); // Quản lý trạng thái View All / View Less
    const [currentPage, setCurrentPage] = useState(1); // Quản lý trang hiện tại

    const handleViewToggle = () => {
        setViewAll(!viewAll);
        setCurrentPage(1); // Quay lại trang đầu khi chuyển đổi View All / View Less
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    const totalItems = 9; // Total number of products
    const itemsPerPage = viewAll ? totalItems : 5; // View All shows all products, View Less shows 5
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate the number of pages

    const products = [
        { image: product1, name: 'Fitbit Sense Advanced Smartwatch', color: 'Pure matte black', size: '42', price: '$57' },
        { image: product7, name: '2021 Apple 12.9-inch iPad Pro', color: 'Black', size: 'Pro', price: '$1,499' },
        { image: product6, name: 'PlayStation 5 DualSense Wireless Controller', color: 'White', size: 'Regular', price: '$299' },
        { image: product3, name: 'Apple MacBook Pro 13 inch-M1-8/256GB-space', color: 'Space Gray', size: 'Pro', price: '$1,699' },
        { image: product4, name: 'Apple iMac 24" 4K Retina Display', color: 'Ocean Blue', size: '21"', price: '$65' },
        { image: product10, name: 'Apple Magic Mouse (Wireless, Rechargable)', color: 'White', size: 'Regular', price: '$30' },
        { image: product8, name: 'Amazon Basics Matte Black Wired Keyboard', color: 'Black', size: 'MD', price: '$40' },
        { image: product12, name: 'HORI Racing Wheel Apex for PlayStation 4', color: 'Black', size: '45', price: '$130' },
        { image: product17, name: 'Xbox Series S', color: 'Space Gray', size: 'sm', price: '$300' }
    ];

    const visibleProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); // Get the products for the current page

    return (
        <section className="pt-5 pb-9">
            <div className="container-small">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#!">Page 1</a></li>
                        <li className="breadcrumb-item"><a href="#!">Page 2</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Default</li>
                    </ol>
                </nav>
                <div className="row align-items-center justify-content-between g-3 mb-4">
                    <div className="col-auto">
                        <h2 className="mb-0">Profile</h2>
                    </div>
                    <div className="col-auto">
                        <div className="row g-2 g-sm-3">
                            <div className="col-auto"><button className="btn btn-phoenix-danger"><span className="fas fa-trash-alt me-2" />Delete customer</button></div>
                            <div className="col-auto"><button className="btn btn-phoenix-secondary"><span className="fas fa-key me-2" />Reset password</button></div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-6">
                    <div className="col-12 col-lg-8">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed pb-4">
                                    <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                                        <div className="col-12 col-sm-auto"><input className="d-none" id="avatarFile" type="file" /><label className="cursor-pointer avatar avatar-5xl" htmlFor="avatarFile"><img className="rounded-circle" src={avatar} alt /></label></div>
                                        <div className="col-12 col-sm-auto flex-1">
                                            <h3>Ansolo Lazinatov</h3>
                                            <p className="text-body-secondary">Joined 3 months ago</p>
                                            <div><a className="me-2" href="#!"><span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover" /></a><a className="me-2" href="#!"><span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover" /></a><a href="#!"><span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover" /></a></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-between-center pt-4">
                                    <div>
                                        <h6 className="mb-2 text-body-secondary">Total Spent</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">$894</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Last Order</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">1 week ago</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Total Orders</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">97 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed">
                                    <h4 className="mb-3">Default Address<button className="btn btn-link p-0" type="button"> <span className="fas fa-edit fs-9 ms-3 text-body-quaternary" /></button></h4>
                                </div>
                                <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                                    <div className="row justify-content-between">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight">Address</h5>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text-body-secondary">Vancouver, British Columbia<br />Canada</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top border-dashed pt-4">
                                    <div className="row flex-between-center mb-2">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Email</h5>
                                        </div>
                                        <div className="col-auto"><a className="lh-1" href="mailto:shatinon@jeemail.com">shatinon@jeemail.com</a></div>
                                    </div>
                                    <div className="row flex-between-center">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Phone</h5>
                                        </div>
                                        <div className="col-auto"><a href="tel:+1234567890">+1234567890</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="scrollbar">
                        <ul className="nav nav-underline fs-9 flex-nowrap mb-3 pb-1" id="myTab" role="tablist">
                            <li className="nav-item"><a className="nav-link text-nowrap active" id="personal-info-tab" data-bs-toggle="tab" href="#tab-personal-info" role="tab" aria-controls="tab-personal-info" aria-selected="true"><span className="fas fa-user me-2" />Personal info</a></li>
                            <li className="nav-item me-3"><a className="nav-link text-nowrap" id="orders-tab" data-bs-toggle="tab" href="#tab-orders" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-shopping-cart me-2" />Orders <span className="text-body-tertiary fw-normal"> (35)</span></a></li>
                            <li className="nav-item me-3"><a className="nav-link text-nowrap" id="reviews-tab" data-bs-toggle="tab" href="#tab-reviews" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-star me-2" />Reviews<span className="text-body-tertiary fw-normal"> (24)</span></a></li>
                            <li className="nav-item me-3"><a className="nav-link text-nowrap" id="wishlist-tab" data-bs-toggle="tab" href="#tab-wishlist" role="tab" aria-controls="tab-orders" aria-selected="true"><span className="fas fa-heart me-2" />Wishlist<span className="text-body-tertiary fw-normal"> (9)</span></a></li>
                        </ul>
                    </div>
                    <div className="tab-content" id="profileTabContent">
                        <div className="tab-pane fade show active" id="tab-personal-info" role="tabpanel" aria-labelledby="personal-info-tab">
                            <div className="row gx-3 gy-4 mb-5">
                                <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="fullName">Full name</label><input className="form-control" id="fullName" type="text" placeholder="Full name" /></div>
                                <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="gender">Gender</label><select className="form-select" id="gender">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                    <option value="not-to-say">Prefer not to say</option>
                                </select></div>
                                <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fs-8 ps-0 text-capitalize lh-sm" htmlFor="email">Email</label><input className="form-control" id="email" type="text" placeholder="Email" /></div>
                                <div className="col-12 col-lg-6">
                                    <div className="row g-2 gy-lg-0"><label className="form-label text-body-highlight fs-8 ps-1 text-capitalize lh-sm mb-1">Date of birth</label>
                                        <div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="date">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                            <option value={13}>13</option>
                                            <option value={14}>14</option>
                                            <option value={15}>15</option>
                                            <option value={16}>16</option>
                                            <option value={17}>17</option>
                                            <option value={18}>18</option>
                                            <option value={19}>19</option>
                                            <option value={20}>20</option>
                                            <option value={21}>21</option>
                                            <option value={22}>22</option>
                                            <option value={23}>23</option>
                                            <option value={24}>24</option>
                                            <option value={25}>25</option>
                                            <option value={26}>26</option>
                                            <option value={27}>27</option>
                                            <option value={28}>28</option>
                                            <option value={29}>29</option>
                                            <option value={30}>30</option>
                                        </select></div>
                                        <div className="col-6 col-sm-2 col-lg-3 col-xl-2"><select className="form-select" id="month">
                                            <option value="Jan">Jan</option>
                                            <option value="Feb">Feb</option>
                                            <option value="Mar">Mar</option>
                                            <option value="Apr">Apr</option>
                                            <option value="May">May</option>
                                            <option value="Jun">Jun</option>
                                            <option value="Jul">Jul</option>
                                            <option value="Aug">Aug</option>
                                            <option value="Sep">Sep</option>
                                            <option value="Oct">Oct</option>
                                            <option value="Nov">Nov</option>
                                            <option value="Dec">Dec</option>
                                        </select></div>
                                        <div className="col-12 col-sm-8 col-lg-6 col-xl-8"><select className="form-select" id="year">
                                            <option value={1990}>1990</option>
                                            <option value={1991}>1991</option>
                                            <option value={1992}>1992</option>
                                            <option value={1993}>1993</option>
                                            <option value={1994}>1994</option>
                                            <option value={1995}>1995</option>
                                            <option value={1996}>1996</option>
                                            <option value={1997}>1997</option>
                                            <option value={1998}>1998</option>
                                            <option value={1999}>1999</option>
                                            <option value={2000}>2000</option>
                                            <option value={2001}>2001</option>
                                            <option value={2002}>2002</option>
                                            <option value={2003}>2003</option>
                                            <option value={2004}>2004</option>
                                            <option value={2005}>2005</option>
                                            <option value={2006}>2006</option>
                                            <option value={2007}>2007</option>
                                            <option value={2008}>2008</option>
                                            <option value={2009}>2009</option>
                                            <option value={2010}>2010</option>
                                            <option value={2011}>2011</option>
                                            <option value={2012}>2012</option>
                                            <option value={2013}>2013</option>
                                            <option value={2014}>2014</option>
                                            <option value={2015}>2015</option>
                                            <option value={2016}>2016</option>
                                            <option value={2017}>2017</option>
                                            <option value={2018}>2018</option>
                                            <option value={2019}>2019</option>
                                            <option value={2020}>2020</option>
                                            <option value={2021}>2021</option>
                                            <option value={2022}>2022</option>
                                        </select></div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="phone">Phone</label><input className="form-control" id="phone" type="text" placeholder={+1234567890} /></div>
                                <div className="col-12 col-lg-6"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="alternative_phone">Alternative phone</label><input className="form-control" id="alternative_phone" type="text" placeholder={+1234567890} /></div>
                                <div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="facebook">Facebook</label><input className="form-control" id="facebook" type="text" placeholder="Facebook" /></div>
                                <div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="instagram">Instagram</label><input className="form-control" id="instagram" type="text" placeholder="Instagram" /></div>
                                <div className="col-12 col-lg-4"><label className="form-label text-body-highlight fw-bold fs-8 ps-0 text-capitalize lh-sm" htmlFor="twitter">Twitter</label><input className="form-control" id="twitter" type="text" placeholder="Twitter" /></div>
                            </div>
                            <div className="text-end"><button className="btn btn-primary px-7">Save changes</button></div>
                        </div>
                        <div className="tab-pane fade" id="tab-orders" role="tabpanel" aria-labelledby="orders-tab">
                            <div className="border-top border-bottom border-translucent" id="profileOrdersTable" data-list="{&quot;valueNames&quot;:[&quot;order&quot;,&quot;status&quot;,&quot;delivery&quot;,&quot;date&quot;,&quot;total&quot;],&quot;page&quot;:6,&quot;pagination&quot;:true}">
                                <div className="table-responsive scrollbar">
                                    <table className="table fs-9 mb-0">
                                        <thead>
                                            <tr>
                                                <th className="sort white-space-nowrap align-middle pe-3 ps-0" scope="col" data-sort="order" style={{ width: '15%', minWidth: 140 }}>ORDER</th>
                                                <th className="sort align-middle pe-3" scope="col" data-sort="status" style={{ width: '15%', minWidth: 180 }}>STATUS</th>
                                                <th className="sort align-middle text-start" scope="col" data-sort="delivery" style={{ width: '20%', minWidth: 160 }}>DELIVERY METHOD</th>
                                                <th className="sort align-middle pe-0 text-end" scope="col" data-sort="date" style={{ width: '15%', minWidth: 160 }}>DATE</th>
                                                <th className="sort align-middle text-end" scope="col" data-sort="total" style={{ width: '15%', minWidth: 160 }}>TOTAL</th>
                                                <th className="align-middle pe-0 text-end" scope="col" style={{ width: '15%' }}> </th>
                                            </tr>
                                        </thead>
                                        <tbody className="list" id="profile-order-table-body">
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2453</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">Shipped</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Cash on delivery</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Dec 12, 12:56 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$87</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2452</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-info"><span className="badge-label">Ready to pickup</span><span className="ms-1" data-feather="info" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Dec 9, 2:28PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$7264</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2451</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-warning"><span className="badge-label">Partially fulfilled</span><span className="ms-1" data-feather="clock" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Local pickup</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Dec 4, 12:56 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$375</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2450</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Canceled</span><span className="ms-1" data-feather="x" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Dec 1, 4:07 AM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$657</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2449</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">fulfilled</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Express</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Nov 28, 7:28 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$9562</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2448</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-danger"><span className="badge-label">Unfulfilled</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Local delivery</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Nov 24, 10:16 AM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$256</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2447</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary"><span className="badge-label">Cancelled</span><span className="ms-1" data-feather="x" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Standard shipping</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Nov 10, 12:00 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$898</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-primary" href="#!">#2446</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">shipped</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Express</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Nov 12, 12:20 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-highlight">$4116</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="order align-middle white-space-nowrap py-2 ps-0"><a className="fw-semibold text-body-tertiary text-opacity-85 pointers-events-none text-decoration-none" href="#!">#2445</a></td>
                                                <td className="status align-middle white-space-nowrap text-start fw-bold text-body-tertiary py-2"><span className="badge badge-phoenix fs-10 badge-phoenix-success"><span className="badge-label">fulfilled</span><span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="delivery align-middle white-space-nowrap text-body py-2">Free shipping</td>
                                                <td className="total align-middle text-body-tertiary text-end py-2">Oct 19, 1:20 PM</td>
                                                <td className="date align-middle fw-semibold text-end py-2 text-body-tertiary text-opacity-85">$4116</td>
                                                <td className="align-middle text-end white-space-nowrap pe-0 action py-2">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                                    <div className="col-auto d-flex">
                                        <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" /><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" /></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" /></a>
                                    </div>
                                    <div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left" /></button>
                                        <ul className="mb-0 pagination" /><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="border-y" id="profileRatingTable" data-list="{&quot;valueNames&quot;:[&quot;product&quot;,&quot;rating&quot;,&quot;review&quot;,&quot;status&quot;,&quot;date&quot;],&quot;page&quot;:6,&quot;pagination&quot;:true}">
                                <div className="table-responsive scrollbar">
                                    <table className="table fs-9 mb-0">
                                        <thead>
                                            <tr>
                                                <th className="sort white-space-nowrap align-middle" scope="col" style={{ minWidth: 220 }} data-sort="product">PRODUCT</th>
                                                <th className="sort align-middle" scope="col" data-sort="rating" style={{ maxWidth: '10%' }}>RATING</th>
                                                <th className="sort align-middle" scope="col" style={{ minWidth: 480 }} data-sort="review">REVIEW</th>
                                                <th className="sort align-middle" scope="col" style={{ maxWidth: '12%' }} data-sort="status">STATUS</th>
                                                <th className="sort text-end align-middle" scope="col" style={{ maxWidth: '10%' }} data-sort="date">DATE</th>
                                                <th className="sort text-end pe-0 align-middle" scope="col" style={{ width: '7%' }}> </th>
                                            </tr>
                                        </thead>
                                        <tbody className="list" id="profile-review-table-body">
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management &amp; Skin Temperature Trends, Carbon/Graphite, One Size (S &amp; L Bands)</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">This Fitbit is fantastic! I was trying to be in better shape and needed some motivation, so I decided to treat myself to a new Fitbit.</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Just now</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">iPhone 13 pro max-Pacific Blue-128GB storage</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The order was delivered ahead of schedule. To give us additional time, you should leave the packaging sealed with plastic.</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span className="ms-1" data-feather="clock" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Dec 9, 2:28 PM</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">Apple MacBook Pro 13 inch-M1-8/256GB-space</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star-half-alt star-icon text-warning" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">It's a Mac, after all. Once you've gone Mac, there's no going back. My first Mac lasted over nine years, and this is my second.</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Dec 4, 12:56 PM</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">Apple iMac 24" 4K Retina Display M1 8 Core CPU, 7 Core GPU, 256GB SSD, Green (MJV83ZP/A) 2021</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">Personally, I like the minimalist style, but I wouldn't choose it if I were searching for a computer that I would use frequently. It's not horrible in terms of speed and power</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Nov 28, 7:28 PM</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">Razer Kraken v3 x Wired 7.1 Surroung Sound Gaming headset</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">It performs exactly as expected. There are three of these in the family.</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-secondary">Cancelled<span className="ms-1" data-feather="x" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Nov 24, 10:16 AM</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">PlayStation 5 DualSense Wireless Controller</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The controller is quite comfy for me. Despite its increased size, the controller still fits well in my hands.</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-success">Approaved<span className="ms-1" data-feather="check" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Just now</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                                <td className="align-middle product pe-3"><a className="fw-semibold line-clamp-1" href="product-details.html">2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray</a></td>
                                                <td className="align-middle rating white-space-nowrap fs-10"><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa fa-star text-warning" /><span className="fa-regular fa-star text-warning-light" data-bs-theme="light" /></td>
                                                <td className="align-middle review pe-7">
                                                    <p className="fw-semibold text-body-highlight mb-0 line-clamp-2">The response time and service I received when contacted the designers were Phenomenal!</p>
                                                </td>
                                                <td className="align-middle status pe-9"><span className="badge badge-phoenix fs-10 badge-phoenix-warning">Pending<span className="ms-1" data-feather="fas fa-stopwatch" style={{ height: '12.8px', width: '12.8px' }} /></span></td>
                                                <td className="align-middle text-end date white-space-nowrap">
                                                    <p className="text-body-tertiary mb-0">Nov 07, 9:00 PM</p>
                                                </td>
                                                <td className="align-middle white-space-nowrap text-end pe-0">
                                                    <div className="btn-reveal-trigger position-static"><button className="btn btn-sm dropdown-toggle dropdown-caret-none transition-none btn-reveal" type="button" data-bs-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false" data-bs-reference="parent"><span className="fas fa-ellipsis-h fs-10" /></button>
                                                        <div className="dropdown-menu dropdown-menu-end py-2"><a className="dropdown-item" href="#!">View</a><a className="dropdown-item" href="#!">Export</a>
                                                            <div className="dropdown-divider" /><a className="dropdown-item text-danger" href="#!">Remove</a>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                                    <div className="col-auto d-flex">
                                        <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info" /><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" /></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" /></a>
                                    </div>
                                    <div className="col-auto d-flex"><button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left" /></button>
                                        <ul className="mb-0 pagination" /><button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-wishlist" role="tabpanel" aria-labelledby="wishlist-tab">
                            <div className="border-y border-translucent" id="productWishlistTable" data-list="{&quot;valueNames&quot;:[&quot;products&quot;,&quot;color&quot;,&quot;size&quot;,&quot;price&quot;,&quot;quantity&quot;,&quot;total&quot;],&quot;page&quot;:5,&quot;pagination&quot;:true}">
                                <div className="table-responsive scrollbar">
                                    <table className="table fs-9 mb-0">
                                        <thead >
                                            <tr>
                                                <th
                                                    className="align-middle"
                                                    scope="col"
                                                    data-sort="image"
                                                    style={{ width: '8%' }}
                                                >
                                                    IMAGE
                                                </th>
                                                <th
                                                    className="white-space-nowrap align-middle"
                                                    scope="col"
                                                    style={{ width: '35%', minWidth: 250 }}
                                                    data-sort="products"
                                                >
                                                    PRODUCTS
                                                </th>
                                                <th
                                                    className="align-middle"
                                                    scope="col"
                                                    data-sort="color"
                                                    style={{ width: '10%' }}
                                                >
                                                    COLOR
                                                </th>
                                                <th
                                                    className="align-middle"
                                                    scope="col"
                                                    data-sort="size"
                                                    style={{ width: '8%' }}
                                                >
                                                    SIZE
                                                </th>
                                                <th
                                                    className="align-middle text-body"
                                                    scope="col"
                                                    data-sort="price"
                                                    style={{ width: '8%' }}
                                                >
                                                    PRICE
                                                </th>
                                                <th
                                                    className="align-middle text-body"
                                                    scope="col"
                                                    style={{
                                                        width: '20%',
                                                        textAlign: 'center', // Đảm bảo căn giữa văn bản trong th
                                                        justifyContent: 'center', // Căn giữa theo chiều ngang
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    ACTION
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody className="list" id="profile-wishlist-table-body" >
                                            {visibleProducts.map((product, index) => (
                                                <tr key={index} className="hover-actions-trigger btn-reveal-trigger position-static">
                                                    <td className="align-middle white-space-nowrap ps-0 py-0">
                                                        <a className="border border-translucent rounded-2 d-inline-block" href="product-details.html">
                                                            <img src={product.image} alt={product.name} width={55} />
                                                        </a>
                                                    </td>
                                                    <td className="products align-middle">
                                                        <a className="fw-semibold mb-0 line-clamp-1" href="product-details.html">{product.name}</a>
                                                    </td>
                                                    <td className="color align-middle fs-9 text-body">{product.color}</td>
                                                    <td className="size align-middle text-body-tertiary fs-9 fw-semibold">{product.size}</td>
                                                    <td className="price align-middle text-body fs-9 fw-semibold">{product.price}</td>
                                                    <td className="total align-middle fw-bold text-body-highlight text-end text-nowrap pe-0">
                                                        <button className="btn btn-sm text-body-quaternary text-body-tertiary-hover me-2">
                                                            <span className="fas fa-trash" />
                                                        </button>
                                                        <button className="btn btn-primary fs-10">
                                                            <span className="fas fa-shopping-cart me-1 fs-10" />Add to cart
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>

                                <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                                    <div className="col-auto d-flex">
                                        <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info">
                                            {viewAll
                                                ? '1 to 9 '
                                                : currentPage === 1
                                                    ? '1 to 5 '
                                                    : '6 to 9 '}
                                            <span className="text-body-tertiary"> Items of </span>
                                            {totalItems}
                                        </p>
                                        <a
                                            className={`fw-semibold ${viewAll ? 'd-none' : ''}`}
                                            href="#!"
                                            data-list-view="*"
                                            onClick={handleViewToggle}
                                        >
                                            View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" />
                                        </a>
                                        <a
                                            className={`fw-semibold ${viewAll ? '' : 'd-none'}`}
                                            href="#!"
                                            data-list-view="less"
                                            onClick={handleViewToggle}
                                        >
                                            View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1" />
                                        </a>
                                    </div>
                                    <div className="col-auto d-flex">
                                        <button
                                            className={`page-link ${currentPage === 1 ? 'disabled' : ''}`}
                                            data-list-pagination="prev"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <span className="fas fa-chevron-left" />
                                        </button>
                                        <ul className="mb-0 pagination">
                                            {[...Array(totalPages)].map((_, index) => (
                                                <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                                    <button
                                                        className="page"
                                                        type="button"
                                                        onClick={() => handlePageChange(index + 1)}
                                                    >
                                                        {index + 1}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        <button
                                            className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`}
                                            data-list-pagination="next"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <span className="fas fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* end of .container*/}
        </section>

    );
};
export default Profile;