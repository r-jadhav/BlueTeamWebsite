import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
import api from "../../constant/api";
import message from "../../constant/Message";
import i18next from "i18next";
import { ToastContainer } from "react-toastify";
function BookingEnquiry({
  show,
  setShow,
  category,
  defaultCategory = "",
  defaultPackage = "",
}) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [packages, setPackage] = React.useState();
  const [values, setValues] = React.useState({
    we_category: defaultCategory,
    we_package:defaultPackage,
    we_date: "",
    we_time: "",
    we_name: "",
    we_phone: "",
    we_email: "",
    we_status: "0",
    we_done_by: "",
    we_amount: "",
    we_type: "",
    we_notes: "",
  });
  const bookEnquiry = () => {
    if (values.we_name != "" && values.we_phone != "") {
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
            }, 1000);
          } else {
            message("Try Again Later", "warning");
          }
        })
        .catch((err) => {
          message("Please Check your internet Connection", "error");
        });
    } else {
      message("Name And Phone number is required", "warning");
    }
  };
  const getPackagesCatId = (sp_cat_id) => {
    var result = category.find(
      (item) => item.service_category_name_ar === sp_cat_id
    );
    if(result){
      api
      .post("/service/getServiceByCategoryId", {
        sp_cat_id: result.service_category_id,
      })
      .then((res) => {
        setPackage(res.data.data);
      })
      .catch((err) => {
        message("Please Check your internet Connection", "error");
      });
    
    
  };
  
     
     
   };
  const handleInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  React.useEffect(() => {
    if(show == true && defaultCategory != ''){
      getPackagesCatId(defaultCategory)
    }
    
  }, [show])
  

  return (
    <>
      <ToastContainer></ToastContainer>
      <Modal size="xl" show={show} onHide={handleClose}>
        <section className="widget ">
          <form className="contctWidgetForm btnTheme  pt-4 px-4 rounded pb-6">
            <Row>
              <Col sm={11}>
                <h4 className="mb-3 mb-xl-4 headingIX text-capitalize text-white">
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
                <select
                  onChange={(e) => {
                    handleInputs(e);
                    getPackagesCatId(e.target.value);
                  }}
                  className="form-control form-select"
                  name="we_category"
                >
                  <option selected>Category</option>
                  {category &&
                    category.map((cat) => (
                      <option
                      key={cat.service_category_id}
                        selected={
                          defaultCategory == cat.service_category_name_ar &&
                          true
                        }
                        value={cat.service_category_name_ar}
                      >
                        {cat.service_category_name_ar}|
                        {cat.service_category_name_en}
                      </option>
                    ))}
                </select>
              </Col>
              <Col sm={12} lg={3}>
                <select
                  onChange={handleInputs}
                  name="we_package"
                  className="form-control form-select"
                >
                  <option selected>Package</option>
                  {packages &&
                    packages.map((pack) => (
                      <option
                      key={pack.sp_id}
                        selected={defaultPackage == pack.sp_name_ar && true}
                        value={pack.sp_name_ar}
                      >
                        {i18next.language == "ar"
                          ? pack.sp_name_ar
                          : pack.sp_name_en}
                      </option>
                    ))}
                </select>
              </Col>
              <Col sm={12} lg={3}>
                <input
                  className="form-control"
                  type="date"
                  name="we_date"
                  onChange={handleInputs}
                />
              </Col>
              <Col sm={12} lg={3}>
                <input
                  className="form-control"
                  type="time"
                  onChange={handleInputs}
                  name="we_time"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="12" xl={4}>
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Full Name"
                  name="we_name"
                  onChange={handleInputs}
                />
              </Col>
              <Col sm="12" xl={4}>
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder="Phone Number"
                  name="we_phone"
                  onChange={handleInputs}
                />
              </Col>
              <Col sm="12" xl={4}>
                <input
                  type="email"
                  className="form-control rounded"
                  placeholder="Email Address"
                  name="we_email"
                  onChange={handleInputs}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm={12} lg={3}>
                <textarea
                  className="form-control rounded"
                  name="we_notes"
                  placeholder="Notes"
                  onChange={handleInputs}
                ></textarea>
              </Col>
              <Col sm={12} lg={3}>
                <button
                  type="button"
                  onClick={() => {
                    bookEnquiry();
                  }}
                  className="mt-5 btn btnTheme text-uppercase  w-100 fwEbold rounded border-white"
                  style={{ borderWidth: 1, borderColor: "#fff !important" }}
                >
                  Send & Book
                </button>
              </Col>
            </Row>
          </form>
        </section>{" "}
      </Modal>
    </>
  );
}

export default BookingEnquiry;
