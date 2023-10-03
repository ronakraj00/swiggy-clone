export default function Shimmer() {

    const bgColor="bg-gray-400"

    return (
        <div className="flex flex-wrap w-full h-full my-10">
            {Array(10)
                .fill("")
                .map((item, index) => {
                    return (
                        <div
                            className="animate-pulse relative p-2 flex gap-1 w-full h-[150px]"
                            key={index}
                        >
                            <div className={`overflow-hidden w-1/2 shadow-lg flex ${bgColor}`}></div>
                            <div className="w-1/2 flex flex-col p-2 gap-2 justify-center">
                                <div className={`w-1/3 h-1/3 ${bgColor}`}></div>
                                <div className={`1/2 h-1/3 ${bgColor}`}></div>
                                <div className={`1/2 h-1/3 ${bgColor}`}></div>
                                {/* <div
                                    className="absolute inset-0 w-1/2 h-full z-10 animate-pulse"
                                ></div> */}
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
