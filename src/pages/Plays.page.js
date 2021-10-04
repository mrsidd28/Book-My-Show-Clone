import React from "react";
import Poster from '../components/Poster/poster.component';
import MyDisclosure from "../components/PlaysFilters/PlaysFilters.component";


const Plays = () => {
    return(
        <>
        <div className="container mx-auto px-4 bg-opacity-50 bg-gray-50">
            <div className="w-full lg:flex lg:flex-row-reverse">
            <div className="flex flex-col items-start mt-7 lg:w-8/12">
                <h2 className="text-gray-900 text-2xl font-bold ml-5 mb-7">Plays in Varanasi</h2>
                <div className="flex flex-wrap">
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315029-uhmxfrvwgy-portrait.jpg"
                        title="Noises Off"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXAgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314369-cdkwacmmks-portrait.jpg"
                        title="Weekend Open-Micby True Soul Tales"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314929-rernujftzc-portrait.jpg"
                        title="Many Faces of Korean Storytelling"
                        subTitle="Tamil ₹300"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314411-uzdfhbeemr-portrait.jpg"
                        title="Who Do You Do?"
                        subTitle="Tamil ₹300"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyIE9jdCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00314410-aunerpzgrs-portrait.jpg"
                        title="Love is in the Air"
                        subTitle="Tamil ₹300"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA5IE9jdA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315003-vxylxmymfu-portrait.jpg"
                        title="A story within a story in Mahabharata"
                        subTitle="English ₹250"
                        />
                    </div>

                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315004-thdcspmbtd-portrait.jpg"
                        title="Ramayana connecting the Dots"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                    <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                        <Poster
                        src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNiBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00314717-xevgbwqkxe-portrait.jpg"
                        title="Prison Games"
                        subTitle="Tamil ₹300"
                        />
                    </div>
                </div>
            </div>
            <div className="my-7 ml-0 lg:w-1/4 flex flex-col items-start">
            <h2 className="text-gray-900 text-2xl font-bold ml-5">Filters</h2>
            <div className=" bg-opacity-100 rounded-md p-2">
            <MyDisclosure title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
           <MyDisclosure title="Languages" tags={["Tamil", "English", "Kannada"]} />
           <MyDisclosure title="Category" tags={["Theatre"]} />
           <MyDisclosure title="Genres" tags={["Drama","Adaption", "Historical","Online Streaming Plays"]} />
            </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default Plays;
