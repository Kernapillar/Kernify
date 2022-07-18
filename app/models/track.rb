class Track < ApplicationRecord
    validates :name, :audio_url, :album_id, :artist_id, presence: true

    belongs_to :artist

    belongs_to :album

    has_one_attached :audio_url
   
end
