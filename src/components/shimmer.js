export default function Shimmer() {
    return (
        <div className="skeleton">
            {Array(10)
                .fill("")
                .map((item) => {
                    return (
                        <div className="restaurant-skeleton">
                            <div className="img"></div>
                            <div className="name"></div>
                            <div className="discription"></div>
                            <div className="shimmer"></div>
                        </div>
                    );
                })}
        </div>
    );
}
