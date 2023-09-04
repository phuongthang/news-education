import { Fragment } from "react";
import { Mail, Phone } from "react-feather";

const Header = () => {
  return (
    <Fragment>
      <div className="bg-primary header-top text-white px-5 py-2">
        <small>
          <Mail className="mr-2" size={14} /> phuongthangcnpm4@gmail.com - <Phone className="mr-2" size={14} /> 0344771283
        </small>
      </div>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <a href="" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: 50 }}>
            <span className="text-primary">HAUI</span>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <a href="index.html" className="nav-item nav-link active">
                TRANG CHỦ
              </a>
              <a href="about.html" className="nav-item nav-link">
                TIN TỨC
              </a>
              <a href="class.html" className="nav-item nav-link">
                NHẬP HỌC TRỰC TUYẾN
              </a>
              <a href="contact.html" className="nav-item nav-link">
                LIÊN HỆ
              </a>
            </div>
            <a href="" className="btn btn-primary px-4">
              Tìm Kiếm
            </a>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};
export default Header;
