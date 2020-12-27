class UI {
  showVideo(data) {
    let mainTag = document.querySelector("main"),
      //Object destructuring
      {
        VideoTitle,
        AllFormats: {
          0: { Link, Type, Quality },
        },
      } = data;
    //Create Element and show them in Main Element
    mainTag.innerHTML = `<p id="title">${VideoTitle}</p> 
    
     <nav id="videoPlayer">
     <video src="${Link}" controls></video> 
     </nav> 
     
     <nav id="showTable">
      <table>
        <thead>
          <tr>
            <th>نوع فایل</th>
            <th>کیفیت فایل</th>
            <th>لینک دانلود</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ویدیو (${Type})</td>
            <td>کیفیت پایین (${Quality})</td>
            <td><a href="${Link}"><button>دانلود</button></a></td>
          </tr>
          <tr>
          <td>ویدیو (${data.AllFormats[1].Type})</td>
          <td>کیفیت خوب (${data.AllFormats[1].Quality})</td>
          <td><a href="${data.AllFormats[1].Link}"><button>دانلود</button></a></td>
        </tr>
        </tbody>
      </table>
    </nav>`;
  }
  showLoading() {
    let mainTag = document.querySelector("main");
    mainTag.innerHTML = ` 
    <img src="assets/images/spinner.gif" width='50px' height="50px" id="spinner">
    `;
  }
  showError() {

  }
}
