@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :name
        if artist.picture_url.attached? 
            json.pictureUrl url_for(artist.picture_url)
        end
    end
end