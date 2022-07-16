json.artists do 
    @all[0].each do |artist|
        json.set! artist.id do 
            json.extract! artist, :id, :name, :picture_url
        end
    end
end

json.albums do 
    @all[1].each do |album|
        json.set! album.id do 
            json.extract! album, :id, :name, :year, :picture_url, :artist_id
            json.artist album.artist.name
        end
    end
end