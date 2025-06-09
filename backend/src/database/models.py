from sqlalchemy import Column,String,Integer
from ..website.config import Base

class TODO(Base):
    __tablename__ = "todo"
    id = Column(Integer, primary_key=True, index=True)
    note = Column(String, index=True)
    
class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True,index=True)
    email = Column(String,index=True)
    password = Column(String)