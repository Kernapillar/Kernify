@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :title, :year, :picture_url, :artist_id

    end
end