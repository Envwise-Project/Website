import { useState, useEffect } from "react";
import css from "./CreateProperty.module.css";
import imageIcon from "../../assets/image.svg";

function UploadImages({ setImages, images, onChange }) {
  const [error, updateError] = useState();
  let cloudinary;
  let widget;

  function createWidget() {
    const options = {
      cloudName: import.meta.env.VITE_cloudName,
      uploadPreset: import.meta.env.VITE_uploadPreset,
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
    setImages((images) => [...images, result?.info?.secure_url]);
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

  useEffect(() => {
    onChange("Link_Image", images);
  }, [images]);

  return (
    <section className={css.upload}>
      <div className={css.inputContainer}>
        <div>
          <label>Images</label>
          <div className={css.drop}>
            <img src={imageIcon} alt="image icon" />
            <p>Upload 5 pictures of the property. JPG or PNG</p>
            <button onClick={handleOnClick}>Browse</button>
          </div>
        </div>
      </div>
      <div className={css.images}>
        {images &&
          images.map((image, index) => (
            <span>
              <a href={image} target="_blank">
                image {index + 1}
              </a>
            </span>
          ))}
      </div>
      {error && <p>{error}</p>}
    </section>
  );
}

export default UploadImages;
