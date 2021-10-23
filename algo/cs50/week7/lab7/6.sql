SELECT name FROM songs WHERE artists_id = (SELECT id FROM artists WHERE name="Post Malone");
