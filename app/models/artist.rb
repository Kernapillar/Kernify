class Artist < ApplicationRecord
    validates :name, uniqueness: true
    validates :name, :picture_url, presence: true

    has_many :albums

    has_many :tracks


    def preview_tracks
        Track.where(artist_id: self.id).limit(5)
    end
    
end
