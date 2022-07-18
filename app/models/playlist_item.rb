class PlaylistItem < ApplicationRecord

    validates :playlist_id, :track_id, presence: true

    belongs_to :playlist
    belongs_to :track

end
