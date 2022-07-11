class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.string :audio_url, null: false
      t.string :duration
      t.integer :album_id, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :tracks, :name 
  end
end
