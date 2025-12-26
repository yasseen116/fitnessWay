from sqlalchemy import Column, Integer, String, Boolean, Text
from sqlalchemy.orm import relationship
from backend.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    password = Column(String, nullable=False)
    role = Column(String, nullable=False)  # job_seeker | company
    is_active = Column(Boolean, default=True)
    
    # profile fields
    phone = Column(String, nullable=True)
    location = Column(String, nullable=True)
    about_me = Column(Text, nullable=True)
    cv_url = Column(String, nullable=True)

    # relations
    jobs = relationship("Job", back_populates="owner", cascade="all, delete")
    applications = relationship("Application", back_populates="user", cascade="all, delete")
    skills = relationship("Skill", back_populates="user", cascade="all, delete")
    saved_jobs = relationship("SavedJob", back_populates="user", cascade="all, delete")
    
    