import mart from "../../../assets/img/logos/phoenix-mart.png";
const Invoice = () => {
  document.title = "Hypertech Store - Hóa đơn";
  return (
    <>
      <section className="pt-5 pb-9 bg-body-emphasis dark__bg-gray-1200 border-top">
        <div className="container-small">
          <nav className="mb-3" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a href="#!">Page 1</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#!">Page 2</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Default
              </li>
            </ol>
          </nav>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="mb-0">Hóa đơn</h2>
            <div>
              <button className="btn btn-phoenix-secondary me-2">
                <span className="fa-solid fa-download me-sm-2" />
                <span className="d-none d-sm-inline-block">Tải xuống</span>
              </button>
              <button className="btn btn-phoenix-secondary">
                <span className="fa-solid fa-print me-sm-2" />
                <span className="d-none d-sm-inline-block">In</span>
              </button>
            </div>
          </div>
          <div className="bg-body dark__bg-gray-1100 p-4 mb-4 rounded-2">
            <div className="row g-4">
              <div className="col-12 col-lg-3">
                <div className="row g-4 g-lg-2">
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="row align-items-center g-0">
                      <div className="col-auto col-lg-6 col-xl-5">
                        <h6 className="mb-0 me-3">Mã đơn hàng:</h6>
                      </div>
                      <div className="col-auto col-lg-6 col-xl-7">
                        <p className="fs-9 text-body-secondary fw-semibold mb-0">
                          #FLR978282
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-12">
                    <div className="row align-items-center g-0">
                      <div className="col-auto col-lg-6 col-xl-5">
                        <h6 className="me-3">Ngày đặt hàng:</h6>
                      </div>
                      <div className="col-auto col-lg-6 col-xl-7">
                        <p className="fs-9 text-body-secondary fw-semibold mb-0">
                          19.06.2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="row g-4 gy-lg-5">
                  <div className="col-12 col-lg-12">
                    <h6 className="mb-2 me-3">Được bán bởi :</h6>
                    <p className="fs-9 text-body-secondary fw-semibold mb-0">
                      PhoenixMart
                      <br />
                      36 greendowm road, California, Usa
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="row g-4">
                  <div className="col-12">
                    <h6 className="mb-2">Người đặt hàng :</h6>
                    <div className="fs-9 text-body-secondary fw-semibold mb-0">
                      <p className="mb-2">John Doe,</p>
                      <p className="mb-2">
                        36, Gree Donwtonwn, Golden road, FL
                      </p>
                      <p className="mb-2">johndoe@jeemail.com</p>
                      <p className="mb-0">+334933029030</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="row g-4">
                  <div className="col-12">
                    <h6 className="mb-2">Địa chỉ nhận hàng :</h6>
                    <div className="fs-9 text-body-secondary fw-semibold mb-0">
                      <p className="mb-2">John Doe,</p>
                      <p className="mb-2">
                        36, Gree Donwtonwn, Golden road, FL
                      </p>
                      <p className="mb-2">johndoe@jeemail.com</p>
                      <p className="mb-0">+334933029030</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-0">
            <div className="table-responsive scrollbar">
              <table className="table fs-9 text-body mb-0">
                <thead className="bg-body-secondary">
                  <tr>
                    <th scope="col" style={{ width: 24 }} />
                    <th scope="col" style={{ minWidth: 60 }}>
                      STT
                    </th>
                    <th className="" scope="col" style={{ width: 100 }}>
                      Hình ảnh
                    </th>
                    <th className="ps-7" scope="col" style={{ minWidth: 150 }}>
                      Sản phẩm
                    </th>
                    <th className="ps-5" scope="col" style={{ minWidth: 250 }}>
                      Biến thể
                    </th>

                    <th className="" scope="col" style={{ width: 200 }}>
                      Số lượng
                    </th>
                    <th className="" scope="col" style={{ width: 200 }}>
                      Giá
                    </th>

                    <th className="" scope="col" style={{ width: 200 }}>
                      Giảm giá
                    </th>

                    <th
                      className="text-end"
                      scope="col"
                      style={{ minWidth: 250 }}
                    >
                      Tổng cộng
                    </th>
                    <th scope="col" style={{ width: 24 }} />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-0" />
                    <td className="align-middle">1</td>
                    <td className="align-middle">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product Image"
                        className="img-fluid"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="align-middle ps-7">
                      <p className="line-clamp-1 mb-0 fw-semibold">
                        Fitbit Sense Advanced Smartwatch with Tools for Heart
                        Health, Stress Management &amp; Skin Temperature Trends,
                        Carbon/Graphite, One Size (S &amp; L Bands)
                      </p>
                    </td>

                    <td className="align-middle ps-5 text-body-tertiary fw-semibold">
                      XL, 256GB
                    </td>
                    <td className="align-middle text-body-tertiary fw-semibold">
                      Pro
                    </td>
                    <td className="align-middle text-body-highlight fw-semibold">
                      2
                    </td>

                    <td className="align-middle">2.5%</td>

                    <td className="align-middle text-end fw-semibold">$398</td>
                    <td className="border-0" />
                  </tr>
                  <tr>
                    <td className="border-0" />
                    <td className="align-middle">2</td>
                    <td className="align-middle">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product Image"
                        className="img-fluid"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="align-middle ps-7">
                      <p className="line-clamp-1 mb-0 fw-semibold">
                        2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space
                        Gray
                      </p>
                    </td>
                    <td className="align-middle ps-5">Black, 256GB</td>
                    <td className="align-middle text-body-tertiary fw-semibold">
                      Pro
                    </td>
                    <td className="align-middle  text-body-highlight fw-semibold">
                      1
                    </td>

                    <td className="align-middle ">2.75%</td>

                    <td className="align-middle text-end fw-semibold">$398</td>
                    <td className="border-0" />
                  </tr>
                  <tr>
                    <td className="border-0" />
                    <td className="align-middle border-0">1</td>
                    <td className="align-middle">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="Product Image"
                        className="img-fluid"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </td>
                    <td className="align-middle border-0 ps-7">
                      <p className="line-clamp-1 mb-0 fw-semibold">
                        PlayStation 5 DualSense Wireless Controller
                      </p>
                    </td>
                    <td className="align-middle ps-5 border-0">White, 1TB</td>
                    <td className="align-middle text-body-tertiary fw-semibold border-0">
                      Regular
                    </td>
                    <td className="align-middle  text-body-highlight fw-semibold border-0">
                      1
                    </td>

                    <td className="align-middle  border-0">3.5%</td>

                    <td className="align-middle text-end fw-semibold border-0">
                      $398
                    </td>
                    <td className="border-0" />
                  </tr>
                  <tr className="bg-body-secondary">
                    <td />
                    <td className="align-middle fw-semibold" colSpan={7}>
                      Thanh toán
                    </td>
                    <td className="align-middle text-end fw-bold">$398</td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-end py-9 border-bottom">
              <img className="mb-3" src={mart} alt />
              <h4>Authorized Signatory</h4>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};
export default Invoice;
