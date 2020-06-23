package db

import (
	"testing"
)

func Test_MenuOfTheDay(t *testing.T) {
	s, err := NewMenuService()
	if err != nil {
		t.Fatalf("Could not create user service: %v", err)
	}

	m, err := s.MenuOfTheDay()
	if err != nil {
		t.Fatalf("Could not get the menu of the day: %v", err)
	}

	if n := len(m.Foods); n <= 0 {
		t.Fatalf("expected at least 1 food, got: %d", n)
	}
}
