# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# user Seed
demo_user = User.create(username: "Demo", password: "123456")

# artist seeds
artist1 = Artist.create(name: "Red Hot Chili Peppers", bio: "theyre red hot", picture_url: "insert picture here")

artist2 = Artist.create(name: "Portugal. The Man", bio: "is it a place, a person or a band?", picture_url: "insert picture here")

artist3 = Artist.create(name: "Tycho", bio: "words cannot describe...", picture_url: "insert picture here")

artist4 = Artist.create(name: "Phoenix", bio: "cool and French I think?", picture_url: "insert picture here")



# album seeds

album1 = Album.create(title: "Californiaction", year: 1999, picture_url: "insert picture here", artist_id: 1)
album2 = Album.create(title: "Stadium Arcadium", year: 2006, picture_url: "insert picture here", artist_id: 1)

album3 = Album.create(title: "In the Mountain in the Cloud", year: 2011, picture_url: "insert picture here", artist_id: 2)
album4 = Album.create(title: "The Satanic Satanist", year: 2009, picture_url: "insert picture here", artist_id: 2)

album5 = Album.create(title: "Dive", year: 2011, picture_url: "insert picture here", artist_id: 3)

album6 = Album.create(title: "Wolfgang Amadeus Phoenix", year: 2009, picture_url: "insert picture here", artist_id: 4)



# track seeds

    # Red Hot Chili Peppers
track1 = Track.create(name: "Scar Tissue", audio_url: "audio path here", duration: "1:00", album_id: 1, artist_id: 1)
track2 = Track.create(name: "Otherside", audio_url: "audio path here", duration: "1:00", album_id: 1, artist_id: 1)
track3 = Track.create(name: "Californiacation", audio_url: "audio path here", duration: "1:00", album_id: 1, artist_id: 1)
track4 = Track.create(name: "Easily", audio_url: "audio path here", duration: "1:00", album_id: 1, artist_id: 1)

track5 = Track.create(name: "Dani California", audio_url: "audio path here", duration: "1:00", album_id: 2, artist_id: 1)
track6 = Track.create(name: "Snow (Hey Oh)", audio_url: "audio path here", duration: "1:00", album_id: 2, artist_id: 1)
track7 = Track.create(name: "Charlie", audio_url: "audio path here", duration: "1:00", album_id: 2, artist_id: 1)
track8 = Track.create(name: "Wet Sand", audio_url: "audio path here", duration: "1:00", album_id: 2, artist_id: 1)
track9 = Track.create(name: "Hey", audio_url: "audio path here", duration: "1:00", album_id: 2, artist_id: 1)

    # Portugal. The Man
track10 = Track.create(name: "So American", audio_url: "audio path here", duration: "1:00", album_id: 3, artist_id: 2)
track11 = Track.create(name: "Got It All (This Can't Be Living Now)", audio_url: "audio path here", duration: "1:00", album_id: 3, artist_id: 2)
track12 = Track.create(name: "All Your Light (Times Like These)", audio_url: "audio path here", duration: "1:00", album_id: 3, artist_id: 2)
track13 = Track.create(name: "Share With  Me the Sun", audio_url: "audio path here", duration: "1:00", album_id: 3, artist_id: 2)
track14 = Track.create(name: "Sleep Forever", audio_url: "audio path here", duration: "1:00", album_id: 3, artist_id: 2)

track15 = Track.create(name: "People Say", audio_url: "audio path here", duration: "1:00", album_id: 4, artist_id: 2)
track16 = Track.create(name: "The Sun", audio_url: "audio path here", duration: "1:00", album_id: 4, artist_id: 2)
track17 = Track.create(name: "Do You", audio_url: "audio path here", duration: "1:00", album_id: 4, artist_id: 2)
track18 = Track.create(name: "Let You Down", audio_url: "audio path here", duration: "1:00", album_id: 4, artist_id: 2)
track19 = Track.create(name: "Mornings", audio_url: "audio path here", duration: "1:00", album_id: 4, artist_id: 2)

    # Tycho
track20 = Track.create(name: "A Walk", audio_url: "audio path here", duration: "1:00", album_id: 5, artist_id: 3)
track21 = Track.create(name: "Dive", audio_url: "audio path here", duration: "1:00", album_id: 5, artist_id: 3)
track22 = Track.create(name: "Adrift", audio_url: "audio path here", duration: "1:00", album_id: 5, artist_id: 3)

    # Phoenix
track23 = Track.create(name: "Lisztomania", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track24 = Track.create(name: "1901", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track25 = Track.create(name: "Lasso", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track26 = Track.create(name: "Rome", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track27 = Track.create(name: "Countdown", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track28 = Track.create(name: "Girlfriend", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
track29 = Track.create(name: "Armistice", audio_url: "audio path here", duration: "1:00", album_id: 6, artist_id: 4)
