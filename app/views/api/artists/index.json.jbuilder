@artists.each do |artist|
    json.set! artist.id do 
        json.extract! artist, :id, :name, :picture_url
    end
end