package main

func main() {
	defer db.Close()
	initDB()
	migrateDB()
	initServer()
}
