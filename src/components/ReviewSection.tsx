import React, { useState } from 'react';
import '../styles/ReviewSection.css'; // CSS file for styling

interface Review {
  id: number;
  name: string;
  comment: string;
  rating: number;
  avatar: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: 'Hiệu Hữu',
    comment:
      'Dịch vụ tận tâm, nhiệt tình, luôn sẵn sàng hỗ trợ những yêu cầu của khách hàng. Sản phẩm chất lượng cao và đủ số lượng như đã yêu cầu. Các mom nên sử dụng dịch vụ của On Ideas nhé :3',
    rating: 5,
    avatar: '/images/cat.jpeg',
  },
  {
    id: 2,
    name: 'Ngọc Trâm',
    comment:
      'Dịch vụ tận tâm, nhiệt tình, luôn sẵn sàng hỗ trợ những yêu cầu của khách hàng. Sản phẩm chất lượng cao và đủ số lượng như đã yêu cầu. Các mom nên sử dụng dịch vụ của On Ideas nhé :3',
    rating: 4,
    avatar: '/images/cat.jpeg',
  },
];

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newRating, setNewRating] = useState<number>(0);
  const [newComment, setNewComment] = useState<string>('');

  // Handle rating click
  const handleRatingClick = (rating: number) => {
    setNewRating(rating); // Update the selected rating
  };

  // Handle comment input change
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
    <div className="review-section">
      <h2>Đánh giá sản phẩm</h2>
      <div className="review-section-content">
        {/* Left: Review Input Section */}
        <div className="review-input">
          <div className="rating-stars">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fa-solid fa-star ${
                  index < newRating ? 'active' : ''
                }`}
                onClick={() => handleRatingClick(index + 1)}
              ></i>
            ))}
          </div>
          <textarea
            placeholder="Nhập đánh giá của bạn tại đây..."
            className="review-textarea"
            value={newComment}
            onChange={handleCommentChange}
          ></textarea>
        </div>

        {/* Right: Customer Reviews Section */}
        <div className="customer-reviews">
          {reviews.map((review) => (
            <div key={review.id} className="customer-review">
              <img
                src={review.avatar}
                alt={`${review.name}'s avatar`}
                className="customer-avatar"
              />
              <h4>{review.name}</h4>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? 'active-star' : ''}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
