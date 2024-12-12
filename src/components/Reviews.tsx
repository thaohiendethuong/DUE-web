import React, { useState } from 'react';
import '../styles/Reviews.css';

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const initialReviews: Review[] = [
  { id: 1, name: 'Hiệu Hữu', comment: 'Dịch vụ tận tâm, nhiệt tình, luôn sẵn sàng hỗ trợ những yêu cầu của khách hàng. Sản phẩm chất lượng cao và đủ số lượng như đã yêu cầu. Các mom nên sử dụng dịch vụ của On Ideas nhé :3', rating: 5, avatar: '/images/cat.jpeg' },
  { id: 2, name: 'Ngọc Trâm', comment: 'Dịch vụ tận tâm, nhiệt tình, luôn sẵn sàng hỗ trợ những yêu cầu của khách hàng. Sản phẩm chất lượng cao và đủ số lượng như đã yêu cầu. Các mom nên sử dụng dịch vụ của On Ideas nhé :3', rating: 4, avatar: '/images/cat.jpeg' },
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newRating, setNewRating] = useState<number>(0);
  const [newComment, setNewComment] = useState<string>('');

  // Handle rating click
  const handleRatingClick = (rating: number) => {
    setNewRating(rating); // Update the selected rating
  };

  // Handle comment input change
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  // Handle adding a new review
  const handleAddReview = () => {
    if (newRating > 0 && newComment.trim()) {
      const newReview: Review = {
        id: reviews.length + 1,
        name: 'Người dùng mới',
        comment: newComment,
        rating: newRating,
        avatar: '/avatars/default-avatar.png', // Default avatar for new users
      };
      setReviews([...reviews, newReview]);
      setNewRating(0); // Reset rating
      setNewComment(''); // Reset comment
    } else {
      alert('Vui lòng chọn đánh giá và nhập nhận xét.');
    }
  };

  return (
    <section className="reviews">
      <h2 className="reviews-title">ĐÁNH GIÁ CỦA KHÁCH HÀNG</h2>
      <div className="reviews-container">
        {/* Input Box */}
        <div className="input-box">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${index < newRating ? 'active' : ''}`}
                onClick={() => handleRatingClick(index + 1)}
              ></i>
            ))}
          </div>
          <div className='input-box-content'>
          <textarea
            placeholder="Nhập nhận xét của bạn..."
            value={newComment}
            onChange={handleCommentChange}
            className="comment-box"
          ></textarea>
          </div>
          <button onClick={handleAddReview} className="submit-button">
            Gửi đánh giá
          </button>
        </div>

        {/* Existing Reviews */}
        {reviews.map((review) => (
          <div key={review.id} className="review-box">
            <img src={review.avatar} alt={`${review.name}'s avatar`} className="avatar" />
            <div className="review-details">
              <h3 className="review-name">{review.name}</h3>
              <p className="review-comment">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
