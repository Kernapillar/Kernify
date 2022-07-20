class Album < ApplicationRecord
    validates :name, :year, :artist_id, presence: true
    validates :name, uniqueness: true 

    belongs_to :artist

    has_many :tracks

    has_one_attached :picture_url

end
