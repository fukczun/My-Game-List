import React from "react";
import { urlToKebabCase } from "../assets/tools";

const Card = props => 
    <div className="w-[25.278vw] max-lg:w-[30%] max-sm:w-[55%] h-min my-auto max-sm:my-0">
        <h2 className="font-julius text-center text-white text-[max(2.5vw,1.3rem)]">{props.subtitle}</h2>
        <div className="bg-light-gray w-full h-min font-inter font-extralight rounded-t-lg">
            <div className="pt-6 ml-6 max-sm:ml-3 text-[1.25rem] max-md:text-[.9rem]">
                {props.games.map((element, index) => 
                <p key={index} className="text-dark-green mb-1">
                    <span className="text-[2rem] max-md:text-[1.75rem]">{index+1}°</span>
                    <a className="hover:text-light-green-600" href={`/game/${urlToKebabCase(element)}`}>{element}</a>
                </p> )}
            </div>
            <p className="text-right text-dark-green text-[1.12rem] max-md:text-[.75rem] mr-[1.5%] max-md:mt-10 max-sm:mt-3"><span className="w-min cursor-pointer focus:cursor-auto hover:text-light-green-600">Ver mais...</span></p>
        </div>
    </div>

export default Card