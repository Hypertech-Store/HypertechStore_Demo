import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FadeLoader } from "react-spinners";
const Order = () => {
  document.title = "Hypertech Store - Đặt hàng";
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);
  const [data, setData] = useState([]); // Store all the states
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("id");
  const currentState = useState([]);
  const [orderData, setOrderData] = useState(null);
  const [firstStatus, setFirstStatus] = useState(null); // Lưu trạng thái đầu tiên
  const [lastStatus, setLastStatus] = useState(null); // Lưu trạng thái cuối cùng

  const breadcrumbTitles = {
    "trang-thai-don-hang": "Trạng thái đơn hàng",
  };

  const currentTitle =
    breadcrumbTitles[pathnames[0]] ||
    pathnames[pathnames.length - 1]?.toUpperCase();

  // Fetch all statuses (trạng-thai-don-hang) from the API
  useEffect(() => {
    fetch("http://localhost:8000/api/trang-thai-don-hang")
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.data || []; // Ensure valid data
        setData(fetchedData); // Store the list of statuses

        // Get first and last status IDs
        if (fetchedData.length > 0) {
          setFirstStatus(fetchedData[0]?.id); // Set first status ID
          setLastStatus(fetchedData[fetchedData.length - 1]?.id); // Set last status ID
        }

        // Debug logs to check the status IDs
        console.log("API response:", fetchedData);
        console.log("First Status ID:", fetchedData[0]?.id);
        console.log("Last Status ID:", fetchedData[fetchedData.length - 1]?.id);
      })
      .catch((error) => console.error("Error fetching statuses:", error));
  }, []);

  // Fetch order details using orderId
  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/don-hang/detail/${orderId}`
        );
        const data = await response.json();
        setOrderData(data.data || null); // Store the order data
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Wait until orderData is available
  if (!orderData) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh", // Toàn màn hình
          backgroundColor: "#f9f9f9", // Nền
        }}
      >
        <FadeLoader speedMultiplier={0.8} color="#36d7b7" />
      </div>
    );
  }

  // Get current order status from orderData
  const trang_thai_don_hang_id = orderData?.trang_thai_don_hang_id;
  console.log("Trạng thái đơn hàng hiện tại:", trang_thai_don_hang_id);

  const getTimelineClass = (
    currentState,
    statusId,
    firstStatus,
    lastStatus
  ) => {
    // Default values
    let timelineItemClass = "bg-body-quaternary"; // Default item color for all statuses
    let timelineBarClass = "border-dashed"; // Default border style
    let icon = "fa-truck"; // Default icon

    console.log("currentState:", currentState);
    console.log("firstStatus:", firstStatus);
    console.log("lastStatus:", lastStatus);

    // Trường hợp TH1: Trạng thái đầu tiên (Set bg-success if currentState matches firstStatus)
    if (currentState === firstStatus) {
      console.log("Trạng thái 1: firstStatus matched");
      timelineItemClass = "bg-warning"; // Set bg-success for first status
      timelineBarClass = "border-dashed"; // Keep default border style
      icon = "fa-solid fa-dolly"; // Custom icon for the first status
    }
    // Trường hợp TH2: Trạng thái cuối cùng (Set specific styles for lastStatus)
    else if (currentState === lastStatus) {
      console.log("Trạng thái 2: lastStatus matched");
      timelineItemClass = "bg-success"; // Custom class for last status
      timelineBarClass = "border-success";
      icon = "fa-check"; // Custom icon for the last status
    }
    // Trường hợp TH3: Trạng thái trong khoảng firstStatus và lastStatus
    else if (currentState > firstStatus && currentState < lastStatus) {
      console.log(
        "Trạng thái 3: currentState between firstStatus and lastStatus"
      );

      // If statusId matches currentState, we're in an active or processing state
      if (statusId === currentState) {
        console.log("Trạng thái 3.1: currentState is active");
        timelineItemClass = "bg-warning"; // Active state
        timelineBarClass = "border-dashed";
        icon = "fa-truck-ramp-box";
      }
      // If statusId is less than currentState, we're in a completed state
      else if (statusId < currentState) {
        console.log("Trạng thái 3.2: previous states completed");
        timelineItemClass = "bg-success"; // Completed states
        timelineBarClass = "border-success";
        icon = "fa-check";
      }
      // If statusId is greater than currentState, we're in a future state
      else if (statusId > currentState) {
        console.log("Trạng thái 3.3: future states");
        timelineItemClass = "bg-body-quaternary"; // Pending or future states
        timelineBarClass = "border-dashed";
        icon = "fa-truck";
      }
    }

    // Output the result for debugging
    console.log("Timeline Item Class:", timelineItemClass);
    console.log("Timeline Bar Class:", timelineBarClass);
    console.log("Icon:", icon);

    // Return the updated classes
    return {
      timelineItemClass,
      timelineBarClass,
      icon,
      shouldDisplayBar: true, // This will be false for the last status
    };
  };

  return (
    <section className="pt-5 pb-9">
      <div className="container-small cart">
        <nav className="mb-3" aria-label="breadcrumb">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>

            <li className="breadcrumb-item">
              <a href={`chi-tiet-don-hang/${orderData.id}`}>
                Chi tiết đơn hàng
              </a>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              {currentTitle}
            </li>
          </ol>
        </nav>
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-5">
          <div>
            <h3 style={{ fontSize: "25px" }}>
              Trạng thái đơn hàng{" "}
              <span
                style={{
                  color: "#FF5733",
                  fontWeight: "bold",
                }}
              >
                #{orderData.ma_don_hang}
              </span>
            </h3>
            <p className="text-body-secondary mb-1 mt-2">
              <a className="fw-bold" href="#!">
                {orderData.phuong_thuc_thanh_toan.ten_phuong_thuc}
              </a>
              ,<br className="d-sm-none" />
              <span className="ms-sm-1">
                Đặt hàng lúc: {new Date(orderData.created_at).toLocaleString()}
              </span>
            </p>
          </div>
          <button className="btn btn-outline-primary mt-3">
            <span className="fa-solid fa-phone me-2" />
            Call Support
          </button>
        </div>

        <div className="row gy-9 gx-5">
          <div className="col-12 col-lg-6">
            <div className="border rounded-3 overflow-hidden h-100">
              <div
                className="googlemap h-100 min-vh-50"
                data-googlemap
                data-latlng="40.7228022,-74.0020158"
                data-scrollwheel="false"
                data-zoom={15}
              >
                <div className="marker-content py-2">
                  <h5>Google map</h5>
                  <p className="mb-0">
                    A nice template for your site. Customize it as you want.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="timeline-vertical">
              {data.map((status) => {
                const {
                  timelineItemClass,
                  timelineBarClass,
                  icon,
                  shouldDisplayBar,
                } = getTimelineClass(
                  trang_thai_don_hang_id,
                  status.id,
                  firstStatus,
                  lastStatus
                );
                return (
                  <div key={status.id} className="timeline-item">
                    <div className="row g-md-3 align-items-center mb-8 mb-lg-10">
                      <div className="col-12 col-md-auto d-flex">
                        <div className="timeline-item-date text-end order-1 order-md-0 me-md-4">
                          <p className="fs-10 fw-semibold text-body-tertiary mb-0">
                            {new Date(
                              orderData.created_at
                            ).toLocaleDateString()}{" "}
                            <br className="d-none d-md-block" />
                            {new Date(
                              orderData.created_at
                            ).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="timeline-item-bar position-relative me-3 me-md-0">
                          <div
                            className={`icon-item icon-item-sm ${timelineItemClass}`}
                            data-bs-theme="light"
                          >
                            <span
                              className={`fa-solid ${icon} text-white fs-10`}
                            />
                          </div>
                          {currentState !== lastStatus && shouldDisplayBar && (
                            <span
                              className={`timeline-bar border-end ${timelineBarClass}`}
                            />
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <div className="timeline-item-content ps-6 ps-md-3">
                          <h5>{status.ten_trang_thai}</h5>
                          <p className="fs-9 text-body-secondary mb-0">
                            {status.mo_ta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
