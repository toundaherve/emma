package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"emma/db"
	"emma/emma"
)

// menuHandler handles all menu requests
type menuHandler struct {
	service emma.MenuService
}

// newMenuHandler creates and returns a menu handler
func newMenuHandler(s emma.MenuService) (*menuHandler, error) {
	if s == nil {
		s2, err := db.NewMenuService()
		if err != nil {
			log.Printf("Could not get the menu service: %v", err)
			return nil, err
		}
		s = s2
	}

	h := &menuHandler{
		service: s,
	}
	return h, nil
}

// menuOfTheDay handle request for the menu of the day
func (h *menuHandler) menuOfTheDay(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	enc := json.NewEncoder(w)

	m, err := h.service.MenuOfTheDay()
	if err != nil {
		log.Printf("Could not get the menu of the day: %v", err)
		w.WriteHeader(http.StatusInternalServerError)

		resp := APIResponse{
			Success: false,
			Message: "internal error",
			Data:    nil,
		}
		err = enc.Encode(resp)
		if err != nil {
			fmt.Fprintln(w, "Internal server error")
		}

		return
	}

	w.WriteHeader(http.StatusOK)
	resp := APIResponse{
		Success: true,
		Message: "Succes getting the menu of the day",
		Data:    m,
	}
	err = enc.Encode(resp)
	if err != nil {
		log.Printf("Could not encode the response: %v", err)
	}
}
