import { useState } from "react";
import css from "./CreateProperty.module.css";
import documentIcon from "../../assets/document.svg";

function UploadDocuments({onChange, propertyData}) {
  const [docuemnts, setDocuments] = useState([]);
  const [error, updateError] = useState();
  let cloudinary;
  let widget;

console.log(propertyData.Link_Image)

  function createWidget() {
    const options = {
      cloudName: import.meta.env.VITE_cloudName,
      uploadPreset: import.meta.env.VITE_uploadPreset,
      resourceType: "auto",
    };

    return cloudinary?.createUploadWidget(options, function (error, result) {
      if (error || result.event === "success") {
        handleOnUpload(error, result);
      }
    });
  }

  function handleOnUpload(error, result) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setDocuments((docuemnts) => [...docuemnts, result?.info?.secure_url]);
  }

  function handleOnClick(e) {
    e.preventDefault();
    if (!cloudinary) {
      cloudinary = window.cloudinary;
    }
    if (!widget) {
      widget = createWidget();
    }
    widget && widget.open();
  }

  return (
    <section className={css.upload}>
      <div className={css.inputContainer}>
        <div>
          <label>Images</label>
          <div className={css.drop}>
            <img src={documentIcon} alt="image icon" />
            <p>Upload Documents of the property. Doc or PDF</p>
            <button onClick={handleOnClick}>Browse</button>
          </div>
        </div>
      </div>
      <div className={css.images}>
        {docuemnts &&
          docuemnts.map((image, index) => (
            <span>
              <a href={image} target="_blank">
                Document {index + 1}
              </a>
            </span>
          ))}
      </div>
      {error && <p>{error}</p>}
    </section>
  );
}

export default UploadDocuments;
