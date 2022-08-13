import React from "react";
import "./new.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
const New = ({ inputs, title }) => {
  const [file, setFile] = React.useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Upload Image:
                  <DriveFolderUploadOutlinedIcon className="fileIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input
                      type={input.type}
                      id={input.id}
                      placeholder={input.placeholder}
                    />
                  </div>
                );
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
