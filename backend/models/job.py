from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from backend.database import Base

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=False)
    company_name = Column(String, nullable=False)
    location = Column(String, nullable=False)
    
    # filtering fields
    salary = Column(String, nullable=True)
    job_type = Column(String, nullable=True) # Full-time | Part-time | Remote
    posted_at = Column(DateTime, default=datetime.utcnow)

    owner_id = Column(Integer, ForeignKey("users.id"))

    # relations
    owner = relationship("User", back_populates="jobs")
    applications = relationship("Application", back_populates="job", cascade="all, delete")
    saved_by_users = relationship("SavedJob", back_populates="job", cascade="all, delete")