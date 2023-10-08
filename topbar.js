export default function Topbar() {
    let Categories = [
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Programming Languages",
      "Mobile Application Development",
      "Technology and Tools",
      "Get a Job in Tech Company",
      "Others"
    ];
    return (
      <>
        <nav>
          <div id="container-header">
            <div className="logo">
              <label id="EdYoda">EDYODA</label>
              <label id="Stories">STORIES</label>
            </div>
            <div id="cont-EssentialCategory">
              <span className="dropdown">
                <lable className="dropbtn">
                  <p styles="inlineBlock">
                    {" "}
                    Explore Categories
                    <i className="fas fa-chevron-down" styles="paddingLeft:8px"></i>
                  </p>
                </lable>
                <div className="dropdown-content">
                  {Categories.map((item, index) => {
                    return (
                      <a href="#" key={index}>
                        {item}
                      </a>
                    );
                  })}
                </div>
              </span>
            </div>
          </div>
          <div className="but-on">
            <button className="Gotoweb"> Go To Main Website</button>
          </div>
        </nav>
      </>
    );
  }
  