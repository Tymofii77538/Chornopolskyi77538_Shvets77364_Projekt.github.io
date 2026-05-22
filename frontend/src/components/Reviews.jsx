import axios from "../api/axios";
import { useEffect, useState } from "react";
import "../styles/Reviews.css";

function Reviews({ id }) {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState("")
    const [comment, setComment] = useState("")

    useEffect(() => {
        axios.get(`/books/${id}/reviews/`)
            .then((response) => {
                setReviews(response.data);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
            });
    }, [id]);


    return (
        <div>
            <h2>Reviews</h2>
            <div className="reviews-container">
                {reviews.map((review) => (
                    <div key={review.id} className="review">
                        <p>Rating: {review.rating}</p>
                        <p>{review.comment}</p>
                    </div>
                ))}
            </div>
            <form className="add-review-form" onSubmit={(e) => {
                e.preventDefault();
                axios.post(`/books/${id}/reviews/`, { book: id, rating, comment })
                    .then((response) => {
                        setReviews([...reviews, response.data]);
                        setRating("");
                        setComment("");
                    })
                    .catch((error) => {
                        console.error("Error adding review:", error);
                    });
            }}>
                <h3>Add a Review</h3>
                <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <select
                        id="rating"
                        name="rating"
                        className="select-field"
                        required
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                        <option value="">Select a rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        className="input-field"
                        required
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}>

                    </textarea>
                </div>
                <button type="submit" className="add-review-button">Submit Review</button>
            </form>
        </div>
    )
}

export default Reviews