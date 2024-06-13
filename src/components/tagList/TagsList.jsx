import React from 'react';
import './TagsList.css';

const TagsList = ({ tags, tagColors }) => {
  return (
    <div className="tags-list">
      <h3>Tags:</h3>
      <ul>
        {tags.map(tag => (
          <li key={tag} style={{ backgroundColor: tagColors[tag] || 'gray' }}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagsList;
