import { useState } from "react";

function Navbar(props) {
  var [logoname, setName] = useState("☰ Stirde Tutoring");
  function openNav() {
    document.getElementById("mySidebar").style.width = "17%";
    document.getElementById("main").style.marginLeft = "17%";
    var mm=document.getElementById("dropdownMenuButton");
    mm.style.marginTop = "100%";
    mm.style.transition=".5s";
    if (logoname !=="") {
      setName("");
    }
  }
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    var mm=document.getElementById("dropdownMenuButton");
    mm.style.marginTop = "10%";
    mm.style.transition=".5s";
    if (logoname ==="") {
      setName("☰ Stirde Tutoring");
    }
  }
  return (
    <div>
      <div id="mySidebar" className="sidebar" >
        <a 
          href="/"
          data-bs-target="#sidebar"
          onClick={closeNav}
          id="stride"
          data-bs-toggle="collapse"
          className=" p-1 text-decoration-none"
        >
          <i className="bi bi-list bi-lg py-2 p-1"></i>{" "}
          <img alt="logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQy_XjkUyvAxCfJ-Am8mO5XvowLXDpVW5c0OASU3_lug&s"
            id="ilogo"
          />
          <b>Stride</b> Tutoring
        </a>
        <a href="/" id="navcontent">
          <img
          alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVBN3TvkwxIhNW0fydCSYQpxQSUO-CUKE9Q&usqp=CAU"
            id="i"
          />{" "}
          <span>Batch Booking</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACUCAMAAAAUEUq5AAAAclBMVEX29vYAAAD8/Pxvb2+QkJDo6OgEBAT6+vqcnJxERERbW1vu7u4rKyvLy8u8vLx5eXm2trbExMRhYWGtra0mJiY+Pj4hISEcHByDg4M0NDTh4eF1dXWMjIxXV1fY2Nijo6OZmZl/f39LS0sVFRVDQ0MwMDCDHzrRAAADtklEQVR4nO3d61KjQBSF0eZI7BgMEnIjaG46ef9XnDAEJDVGDZwt3WavqflLdT6xgWDVMYaIiIiIiIiIiIiI3GXl+6zte7U+sGKi8XQ4zJ6+I9zGAyMM+zkx42weXGf2FEcMe5mV5NqkpUWWs+sFsmnX9J/nXPpev5Mkad+0sDNXXOS+fzXsO0s3Mu0WNQgehvqmY+PzXYaMu0ZFSWPj6+Zio1nf9S6bx55mlX39Ge7T4tdOjv/sV//F5sndT/w4no2P24Ad1B9gP7jmEnF8DIuSV3zW18jDrPJSLT++/qorNn6EZ537mPVwWnzSagcTk8Gzpt5VtZtq6W0vC2c3u2k60rFeNI7a7gfeI9meVj5pfUJI3Kiq9xAQbZf1YTU/8U+Qp3Ldb4P2v2bNszXVu2RLlFZH3Xp2sspdue4/XdbdzLrWeyCytso692xnrao+dDobmllHemerjd5OB934lVWn6tlXCane2Vrv+lO/tgClquebgNrZavPTIbPbrHp+J6B3374qj/h8o1WNTN6zzrVeEMhDecC7W616ljUIdV5osep51uXuqu9qLh2SVc+zHq9a2zwq3pR0wKrmv6xBcEiz7WTcwYpVi5e1ywDhtqs2H95ZVa3q8eE9uWdV7arFF9mh+jbAqsU2sO3wtzCsevGwZvNy+DwUq7ZgRTZJtl7pbLKsWrPFy+18s4nbSxas+pEuT1ZWzCOr6otYFYBVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEVgVgVURWBWBVRFYFYFVEaIDq+rzdbbFvlz2LOp7JR+qpkXvPau6K5ft5gy5eq7pzq+qtpqc8uLiuuvBxu3nmvbCDqqBhw7OPa5ncHeZa9oLGQXOXhCqS2kwcm9tn3sfoxgqTaVTI2G1tNixlX3N1hOl98alU0LMvlrYwruozZmfq6nRm1PdkZmu6nV5Nz38yDYnUq2z0AXZurEm/ybdm+ZtgJuWvt0AlOp7bTc5+XzyDTLGTPvTsBx7uKmWZKA85UvNPPc2ajHZZ9h3vw8N9ea790Jy/Wl/HS1Cn0/UkhUzCdez5b0LlrN1ODGuPey1Y4vb72jQv2KQ8+9IWus0PU1J3w2IiIiIiIiIiIjoN/kLOb1QUR4qdZoAAAAASUVORK5CYII="
            id="i"
          />{" "}
          <span>
            Bulk Credit <br></br>
          </span>{" "}
          <span style={{ marginLeft: "26%" }}> Configuration</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAZlBMVEX///8AAABeXl7Ozs7u7u7ExMSmpqb29varq6tLS0uGhobJyck+Pj7j4+P8/PxaWlorKysPDw+Xl5cICAidnZ3a2tp9fX24uLhqamo5OTkWFhZjY2NwcHAbGxt2dna+vr6Ojo4yMjLATzpZAAADyUlEQVR4nO1b6ZqiMBC0JIRbzgiKx8z7v+TGcVQIEWYJA/3tUv+IJFQ6SV9pN5sVK1asWLFixYrfQrSPt0/E+2h+Bo6HFjxndgoBPGE9ITwEs1Mo4TcffZSzU+DgPY+zQJm2IpRZULUXP0A1O4Uwt5qPVh7OTgFJSxNECX7za46lacSBNR/ZQUfBmkhZcKl4bLWRwds1n3cemPqOLTtOck5cHGsgU1oF4nZDDKG8kgH1Ea45gxJyFJ7j1G621YaTKqkTci75m6us7zGCMzzWblf0gN+eL/Nwvp3arxkYgT9mcRuyOc1CHdlF0Xiyn5RLw/3gvuawk4J9fZVdcG2/esXlJSZXLtxjt7pGcmhLsQA+7uPalwTq7hNAcrnLafeBpkhM9oPaNwBitnG4/D5qrhx5h8tzg0Q2sxht5T1+P/AO+yhEUpyBbalVOU65Bc5FglBxocbuBwfHDndWAWmtU5bfsOoUqDpKyj1ijJ60UGta/UMPga9uB53VrjHQTY+JtOsNck1H9bORT+QPBnnXyPwMGc6dVR0Ddu6YmB/jpJjDcZBG9DT81jsYdX5ATsSgtxRhMfxWPwrD5bRz0xAlQD5yKz4glbRRtBgZG+vN5gOhgRxZiA9TBptdbBIhVIgnOFMsGR8o+Ugm0SwFDu9+EiUvCrdUHdcnDuYH6gbnnOpNjPCT9J5bSBNfz8JKz1NEElxrMTeiSnEMq4zzrAqPSCstiXoSU5do7az04pA9vypkzKCVuYXEnIGNbbfRiTvBjSQRa4S+HWsjG7hofE/Hw2dH7uJTl28qcTFlII9kd9xYq66kGoo7jY7RsWTCdouLZjMW+NQOyz41+6HGpXBt8Vc8nKDkfhU+s3mdLS06MUTfL/w5UFj5vAx+cEijez4xTw5efPLdq+j0qd77QFlXmTvi6vqn2Dsk+T0/OWz19vBuZK2IvVHuIu1xRZG+EdCORdZNvB72gxS6eQIFfp8jmA3ZE6E74wq2Qx5/cuzhKI4DqsiagIJIe1Nr4buVmJBC2e8+VANR9BQUeH9MkA34aVNQKPptHx/wEP4RCgQWgsB2JHAoZ1BNBBQ0ATNFwFgTcFleWM5xU4Zd1H29Y3knnkIoQyCgoxDWEgju+1Mc7hwpjuUTPQTSXcsn/ZZPfS6fACaQBl/+MmD5K5HlL4YIXI8tf0lI4KqUwIUxgWtzCsUDFEooKBSSUCinoVBURKG0ikKBGYUyOwrFhnrMW3KpBYHCUwLltwSKkAmUYhMoSCdQlk/gzwmbaL9tYIm/aKxYsWLFihUr/hv8AWMSPJdcRt1bAAAAAElFTkSuQmCC"
            id="i"
          />{" "}
          <span>Configuration</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo"
            src="data:image/png;base64,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"
            id="i"
          />{" "}
          <span>District Management</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNsBZUPx3OziQxhskmHeYtX5uzL6us1YBnw&usqp=CAU"
            id="i"
          />{" "}
          <span>Export Data</span>
        </a>
        <a href="/n" id="navcontent">
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGi0-0hVaPpUULz5PWwRpePcUBv1buwmcEg&usqp=CAU"
            id="i"
          />{" "}
          <span>Filter Words</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZn77qQJ_aEhSydADkPebAXzTALvp0eU8Dkw&usqp=CAU"
            id="i"
          />{" "}
          <span>Manage Subjects</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSGNd4G3CCfHRNSyI6H8R0E6pxaQMhgJB-Q&usqp=CAU"
            id="i"
          />{" "}
          <span>Manage Tutor</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2W4tyxPl9f4v_PF2FnS6B0XTBFhICvHqiA&usqp=CAU"
            id="i"
          />{" "}
          <span>Manual Refund</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z29x-4My9myJ_S7180QAoL-0Dhg3BEZmPA&usqp=CAU"
            id="i"
          />{" "}
          <span>Promo codes</span>
        </a>
        <a href="/" id="navcontent">
          {" "}
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRx4AZKMDGZ67wafdLlHJlFQ3Ytp3gJxQ5g&usqp=CAU"
            id="i"
          />{" "}
          <span>Reporting</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3z29x-4My9myJ_S7180QAoL-0Dhg3BEZmPA&usqp=CAU"
            id="i"
          />{" "}
          <span>Revenue Percentages</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLGi0-0hVaPpUULz5PWwRpePcUBv1buwmcEg&usqp=CAU"
            id="i"
          />{" "}
          <span>Session Rates</span>
        </a>
        <a href="/" id="navcontent">
          <img alt="logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhQgEeb7xAX9-klfQqqRGyUwjY1I5GI2JCmg&usqp=CAU"
            id="i"
          />{" "}
          <span>Tutor List</span>
        </a>
      </div>

      <div id="main" >
        <div id="open">
          <button className="openbtn" id="open" onClick={openNav}>
            {logoname}
          </button>
        </div>
        <div className="dis">
          <div className="text">
            <p id="wel">
              Welcome!<br></br>
              <b id="ad">Admin</b>
            </p>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              A
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id="out">
              <a className="dropdown-item " href="/"
                 type="button"  data-bs-toggle="modal" data-bs-target="#staticBackdro">
Log Out

              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="staticBackdro" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{marginLeft:"40%"}}>LOGOUT</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p style={{textAlign:"center"}}>Are you sure you want to log out of your current <br/>session ?</p>
      </div>
      <div className=""
      style={{textAlign:"center" , marginBottom:"10%"}}>
        <button style={{marginRight:"4%"}} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button style={{marginLeft:"4%" }} type="button" className="btn btn-primary" data-bs-dismiss="modal">Log Out</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Navbar;
