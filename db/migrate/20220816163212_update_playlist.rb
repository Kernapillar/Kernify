class UpdatePlaylist < ActiveRecord::Migration[5.2]
  def change
      add_column :playlists, :color_1, :string
      add_column :playlists, :color_2, :string
  end
end
