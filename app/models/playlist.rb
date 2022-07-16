class Playlist < ApplicationRecord
    validates :title, uniqueness: true
    validates :title, :picture_url, :user_id, presence: true

    has_many :tracks
    through: :playlist_items
    source: :tracks

    has_many :playlist_items

    belongs_to :user
end
