class Data extends UI {
  constructor() {
    super();
    this.apiKey = "e6b6dc7894msh3e5fba24f14c7a4p10d06djsn31c3e0bcdab5";
    this.rapidAPIHost = "youtube-video-info.p.rapidapi.com";
  }
  async fetchData(link) {
    let URL = `https://youtube-video-info.p.rapidapi.com/video_formats?video=${link}`;
    console.log(URL);
    //show Wait Spinner
    this.showLoading();
    //Fetching API
    await fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": this.apiKey,
        "x-rapidapi-host": this.rapidAPIHost,
      },
    })
      .then((res) => {
        res.json().then((res) => {
          this.showVideo(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
