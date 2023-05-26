import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import api from "../../constant/api";
import message from "../../constant/Message";
import i18next from "i18next";
function BookingEnquiry({ show, setShow, category }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [packages, setPackage] = React.useState()
  const [values, setValues] = React.useState({
    we_category: "",
    we_package: "",
    we_date: "",
    we_time: "",
    we_name: "",
    we_phone: "",
    we_email: "",
    we_status: "0",
    we_done_by: "",
    we_amount: "",
    we_type: "",
  });
  const bookEnquiry = () => {
    api
      .post("/website/addBookingEnquiry", values)
      .then((res) => {
        if (res.status == 200) {
          message(
            "Thanks For Contacting Us. Our 24*7 support will reach you soon",
            "success"
          );
          setTimeout(() => {
            window.location.reload();
          }, 600);
        } else {
          message("Try Again Later", "warning");
        }
      })
      .catch((err) => {
        message("Please Check your internet Connection", "error");
      });
  };
  const getPackagesCatId = (sp_cat_id) => {
    api.post("/service/getServiceByCategoryId",{sp_cat_id:sp_cat_id}).then((res) => {
      setPackage(res.data.data);
    }).catch(err=>{
      message("Please Check your internet Connection", "error");
    });
  };
  return (
    <Modal size="xl" show={show} onHide={handleClose}>
      <section class="widget ">
        <form class="contctWidgetForm btnTheme  pt-4 px-4 rounded pb-6">
          <Row>
            <Col sm={11}>
              <h4 class="mb-3 mb-xl-4 headingIX text-capitalize text-white">
                Book Enquiry
              </h4>
            </Col>
            <Col sm={1}>
              <Icon
                style={{ cursor: "pointer" }}
                onClick={handleClose}
                fontSize={35}
                icon="solar:close-square-linear"
              ></Icon>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={12} lg={3}>
              <select class="form-control form-select">
                <option selected>Category</option>
                {category &&
                  category.map((cat) => (
                    <option value={cat.service_category_name_en}>
                      {cat.service_category_name_ar}|{cat.service_category_name_en}
                    </option>
                  ))}
              </select>
            </Col>
            <Col sm={12} lg={3}>
              <select class="form-control form-select">
                <option selected>Package</option>
                {packages && packages.map(pack=>(
                  <option value={pack.sp_name_ar}>{i18next.language == "ar"
                  ? ele.sp_name_ar
                  : ele.sp_name_en}</option>
                ))}
              </select>
            </Col>
            <Col sm={12} lg={3}>
              <input
                class="form-control"
                type="date"
                value="date"
                name="date"
              />
            </Col>
            <Col sm={12} lg={3}>
              <input
                class="form-control"
                type="time"
                value="time"
                name="time"
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="12" xl={4}>
              <input
                type="text"
                class="form-control rounded"
                placeholder="Full Name"
              />
            </Col>
            <Col sm="12" xl={4}>
              <input
                type="text"
                class="form-control rounded"
                placeholder="Phone Number"
              />
            </Col>
            <Col sm="12" xl={4}>
              <input
                type="email"
                class="form-control rounded"
                placeholder="Email Address"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12} lg={3}>
              <button
                type="submit"
                class="mt-5 btn btnTheme text-uppercase  w-100 fwEbold rounded border-white"
                style={{ borderWidth: 1, borderColor: "#fff !important" }}
              >
                Send & Book
              </button>
            </Col>
          </Row>
        </form>
      </section>{" "}
    </Modal>
  );
}

export default BookingEnquiry;
