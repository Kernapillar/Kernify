@playlists.each do |playlist|
    json.set! playlist.id do 
        json.extract! playlist, :id, :name, :description, :user_id, :color_1, :color_2
        
        json.user playlist.user.username
    end

end