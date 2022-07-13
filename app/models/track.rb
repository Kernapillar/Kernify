class Track < ApplicationRecord
    validates :name, :audio_url, :album_id, :artist_id, presence: true

    belongs_to :artist

    belongs_to :album

   
end
