class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
  devise :database_authenticatable, :registerable, :validatable, :recoverable, :rememberable, 
    :jwt_authenticatable, jwt_revocation_strategy: Devise::JWT::RevocationStrategies::Null
  

  # JWT AUTHENTICATION CHANGE METHOD
  def change
    add_column :users, :jti, :string, null: false
    add_index :users, :jti, unique: true
    # If you already have user records, you will need to initialize its `jti` column before setting it to not nullable. Your migration will look this way:
    # add_column :users, :jti, :string
    # User.all.each { |user| user.update_column(:jti, SecureRandom.uuid) }
    # change_column_null :users, :jti, false
    # add_index :users, :jti, unique: true
  end
  
  # def jwt_payload
  #   super.merge('foo' => 'bar')
  # end
end
