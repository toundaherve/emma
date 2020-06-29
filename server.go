package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

var srv *http.Server

func initServer() {
	r := mux.NewRouter()
	r.HandleFunc("/", handleHome).Methods("GET")
	r.HandleFunc("/menu", getMenu).Methods("GET")
	r.HandleFunc("/menu", createMenu).Methods("POST")
	r.HandleFunc("/foods", createFoods).Methods("POST")

	srv = &http.Server{
		Handler: r,
		Addr:    ":3000",
	}

	err := srv.ListenAndServe()
	if err != nil {
		log.Fatalf("Could not start server: %v\n", err)
	}
}

func handleHome(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprintln(w, "<h1>Welcome to Emma Restaurant</h1>")
}

func getMenu(w http.ResponseWriter, r *http.Request) {
	var m Menu
	
	if err := db.Preload("Friday").Preload("Saturday").Preload("Sunday").Last(&m).Error; err != nil {
		log.Fatalf("Could not get menu: %v", err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	enc := json.NewEncoder(w)
	if err := enc.Encode(&m); err != nil {
		log.Fatalf("Could not encode menu: %v", err)
		internalError(w)
	}
}

func createMenu(w http.ResponseWriter, r *http.Request) {
	var m Menu
	if err := decodeBody(&m, r); err != nil {
		log.Fatalf("Could not decode the new menu in request body: %v", err)
		badRequest(w)
		return
	}

	if err := db.Create(&m).Error; err != nil {
		log.Fatalf("Could create menu in db: %v", err)
		internalError(w)
		return
	}

	created(w)
}

func createFoods(w http.ResponseWriter, r *http.Request) {
	var foods []Food
	if err := decodeBody(&foods, r); err != nil {
		log.Fatalf("Could not decode foods in request body: %v", err)
		badRequest(w)
		return
	}

	if len(foods) < 1 {
		badRequest(w)
		return
	}

	tx := db.Begin()

	for _, f := range foods {
		if err := tx.Create(&f).Error; err != nil {
			tx.Rollback()
			log.Fatalf("Could create food in db: %v", err)
			internalError(w)
			return
		}
	}

	tx.Commit()
	created(w)
}

func decodeBody(buf interface{}, r *http.Request) error {
	dec := json.NewDecoder(r.Body)
	defer r.Body.Close()
	err := dec.Decode(buf)
	return err
}

func created(w http.ResponseWriter) {
	w.WriteHeader(http.StatusCreated)
	fmt.Fprintln(w, "Successfully created")
}

func badRequest(w http.ResponseWriter) {
	w.WriteHeader(http.StatusBadRequest)
	fmt.Fprintln(w, "Bad request")
}

func internalError(w http.ResponseWriter) {
	w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprintln(w, "Sorry, internal error")
}
