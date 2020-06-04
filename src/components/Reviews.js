import React from "react";

function Reviews() {
    return (
        <div className="reviews-container">
            <div className="reviews-header">What Do My Customers Think?</div>
            <div className="reviews">
                <div className="review">
                    <div className="review__photo"></div>
                    <div className="review__text-container">
                        <div className="review__text">Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.</div>
                        <div className="review__name">Connor Gibson</div>
                    </div>
                </div>
                <div className="review">
                    <div className="review__photo"></div>
                    <div className="review__text-container">
                        <div className="review__text">Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus.</div>
                        <div className="review__name">Connor Gibson</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;