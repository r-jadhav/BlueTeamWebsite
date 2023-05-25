import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "@iconify/react";
function BookingEnquiry({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Row>
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
        <Row></Row>
          <textarea
            class="form-control"
            placeholder="Your Question..."
          ></textarea>
          <button
            type="submit"
            class="btn btnTheme text-uppercase  w-100 fwEbold rounded border-white"
            style={{ borderWidth: 1, borderColor: "#fff !important" }}
          >
            Send & Book
          </button>
        </form>
      </section>{" "}
    </Modal>
  );
}

export default BookingEnquiry;
