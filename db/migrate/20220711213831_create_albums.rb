class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.integer :year, null: false
      t.string :picture_url, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end
    add_index :albums, :title, unique: true
  end
end
