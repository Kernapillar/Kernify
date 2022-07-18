class Playlist < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :picture_url, :user_id, presence: true


    has_many :playlist_items, dependent: :destroy
    
    has_many :tracks, through: :playlist_items

    belongs_to :user

    has_one_attached :picture_url
end
