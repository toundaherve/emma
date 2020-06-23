package server

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// NewServer returns a server
func NewServer(addr string) (*http.Server, error) {
	h, err := newMenuHandler(nil)
	if err != nil {
		log.Printf("Could not create menu handler: %v\n", err)
		return nil, err
	}

	r := mux.NewRouter()
	r.HandleFunc("/menuoftheday", h.menuOfTheDay)

	srv := &http.Server{
		Addr:    addr,
		Handler: r,
	}

	return srv, nil
}
