class RemoveUrls < ActiveRecord::Migration[5.2]
  def change
    remove_column :albums, :picture_url
    remove_column :artists, :picture_url
    remove_column :playlists, :picture_url

    remove_column :tracks, :audio_url



  end
end
