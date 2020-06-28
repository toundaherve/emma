package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
)

var db *sql.DB

func main() {
	opened, err := sql.Open("mysql", "herves:futurefuture1@tcp(192.168.1.123:3306)/emma")
	if err != nil {
		log.Fatalf("Could not open database: %v", err)
	}
	db = opened

	r := mux.NewRouter()
	r.HandleFunc("/", handleHome).Methods("GET")
	r.HandleFunc("/menu", handleGetMenu).Methods("GET")

	srv := http.Server{
		Handler: r,
		Addr:    ":3000",
	}

	err = srv.ListenAndServe()
	if err != nil {
		log.Fatalf("Could not start server: %v", err)
	}
}

func handleHome(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	fmt.Fprintln(w, "<h1>Welcome to Emma Restaurant</h1>")
}

// Menu represents the menu
type Menu struct {
	Friday   Food   `json:"friday"`
	Saturday Food   `json:"saturday"`
	Sunday   Food   `json:"sunday"`
}

// MenuDB is the menu result from db 
type MenuDB struct {
	ID int
	Friday string
	Saturday string
	Sunday string
}

// Food represents a menu item
type Food struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Price       int    `json:"price"`
}

func handleGetMenu(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query(`
		select m.id, d1.name as friday, d2.name as saturday, d3.name as sunday
		from menu m
		inner join dishes d1
		on m.friday = d1.id
		inner  join dishes d2
		on m.saturday = d2.id
		inner join dishes d3
		on m.sunday = d3.id;
	`)
	if err != nil {
		log.Printf("Could not get menu from db: %v", err)
		internalError(w)
		return
	}
	defer rows.Close()

	var m MenuDB
	for rows.Next() {
		if err = rows.Scan(&m.ID, &m.Friday, &m.Saturday, &m.Sunday); err != nil {
			log.Printf("Could not scan menu rows: %v", err)
			internalError(w)
			return
		}
	}

	if err = rows.Err(); err != nil {
		log.Printf("Could check rows errors: %v", err)
		internalError(w)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	dec := json.NewEncoder(w)
	err = dec.Encode(m)
	if err = rows.Err(); err != nil {
		log.Printf("Could not encode menu: %v", err)
		internalError(w)
	}
}

func internalError(w http.ResponseWriter) {
	w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprintln(w, "Sorry, internal error")
}
