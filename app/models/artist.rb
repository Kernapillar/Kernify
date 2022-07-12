class Artist < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :picture_url, presence: true

    has_many :albums

    has_many :tracks, 
    through: :albums,
    source: :tracks
end
