import Icon from "@/components/Icon";
import Nav from "@/components/Nav/Nav";
import NavLogo from "@/components/Nav/nav-logo";
import Searcher from "@/components/Searcher/Searcher";
import Sidebar from "@/components/Sidebar/Sidebar";
import Video from "@/components/Video/Video";
import VideoDescription from "@/components/Video/VideoDescription/VideoDescription";
import VideoGrid from "@/components/VideoCard/video-grid";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center px-[24px] scrollbar-style">
      <Nav/>
      <div className="flex mt-[17px] gap-x-5">
        <div >
         <Video/>
         <VideoGrid/>
        </div>
        <div className="w-full">
          <VideoDescription/>
        </div>
      </div>
    </main>
  );
}
