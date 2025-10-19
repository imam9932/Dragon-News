import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
    
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg border border-gray-200">
      {/* Author & Date */}
      <div className="flex items-center justify-between px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-lg flex gap-2 items-center">
          <CiBookmark />

          <FaShareAlt className="text-gray-500" />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full h-70"
        />
      </figure>

      {/* Details */}
      <div className="card-body p-4">
        <p className="text-sm text-gray-700">
          {details.slice(0, 180)}...
          <span className="text-primary font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="badge badge-outline text-xs font-medium capitalize"
            >
              #{tag}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 border-t pt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 ml-1">{rating.number}.0</span>
            {rating.badge && (
              <span className="badge badge-secondary ml-2">
                {rating.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
