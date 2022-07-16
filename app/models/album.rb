class Album < ApplicationRecord
    validates :name, :year, :picture_url, :artist_id, presence: true
    validates :name, uniqueness: true 

    belongs_to :artist

    has_many :tracks

end
