json.artists do 
    @all[0].each do |artist|
        json.set! artist.id do 
            json.extract! artist, :id, :name
            if artist.picture_url.attached? 
                json.pictureUrl url_for(artist.picture_url)
            end
        end
    end
end

json.albums do 
    @all[1].each do |album|
        json.set! album.id do 
            json.extract! album, :id, :name, :year, :artist_id
            if album.picture_url.attached? 
                json.pictureUrl url_for(album.picture_url)
            end
            json.artist album.artist.name
        end
    end
end

json.playlists do 
    @all[2].each do |playlist|
        json.set! playlist.id do 
            json.extract! playlist, :id, :name, :description, :user_id
            if playlist.picture_url.attached? 
                json.pictureUrl url_for(playlist.picture_url)
            end
            json.user playlist.user.username
        end
    end
end
