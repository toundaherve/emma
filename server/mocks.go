package server

import (
	"emma/emma"
	"errors"
)

type mockMenuService struct {
	hasMenu bool
}

func (s *mockMenuService) MenuOfTheDay() (*emma.Menu, error) {
	if s.hasMenu == false {
		return nil, errors.New("no menu")
	}
	return &emma.Menu{}, nil
}
