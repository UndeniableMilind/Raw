import React, { useRef } from "react";
import { useState } from "react";
function Nav(props) {
  const [add, setAdd] = useState("");
  const [list, setList] = useState([]);
  function b() {
    setList((list) => {
      const updatedList = [...list, add];
      setAdd("");
      return updatedList;
    });
  }

  const [innerData, setInner] = useState("");

  const refelem = useRef("");
  const [i, setI] = useState(0);
  const [innerText, setInnerText] = useState("");

  const update = () => {
    setList(
      list.map((elem , id) => {
        if (i === id) {
          elem=innerData;
        }
        else{
          setI(i+1)
        }
        return elem;
      })
    );
  };


  function text(i){
    list.map((elem , id) => {
      if (i === id) {
        setInnerText(elem)
      }
    })
  }

   function t(i){
    setI(i);
    text(i);
   }


  function remove(i) {
    const updatedData = list.filter((elem, id) => {
      return i != id;
    });
    setList(updatedData);
  }

  return (
    <>

      <div className="m">

      <div className="vese">
        <div className="add">
          <div>
            <h4 style={{color:"black"}}>Manage Filtered Words</h4>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              id="bb"
            >
              Add Word
            </button>
          </div>
        </div>

        <div style={{display:"flex" , justifyContent:"space-between" , marginLeft:"2%", marginRight:"2%" ,marginTop:"2%" , color:"gray"}}>
          <div>
          <p>Words</p>
          </div>
          <div>
          <p>Actions</p>
          </div>
        </div>

        {list != [] &&
          list.map((data, index) => {
            return (
              <>

              <div style={{ display: "flex"}}>
                <div ref={refelem} key={index} style={{ marginBottom:"2%" , marginLeft:"2%" , marginRight:"2%" , color:"black"}}>
                  <p style={{fontSize:"19px"}}>
                    {data}
                  </p>
                  </div>
                  <div id="last">
                  <button
              type="button"
             
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#stati"
              style={{marginLeft:"8%" ,  backgroundColor:"white"}}
              onClick={() => {
                t(index);}}
            >
              <img style={{backgroundColor:"white"}} src="https://admin.stage.stridelearning.com/edit.svg"/>
            </button>
                  <button
                  
                   className="btn btn-primary"

                   style={{marginLeft:"15%" ,  backgroundColor:"white" }}
                    onClick={() => {
                      remove(index);
                    }}
                  >
                     <img style={{backgroundColor:"white"}} src="https://admin.stage.stridelearning.com/deleteBin.svg"/>
                  </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Words
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                className=""
                style={{
                  marginLeft: "3%",
                  border: "1px solid gray",
                  width: "92%",
                }}
              >
                <p style={{ marginLeft: "2%" }}>Word</p>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  style={{ border: "none" }}
                  placeholder="Word"
                  value={add}
                  onChange={(e) => {
                    setAdd(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={b}
                data-bs-dismiss="modal"
              >
                Add Words
              </button>
            </div>
          </div>
        </div>


        


        
      </div>


                    
      <div
        className="modal fade"
        id="stati"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Words
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                className=""
                style={{
                  marginLeft: "3%",
                  border: "1px solid gray",
                  width: "92%",
                }}
              >
                <p style={{ marginLeft: "2%" }}>Add Word</p>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  style={{ border: "none" }}
                  placeholder={innerText}
                  onChange={(e) => {
                    setInner(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={update}
                data-bs-dismiss="modal"
              >
                UPDATE
              </button>
            </div>
          </div>
        </div>


        


        
      </div>

    </>
  );
}

export default Nav;
