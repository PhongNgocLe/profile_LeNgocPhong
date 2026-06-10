import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Lê Ngọc Phong',
    bio: 'A passionate developer with experience in React, Node.js, and more. Always eager to learn and build amazing things.',
    email: 'lengocphongk4@gmail.com',
    phone: '0334090425',
    location: 'Thành phố Hồ Chí Minh',
    skills: ['React', 'JavaScript', 'Node.js', 'HTML/CSS'],
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/phong-l%C3%AA-ng%E1%BB%8Dc-659a1a414/',
      github: 'https://github.com/',
  
    }
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...profileData.skills];
    newSkills[index] = value;
    setProfileData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  const addSkill = () => {
    setProfileData(prev => ({
      ...prev,
      skills: [...prev.skills, '']
    }));
  };

  const removeSkill = (index) => {
    const newSkills = profileData.skills.filter((_, i) => i !== index);
    setProfileData(prev => ({
      ...prev,
      skills: newSkills
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/images/avt.jpg" alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="edit-input name-input"
            />
          ) : (
            <h1>{profileData.name}</h1>
          )}
          <button onClick={handleEdit} className="edit-button">
            {isEditing ? 'Save' : 'Edit Profile'}
          </button>
        </div>
      </div>

      <div className="profile-section">
        <h2>About</h2>
        {isEditing ? (
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleChange}
            className="edit-textarea"
          />
        ) : (
          <p>{profileData.bio}</p>
        )}
      </div>

      <div className="profile-section">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span>{profileData.email}</span>
            )}
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span>{profileData.phone}</span>
            )}
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            {isEditing ? (
              <input
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                className="edit-input"
              />
            ) : (
              <span>{profileData.location}</span>
            )}
          </div>
        </div>
      </div>

      <div className="profile-section">
        <h2>Skills</h2>
        <div className="skills-list">
          {profileData.skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                    className="edit-input skill-input"
                  />
                  <button onClick={() => removeSkill(index)} className="remove-skill">Remove</button>
                </>
              ) : (
                <span className="skill-tag">{skill}</span>
              )}
            </div>
          ))}
          {isEditing && (
            <button onClick={addSkill} className="add-skill">Add Skill</button>
          )}
        </div>
      </div>

      <div className="profile-section">
        <h2>Social Links</h2>
        <div className="social-links">
          <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      
        </div>
      </div>
    </div>
  );
};

export default Profile;