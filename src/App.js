import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <div className="app__videos">
        <Video
          url="https://v19-web.tiktokcdn.com/7f3e864409d1d359a3341ff79cadd723/5f63cab7/video/tos/alisg/tos-alisg-pve-0037c001/e666193ca9434680b15328f9a940d452/?a=1988&br=2950&bt=1475&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009171444100101901921311003ADA0&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzc1eGZuaGRpdzMzZjczM0ApZDg8aGg4ZGRnNzUzZ2k6OWdlMWxubGw2ZWRfLS0xMTRzc2IwYi4uNGFfXmEzYy5jLjE6Yw%3D%3D&vl=&vr="
          channel='saarcohenn'
          description="Let's get CRAZYYY!!"
          song="Perm - by Bruno Mars"
          likes={123}
          messages={456}
          shares={789}
        />
        <Video
          url="https://v16-web.tiktokcdn.com/19298b25baef53946de629e6efbf434d/5f63cab7/video/tos/useast2a/tos-useast2a-pve-0068/8f68455d48cf42b995ad3387cfc6ae83/?a=1988&br=4718&bt=2359&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009171444100101890720324F03C44E&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amlpd3V5eW9vdDMzaDczM0ApPDU4ZmQ2ZmRmNzRpaDlnOGdxZHFhMV8wL2tfLS0vMTZzcy82NjFiYjZfMzYvXzY0XjE6Yw%3D%3D&vl=&vr="
          channel='saarcohenn'
          description="Let's get CRAZYYY!!"
          song="Perm - by Bruno Mars"
          likes={123}
          messages={456}
          shares={789}
        />
      </div>

    </div>
  );
}

export default App;
