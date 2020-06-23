package main

import (
	"log"

	"emma/server"
)

func main() {
	srv, err := server.NewServer("127.0.0.1:3000")
	if err != nil {
		log.Fatalf("Could not create server: %v", err)
	}

	err = srv.ListenAndServe()
	if err != nil {
		log.Fatalf("Could not start the server: %v", err)
	}
}
