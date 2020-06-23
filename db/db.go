package db

import (
	"github.com/emma/emma"
)

// MenuService implements emma.MenuService
type MenuService struct {
}

// MenuOfTheDay returns the menu from the store
func (s *MenuService) MenuOfTheDay() (*emma.Menu, error) {
	return &emma.Menu{
		Foods: []*emma.Food{
			&emma.Food{
				Name: "name1",
				Description: "desc1",
				Price: 10.00,
				Image: "img1",
			},
			&emma.Food{
				Name: "name2",
				Description: "desc2",
				Price: 10.00,
				Image: "img2",
			},
		},
	}, nil
}

// NewMenuService creates a menu service
func NewMenuService() (*MenuService, error) {
	return &MenuService{}, nil
}