class Playlist < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :user_id, presence: true


    has_many :playlist_items, dependent: :destroy
    
    has_many :tracks, through: :playlist_items

    belongs_to :user

end
