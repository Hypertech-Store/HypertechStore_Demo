import icon from "../../../../assets/img/icons/image-icon.png";
const addCategory = () => {
  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#!">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#!">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <form className="mb-9">
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Add a category</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Orders placed across your store
            </h5>
          </div>
          <div className="col-auto">
            <button
              className="btn btn-phoenix-secondary me-2 mb-2 mb-sm-0"
              type="button"
            >
              Discard
            </button>
            <button
              className="btn btn-phoenix-primary me-2 mb-2 mb-sm-0"
              type="button"
            >
              Save draft
            </button>
            <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
              Publish category
            </button>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-xl-8">
            <h4 className="mb-3">Category Title</h4>
            <input
              className="form-control mb-5"
              type="text"
              placeholder="Write title here..."
            />
            <div className="mb-6">
              <h4 className="mb-3"> Category Description</h4>

              <textarea
                className="form-control"
                id="floatingTextarea2"
                placeholder="Leave a comment here"
                style={{ height: 100 }}
                defaultValue={""}
              />
            </div>
            <h4 className="mb-3">Display images</h4>
            <div
              className="dropzone dropzone-multiple p-0 mb-5"
              id="my-awesome-dropzone"
              data-dropzone="data-dropzone"
            >
              <div className="fallback">
                <input name="file" type="file" multiple="multiple" />
              </div>
              <div className="dz-preview d-flex flex-wrap">
                <div
                  className="border border-translucent bg-body-emphasis rounded-3 d-flex flex-center position-relative me-2 mb-2"
                  style={{ height: 80, width: 80 }}
                >
                  <img
                    className="dz-image"
                    src="../../../assets/img/products/23.png"
                    alt="..."
                    data-dz-thumbnail="data-dz-thumbnail"
                  />
                  <a
                    className="dz-remove text-body-quaternary"
                    href="#!"
                    data-dz-remove="data-dz-remove"
                  >
                    <span data-feather="x" />
                  </a>
                </div>
              </div>
              <div
                className="dz-message text-body-tertiary text-opacity-85"
                data-dz-message="data-dz-message"
              >
                Drag your photo here
                <span className="text-body-secondary px-1">or</span>
                <button className="btn btn-link p-0" type="button">
                  Browse from device
                </button>
                <br />
                <img className="mt-3 me-2" src={icon} width={40} alt />
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="row g-2">
              <div className="col-10 col-xl-12">
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Organize</h4>
                    <div className="row gx-3">
                      <div className="col-12 col-sm-6 col-xl-12">
                        <div className="mb-4">
                          <h5 className="mb-2 text-body-highlight">
                            Collection
                          </h5>
                          <input
                            className="form-control mb-xl-3"
                            type="text"
                            placeholder="Collection"
                          />
                        </div>
                      </div>
                      <div className="form-floating">
                        <div className="d-flex flex-wrap mb-2">
                          <h5 className="mb-0 text-body-highlight me-2">
                            Tags
                          </h5>
                          <a className="fw-bold fs-9 lh-sm" href="#!">
                            View all tags
                          </a>
                        </div>
                        <select
                          className="form-select"
                          id="floaTingLabelMultipleSelect"
                          data-choices="data-choices"
                          multiple="multiple"
                          data-options='{"removeItemButton":true,"placeholder":true}'
                        >
                          <option selected="selected">
                            Massachusetts Institute of Technology
                          </option>
                          <option>University of Chicago</option>
                          <option>GSAS Open Labs At Harvard</option>
                          <option>California Institute of Technology</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <footer className="footer position-absolute">
        <div className="row g-0 justify-content-between align-items-center h-100">
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 mt-2 mt-sm-0 text-body">
              Thank you for creating with Phoenix
              <span className="d-none d-sm-inline-block" />
              <span className="d-none d-sm-inline-block mx-1">|</span>
              <br className="d-sm-none" />
              2024 ©
              <a className="mx-1" href="https://themewagon.com/">
                Themewagon
              </a>
            </p>
          </div>
          <div className="col-12 col-sm-auto text-center">
            <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default addCategory;
