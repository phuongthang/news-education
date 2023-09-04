import { Fragment } from "react";
import Header from "./header/Header";
import Slide from "./slide/Slide";
import Footer from "./footer/Footer";
import Categories from "./categories/Categories";
import Post from "./post/Post";
import News from "./news/News";
import Tag from "./tag/Tag";
import img from "../assets/image/image1.jpg";
import img2 from "../assets/image/image2.jpg";

const DefaultLayout = () => {
  return (
    <Fragment>
      <Header />
      <Slide />
      <div className="container py-5">
        <div className="row pt-5">
          <div className="col-lg-8">
            <div className="d-flex flex-column text-left mb-3">
              <p className="section-title pr-5">
                <span className="pr-2">Tin Nổi Bật</span>
              </p>
              <h2 className="mb-3">Hướng dẫn nhập học trực tuyến năm 2023</h2>
              <div className="d-flex">
                <p className="mr-3">
                  <i className="fa fa-user text-primary" /> Admin
                </p>
                <p className="mr-3">
                  <i className="fa fa-folder text-primary" /> Đại Học
                </p>
                <p className="mr-3">
                  <i className="fa fa-comments text-primary" /> 15
                </p>
              </div>
            </div>
            <div className="mb-5">
              <p>
                Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem
                sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed
                dolores diam nonumy, gubergren sit stet no diam kasd vero.
              </p>
              <p>
                Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum
                sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo
                sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et
                no diam sit. Dolor erat justo dolore sit invidunt.
              </p>
              <h2 className="mb-4">BƯỚC 1: NHẬP HỌC TRỰC TUYẾN</h2>
              <img className="img-fluid rounded w-50 float-left mr-4 mb-3" src={img} alt="Image" />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing
                stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum
                erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea
                kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore,
                gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod
                vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.
              </p>
              <h3 className="mb-4">BƯỚC 2: KIỂM TRA VÀ CẬP NHẬT THÔNG TIN SINH VIÊN</h3>
              <img className="img-fluid rounded w-50 float-right ml-4 mb-3" src={img} alt="Image" />
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing
                stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum
                erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea
                kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore,
                gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod
                vero et voluptua. Amet labore clita duo et no.
              </p>
              <h2 className="mb-4">BƯỚC 3: THỰC HIỆN KẾ HOẠCH HỌC TẬP</h2>
              <p>
                Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita
                dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr
                sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing
                stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum
                erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea
                kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore,
                gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod
                vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.
              </p>
            </div>
            {/* Related Post */}
            <div className="mb-5 mx-n3">
              <h2 className="mb-4 ml-3">BÀI VIẾT LIÊN QUAN</h2>
              <div className="position-relative">
                <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3 my-3">
                  <img className="img-fluid" src={img} style={{ width: 80, height: 80 }} />
                  <div className="pl-3">
                    <h5 className="">Hướng dẫn nhập học đại học chính quy năm 2020</h5>
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
                <div className="d-flex align-items-center bg-light shadow-sm rounded overflow-hidden mx-3">
                  <img className="img-fluid" src={img} style={{ width: 80, height: 80 }} />
                  <div className="pl-3">
                    <h5 className="">Các phương thức xét tuyển đại học chính quy năm 2023</h5>
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
              </div>
            </div>
            {/* Comment List */}
            <div className="mb-5">
              <h2 className="mb-4">3 Bình Luận</h2>
              <div className="media mb-4">
                <img src={img2} alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: 45 }} />
                <div className="media-body">
                  <h6>
                    Phương Thắng
                    <small className="mx-2">
                      <i>20:00 04/09/2023</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Trả lời</button>
                </div>
              </div>
              <div className="media mb-4">
                <img src={img2} alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: 45 }} />
                <div className="media-body">
                  <h6>
                    Phương Thắng
                    <small className="mx-2">
                      <i>20:00 05/09/2023</i>
                    </small>
                  </h6>
                  <p>
                    Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                    dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                    consetetur at sit.
                  </p>
                  <button className="btn btn-sm btn-light">Trả lời</button>
                  <div className="media mt-4">
                    <img src={img2} alt="Image" className="img-fluid rounded-circle mr-3 mt-1" style={{ width: 45 }} />
                    <div className="media-body">
                      <h6>
                        <h6>
                          Phương Thắng
                          <small className="mx-2">
                            <i>20:01 05/09/2023</i>
                          </small>
                        </h6>
                      </h6>
                      <p>
                        Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna
                        dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur, at tempor amet ipsum diam tempor at sit.
                      </p>
                      <button className="btn btn-sm btn-light">Trả lời</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Form */}
            <div className="bg-light p-5">
              <h2 className="mb-4">Bình Luận Bài Viết</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Họ và tên *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nội dung *</label>
                  <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
                </div>
                <div className="form-group mb-0">
                  <input type="submit" defaultValue="Leave Comment" className="btn btn-primary px-3" />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 mt-5 mt-lg-0">
            {/* Author Bio */}
            <div className="d-flex flex-column text-center bg-primary rounded mb-5 py-5 px-4">
              <p className="text-white m-0">
                Conset elitr erat vero dolor ipsum et diam, eos dolor lorem ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet
                est elitr ea sit.
              </p>
            </div>
            {/* Search Form */}
            <div className="mb-5">
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Từ khóa" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search" />
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/* Category List */}
            <div className="mb-5">
              <Categories />
            </div>
            {/* News */}
            <div className="mb-5">
              <News />
            </div>
            {/* Recent Post */}
            <div className="mb-5">
              <Post />
            </div>
            {/* Tag Cloud */}
            <div className="mb-5">
              <Tag />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default DefaultLayout;
