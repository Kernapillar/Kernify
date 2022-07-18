@albums.each do |album|
    json.set! album.id do 
        json.extract! album, :id, :name, :year, :artist_id
        if album.picture_url.attached? 
            json.pictureUrl url_for(album.picture_url)
        end
        json.artist album.artist.name
    end
end