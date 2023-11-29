import React from "react";
import { Form } from "react-bootstrap";
import "../Style/UploadForm.scss";

function UploadForm() {
  return (
    <>
      <div id="upload-page">
        <div className="wrapper">
          <div className="group">
            <h4>Name</h4>
            <Form.Control
              type="text"
              placeholder="Tittle"
              className="Forminput Nameinput"
            />
          </div>
          <div className="group">
            <h4>Description</h4>
            <Form.Control
              size="text"
              type="text"
              placeholder="Description"
              className="Forminput Descinput"
            />
          </div>

          <div className="group">
            <h4>Notes</h4>
            <Form.Control
              size="text"
              type="textarea"
              as
              placeholder="Notes"
              className="Forminput Notesinput"
            />
          </div>

          <Form.Group controlId="formFile" className="mb-3 group">
            <Form.Label>
              <h4> Select Image</h4>
            </Form.Label>
            <Form.Control type="file" className="Forminput" />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3 group">
            <Form.Label>
              <h4> Select Video</h4>
            </Form.Label>
            <Form.Control type="file" className="Forminput" />
          </Form.Group>
        </div>
      </div>
    </>
  );
}

export default UploadForm;
