class Album < ApplicationRecord
    validates :title, :year, :picture_url, :artist_id, presence: true
    validates :title, uniqueness: true 

    belongs_to :artist

    has_many :tracks

end
