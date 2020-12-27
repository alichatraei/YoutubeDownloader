class UI {
  showVideo(data) {
    let mainTag = document.querySelector("main"),
      {
        VideoTitle,
        AllFormats: {
          0: { Link, Type, Quality },
        },
      } = data;
      
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
            <td>کیفیت خوب (${Quality})</td>
            <td><a href="${Link}"><button>دانلود</button></a></td>
          </tr>
          <tr>
          <td>ویدیو ()</td>
          <td>کیفیت خوب ()</td>
          <td><a href=""><button>دانلود</button></a></td>
        </tr>
        </tbody>
      </table>
    </nav>`;
  }
}
