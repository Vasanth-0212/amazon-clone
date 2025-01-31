"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";


const Home = () => {

    let slideIndex = 1;

    const autoShowSlides = () => {
        let i;
        let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(autoShowSlides, 2000);
    };

    useEffect(() => {
        autoShowSlides();
    }, []);
    return (
        <div className="w-screen relative mx-auto">
            <div className="mySlides fade hidden">
                <img src="/home1.png" style={{ width: "100%" }} />
            </div>

            <div className="mySlides fade hidden">
                <img src="/home2.png" style={{ width: "100%" }} />
            </div>

            <div className="mySlides fade hidden">
                <img src="/home3.png" style={{ width: "100%" }} />
            </div>
            <div className="absolute bottom-[-200px] flex flex-wrap justify-between w-screen px-[50px]">
                <div className="h-[440px] w-[350px] bg-white mx-1 border border-gray-300">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold p-5">Crafting treasures from tradition</h1>
                        <img src="/crafts.png" className="h-[250px] w-[300px]" />
                    </div>
                    <p className="text-blue-500 p-6 hover:cursor-pointer">Explore more</p>
                </div>
                <div className="h-[440px] w-[325px] bg-white mx-1 border border-gray-300">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold p-5">Collections across small businesses</h1>
                        <img src="/business.png" className="h-[250px] w-[300px]" />
                    </div>
                    <p className="text-blue-500 p-6 hover:cursor-pointer">Explore more</p>
                </div>
                <div className="h-[440px] w-[325px] bg-white mx-1 border border-gray-300">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold p-5">Discover new tales of travel across Bharat</h1>
                        <img src="/travel.png" className="h-[250px] w-[300px]" />
                    </div>
                    <p className="text-blue-500 p-6 hover:cursor-pointer">Explore more</p>
                </div>
                <div className="h-[440px] w-[325px] bg-white mx-1 border border-gray-300">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-semibold p-5">Discovering the gems of health and healing</h1>
                        <img src="/health.png" className="h-[250px] w-[300px]" />
                    </div>
                    <p className="text-blue-500 p-6 hover:cursor-pointer">Explore more</p>
                </div>
            </div>
        </div>
    )
}
export default Home;