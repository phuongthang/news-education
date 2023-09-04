import { MapPin, Mail, Phone } from "react-feather";

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-white mt-5 py-3 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-white mb-4">CƠ SỞ CHÍNH</h3>
          <div className="d-flex">
            <MapPin className="mr-2" />
            <p>Số 298 đường Cầu Diễn, Quận Bắc Từ Liêm, Thành phố Hà Nội.</p>
          </div>
          <div className="d-flex">
            <Mail className="mr-2 mt-1" size={18} />
            <p>tuyensinh@haui.edu.vn</p>
          </div>
          <div className="d-flex">
            <Phone className="mr-2 mt-1" size={18} />
            <p>012 345 67890</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-white mb-4">CÁC CƠ SỞ KHÁC</h3>
          <div className="d-flex">
            <MapPin className="mr-2" />
            <p>Cơ sở 2: Phường Tây Tựu, quận Bắc Từ Liêm, thành phố Hà Nội.</p>
          </div>
          <div className="d-flex">
            <MapPin className="mr-2" />
            <p>Cơ sở 3: Phường Lê Hồng Phong, thành phố Phủ Lý, tỉnh Hà Nam.</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-white mb-4">LIÊN KẾT WEBSITE</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Trường Đại học Công nghiệp Hà Nội
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Cổng thông tin đào tạo
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Đào tạo trực tuyến
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Hành chính điện tử
            </a>
            <a className="text-white mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Thông tin tuyển sinh
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h3 className="text-white mb-4">LIÊN HỆ</h3>
          <form action="">
            <div className="form-group">
              <input type="text" className="form-control border-0 py-4" placeholder="Họ và tên" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control border-0 py-4" placeholder="Email" />
            </div>
            <div>
              <button className="btn btn-primary btn-block border-0 py-3" type="submit">
                Gửi ngay
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-fluid pt-2" style={{ borderTop: "1px solid rgba(23, 162, 184, 0.2)" }}>
        <small>Copyright © 2018 Hanoi University of Industry</small>
      </div>
    </div>
  );
};
export default Footer;
