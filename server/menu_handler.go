package server

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/toundaherve/emma/db"
	"github.com/toundaherve/emma/emma"
)

// MenuHandler handles all menu requests
type MenuHandler struct {
	service emma.MenuService
}

// NewMenuHandler creates and returns a menu handler
func NewMenuHandler(s emma.MenuService) (*MenuHandler, error) {
	if s == nil {
		s2, err := db.NewMenuService()
		if err != nil {
			log.Printf("Could not get the menu service: %v", err)
			return nil, err
		}
		s = s2
	}

	h := &MenuHandler{
		service: s,
	}
	return h, nil
}

// MenuOfTheDay handle request for the menu of the day
func (h *MenuHandler) MenuOfTheDay(w http.ResponseWriter, r *http.Request) {
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
