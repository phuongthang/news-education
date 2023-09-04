import { Fragment } from "react";

const Categories = () => {
  return (
    <Fragment>
      <h2 className="mb-4">Phân Loại</h2>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="">Đại Học</a>
          <span className="badge badge-primary badge-pill">150</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="">Sau Đại Học</a>
          <span className="badge badge-primary badge-pill">131</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="">Đại Học Liên Thông</a>
          <span className="badge badge-primary badge-pill">78</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="">Liên Kết Hợp Tác</a>
          <span className="badge badge-primary badge-pill">56</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
          <a href="">Cao Đẳng</a>
          <span className="badge badge-primary badge-pill">98</span>
        </li>
      </ul>
    </Fragment>
  );
};
export default Categories;
