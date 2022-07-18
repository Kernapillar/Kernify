class UniquePlaylistIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :playlist_items, [:playlist_id, :track_id], unique: true
  end
end
