import { useEffect, useState } from "react";
import Lottie from "react-lottie"; // Import Lottie component
//import logo
import logo from "../../../../assets/img/icons/logo1.png";
import team from "../../../../assets/img/team/30.webp";
import reply from "../../../../../reply.json";
const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();
  const [isTyping, setIsTyping] = useState(false); // To track if the admin is "typing"

  const [message, setMessage] = useState(""); // Current user message
  const [messages, setMessages] = useState([]); // All messages (including admin replies)

  useEffect(() => {
    const chatContainer = document.querySelector(".card-body.chat");
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]); // Ensures scroll goes down when messages change

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Hiển thị Lottie animation trong khi đang xử lý
      setIsTyping(true);

      // Hiển thị tên tệp hình ảnh trong chat
      const newMessage = {
        content: `Đã gửi ảnh: ${file.name}`,
        imageUrl: URL.createObjectURL(file), // Tạo URL hình ảnh tạm thời để hiển thị
        time: new Date().toLocaleTimeString(),
        isAdmin: false, // Người dùng gửi ảnh
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Tạo thời gian trễ để Lottie animation hoạt động (tùy chỉnh độ dài thời gian trễ)
      setTimeout(() => {
        // Tin nhắn phản hồi từ admin khi Lottie hoàn thành
        const adminMessage = {
          content: "Cảm ơn bạn đã gửi ảnh! Chúng tôi sẽ kiểm tra ngay.",
          time: new Date().toLocaleTimeString(),
          isAdmin: true, // Tin nhắn từ admin
        };

        setMessages((prevMessages) => [...prevMessages, adminMessage]);
        setIsTyping(false); // Tắt trạng thái đang nhập khi admin trả lời
      }, 2000); // 3 giây để Lottie hoạt động
    }
  };

  const sendMessage = async () => {
    if (message.trim()) {
      const userMessage = {
        content: message,
        time: new Date().toLocaleTimeString(),
        isAdmin: false, // Tin nhắn của người dùng
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setMessage("");
      setIsTyping(true);

      // Tạo thời gian trễ cho Lottie animation
      setTimeout(() => {
        // Tin nhắn trả lời tự động từ admin khi Lottie hoàn thành
        const adminMessage = {
          content:
            "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ trả lời bạn sớm nhất có thể.",
          time: new Date().toLocaleTimeString(),
          isAdmin: true, // Tin nhắn từ admin (server)
        };

        setMessages((prevMessages) => [...prevMessages, adminMessage]);
        setIsTyping(false); // Tắt trạng thái đang nhập sau khi trả lời xong
      }, 2000); // Điều chỉnh thời gian trễ tùy theo độ dài Lottie animation (3 giây trong trường hợp này)
    }
  };

  return (
    <div>
      <section className="bg-body-highlight dark__bg-gray-1100 py-9">
        <div className="container-small">
          <div className="row justify-content-between gy-4">
            <div className="col-12 col-lg-4">
              <div className="d-flex align-items-center mb-3">
                <img src={logo} alt="phoenix" width={27} />
                <h5 className="logo-text ms-2">phoenix</h5>
              </div>
              <p className="text-body-tertiary mb-1 fw-semibold lh-sm fs-9">
                Phoenix is an admin dashboard template with fascinating features
                and amazing layout. The template is responsive to all major
                browsers and is compatible with all available devices and screen
                sizes.
              </p>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">About Phoenix</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Careers
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Affiliate Program
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Privacy Policy
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Stay Connected</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Blogs
                </a>
                <a className="mb-1 fw-semibold fs-9 d-flex" href="#!">
                  <span className="fab fa-facebook-square text-primary me-2 fs-8" />
                  <span className="text-body-secondary">Facebook</span>
                </a>
                <a className="mb-1 fw-semibold fs-9 d-flex" href="#!">
                  <span className="fab fa-twitter-square text-info me-2 fs-8" />
                  <span className="text-body-secondary">Twitter</span>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Customer Service</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Help Desk
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Support, 24/7
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Community of Phoenix
                </a>
              </div>
            </div>
            <div className="col-6 col-md-auto">
              <h5 className="fw-bolder mb-3">Payment Method</h5>
              <div className="d-flex flex-column">
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Cash on Delivery
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Online Payment
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  PayPal
                </a>
                <a
                  className="text-body-tertiary fw-semibold fs-9 mb-1"
                  href="#!"
                >
                  Installment
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <footer className="footer position-relative">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Hypertech Store
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              {currentYear} ©
              <a className="mx-1" href={"https://themewagon.com/"}>
                Hypertech Store
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>

      <div className="support-chat-container">
        <div className="container-fluid support-chat">
          <div className="card bg-body-emphasis">
            <div className="card-header d-flex flex-between-center px-4 py-3 border-bottom border-translucent">
              <h5 className="mb-0 d-flex align-items-center gap-2">
                Admin123
                <span className="fa-solid fa-circle text-success fs-11" />
              </h5>
              <div className="btn-reveal-trigger">
                <button
                  className="btn btn-link p-0 dropdown-toggle dropdown-caret-none transition-none d-flex"
                  type="button"
                  id="themeControlToggle"
                  defaultValue="light"
                >
                  <span
                    className="fas fa-solid fa-arrow-right-from-bracket text-body"
                    data-bs-toggle="tooltip"
                    data-bs-placement="left"
                    data-bs-title="Đóng đoạn chat"
                  />
                </button>
              </div>
            </div>

            <div
              className="card-body chat p-0 scrollbar"
              style={{
                maxHeight: "50pc",

                overflowX: "hidden",
              }} // Added overflow-y for scrolling
            >
              <div className="d-flex flex-column-reverse scrollbar p-5">
                <div className="text-center">
                  <div className="avatar avatar-3xl status-online">
                    <img
                      className="rounded-circle border border-3 border-light-subtle"
                      src={team}
                      alt="Avatar"
                    />
                  </div>
                  <h5 className="mb-1 mt-2">Hypertech Store</h5>{" "}
                  <p className="text-center text-body-emphasis mb-0 mt-3">
                    Xin chào! Rất vui được hỗ trợ bạn bắt đầu cuộc trò chuyện
                    với Hypertech Store
                  </p>
                </div>
              </div>

              {/* Display user and admin messages */}
              {messages.map((msg, index) =>
                msg.isAdmin ? (
                  <div key={index} className="d-flex chat-message">
                    <div className="d-flex mb-3 flex-1">
                      <div className="w-xxl-40">
                        <div className="d-flex ps-2">
                          <div
                            className="avatar avatar-m me-2 flex-shrink-0"
                            style={{ width: "40px", height: "40px" }}
                          >
                            <img
                              className="rounded-circle"
                              src={team}
                              alt="Admin"
                            />
                          </div>
                          <div className="chat-message-content received me-2">
                            <div className="mb-1 received-message-content border rounded-2 p-2 fs-9">
                              <p className="mb-0">{msg.content}</p>
                            </div>
                          </div>
                        </div>
                        <p className="mb-0 fs-10 text-body-tertiary text-opacity-85 fw-semibold ms-8">
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={index} className="d-flex chat-message">
                    <div className="d-flex mb-2 justify-content-end flex-1">
                      <div className="w-xxl-40">
                        <div className="flex-end-center">
                          <div className="me-2">
                            <div className="mb-1 sent-message-content bg-primary rounded-2 p-2 text-white">
                              {msg.imageUrl ? (
                                <div>
                                  <p className="mb-0 fw-semibold">
                                    Hình ảnh đã gửi{" "}
                                  </p>
                                  <img
                                    src={msg.imageUrl}
                                    alt="Sent image"
                                    style={{
                                      objectFit: "cover",
                                      width: "120px",
                                      height: "180px",
                                      marginTop: "10px",
                                    }}
                                  />
                                </div>
                              ) : (
                                <div className="d-flex justify-content-between">
                                  <p className="fs-9 mb-0">{msg.content}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="mb-2 fs-10 text-body-tertiary text-opacity-85 fw-semibold">
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}

              {isTyping && (
                <div className="d-flex mb-3 flex-1">
                  <div className="w-xxl-40">
                    <div className="d-flex ps-2">
                      <div
                        className="avatar avatar-m me-2 flex-shrink-0"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <img
                          className="rounded-circle"
                          src={team} // Thay thế với ảnh thực tế
                          alt="Admin"
                        />
                      </div>

                      <Lottie
                        options={{
                          loop: true,
                          autoplay: true,
                          animationData: reply, // file JSON của animation
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                          },
                        }}
                        height={30}
                        width={50}
                        isClickToPauseDisabled={true} // Ngừng dừng khi bấm vào
                        style={{ pointerEvents: "none" }} // Thêm dòng này để ngừng chỉ thị cử chỉ tay
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="card-footer d-flex align-items-center gap-2 border-top border-translucent ps-3 pe-4 py-2">
              <div className="d-flex align-items-center flex-1 gap-3 border border-translucent rounded-pill px-3">
                <input
                  className="form-control outline-none border-0 flex-1 fs-9 px-0"
                  type="text"
                  placeholder="Nhập nội dung"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && message.trim() !== "") {
                      sendMessage(); // Gửi tin nhắn khi Enter được nhấn
                    }
                  }}
                />
                <label
                  className="btn btn-link d-flex p-0 text-body-quaternary fs-9 border-0"
                  htmlFor="supportChatPhotos"
                >
                  <span className="fa-solid fa-image" />
                </label>
                <input
                  className="d-none"
                  type="file"
                  accept="image/*"
                  id="supportChatPhotos"
                  onChange={handleFileUpload} // Thêm sự kiện khi chọn ảnh
                />
              </div>
              <button
                className="btn p-0 border-0 send-btn"
                onClick={sendMessage}
              >
                <span className="fa-solid fa-paper-plane fs-9" />
              </button>
            </div>
          </div>
        </div>

        <button className="btn btn-support-chat p-0 border border-translucent">
          <span className="fs-8 btn-text text-primary text-nowrap">
            Hỗ trợ tư vấn
          </span>
          <span className="ping-icon-wrapper mt-n4 ms-n6 mt-sm-0 ms-sm-2 position-absolute position-sm-relative">
            <span className="ping-icon-bg" />
            <span className="fa-solid fa-circle ping-icon" />
          </span>
          <span className="fa-solid fa-headset text-primary fs-8 d-sm-none" />
          <span className="fa-solid fa-chevron-down text-primary fs-7" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
