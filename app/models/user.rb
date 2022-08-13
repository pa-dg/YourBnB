class User < ApplicationRecord

  attr_reader :password
  
  validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  def self.find_by_credentials(username, password)
    
  end
  
end

