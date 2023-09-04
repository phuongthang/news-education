import { Fragment } from "react";
import img from "../../assets/image/image1.jpg";

const Post = () => {
  return (
    <Fragment>
      <h2 className="mb-4">Bài Viết</h2>
      <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
        <img className="img-fluid" src={img} style={{ width: 80, height: 80 }} />
        <div className="pl-3 pr-3">
          <h6 className="">Các phương thức xét tuyển đại học chính quy năm 2023</h6>
          <div className="d-flex">
            <small className="mr-3">
              <i className="fa fa-user text-primary" /> Admin
            </small>
            <small className="mr-3">
              <i className="fa fa-folder text-primary" /> Đại Học
            </small>
            <small className="mr-3">
              <i className="fa fa-comments text-primary" /> 15
            </small>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
        <img className="img-fluid" src={img} style={{ width: 80, height: 80 }} />
        <div className="pl-3 pr-3">
          <h6 className="">Điểm trúng tuyển đại học chính quy 2020</h6>
          <div className="d-flex">
            <small className="mr-3">
              <i className="fa fa-user text-primary" /> Admin
            </small>
            <small className="mr-3">
              <i className="fa fa-folder text-primary" /> Đại Học
            </small>
            <small className="mr-3">
              <i className="fa fa-comments text-primary" /> 15
            </small>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mb-3">
        <img className="img-fluid" src={img} style={{ width: 80, height: 80 }} />
        <div className="pl-3 pr-3">
          <h6 className="">Hướng dẫn nhập học đại học chính quy năm 2020</h6>
          <div className="d-flex">
            <small className="mr-3">
              <i className="fa fa-user text-primary" /> Admin
            </small>
            <small className="mr-3">
              <i className="fa fa-folder text-primary" /> Đại Học
            </small>
            <small className="mr-3">
              <i className="fa fa-comments text-primary" /> 15
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Post;
