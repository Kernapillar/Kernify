@playlists.each do |playlist|
    json.set! playlist.id do 
        json.extract! playlist, :id, :name, :description, :picture_url, :user_id
        json.user playlist.user.username
    end

end