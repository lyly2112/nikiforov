import React from "react";

function Reviews() {
    return (
        <div className="reviews-container">
            <span className="reviews-header">What Do My Customers Think?</span>
            <div className="reviews">
                <div className="review">
                    <div className="review__photo"></div>
                    <div className="review__text-container">
                        <div className="review__text">
                            <span>
                                Maecenas sed diam eget risus varius blandit sit amet non magna.
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.
                            </span>
                        </div>
                        <span className="review__name">Connor Gibson</span>
                    </div>
                </div>
                <div className="review">
                    <div className="review__photo"></div>
                    <div className="review__text-container">
                        <div className="review__text">
                            <span>
                                Maecenas sed diam eget risus varius blandit sit amet non magna.
                                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.
                            </span>
                        </div>
                        <span className="review__name">Connor Gibson</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;