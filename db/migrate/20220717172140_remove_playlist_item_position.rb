class RemovePlaylistItemPosition < ActiveRecord::Migration[5.2]
  def change
    remove_column :playlist_items, :position
  end
end
