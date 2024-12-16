const AddCategory = () => {
  return (
    <div className="content">
      <nav className="mb-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <a href="#">Page 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Page 2</a>
          </li>
          <li className="breadcrumb-item active">Default</li>
        </ol>
      </nav>
      <form>
        <div className="row g-3 flex-between-end mb-5">
          <div className="col-auto">
            <h2 className="mb-2">Add a category</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Orders placed across your store
            </h5>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary mb-2 mb-sm-0" type="submit">
              Save draft
            </button>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-12 col-xl-12">
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

export default AddCategory;
